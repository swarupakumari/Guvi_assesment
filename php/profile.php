<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Content-Type: application/json");

include("db.php");  
include("mongodb_connection.php"); // ✅ ADD THIS

if(isset($_POST['email'])) {

    $email = $_POST['email'];

    // MySQL query
    $stmt = $conn->prepare("SELECT name, email FROM users WHERE email = ?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){

        $user = $result->fetch_assoc();

        // ✅ MongoDB fetch
        $profile = $profileCollection->findOne(["user_id" => $email]);

        echo json_encode([
            "name" => $user['name'],
            "email" => $user['email'],
            "age" => $profile['age'] ?? "",
            "contact" => $profile['contact'] ?? ""
        ]);

    } else {
        echo json_encode(["error" => "User not found"]);
    }

    $stmt->close();
    $conn->close();

} else {
    echo json_encode(["error" => "No email provided"]);
}
?>

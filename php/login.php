<?php
include("db.php");

if(isset($_POST['email']) && isset($_POST['password'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){
        $user = $result->fetch_assoc();
        if(password_verify($password,$user['password'])){
            echo "Login Successful";
        } else {
            echo "Wrong Password";
        }
    } else {
        echo "Email not found";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Please enter email and password";
}
?>

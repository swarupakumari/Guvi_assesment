<?php
include "mongodb_connection.php";

// get JSON data
$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data["user_id"];
$age = $data["age"];
$contact = $data["contact"];

// update or insert (important)
$result = $profileCollection->updateOne(
    ["user_id" => $user_id],
    ['$set' => [
        "age" => $age,
        "contact" => $contact
    ]],
    ["upsert" => true]   // if not exist → create new
);

echo json_encode([
    "status" => "success",
    "message" => "Profile saved in MongoDB"
]);
?>

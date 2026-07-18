<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"] ?? "";
$description = $data["description"] ?? "";

if (empty($title)) {
    echo json_encode(["success" => false, "message" => "Title is required"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO tasks (title, description) VALUES (?, ?)");
$stmt->bind_param("ss", $title, $description);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

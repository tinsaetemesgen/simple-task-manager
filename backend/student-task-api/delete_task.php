<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"] ?? "";

if (!$id) {
    echo json_encode([
        "success" => false,
        "message" => "Task ID required"
    ]);
    exit;
}


$stmt = $conn->prepare(
    "DELETE FROM tasks WHERE id=?"
);

$stmt->bind_param("i", $id);


if ($stmt->execute()) {
    echo json_encode([
        "success" => true
    ]);
} else {
    echo json_encode([
        "success" => false
    ]);
}

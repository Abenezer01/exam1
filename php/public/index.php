<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$searchQuery = $_GET['search'] ?? '';
$apiUrl = "https://jsonplaceholder.typicode.com/comments?postId=3";
$response = file_get_contents($apiUrl);
$comments = json_decode($response, true);

$filteredComments = array_filter($comments, function($comment) use ($searchQuery) {
    return stripos($comment['name'], $searchQuery) !== false;
});

$filteredComments = array_values($filteredComments);

echo json_encode($filteredComments);

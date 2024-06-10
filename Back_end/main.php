<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Include the database class
require_once 'Database/ClassDatabase.php';
$db = new Database();

function sendResponse($status, $message, $data = null) {
    echo json_encode(['status' => $status, 'message' => $message, 'data' => $data]);
    exit;
}

try {
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        // Handle preflight request
        header('HTTP/1.1 204 No Content');
        exit;
    }

    $data = json_decode(file_get_contents('php://input'), true);

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            if (isset($data['name'], $data['Box_Amount'], $data['Tape_Amount'], $data['Tape_Price'],$data['Expire'],$data['barcode'])) {
                $name = htmlspecialchars(strip_tags($data['name']));
                $price = floatval($data['price']);
                $quantity = intval($data['quantity']);
                $expiry_date = htmlspecialchars(strip_tags($data['expiry_date']));

                if ($db->insert('medicine', [
                    'name' => $name,
                    'Box_Amount' => $Box_Amount,
                    'Tape_Amount' => $Tape_Amount,
                    'Tape_Price' => $Tape_Price,
                    'Expire'=>$Expire,
                    'barcode'=>0
                    
                ])) {
                    sendResponse('success', 'Medicine added successfully');
                } else {
                    sendResponse('error', 'Failed to add medicine');
                }
            } else {
                sendResponse('error', 'Missing required fields');
            }
            break;

        case 'GET':
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $medicine = $db->getSpecialColumn('medicines', '*', 'id', $id);
                if ($medicine) {
                    sendResponse('success', 'Medicine retrieved successfully', $medicine);
                } else {
                    sendResponse('error', 'Medicine not found');
                }
            } else {
                $medicines = $db->getColumnValues('medicines', '*', 'id');
                sendResponse('success', 'Medicines retrieved successfully', $medicines);
            }
            break;

        case 'PUT':
            if (isset($data['id'], $data['name'], $data['price'], $data['quantity'], $data['expiry_date'])) {
                $id = intval($data['id']);
                $name = htmlspecialchars(strip_tags($data['name']));
                $price = floatval($data['price']);
                $quantity = intval($data['quantity']);
                $expiry_date = htmlspecialchars(strip_tags($data['expiry_date']));

                if ($db->update('medicines', [
                    'name' => $name,
                    'price' => $price,
                    'quantity' => $quantity,
                    'expiry_date' => $expiry_date
                ], 'id', $id)) {
                    sendResponse('success', 'Medicine updated successfully');
                } else {
                    sendResponse('error', 'Failed to update medicine');
                }
            } else {
                sendResponse('error', 'Missing required fields');
            }
            break;

        case 'DELETE':
            if (isset($data['id'])) {
                $id = intval($data['id']);
                if ($db->delete('medicines', 'id', $id)) {
                    sendResponse('success', 'Medicine deleted successfully');
                } else {
                    sendResponse('error', 'Failed to delete medicine');
                }
            } else {
                sendResponse('error', 'Missing required fields');
            }
            break;

        default:
            sendResponse('error', 'Invalid request method');
            break;
    }
} catch (Exception $e) {
    // Log the error
    error_log('Error: ' . $e->getMessage());

    // Return JSON error response
    echo json_encode(['status' => 'error', 'message' => 'An error occurred']);
}
?>

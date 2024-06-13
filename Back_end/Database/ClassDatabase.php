<?php

class Database
{
    private $pdo;
    private $stmt;

    public function __construct()
    {
        $dsn = 'mysql:host=127.0.0.1;dbname=pharmacy_management_system';
        $username = 'root';
        $password = '';
        
        try {
            $this->pdo = new PDO($dsn, $username, $password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
            exit();
        }
    }

    public function getLastItem($table, $column)
    {
        $sql = "SELECT MAX($column) AS max_val FROM $table";
        $stmt = $this->pdo->query($sql);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row['max_val'] + 1;
    }

    public function getColumnValues($table, $column, $orderBy)
    {
        $sql = "SELECT $column FROM $table ORDER BY $orderBy ASC";
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    public function searchLike($table, $column, $searchColumn, $searchValue)
    {
        $sql = "SELECT $column FROM $table WHERE $searchColumn LIKE ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['%' . $searchValue . '%']);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    public function searchLikeWithCondition($table, $column, $searchColumn, $searchValue, $conditionColumn, $conditionValue)
    {
        $sql = "SELECT $column FROM $table WHERE $searchColumn LIKE ? AND $conditionColumn = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['%' . $searchValue . '%', $conditionValue]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    public function getSpecialColumn($table, $column, $searchColumn, $searchValue)
    {
        $sql = "SELECT $column FROM $table WHERE $searchColumn = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$searchValue]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    public function getSpecialColumnWithCondition($table, $column, $searchColumn, $searchValue, $conditionColumn, $conditionValue)
    {
        $sql = "SELECT $column FROM $table WHERE $searchColumn = ? AND $conditionColumn = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$searchValue, $conditionValue]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    public function login($id, $password)
    {
        $sql = "SELECT usertype FROM loginn WHERE passwords = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$password]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row ? $row['usertype'] : false;
    }

    public function insert($table, $data)
    {
        $columns = implode(", ", array_keys($data));
        $values = implode(", ", array_fill(0, count($data), '?'));
        $sql = "INSERT INTO $table ($columns) VALUES ($values)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute(array_values($data));
    }

    public function update($table, $setColumn, $newValue, $conditionColumn, $conditionValue)
    {
        $sql = "UPDATE $table SET $setColumn = ? WHERE $conditionColumn = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$newValue, $conditionValue]);
    }

    public function updateWithCondition($table, $setColumn, $newValue, $conditionColumn, $conditionValue, $additionalConditionColumn, $additionalConditionValue)
    {
        $sql = "UPDATE $table SET $setColumn = ? WHERE $conditionColumn = ? AND $additionalConditionColumn = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$newValue, $conditionValue, $additionalConditionValue]);
    }

    public function updateLike($table, $setColumn, $newValue, $conditionColumn, $searchValue)
    {
        $sql = "UPDATE $table SET $setColumn = ? WHERE $conditionColumn LIKE ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$newValue, '%' . $searchValue . '%']);
    }

    public function updateWord($table, $setColumn, $newValue, $conditionColumn, $searchValue)
    {
        $sql = "UPDATE $table SET $setColumn = REPLACE($setColumn, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$searchValue, $newValue]);
    }

    public function delete($table, $conditionColumn, $conditionValue)
    {
        $sql = "DELETE FROM $table WHERE $conditionColumn = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$conditionValue]);
    }
}

?>

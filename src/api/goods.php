<?php

    require('connect.php');

    $id = isset($_GET["id"]) ? $_GET["id"] : null;
    // 获取前端数据
    $result = $conn->query("select * from goods");

    $res = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();

    $conn->close();

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>
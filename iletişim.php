<?php
// iletisim.php

function e($s) {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

$username = isset($_POST['username']) ? e($_POST['username']) : '(boş)';
$email    = isset($_POST['email'])    ? e($_POST['email'])    : '(boş)';
$telefon  = isset($_POST['telefon'])  ? e($_POST['telefon'])  : '(boş)';
$dosya    = isset($_FILES['dosya']['name']) ? e($_FILES['dosya']['name']) : '(boş)';
$mesaj    = isset($_POST['mesaj'])    ? e($_POST['mesaj'])    : '(boş)';
$sehir    = isset($_POST['sehir'])    ? e($_POST['sehir'])    : '(boş)';
$cinsiyet = isset($_POST['cinsiyet']) ? e($_POST['cinsiyet']) : '(boş)';
$tarih    = isset($_POST['tarih'])    ? e($_POST['tarih'])    : '(boş)';
$zaman    = isset($_POST['zaman'])    ? e($_POST['zaman'])    : '(boş)';
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>İletişim Formu Sonuçları</title>
  <link rel="stylesheet" href="/css/phpİletişim.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-5">
    <h1 class="mb-4">Gönderilen Bilgiler</h1>
    <dl class="row">
      <dt class="col-sm-3">Kullanıcı Adı:</dt>
      <dd class="col-sm-9"><?= $username ?></dd>

      <dt class="col-sm-3">E-posta:</dt>
      <dd class="col-sm-9"><?= $email ?></dd>

      <dt class="col-sm-3">Telefon:</dt>
      <dd class="col-sm-9"><?= $telefon ?></dd>

      <dt class="col-sm-3">Dosya:</dt>
      <dd class="col-sm-9"><?= $dosya ?></dd>

      <dt class="col-sm-3">Mesaj:</dt>
      <dd class="col-sm-9"><?= $mesaj ?></dd>

      <dt class="col-sm-3">Şehir:</dt>
      <dd class="col-sm-9"><?= $sehir ?></dd>

      <dt class="col-sm-3">Cinsiyet:</dt>
      <dd class="col-sm-9"><?= $cinsiyet ?></dd>

      <dt class="col-sm-3">Tarih:</dt>
      <dd class="col-sm-9"><?= $tarih ?></dd>

      <dt class="col-sm-3">Zaman:</dt>
      <dd class="col-sm-9"><?= $zaman ?></dd>
    </dl>

    <a href="iletişim.html" class="btn btn-secondary mt-4">Geri Dön</a>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<?php
// iletisim.php

// XSS’den korunmak için gelen verileri temizleyen yardımcı fonksiyon
function e($s) {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

// POST ile gelen değerleri alıyoruz; eğer gelmediyse “(boş)” yazıyoruz
$username = isset($_POST['username']) ? e($_POST['username']) : '(boş)';
$email    = isset($_POST['email'])    ? e($_POST['email'])    : '(boş)';
$telefon  = isset($_POST['telefon'])  ? e($_POST['telefon'])  : '(boş)';
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>İletişim Formu Sonuçları</title>

  <!-- Mevcut stil dosyalarınız varsa ekleyin -->
  <link rel="stylesheet" href="/css/iletisim.css">
  <link rel="stylesheet" href="/css/menu.css">

  <!-- Bootstrap (isteğe bağlı) -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
    rel="stylesheet"
  >
</head>
<body>
  <!-- Menü’nüz varsa buraya ekleyin -->
  <?php /* include 'menu.php'; */ ?>

  <div class="container my-5">
    <h1 class="mb-4">Gönderilen Bilgiler</h1>

    <dl class="row">
      <dt class="col-sm-3">Kullanıcı Adı:</dt>
      <dd class="col-sm-9"><?= $username ?></dd>

      <dt class="col-sm-3">E-posta:</dt>
      <dd class="col-sm-9"><?= $email ?></dd>

      <dt class="col-sm-3">Telefon:</dt>
      <dd class="col-sm-9"><?= $telefon ?></dd>
    </dl>

    <a href="iletisim.html" class="btn btn-secondary mt-4">Geri Dön</a>
  </div>

  <!-- Bootstrap JS (isteğe bağlı) -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
  ></script>
</body>
</html>

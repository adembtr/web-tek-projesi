<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){ // form post ile mi gönderildi
    $username = $_POST['username'] ?? ''; //veriyi alir , boş ise hata vermez
    $password = $_POST['password'] ?? '';


    //email kontrolü
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)){ // geçerli bir e posta mi diye kontorol eder
        echo "geçerli bir mail adresi giriniz.";
        exit; // eğer geçerli değilse işlem durdurulur ve exit ile kulllaniciya bilgi verilir
    }

    //boş alan kontölü
    if(empty($username) || empty($password)){  //boşlk kontrolü
        echo "Kullanici adı ve şifre boş olamaz.";
        exit;
    }

    
    // Kullanıcı adı ve şifre kontrolü
    // Örnek doğru bilgiler:
    $correct_user = "b241210051@sakarya.edu.tr";
    $correct_pass = "b1812100001";

    if ($username == $correct_user && $password == $correct_pass) {
        // Kullanıcı adı domainli, şifre domainsiz olmalı
        $kisaKullanici = explode("@", $username)[0];
        echo "Hoşgeldiniz $kisaKullanici";
    } else {
        // Giriş başarısızsa tekrar login sayfasına yönlendir
        header("Location: login.html");
        exit;
    }
}
?>

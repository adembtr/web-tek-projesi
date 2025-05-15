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
    $correct_pass = "b241210051";

    if ($username == $correct_user && $password == $correct_pass) {
        // Başarılıysa menu.html'e yönlendir
        echo "<script>
                alert('Giriş başarılı.');
                window.location.replace('index.html');
                </script>";
        exit;
        
    } 
    else {
        // BAŞARISIZ → JavaScript alert ile mesaj gösterip login sayfasına dön
        echo "<script>
                alert('Şifre yanlış.');
                window.location.replace('login.php');
                </script>";
    } 
    exit;
}

?>

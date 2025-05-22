// script.js
document.addEventListener('DOMContentLoaded', () => {
   // bu blok içindeki kodlar, sayfadaki tüm elementler
  // tarayıcı tarafından yaratıldıktan hemen sonra çalışır
  const form = document.getElementById('contactForm'); //tüm formu alıyoruz
  const jsBtn = document.getElementById('jsValidateBtn');

  jsBtn.addEventListener('click', () => {
    const username = form.querySelector('input[name="username"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const telefon = form.querySelector('input[name="telefon"]').value.trim();
    const dosya = form.querySelector('input[name="dosya"]').value;
    const mesaj = form.querySelector('textarea[name="mesaj"]').value.trim();
    const sehir = form.querySelector('select[name="sehir"]').value;
    const cinsiyet = form.querySelector('input[name="cinsiyet"]:checked');
    const tarih = form.querySelector('input[name="tarih"]').value;
    const zaman = form.querySelector('input[name="zaman"]').value;

    const errors = [];

    // Kullanıcı adı kontrolü
    if (!username) {
      errors.push('• Kullanıcı adı boş olamaz.');
    }

    // E-posta kontrolü
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      errors.push('• Geçerli bir e-posta girin.');
    }

    // Telefon kontrolü
    if (!telefon) {
      errors.push('• Telefon numarası boş bırakılamaz.');
    } else if (!/^\d+$/.test(telefon)) {
      errors.push('• Telefon sadece rakamlardan oluşmalı.');
    }

    // Dosya kontrolü
    if (!dosya) {
      errors.push('• Bir dosya yüklemelisiniz.');
    }

    // Mesaj kontrolü
    if (!mesaj) {
      errors.push('• Mesaj alanı boş bırakılamaz.');
    }

    // Şehir kontrolü
    if (!sehir) {
      errors.push('• Bir şehir seçmelisiniz.');
    }

    // Cinsiyet kontrolü
    if (!cinsiyet) {
      errors.push('• Cinsiyet seçimi yapılmalıdır.');
    }

    // Tarih kontrolü
    if (!tarih) {
      errors.push('• Tarih seçimi yapılmalıdır.');
    }

    // Zaman kontrolü
    if (!zaman) {
      errors.push('• Zaman seçimi yapılmalıdır.');
    }

    // Hata mesajlarını göster
    if (errors.length) {
      alert('JS doğrulama hataları:\n' + errors.join('\n'));
    } else {
      alert('JS ile doğrulama başarılı! Form gönderilebilir.');
    }
  });
});

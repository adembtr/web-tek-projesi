// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contactForm');
  const jsBtn   = document.getElementById('jsValidateBtn');

  jsBtn.addEventListener('click', () => {
    const username = form.querySelector('input[name="username"]').value.trim();
    const email    = form.querySelector('input[name="email"]').value.trim();
    const telefon  = form.querySelector('input[name="telefon"]').value.trim();

    const errors = [];

    // 1) Kullanıcı adı boş mu?
    if (!username) {
      errors.push('• Kullanıcı adı boş olamaz.');
    }

    // 2) E-posta formatı geçerli mi?
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      errors.push('• Geçerli bir e-posta girin.');
    }

    // 3) Telefon sadece rakam mı?
    if (!telefon) {
      errors.push('• Telefon numarası boş bırakılamaz.');
    } else if (!/^\d+$/.test(telefon)) {
      errors.push('• Telefon sadece rakamlardan oluşmalı.');
    }

    // Hatalar var mı?
    if (errors.length) {
      alert('JS doğrulama hataları:\n' + errors.join('\n'));
    } else {
      alert('JS ile doğrulama başarılı! Form gönderilebilir.');
    }
  });
});

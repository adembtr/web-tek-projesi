// iletisim.js
new Vue({
  el: '#app',
  data: {
    form: {
      username: '',
      email: '',
      telefon: ''
    },
    errors: {}
  },
  methods: {
    // Genel alan doğrulama metodu
    validateField(key, predicate, message) {
      if (!predicate(this.form[key])) {
        this.$set(this.errors, key, message);
        return false;
      }
      this.$delete(this.errors, key);
      return true;
    },

    // Vue ile kontrolü tetikleyecek fonksiyon
    validateVue() {
      const v1 = this.validateField(
        'username',
        v => v.trim().length > 0,
        'Kullanıcı adı boş olamaz.'
      );
      const v2 = this.validateField(
        'email',
        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        'Geçerli bir e-posta girin.'
      );
      const v3 = this.validateField(
        'telefon',
        v => v.trim().length > 0 && /^\d+$/.test(v),
        'Telefon zorunludur ve sadece rakamlardan oluşmalı.'
      );

      if (v1 && v2 && v3) {
        alert('Vue ile doğrulama başarılı! Form gönderilebilir.');
      }
    },

    // Formu sıfırlar
    clearForm() {
      this.form.username = '';
      this.form.email    = '';
      this.form.telefon  = '';
      this.errors = {};
    },

    // Submit olayında önce Vue doğrulaması, sonra gerçek POST
    onSubmitVue() {
      this.validateVue();
      if (Object.keys(this.errors).length === 0) {
        // Hata yoksa formu gönder
        document.getElementById('contactForm').submit();
      }
    }
  }
});

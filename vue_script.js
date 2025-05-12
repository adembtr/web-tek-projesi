new Vue({
  el: '#app',
  data: {
    form: {
      username: '',
      email: '',
      telefon: '',
      dosya: '',
      mesaj: '',
      sehir: '',
      cinsiyet: '',
      tarih: '',
      zaman: ''
    },
    errors: {}
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.form.dosya = file ? file.name : '';
    },

    validateField(key, predicate, message) {
      if (!predicate(this.form[key])) {
        this.$set(this.errors, key, message);
        return false;
      }
      this.$delete(this.errors, key);
      return true;
    },

    validateVue() {
      const validations = [
        this.validateField('username', v => v.trim().length > 0, 'Kullanıcı adı boş olamaz.'),
        this.validateField('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Geçerli bir e-posta girin.'),
        this.validateField('telefon', v => v.trim().length > 0 && /^\d+$/.test(v), 'Telefon zorunludur ve sadece rakamlardan oluşmalı.'),
        this.validateField('dosya', v => v.length > 0, 'Bir dosya yüklemelisiniz.'),
        this.validateField('mesaj', v => v.trim().length > 0, 'Mesaj alanı boş bırakılamaz.'),
        this.validateField('sehir', v => v.length > 0, 'Bir şehir seçmelisiniz.'),
        this.validateField('cinsiyet', v => v.length > 0, 'Cinsiyet seçimi yapılmalıdır.'),
        this.validateField('tarih', v => v.length > 0, 'Tarih seçimi yapılmalıdır.'),
        this.validateField('zaman', v => v.length > 0, 'Zaman seçimi yapılmalıdır.')
      ];

      if (validations.every(v => v)) {
        alert('Vue ile doğrulama başarılı! Form gönderilebilir.');
      }
    },

    clearForm() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = '';
      });
      this.errors = {};
      document.getElementById('dosya').value = '';
    },

    onSubmitVue() {
      this.validateVue();
      if (Object.keys(this.errors).length === 0) {
        document.getElementById('contactForm').submit();
      }
    }
  }
});

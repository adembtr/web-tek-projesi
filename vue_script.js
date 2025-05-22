new Vue({  // yeni vue uygulaması
  el: '#app',   //app id li dive bağlanıp onun üzerinde işlemler yapıcak
  data: {  // veriler
    form: {   // başlangoçta tüm form elemanlarını tutuyor 
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
    errors: {}   // oluşabilecek hataları tutan nesne
  },
  methods: {
    onFileChange(event) {   // type si file olan dosyayı alır   
      const file = event.target.files[0]; // seçilen ilk dosyayı alır
      this.form.dosya = file ? file.name : '';  // dosya varsa ismini form.dosya ya kaydeder yoksa boş kaydeder
    },

    // tüm form elemanlarını kontrol etmemizi sağlayan genel bir form...
    validateField(key, predicate, message) {
      if (!predicate(this.form[key])) {
        this.$set(this.errors, key, message);
        return false;
      }
      this.$delete(this.errors, key);
      return true;
    },

    validateVue() {              //burada her form elemanına göre valudate fonksiyonunu düzenliyoruz
      const validations = [
        this.validateField('username', v => v.trim().length > 0, 'Kullanıcı adı boş olamaz.'),
        this.validateField('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Geçerli bir e-posta girin.'),
        this.validateField('telefon', v => v.trim().length > 0 && /^\d+$/.test(v), 'Telefon zorunlu ve sadece rakamlardan oluşmalı.'),
        this.validateField('dosya', v => v.length > 0, 'Bir dosya yüklemelisiniz.'),
        this.validateField('mesaj', v => v.trim().length > 0, 'Mesaj alanı boş bırakılamaz.'),
        this.validateField('sehir', v => v.length > 0, 'Bir şehir seçmelisiniz.'),
        this.validateField('cinsiyet', v => v.length > 0, 'Cinsiyet seçimi yapın.'),
        this.validateField('tarih', v => v.length > 0, 'Tarih seçimi yapın.'),
        this.validateField('zaman', v => v.length > 0, 'Zaman seçimi yapın.')
      ];

      if (validations.every(v => v)) {
        alert('Vue ile doğrulama başarılı! Form gönderilebilir.');
      }
    },

    clearForm() {   // formu sıfırla
      Object.keys(this.form).forEach(key => {
        this.form[key] = '';
      });
      this.errors = {};
      document.getElementById('dosya').value = '';
    },

    onSubmitVue() {              // formu yolla
      this.validateVue();
      if (Object.keys(this.errors).length === 0) {
        document.getElementById('contactForm').submit();
      }
    }
  }
});

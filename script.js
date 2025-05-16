function toggleSidebar()
        {
            document.getElementById('sidebar').classList.toggle('active');
        }


 // Google Books API'den "kişisel gelişim" konulu kitapları çekiyoruz
 fetch('https://www.googleapis.com/books/v1/volumes?q=quantum+neuron')
 .then(response => response.json())
 .then(data => {
   const booksDiv = document.getElementById('books');
   data.items.forEach(item => {
     const title = item.volumeInfo.title;
     const authors = item.volumeInfo.authors?.join(', ') || 'Yazar Bilgisi Yok';
     const thumbnail = item.volumeInfo.imageLinks?.thumbnail || '';
     const link = item.volumeInfo.infoLink;

     booksDiv.innerHTML += `
       <div style="margin-bottom: 20px;">
         <img src="${thumbnail}" alt="Kapak" style="width:100px;"><br>
         <strong>${title}</strong><br>
         <em>${authors}</em><br>
         <a href="${link}" target="_blank">Detayları Gör</a>
       </div>
     `;
   });
 })
 .catch(error => {
   document.getElementById('books').innerText = "Kitaplar yüklenirken bir hata oluştu.";
   console.error("Hata:", error);
 });
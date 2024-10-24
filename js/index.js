document.addEventListener('DOMContentLoaded', () => {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      const summaryList = document.getElementById('summary-list');
      
      // Warna yang akan digunakan untuk setiap item secara bergiliran
      const colors = ['#ffefef', '#fff5cc', '#e4f5e9', '#ecebff'];
      // Warna untuk font item.category
      const categoryFontColors = ['hsl(0, 100%, 67%)', 'hsl(39, 100%, 56%)', 'hsl(166, 100%, 37%)', 'hsl(234, 85%, 45%)'];

      // Looping data dari JSON dan menambahkannya ke dalam ul#summary-list
      data.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('summary-item');

        // Tentukan background color berdasarkan indeks
        listItem.style.backgroundColor = colors[index % colors.length];

        listItem.innerHTML = `
          <span class="category-text" style="color: ${categoryFontColors[index % categoryFontColors.length]}">
            <img src="${item.icon}" alt="${item.category} icon" class="icon"> ${item.category}
          </span>
          <span>${item.score} / 100</span>
        `;

        summaryList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});

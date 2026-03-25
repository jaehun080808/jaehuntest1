const menus = [
  "김치찌개 (Kimchi Stew)",
  "불고기 (Bulgogi)",
  "비빔밥 (Bibimbap)",
  "치킨 (Fried Chicken)",
  "삼겹살 (Pork Belly)",
  "초밥 (Sushi)",
  "파스타 (Pasta)",
  "피자 (Pizza)",
  "돈카츠 (Donkatsu)",
  "떡볶이 (Tteokbokki)",
  "마라탕 (Malatang)",
  "쌀국수 (Pho)",
  "햄버거 (Hamburger)",
  "보쌈 (Bossam)",
  "족발 (Jokbal)"
];

function recommendMenu() {
  const menuText = document.getElementById('menu-text');
  const recommendBtn = document.getElementById('recommend-btn');
  
  // Simple animation effect
  menuText.style.opacity = 0;
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * menus.length);
    menuText.textContent = menus[randomIndex];
    menuText.style.opacity = 1;
  }, 200);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const toggleBtn = document.getElementById('toggle-btn');
  
  if (currentTheme === 'dark') {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = 'Dark Mode';
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = 'Light Mode';
  }
}

// Set initial theme and transition for menu text
(function() {
  const savedTheme = localStorage.getItem('theme');
  const toggleBtn = document.getElementById('toggle-btn');
  const menuText = document.getElementById('menu-text');
  
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) toggleBtn.textContent = 'Light Mode';
  }
  
  if (menuText) {
    menuText.style.transition = 'opacity 0.2s';
  }
})();
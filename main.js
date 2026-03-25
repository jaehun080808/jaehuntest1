function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    numbers.add(num);
  }
  const lottoNumbersDiv = document.getElementById('lotto-numbers');
  lottoNumbersDiv.innerHTML = '';
  Array.from(numbers).sort((a, b) => a - b).forEach(number => {
    const span = document.createElement('span');
    span.className = 'lotto-number';
    span.textContent = number;
    lottoNumbersDiv.appendChild(span);
  });
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

// Set initial theme based on localStorage
(function() {
  const savedTheme = localStorage.getItem('theme');
  const toggleBtn = document.getElementById('toggle-btn');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) toggleBtn.textContent = 'Light Mode';
  }
})();
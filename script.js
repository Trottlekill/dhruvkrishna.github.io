
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
let currentLang = 'en';
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'jp' : 'en';
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = currentLang === 'en' ? 'block' : 'none');
  document.querySelectorAll('.lang-jp').forEach(el => el.style.display = currentLang === 'jp' ? 'block' : 'none');
}
window.addEventListener('DOMContentLoaded', () => {
  toggleLanguage();
  toggleLanguage();
});

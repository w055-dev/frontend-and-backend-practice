document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-toggle__icon');
    
    // Проверяем сохраненную тему или используем системную
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Устанавливаем начальную тему
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);
    
    // Обработчик клика по кнопке
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Обновляем иконку
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
            themeIcon.classList.add('theme-toggle__icon--animate');
            setTimeout(() => {
                themeIcon.classList.remove('theme-toggle__icon--animate');
            }, 300);
        }
        
        // Обновляем aria-label
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему');
        }
    }
});
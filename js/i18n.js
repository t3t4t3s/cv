function setLang(lang) {
    fetch(`locales/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });
            localStorage.setItem('lang', lang); // save preference
        });
}

// Auto-load saved language or default to EN
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('lang') || 'us';
    setLang(savedLang);
});

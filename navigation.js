// Funkcja do ustawiania aktywnej zakładki
function setActiveTab() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Usuń klasę aktywną z wszystkich przycisków
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Dodaj klasę aktywną do klikniętego przycisku
            this.classList.add('active');

            // Ukryj wszystkie sekcje
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Pokaż odpowiednią sekcję
            const tabId = this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }

            // Zaktualizuj hash w URL
            window.location.hash = tabId; // Ustaw hash na identyfikator sekcji
        });
    });

    // Sprawdź hash w URL i ustaw odpowiednią zakładkę
    const currentHash = window.location.hash || '#Pogoda'; // Domyślnie #weather
    const defaultTab = document.querySelector(`.tab-button[data-tab="${currentHash.substring(1)}"]`);
    if (defaultTab) {
        defaultTab.click();
    }
}

// Wywołaj funkcję po załadowaniu strony
window.onload = setActiveTab;

// Dodaj nasłuchiwacz zdarzeń do zmiany hasha
window.addEventListener('hashchange', setActiveTab);
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker zarejestrowany:', registration);
        })
        .catch(error => {
          console.log('Rejestracja Service Worker nie powiodła się:', error);
        });
    });
  }
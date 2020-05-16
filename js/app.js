if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log('SERWICE WORKER ZAREJESTROWANY!', reg))
        .catch((err) => console.log('SERWICE WORKER - BŁAD PODCZAS REJESTRACJI!', err));
}
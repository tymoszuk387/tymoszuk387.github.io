self.addEventListener('install', evt => {
    console.log('Service worker zostal zainstalowany');
});

self.addEventListener('activate', evt => {
    console.log('Service worker zostal aktywowany');
});

self.addEventListener('fetch', evt => {
    console.log('Pobranie: ', evt);
});
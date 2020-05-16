const staticCacheName='wersja-statyczna';
const assets = [
'/',
'/index.html',
'/fallback.html',
'/js/app.js',
'/manifest.json',
'/vendor/fontawesome-free/css/all.min.css',
'/vendor/bootstrap/css/bootstrap.min.css',
'/vendor/jquery/jquery.min.js',
'/vendor/simple-line-icons/css/simple-line-icons.css',
'/vendor/simple-line-icons/fonts/Simple-Line-Icons.eot?v=2.4.0',
'/vendor/simple-line-icons/fonts/Simple-Line-Icons.svg?v=2.4.0',
'/vendor/simple-line-icons/fonts/Simple-Line-Icons.woff?v=2.4.0',
'/vendor/simple-line-icons/fonts/Simple-Line-Icons.woff2?v=2.4.0',
'/vendor/simple-line-icons/fonts/Simple-Line-Icons.ttf?v=2.4.0',
'/vendor/fontawesome-free/webfonts/fa-brands-400.woff2',
'https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic',
'/vendor/bootstrap/js/bootstrap.bundle.min.js',
'/vendor/fontawesome-free/webfonts/fa-brands-400.ttf',
'/vendor/fontawesome-free/webfonts/fa-brands-400.woff',
'/css/landing-page.min.css',
'/img/bg-masthead.jpg',
'/img/bg-showcase-1.jpg',
'/img/bg-showcase-2.jpg',
'/img/bg-showcase-3.jpg',
'/img/testimonials-1.jpg',
'/img/testimonials-2.jpg',
'/img/testimonials-3.jpg',
];

self.addEventListener('install', evt => {
    //console.log('Service worker zostal zainstalowany');
    evt.waitUntill(
        caches.open(staticCacheName).then(cache => {
            console.log('cachowanie assetow');
            cache.addAll(assets);
        })
    )
});

self.addEventListener('activate', evt => {
    console.log('Service worker zostal aktywowany');
});

self.addEventListener('fetch', evt => {
    console.log('Pobranie: ', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        }).catch(()=> cashes.match('/fallback.html'))
    )
});
const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/program.html',
    '/events.html',
    '/js/app.js',
    '/css/style.css',
    '/css/style-events.css',
    '/css/style-programs.css',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    '/img/About-SYNRGY-Academy.jpg',
    '/img/p2.png',
    '/img/p3.png',
    '/img/p4.png',
    '/img/students1.jpg',
    '/img/students2.jpg',
    '/img/students3.jpg',
    '/img/Team_Operations.jpg',
    '/img/Team_Product.jpg',
    '/img/android_engineering.jpeg',
    '/img/fullstack_web_development.jpeg',
    '/img/product_management.jpeg',
    '/img/ui_ux_design.jpeg',
    '/img/conference-showcase-SDH.jpg',
    '/img/2019-Hackathon-Photo-by-Randy-and-Jackie-Smith.jpg',
    '/img/icons/icon-72x72.png',
    '/img/icons/icon-96x96.png',
    '/img/icons/icon-128x128.png',
    '/img/icons/icon-144x144.png',
    '/img/icons/icon-152x152.png',
    '/img/icons/icon-192x192.png',
    '/img/icons/icon-384x384.png',
    '/img/icons/icon-512x512.png',
    'https://fonts.googleapis.com/css?family=Viga',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
]

self.addEventListener('install', evt => {
    console.log('service worker berhasil di install', evt);
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('melakukan caching');
            cache.addAll(assets);
        })
    )
})

self.addEventListener('activate', evt => {
    console.log('service worker berhasil diaktifkan');
})

self.addEventListener('fetch', evt => {
    console.log('fetch dari service worker', evt);
    evt.respondWith (
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
})
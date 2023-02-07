var casheName = 'petstore-v1';
var casheFiles = [
    'petdepot.html',
    'product.js',
    'petstore.webmanifest',
    'images/catfood.png',
    'images/cathouse.png',
    'images/dogfood.png',
    'images/doghouse.png',
    'images/henfood.png',
    'images/pet-shop.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(casheName).then((cashe) => {
            console.log('[Service Worker] Caching all the files');
            return cashe.addAll(casheFiles);
        })
    );

})
'use strict';
/* globals self, caches */

// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var cacheFiles = [
	'./',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic',
	'https://cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css',
	'https://cdn.polyfill.io/v2/polyfill.min.js',
	'./index.html',
	'./bundle.js',
	'./reset.css',
	'./style.css',
	'./star-wars.jpg'
];

self.addEventListener('install', (event) =>
	event.waitUntil(
		caches.open(cacheName).then((cache) =>
			cache.addAll(cacheFiles)
		)
	)
);

self.addEventListener('activate', (event) => {
  event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(cacheNames.map((thisCacheName) =>
				(thisCacheName !== cacheName) ? caches.delete(thisCacheName) : undefined)
			)
		)
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) =>
			response || fetch(event.request.clone()).then((response) =>
				(!response) ? response : caches.open(cacheName).then((cache) =>
					cache.put(event.request, response.clone())
				)
			)
			.catch((err) => console.log(err))
		)
	);
});

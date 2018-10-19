module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
	"**/*.{json,ico,png,html,js,css}"
    ],
    "swDest": "build/sw.js",
    "navigateFallback": '/index.html',
    "runtimeCaching": [
	{
	    urlPattern: /^https:\/\/stackpath\.bootstrapcdn\.com\/bootstrap\/4\.1\.3\/css\/bootstrap\.min\.css/,
	    handler: 'cacheFirst',
	    options: {
		cacheName: 'bootstrap-min',
		expiration: {
		    maxEntries: 80,
		    maxAgeSeconds: 60 * 60 * 24
		}
	    }
	}
    ]
};

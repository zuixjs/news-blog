/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "News Blog",
    "baseUrl": "/news-blog/",
    "language": "en",
    "resourcePath": "/news-blog/app/",
    "libraryPath": {
      "@lib": "/news-blog/lib/1.1/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "zuixjs.github.io": {
      "baseUrl": "/news-blog/",
      "resourcePath": "/news-blog/app/",
      "libraryPath": {
        "@lib": "/news-blog/lib/1.1/",
        "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
        "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
      }
    },
    "siteMapUrl": "https://zuixjs.github.io/news-blog"
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/news-blog/service-worker.js');
    });
  }
})();

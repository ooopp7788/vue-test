
function checkServiceWorkerSupport() {
  return 'serviceWorker' in navigator;
}

export function registerServiceWorker (scriptURL, options) {
  if (checkServiceWorkerSupport()) {
    return navigator.serviceWorker.register(scriptURL, options);
  }
  return Promise.reject('您的浏览器不支持');
}

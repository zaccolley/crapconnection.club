// Code from https://serviceworke.rs, good resource for service worker examples

// Register the ServiceWorker
navigator.serviceWorker.register('service-worker.js', {
  scope: '.'
}).then(function(registration) {
  console.log('The service worker has been registered ', registration);
});

// Listen for claiming of our ServiceWorker
navigator.serviceWorker.addEventListener('controllerchange', function(event) {
  console.log(
    '[controllerchange] A "controllerchange" event has happened ' +
    'within navigator.serviceWorker: ', event
  );

  // Listen for changes in the state of our ServiceWorker
  navigator.serviceWorker.controller.addEventListener('statechange',
    function() {
      console.log('[controllerchange][statechange] ' +
        'A "statechange" has occured: ', this.state
      );

    // If the ServiceWorker becomes "activated", let the user know they can go offline!
      if (this.state === 'activated') {
        console.log('dad');
        // Show the a notification to show site is offline ready
        document.querySelector('.offline-notif')
        .classList.remove('offline-notif--hidden');
      }
    }
  );
});

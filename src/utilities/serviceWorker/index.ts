export default async function initiateServiceWorkerFromClient() {
  const isOnline = "onLine" in navigator ? navigator.onLine : true;
  const usingSW = "serviceWorker" in navigator;
  let swRegistration: ServiceWorkerRegistration;
  let svcWorker: ServiceWorker | MessagePort | null;

  async function registerServiceWorker() {
    if (usingSW) {
      try {
        swRegistration = await navigator.serviceWorker.register("/sw.js", {
          updateViaCache: "none",
        });

        svcWorker =
          swRegistration.installing ||
          swRegistration.waiting ||
          swRegistration.active;
        sendStatusUpdate(svcWorker);

        // Listener functions coming from the service worker
        navigator.serviceWorker.addEventListener("message", onSWMessage);
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          console.log("New service worker activated");
          svcWorker = navigator.serviceWorker.controller;
          sendStatusUpdate(svcWorker);
        });
      } catch (e) {
        console.log(`SW registration failed with error: ${e}`);
      }
    }
  }

  function onSWMessage(event: MessageEvent) {
    const { data } = event;
    if (data.requestStatusUpdate) {
      console.log("Recieved request for status update from SW");
      sendStatusUpdate(event.ports && event.ports[0]);
    }
  }

  function sendStatusUpdate(target: ServiceWorker | MessagePort | null) {
    sendSWMessage({ statusUpdate: { isOnline } }, target);
  }

  function sendSWMessage(
    msg: object,
    target: ServiceWorker | MessagePort | null
  ) {
    if (target) {
      target.postMessage(msg);
    } else if (svcWorker) {
      svcWorker.postMessage(msg);
    } else {
      navigator?.serviceWorker?.controller?.postMessage(msg);
    }
  }

  await registerServiceWorker();
}

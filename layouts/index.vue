<template>
  <div class="main-flex">
    <Features />
    <div class="main-space">
      <MainTop />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;

      // Optionally, prompt the user to install the app
      // Display your custom install button or automatically trigger it
      const installButton = document.getElementById("install-btn");
      installButton.style.display = "block";
      installButton.addEventListener("click", () => {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });
    });
  },
};
</script>
<style>
body {
  background: #000;
}

.main-space {
  background: url("/battery.png");
  background-size: cover;
  background-position: center;
}
</style>

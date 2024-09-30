<template>
  <div class="main-top-container">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="menu top"
      @click="toggleNavState"
    >
      <path
        fill-rule="evenodd"
        d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
        fill="currentColor"
      ></path>
    </svg>
    <img
      src="/logo.png"
      loading="lazy"
      sizes="(max-width: 479px) 42vw, 150px"
      srcset="/logo.png 500w, /logo.png 801w"
      alt=""
      class="brand"
    /><svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="owner-icon"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="currentColor"></path>
      <path
        fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        fill="currentColor"
      ></path>
    </svg>
    <div>Chisom</div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleNavState() {
      this.$store.commit("TOGGLE_NAV");
    },
  },
};
</script>

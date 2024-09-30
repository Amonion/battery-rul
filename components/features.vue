<template>
  <div class="features_nav" :class="{ active: navState }">
    <svg
      @click="toggleNavState"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="menu"
    >
      <path
        fill-rule="evenodd"
        d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
        fill="currentColor"
      ></path>
    </svg>
    <div class="feature_main_title">Features</div>
    <div class="each-feature-input">
      <div class="feature_title">Cicle Index</div>
      <input
        class="feature_input lon w-input"
        maxlength="256"
        name="index"
        data-name="index"
        placeholder="0"
        type="text"
        id="index"
        required=""
      />
      <div class="feature_footer">
        <div>0</div>
        <div>1112</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature_title">Discharge Time</div>
      <input
        class="feature_input lon w-input"
        maxlength="256"
        name="index-4"
        data-name="Index 4"
        placeholder="0"
        type="text"
        id="index-4"
        required=""
      />
      <div class="feature_footer">
        <div>0</div>
        <div>1112</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature_title">Decrement</div>
      <input
        class="feature_input lon w-input"
        maxlength="256"
        name="index-4"
        data-name="Index 4"
        placeholder="0"
        type="text"
        id="index-4"
        required=""
      />
      <div class="feature_footer">
        <div>0</div>
        <div>1112</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature-input-flex">
        <div class="feature_title">Min Voltage</div>
        <div class="feature_title">Max Voltage</div>
      </div>
      <div class="feature-input-flex">
        <input
          class="feature_input w-input"
          maxlength="256"
          name="index-3"
          data-name="Index 3"
          placeholder="0"
          type="text"
          id="index-3"
          required=""
        /><input
          class="feature_input w-input"
          maxlength="256"
          name="index-2"
          data-name="Index 2"
          placeholder="0"
          type="text"
          id="index-2"
          required=""
        />
      </div>
      <div class="feature_footer">
        <div>0</div>
        <div>1112</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature_title">Time Constant</div>
      <input
        class="feature_input lon w-input"
        maxlength="256"
        name="index-3"
        data-name="Index 3"
        placeholder="0"
        type="text"
        id="index-3"
        required=""
      />
      <div class="feature_footer">
        <div>0</div>
        <div>1112</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature_title">Charging Time</div>
      <input
        class="feature_input lon w-input"
        maxlength="256"
        name="index-3"
        data-name="Index 3"
        placeholder="0"
        type="text"
        id="index-3"
        required=""
      />
      <div class="feature_footer">
        <div>0</div>
        <div>1112</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleNavState() {
      this.$store.commit("TOGGLE_NAV");
    },
  },
  computed: {
    navState() {
      return this.$store.state.navState;
    },
  },
};
</script>
<style>
.features_nav.active {
  transition: 0.3s all;
}
@media screen and (max-width: 991px) {
  .features_nav.active {
    position: fixed;
    right: auto;
    bottom: 0%;
    left: 0%;
    overflow: auto;
  }
}
</style>

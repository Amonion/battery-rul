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
        v-model="Cycle_Index"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="0"
        type="number"
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
        v-model="Discharge_Time"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="Enter Discharge Time"
        type="number"
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
        v-model="Decrement"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="Enter Decrement"
        type="number"
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
          v-model="Min_Voltage_Charge"
          @blur="setFeatures"
          @keyup="setFeatures"
          placeholder="Enter Min Voltage"
          type="number"
        /><input
          class="feature_input w-input"
          v-model="Max_Voltage_Discharge"
          @blur="setFeatures"
          @keyup="setFeatures"
          placeholder="Enter Max Voltage"
          type="number"
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
        v-model="Time"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="Enter Time"
        type="number"
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
        v-model="Charging_time"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="0"
        type="number"
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
  data() {
    return {
      Cycle_Index: "",
      Discharge_Time: "",
      Decrement: "",
      Max_Voltage_Discharge: "",
      Min_Voltage_Charge: "",
      Time: "",
      Time_constant_current: "",
      Charging_time: "",
    };
  },
  methods: {
    toggleNavState() {
      this.$store.commit("TOGGLE_NAV");
    },

    setFeatures() {
      const form = {
        Cycle_Index: this.Cycle_Index,
        Discharge_Time: this.Discharge_Time,
        Decrement: this.Decrement,
        Max_Voltage_Discharge: this.Max_Voltage_Discharge,
        Min_Voltage_Charge: this.Min_Voltage_Charge,
        Time: this.Time,
        Time_constant_current: this.Time_constant_current,
        Charging_time: this.Charging_time,
      };
      this.$store.commit("setFeatures", form);
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

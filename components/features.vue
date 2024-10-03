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
        <div>1</div>
        <div>1134</div>
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
        <div>8.69</div>
        <div>958320.37</div>
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
        <div>-397645.908</div>
        <div>406703.768</div>
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
        <div>3.022</div>
        <div>4.379</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature_title">Time Constant</div>
      <input
        class="feature_input lon w-input"
        v-model="Time_constant_current"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="Enter Time Constant"
        type="number"
      />
      <div class="feature_footer">
        <div>5.98</div>
        <div>880728.1</div>
      </div>
    </div>
    <div class="each-feature-input">
      <div class="feature_title">Time</div>
      <input
        class="feature_input lon w-input"
        v-model="Time"
        @blur="setFeatures"
        @keyup="setFeatures"
        placeholder="Enter Time"
        type="number"
      />
      <div class="feature_footer">
        <div>-113.584</div>
        <div>245101.117</div>
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
        <div>5.98</div>
        <div>880728.1</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Cycle_Index: 1,
      Discharge_Time: 8.69,
      Decrement: 0,
      Max_Voltage_Discharge: 3.043,
      Min_Voltage_Charge: 3.022,
      Time: "",
      Time_constant_current: 5.98,
      Charging_time: "",
      features: [
        {
          column: "Cycle_Index",
          min: 1,
          max: 1134,
        },
        {
          column: "Discharge_Time",
          min: 8.69,
          max: 958320.37,
        },
        {
          column: "Decrement",
          min: -397645.908,
          max: 406703.768,
        },
        {
          column: "Max_Voltage_Discharge",
          min: 3.043,
          max: 4.363,
        },
        {
          column: "Min_Voltage_Charge",
          min: 3.022,
          max: 4.379,
        },
        {
          column: "Time",
          min: -113.584,
          max: 245101.117,
        },
        {
          column: "Time_constant_current",
          min: 5.98,
          max: 880728.1,
        },
        {
          column: "Charging_time",
          min: 5.98,
          max: 880728.1,
        },
      ],
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
.features_nav {
  transition: 0.3s all;
  height: 100vh;
  overflow: auto;
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

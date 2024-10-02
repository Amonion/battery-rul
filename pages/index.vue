<template>
  <div class="main-content">
    <h1 class="main-title">RUL PREDICTION FOR LITHIUM-ION BATTERY</h1>
    <div class="model-select">
      <div @click="isActive = !isActive" class="select-ead">
        <div>{{ selectedModel }}</div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="feature-icon"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div class="drop-list" :class="{ active: isActive }">
        <div
          @click="selectModel(item)"
          v-for="(item, int) in models"
          :key="int"
          class="eac-model-opt"
        >
          <div>{{ item }}</div>
          <div>{{ int + 1 }}</div>
        </div>
      </div>
    </div>
    <div class="predict-btn" @click="sendPrediction">Predict</div>
    <div v-if="isError" class="error">{{ error }}</div>
    <div class="prediction-body" v-if="showResponse">
      <div class="prediction-title">
        Battery Remaining Useful Life: {{ prediction }}
      </div>
      <div class="prediction-title">Battery Health Condition: {{ health }}</div>
      <div>
        <table v-if="response.length" class="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(suggestion, index) in response" :key="index">
              <td>{{ suggestion.title }}</td>
              <td>{{ suggestion.explanation }}</td>
            </tr>
          </tbody>
        </table>

        <p v-else>No suggestions available.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "index",

  data() {
    return {
      models: [],
      selectedModel: "Select Model",
      prediction: "",
      isActive: false,

      showResponse: false,
      response: "",
      health: "",
      error: "",
      isError: "",
      url: "http://127.0.0.1:8000",
      url1: "https://battery-backend.onrender.com",
    };
  },
  created() {
    fetch(`${this.url1}/api/models/`)
      .then((response) => response.json())
      .then((data) => {
        this.models = data.models;
      });
  },
  methods: {
    selectModel(item) {
      this.selectedModel = item;
      this.isActive = false;
    },
    sendPrediction() {
      if (this.selectedModel == "Select Model") {
        this.isError = true;
        this.error = "Please select a model to continue.";
        return;
      }
      const features = {
        Cycle_Index: this.features.Cycle_Index,
        Discharge_Time: this.features.Discharge_Time,
        Decrement: this.features.Decrement,
        Max_Voltage_Discharge: this.features.Max_Voltage_Discharge,
        Min_Voltage_Charge: this.features.Min_Voltage_Charge,
        Time: this.features.Time,
        Time_constant_current: this.features.Time_constant_current,
        Charging_time: this.features.Charging_time,
      };

      this.isError = false;

      const payload = {
        model_name: this.selectedModel,
        features: features,
      };

      fetch(`${this.url1}/api/predict/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          this.prediction = data.prediction;
          this.response = data.optimization_suggestion || [];
          this.health = data.battery_health_category;
          this.showResponse = true;
        })
        .catch((error) => {
          this.isError = true;
          this.error = `Error fetching prediction: ${error}`;
          this.showResponse = false;
        });
    },
  },

  computed: {
    features() {
      return this.$store.state.features;
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
  margin: 10px 0;
  font-weight: 300;
  font-size: 16px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.table th,
.table td {
  border: 1px solid #382973;
  padding: 8px;
}

.table th {
  background-color: #382973;
  color: whitesmoke;
  text-align: left;
}

.table td {
  text-align: left;
}
</style>

<template>
  <div class="main-content">
    <h1 class="main-title">RUL PREDICTION FOR LITHIUM-ION BATTERY</h1>
    <div class="model-select">
      <div class="select-ead">
        <div>Select Model</div>
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
      <div class="drop-list">
        <div class="eac-model-opt">
          <div>Random Forest</div>
          <div>98%</div>
        </div>
        <div class="eac-model-opt">
          <div>Random Forest</div>
          <div>98%</div>
        </div>
        <div class="eac-model-opt">
          <div>Random Forest</div>
          <div>98%</div>
        </div>
        <div class="eac-model-opt">
          <div>Random Forest</div>
          <div>98%</div>
        </div>
      </div>
    </div>
    <div class="predict-btn">Predict</div>
    <div class="prediction-body">
      <div class="prediction-title">PREDICTION</div>
      <div>This is some text inside of a div block.</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "index",

  data() {
    return {
      banners: [],
      blogs: [],
      twoBlogs: [],
      tab: 0,
    };
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  methods: {
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/scripts/home.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    getTwo(blogs) {
      const array = [];
      for (let i = 0; i < 2; i++) {
        array.push(blogs[i]);
      }
      return array;
    },

    async getBlogs() {
      try {
        const result = await this.$axios.get("/blogs/?category=Banking");
        this.blogs = result.data.data;
        this.twoBlogs = this.getTwo(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banners/?bannerCategory=Home`);
        this.banners = result.data.data;
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

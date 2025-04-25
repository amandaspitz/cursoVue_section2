const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      alert: "Counting",
      timeout: null,
    };
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    resetCounter() {
      this.counter = 0;
      this.alert = "Counting";
    },
  },

  watch: {
    counter(value) {
      if (this.value < 37) {
        this.alert = "Not there yet";
      } else if (this.value === 37) {
        this.alert = this.value;
      } else {
        this.alert = "Too much!";
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        this.resetCounter();
      }, 5000);
    },
  },
});

app.mount("#assignment");

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    addToCounter(num) {
      this.counter = this.counter + num;
      //or this counter +1;
    },
    removeFromCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted!');
    },
  }
});

app.mount('#events');


//Add vai ter que +1 
//Remove vai ter que -1
//no resultado do counter
//então numberResult: {{Result: numberResult}}
//numberResult
//if add  counter +1 
//if remove counter -1
//Vue fez tudo sozinho no html
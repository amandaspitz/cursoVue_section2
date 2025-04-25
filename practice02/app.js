const app = Vue.createApp({
    data() {
        return{
            output: '',
            outputEnter: '',
        };
    },
    methods: {
        showAlert() {
            alert('Well done!');
        },
        setOutput(outputText) {
            this.output = outputText.target.value;
        },
        setOutputEnter(outputTextEnter) {
            this.outputEnter = outputTextEnter.target.value;
        },
    },
});

app.mount('#assignment');
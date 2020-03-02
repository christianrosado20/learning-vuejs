new Vue ({
    el: '#vue-app',
    data: {
        message: ''
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.message = this.$refs.input.value;
        }
    }
})
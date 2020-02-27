new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        x: 0,
        y: 0
    },
    methods: {
        add: function(num) {
            this.age += num;
        },
        subtract: function(num) {
            this.age -= num;
        },
        updateXY: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
            console.log(event);
        }
    }
});
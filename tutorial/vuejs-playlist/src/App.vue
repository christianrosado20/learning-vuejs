<template>
  <div>
    <app-header></app-header>
    <person v-bind:people="people"></person>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Person from './components/Person.vue'
  
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'person': Person,
    },
    data() {
      return {
            people: [
                {name:'Chris', speciality:'Javascript', show:false},
                {name:'Marcos',  speciality:'Python', show:false},
                {name:'Daniel',  speciality:'Space', show:false},
                {name:'Luis', speciality:'Guitar', show:false},
                {name:'Alana',  speciality:'Cooking', show:false},
                {name:'Sidney',  speciality:'Cars', show:false}
            ]
      }
    }
  }
</script>

<style scoped>

</style>

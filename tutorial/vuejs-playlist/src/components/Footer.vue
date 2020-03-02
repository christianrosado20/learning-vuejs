<template>
  <footer>
      <p>{{ copyright }}</p>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        copyright: "Copyright 2020 Vue People"
      }
    }
  }
</script>

<style scoped>
footer {
    background: #222;
    padding: 1rem;
}
p {
    color: lightgreen;
    text-align: center;
}
</style>

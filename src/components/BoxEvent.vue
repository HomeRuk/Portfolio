<template>
    <div class="event">
        <div class="icon-gray">
            <img class="center-block" :src="imgPath" alt=""> 
        </div>
        <div class="date">
            {{date}}
        </div>
        <div class="details">
            <h4>{{head}}</h4>
            <h5 v-html="body"></h5>
            <h5 v-html="foot"></h5>
        </div>
    </div>
</template>

<script>
export default {
  props: ['path', 'date', 'head', 'body', 'foot'],
  computed: {
    imgPath () {
      return require(`../assets/img/${this.path}`)
    }
  }
}
</script>

<style scope>

</style>

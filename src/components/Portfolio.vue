<template>
  <section id="portfolio">
    <div class="container">
      <div class="row">
        <div class="portfolio-title">
          <h1>MY PORTFOLIO</h1>
        </div>
        <repos v-for="repo in repos" :key="repo" :path='repo.path' :imgPath='repo.imgPath' class="col-md-6" v-scroll-reveal.reset></repos>
      </div>
    </div>
  </section>
</template>

<script>
import Repos from './Repos'
export default {
  name: 'Portfolio',
  components: {
    Repos
  },
  data () {
    return {
      repos: [
        {path: 'HomeRuk/Doofon_SeniorProject', imgPath: 'DooFon.png'},
        {path: 'HomeRuk/DooFon', imgPath: 'WebDooFon.png'},
        {path: 'HomeRuk/APP_DooFon', imgPath: 'AppDooFon.png'},
        {path: 'HomeRuk/Portfolio', imgPath: 'me.jpg'},
        {path: 'HomeRuk/Titanic_DataMining', imgPath: 'Titanic.png'},
        {path: 'HomeRuk/FaceEmotion', imgPath: 'FaceEmotion.png'}
      ]
    }
  }
}
</script>

<style scope>
#portfolio {
  background-color: #dddddd;
  padding-top: 50px;
  padding-bottom: 50px;
}

.portfolio-title {
  font-weight: bold;
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
}
</style>
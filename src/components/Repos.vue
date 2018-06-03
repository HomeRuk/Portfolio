<template lang="html">
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-4">
            <!-- <img class="center-block" :src="info.avatar_url" alt="" > -->
            <img class="center-block" :src="urlImgPath" alt="" >
        </div>
        <div class="col-md-8">
          <h1 class="title">{{ info.name }}</h1>
          <h3 class="subtitle"><small>{{ info.description }}</small></h3>
          <!-- <router-link :to="'/' + path" class="btn btn-info btn-block">View Detail</router-link> -->
          <a :href="urlPath" class="btn btn-info btn-block">View Detail</a>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-3">
          <p class="numberinfo-title">Stars</p>
          <p class="numberinfo">{{ numberFormat(info.stargazers_count) }}</p>
        </div>
        <div class="col-md-3">
          <p class="numberinfo-title">Forks</p>
          <p class="numberinfo">{{ numberFormat(info.open_issues_count) }}</p>
        </div>
        <div class="col-md-3">
          <p class="numberinfo-title">Open Issues</p>
          <p class="numberinfo">{{ numberFormat(info.forks_count) }}</p>
        </div>
        <div class="col-md-3">
          <p class="numberinfo-title">Subscribers</p>
          <p class="numberinfo">{{ numberFormat(info.subscribers_count) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchRepository } from '../services/api'

export default {
  props: ['path', 'imgPath'],
  data () {
    return {
      info: {
        organization: {}
      }
    }
  },
  computed: {
    urlImgPath () {
      try {
        return require(`../assets/img/${this.imgPath}`)
      } catch (e) {
        return require(`../assets/img/no-img.jpg`)
      }
    },
    urlPath () {
      return 'https://github.com/' + this.path
    }
  },
  methods: {
    numberFormat (number) {
      return (number) ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : number
    }
  },
  created () {
    let vm = this
    fetchRepository(this.path).then((repositoryInfo) => {
      vm.info = repositoryInfo
    })
  }
}
</script>

<style lang="css" scope>

@media (min-width: 768px) {
  .well {
    height: 300px;
  }
}

.title {
  font-size: 3.5vh;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  .title {
    text-align: center;
    font-size: 5vw;
    margin-top: 20px;
    padding: 0;
  }
  .subtitle {
    text-align: center;
    margin: 0;
    padding-bottom: 10px;
  }
}

@media (max-width: 575px) {
  .title {
    text-align: center;
    font-size: 4vh;
    margin-top: 20px;
    padding: 0;
  }
}

.subtitle {
  margin: 0;
  padding-bottom: 10px;
}

.numberinfo-title {
  text-align: center;
}

.numberinfo {
  font-size: 32px;
  text-align: center;
}

img {
  display: block;
  width: 128px;
  max-height: 300px;
  height: 128px;
  max-width: 300px;
}
</style>

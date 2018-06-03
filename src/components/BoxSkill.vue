<template>
    <div class="col-md-4">
      <div class="box-img">
          <img class="center-block" :src="imgPath" alt=""> 
          <div class="img-caption">
               <p>{{textImg}}</p> 
               <hr/>
               <button class="btn btn-success btn-block" v-if="level == 'Advanced'" >Advanced</button>
               <button class="btn btn-warning btn-block" v-if="level == 'Intermediates'" >Intermediates</button>
               <button class="btn btn-danger btn-block" v-if="level == 'Beginner'" >Beginner</button>
          </div>
          <!-- <div class="progress center-block">
              <div class="progress-bar progress-bar-custom" role="progressbar" :style="widthPercent">
              </div>
          </div> -->
      </div>
    </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    percent: Number,
    level: {
      type: String,
      required: true
    }
  },
  computed: {
    imgPath () {
      return require(`../assets/img/${this.path}`)
    },
    widthPercent () {
      return `width:${this.percent}%`
    },
    textImg () {
      let text = /(.*)\.[^.]+$/.exec(this.path)
      return text[1].toUpperCase()[0].concat(text[1].substr(1))
    }
  }
}
</script>

<style scoped>
.box-img {
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 2px rgba(0, 140, 186, 0.5);
}

.box-img>img {
  display: block;
  width: 100%;
  max-height: 300px;
  height: 300px;
  max-width: 300px;
}

.box-img :hover {
  opacity: .80;
}

.img-caption {
  text-align: center;
  font-size: 20px;
  margin: 20px;
  text-shadow: 0.5px 0.5px 1px;
}

.progress {
  max-width: 300px;
}

.progress-bar-custom {
  background-color: #4E4E4E;
}
</style>
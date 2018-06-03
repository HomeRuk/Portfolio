<template lang="html">
  <section id="home">
    <div class="image">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="name">Position :
              <span
                class="txt-rotate"
                data-period="0"
                data-rotate='[ "Software Developer.", "Web Developer.", "PHP Developer.", "Java  Developer."]'></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
// https://codepen.io/gschier/pen/jkivt
<script>
import '@/assets/js/typing_carousel.js'
import AboutMe from './AboutMe'
export default {
  name: 'Home',
  components: {
    AboutMe
  }
}
</script>

<style lang="css" scope>
.image {
  background: url(../assets/img/bg12.jpg);
  min-height: 100vh;
  max-height: auto;
  margin: 0px 0px;
  background-color: white;
  opacity: 0.90; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.name {
  margin-left: 20%;
  margin-top: 30%;
  position: absolute;
  font-size: 5rem;
  color: white;
  display: inline-block;
}

@media only screen and (max-width: 768px) {
  .image {
    min-height: 100vh;
    max-height: auto;
    margin: 0px 0px;
    /* opacity: 0.85; */
    background-attachment: local;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .name {
    margin-left: 20%;
    margin-top: 30%;
    position: absolute;
    font-size: 2.5rem;
    color: white;
    display: inline-block;
  }
}

@media only screen and (max-width: 575px) {
  .image {
    min-height: 100vh;
    max-height: auto;
    margin: 0px 0px;
    /* opacity: 0.85; */
    background-attachment: local;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .name {
    margin-left: 15%;
    margin-top: 50%;
    position: absolute;
    font-size: 2.5rem;
    color: white;
    display: inline-block;
  }
}
</style>
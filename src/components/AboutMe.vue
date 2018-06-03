<template>
    <section id="aboutme">
        <div class="container">
            <div class="row">
                <div class="about-title">
                    <h1>ABOUT ME</h1>
                </div>
                <div class="about-image" v-scroll-reveal.reset>
                    <img class="center-block img-circle about-image-bg" src="../assets/img/me.jpg" alt="me">
                    <br/>
                    <h3>Wisit Lertsakwimarn</h3>
                </div>
                <hr/>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="about-content" v-scroll-reveal.reset>
                        <p>
                            <b>Height / weight : </b>184/72</p>
                        <p>
                            <b>Age: </b>{{getAge("1995-08-04")}} years</p>
                        <p>
                            <b>Date of Birth: </b>4 August 1995</p>
                        <p>
                            <b>Nationality: </b>Thai</p>
                        <p>
                            <b>Religion: </b>Buddhism</p>
                        <p>
                            <b>Interest: </b>Programming, IoT, Data Mining, Security</p>
                        <p>
                            <b>Language: </b>
                        </p>
                        <p>
                            <b>• Thai:</b> Native or bilingual proficiency</p>
                        <p>
                            <b>• English:</b> Elementary proficiency</p>
                        <br/>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <a class="btn btn-lg btn-social btn-linkedin btn-block" href="https://www.linkedin.com/in/wisitlert">
                                            <i class="fa fa-linkedin icon-social"></i> Linkedin <small>(Read more)</small></a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <a class="btn btn-lg btn-social btn-success btn-block" href="https://github.com/HomeRuk/homeruk.github.io/blob/master/CV_Dev.pdf" target="_blank">
                                            <i class="fa fa-download icon-social"></i> Download CV</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AboutMe',
  methods: {
    getAge (dateString) {
      let today = new Date()
      let birthDate = new Date(dateString)
      let age = today.getFullYear() - birthDate.getFullYear()
      let m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }
  }
}

</script>

<style lang="css" scope>
#aboutme {
    padding-top: 50px;
    padding-bottom: 100px;
}

.about-title {
    font-weight: bold;
    text-align: center;
    padding-top: 75px;
    padding-bottom: 75px;
}

.about-image {
    text-align: center;
    position: relative;
    padding-bottom: 20px;
}

.about-image-bg {
    text-align: center;
    background-position: center center;
    width: auto;
    height: 250px;
}

.about-image:hover .about-image-bg {
    border: 3px solid #ffffff;
    opacity: .75;
}

.about-image h3 {
    font-weight: bold;
}

.about-content {
    text-align: left;
    /* margin-left: 20%; */
    font-size: 16px;
}

.about-content p {
    font-size: 16px;
}

@media (max-width: 768px) {
    .about-content {
        text-align: left;
        margin-left: 5%;
        margin-right: 5%;
    }
}

@media (max-width: 575px) {
    .about-content {
        text-align: left;
        margin-left: 10%;
        margin-right: 10%;
        /* margin-right: 20%; */
    }
}
</style>


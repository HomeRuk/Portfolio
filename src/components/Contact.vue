<template>
  <footer>
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="contact-title">
            <h1>Connect with me</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <h2>Social media</h2>
            <br/>
            <div class="contact-box">
              <a class="btn btn-lg btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/wisitlert">
                <i class="fa fa-linkedin icon-social"></i>
              </a>
              <a class="btn btn-lg btn-social-icon btn-facebook" href="https://www.facebook.com/wisit.lertsakwimarn">
                <i class="fa fa-facebook icon-social"></i>
              </a>
              <a class="btn btn-lg btn-social-icon btn-instagram" href="https://www.instagram.com/p3a_ruk">
                <i class="fa fa-instagram icon-social"></i>
              </a>
              <a class="btn btn-lg btn-social-icon btn-github" href="https://github.com/HomeRuk">
                <i class="fa fa-github icon-social"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <h2>Email</h2>
            <br/>
            <div class="contact-box">
              <i class="fa fa-3x fa-envelope"></i>
              <span style="text-">wisit.lertsakwimarn@gmail.com</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <h2>Tel</h2>
            <br/>
            <div class="contact-box">
              <i class="fa fa-3x fa-phone"></i>
              <span>06 1191 0505</span>
            </div>
            <div class="contact-box">
              <i class="fa fa-3x fa-phone"></i>
              <span>09 8363 9848</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="footer-content">Create By Wisit Lertsakwimarn (Vue.js and Bootstrap)</div>
  </footer>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="css" scoped>
#contact {
  background-color: #222222;
  color: #eeeeee;
  padding-top: 100px;
  padding-bottom: 100px;
}

.contact-title {
  font-weight: bold;
  text-align: center;
  padding-bottom: 50px;
}

.contact-box {
  margin-bottom: 15px;
  padding-bottom: 15px;
  position: relative;
  transition: .35s;
}

.contact-box:hover {
  opacity: .75;
}

.contact-box>span {
  padding-left: 10px;
  font-size: 20px;
}
</style>



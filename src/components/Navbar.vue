<template>
  <nav class="navbar navbar-grey navbar-fixed-top" role="navigation">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <!-- Branding -->
        <a class="navbar-brand visibility" v-scroll-to="'#home'">PORTFOLIO</a>
        <!-- Collapsed Hamburger -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="true">
          Menu
        </button>
      </div>
  
      <!-- Collect the nav -->
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <!-- <a v-scroll-to="'#home'">HOME</a> -->
            <a href="#home">HOME</a>
          </li>
          <li>
            <!-- <a v-scroll-to="'#aboutme'">ABOUTME</a> -->
            <a href="#aboutme">ABOUTME</a>
          </li>
          <li>
            <!-- <a v-scroll-to="'#experience'">EXPERIENCE</a> -->
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <!-- <a v-scroll-to="'#skills'">SKILL</a> -->
            <a href="#skills">SKILL</a>
          </li>
          <li>
            <!-- <a v-scroll-to="'#portfolio'">PORTFOLIO</a> -->
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <!-- <a v-scroll-to="'#contact'">CONTACT</a> -->
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  mounted () {
    /* eslint-disable */
    /* Ref
     * https://codepen.io/MOgorodnik/pen/AXwQmY
     * https://codepen.io/CodeBoomer/pen/dXgyPq
     */
    // Add smooth scrolling on all links inside the navbar
    $("#navbar-collapse a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault()

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        })
      }  // End if
    })
    // navbar tooglle hided mode mobile
    $(function () {
      $('.nav a').on('click', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
          $(".navbar-toggle").trigger("click")
        }
      })
    })
  }
  /* eslint-disable */
  /*   
  mounted () {
    Nav bar active 
    $(".nav a").on("click", function () {
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });
    // navbar tooglle hided mode mobile
    $(function () {
      $('.nav a').on('click', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
          $(".navbar-toggle").trigger("click")
        }
      })
    })
  }
  */
}

</script>

<style lang="css" scoped>
.navbar-brand,
.navbar-nav li a {
  font-size: 18px;
  line-height: 75px;
  height: 75px;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 30px;
  padding-right: 30px;
}

.navbar .navbar-nav {
  display: inline-block;
  float: none;
}

.navbar .navbar-collapse {
  text-align: center;
}

@media (max-width: 768px) {
  .navbar-brand,
  .navbar-nav li a {
    font-size: 18px;
    line-height: 50px;
    height: 50px;
    width: 100%;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar .navbar-nav {
    display: inline-block;
    float: none;
    vertical-align: top;
  }

  .navbar .navbar-collapse {
    text-align: center;
  }
}

.navbar-grey {
  background-color: #0E0E0E;
  color: #ffffff;
  border-radius: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  opacity: .80;
}

.navbar-grey .navbar-nav>li>a {
  color: #fff;
}

.navbar-grey .navbar-nav>.active>a {
  color: #ffffff;
  /* background-color: transparent; */
  background-color: #1A1A1A;
  border-bottom: 3px solid #ffffff;
}

.navbar-grey .navbar-nav>li>a:hover,
.navbar-grey .navbar-nav>li>a:focus,
.navbar-grey .navbar-nav>.active>a:hover,
.navbar-grey .navbar-nav>.active>a:focus,
.navbar-grey .navbar-nav>.open>a {
  text-decoration: none;
  background-color: #1A1A1A;
  border-bottom: 3px solid #ffffff;
}

.navbar-grey .navbar-brand {
  color: #eeeeee;
}

.navbar-grey .navbar-toggle {
  background-color: #1A1A1A;
}

.visibility {
  display: none !important;
}

@media (max-width: 768px) {
  .visibility {
    display: block !important;
    display: inline-block;
  }
}
</style>

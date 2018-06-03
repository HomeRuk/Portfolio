<template>
  <div>
    <navbar></navbar>
    <home></home>
    <about-me></about-me>
    <experience></experience>
    <skills></skills>
    <portfolio></portfolio>
    <contact></contact>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Home from './Home'
import AboutMe from './AboutMe'
import Experience from './experience'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default {
  name: 'Main',
  components: {
    Navbar,     // 'navbar': Navbar
    Home,       // 'home': Home
    AboutMe,    // 'about-me': AboutMe
    Experience, // 'experience': Experience
    Skills,     // 'skills': Skills
    Portfolio,  // 'portfolio': Portfolio
    Contact     // 'contact': Contact
  }
}
</script>

<style lang="css" scope>
#footer-content {
  font-weight: bold;
  padding: 30px;
  font-size: 16px;
  color: #aaaaaa;
  background-color: #000000;
  text-align: center;
}
</style>

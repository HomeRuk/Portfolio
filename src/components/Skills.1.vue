 <template>
  <section id="skills">
    <div class="container">
      <div class="row">
        <div class="skills-title">
          <h1>FEATURED SKILLS</h1>
        </div>
      </div>
      <div class="row">
        <box-skill v-for="boxskill in boxskills" :key='boxskill' :path='boxskill.path' :percent='boxskill.percent' :level='boxskill.level' v-scroll-reveal.reset></box-skill>
      </div>
      <hr/>
    </div>
  </section>
  <!-- https://codepen.io/ekfuhrmann/pen/XRxwjw -->
</template>

<script>
import BoxSkill from './BoxSkill'
export default {
  name: 'Skills',
  components: {
    BoxSkill // 'box-skill': BoxSkill
  },
  data () {
    return {
      boxskills: [
        { path: 'php.svg', percent: '80', level: 'Advanced' },
        { path: 'java.svg', percent: '80', level: 'Advanced' },
        { path: 'html.svg', percent: '80', level: 'Advanced' },
        { path: 'css.svg', percent: '60', level: 'Intermediates' },
        { path: 'javascript.svg', percent: '70', level: 'Intermediates' },
        { path: 'sql.png', percent: '70', level: 'Intermediates' },
        { path: 'laravel.svg', percent: '70', level: 'Intermediates' },
        { path: 'AndroidStudio.svg', percent: '60', level: 'Intermediates' },
        { path: 'arduino.png', percent: '50', level: 'Beginner' },
        { path: 'vue.svg', percent: '50', level: 'Beginner' },
        { path: 'git.svg', percent: '50', level: 'Beginner' },
        // { path: 'gitkraken.svg', percent: '60' },
        { path: 'docker.svg', percent: '50', level: 'Beginner' }
      ]
    }
  }
}
</script>

<style scope>
#skills {
  background-color: #ffffff;
  padding-top: 50px;
  padding-bottom: 50px;
}

.skills-title {
  font-weight: bold;
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
}
</style>


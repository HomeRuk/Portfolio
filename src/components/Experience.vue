<template>
    <section id="experience">
        <div class="container">
            <div class="row">
                <div class="experience-title">
                    <h1>EXPERIENCE</h1>
                </div>
            </div>
            <div class="row">
                <div class="timeline">
                    <div class="line">
                        <div class="start">
                            2013
                        </div>
                        <div class="end">
                            2017
                        </div>
                    </div>
                    <box-event v-for="boxevent in boxevents" :key='boxevent' :path='boxevent.path' :date='boxevent.date' :head='boxevent.head' :body='boxevent.body' :foot='boxevent.foot' v-scroll-reveal.reset></box-event>
                </div>
            </div>
        </div>
    </section>
    <!-- https://www.noupe.com/inspiration/showcases/15-code-snippets-for-timelines-91734.html -->
</template>

<script>
import BoxEvent from './BoxEvent'
export default {
  name: 'experience',
  components: {
    BoxEvent
  },
  data () {
    return {
      boxevents: [
        {
          path: 'gold-medal.png',
          date: '2013 - 2017',
          head: 'University of the Thai chamber of commerce',
          body: '(Student)',
          foot: 'Bechelor of Science,<br/> Information and Communication Technology. <br/>GPA : 3.83/4 (Frist Class Honors)'
        },
        {
          path: 'edu.png',
          date: '2015 (January - May)',
          head: 'University of the Thai chamber of commerce',
          body: '(Teaching Assistant)',
          foot: 'Object-Oriented Technology (Using Java)'
        },
        {
          path: 'TRUE.png',
          date: '2017 (January - May)',
          head: 'True corporation (Cooperative Education)',
          body: 'Project Management',
          foot: '- Design and develop with Laravel Framework.<br/>- Compose documentation.'
        }
      ]
    }
  }
}
</script>

<style lang="css" scope>
@import url('../assets/css/timeline.css');
#experience {
    background-color: #dddddd;
    padding-top: 50px;
    padding-bottom: 150px;
}

.experience-title {
    font-weight: bold;
    text-align: center;
    padding-top: 75px;
    padding-bottom: 75px;
}

.timeline .event .details {
    font-weight: 400;
    font-size: 1rem;
    margin: 20px 0;
    padding: 0;
}

.timeline .event .icon-gray {
    position: absolute;
    right: -20px;
    top: -20px;
    height: 50px;
    width: 50px;
    background: #393939;
    border-radius: 50%;
    z-index: 3;
}

.timeline .event .icon-gray img {
    max-width: 70%;
    height: auto;
    margin-top: 30%;
    -webkit-filter: invert(100%);
    filter: invert(100%);
}

@media (max-width: 768px) {
    .timeline .event .icon-gray {
        left: -20px;
    }
}

@media (max-width: 575px) {
    .timeline .event .icon-gray,
    .timeline .event:nth-of-type(odd) .icon {
        left: 128px;
    }
    .details h5 {
        margin: 0px;
        padding-bottom: 2px;
    }
    .timeline .event .details {
        font-weight: 400;
        font-size: 1rem;
        margin: 10px 0;
        padding: 0;
    }
}
</style>
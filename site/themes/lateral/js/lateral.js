Vue.config.delimiters = ['%%', '%%'];

var data = {
  activeID : 0,
  activeFileURL : '',
  nextFileURL : '',
  previousFileURL : '',
  showPlayer: false
}

Vue.component('player', {
  template: `
    <div class="vue-player">
      <div class="track-title">
        <span>Track Title</span>
      </div>
      <div class="previous-button">Previous</div>
      <div class="play-button">Play / Pause</div>
      <div class="next-button">Next</div>
      <progress value="0" max="100">0</progress>
      <div class="download-link">Download</div>
      <audio><source src="" type="audio/mp3"></audio>
    </div>
    `,
  props: ['activeSoundID'],
  data: function(){
    return data;
  }
});

Vue.component('entries', {
  template: `
    <div class="main">
      <slot></slot>
    </div>
  `,
  data: function(){
    return soundData
  },
  mounted() {
    console.log(this.$children);
  }
});

Vue.component('entry', {
  template: `
    <div class="entry entry--sound collapsed" :selected="true" :playing="false">
      <header class="entry__header">
        <span class="entry__number">{{ entryNumber }}</span> <span class="entry__artist">{{ artist }}</span>
        <h2 @click="expandEntry" class="entry__title">{{ title }}</h2>
        <a href="#" @click="closeEntry">✕</a>
      </header>
      <div class="entry__content">
        <div class="entry__links">
          <a href="" class="cta" @click="playSound(soundURL)">Listen</a><a :href="soundURL" download class="cta">Download</a>
        </div>
        <div class="entry__text">
        </div>
      </div>
    </div>
  `,
  data: function(){
    return soundData
  },
  props: {
    index: {required: true},
    title: {required: true},
    soundURL: {required: true},
    permalink: {required: true},
    artist: {required: true},
    entryNumber: {required: true},
    metaDescription: {required: true}
  }
});

var app = new Vue({
  el: '.vue-container',
  data: soundData
});

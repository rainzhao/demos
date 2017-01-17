import './index.scss'
import demoList from '../demo-list'

new Vue({
  el: '#app',
  data: {
    hideAppAsideOnDesktop: false,
    showAppAsideOnMobile: false,
    demoList: demoList,
    demo: null,
    iframeLoading: false
  },
  methods: {
    toggleAppAside: function(value) {
      if (value !== undefined) {
        this.hideAppAsideOnDesktop = this.showAppAsideOnMobile = !!value;
        return;
      }
      this.hideAppAsideOnDesktop = !this.hideAppAsideOnDesktop;
      this.showAppAsideOnMobile = !this.showAppAsideOnMobile;
    },
    iframeOnload: function() {
      this.iframeLoading = false;
    },
    _findDemo: function() {
      this.iframeLoading = true;
      let entry = location.hash.replace('#/', '');
      this.demo = demoList.find(demo => demo.entry === entry) || demoList[0];
    }
  },
  computed: {
    demoSrc: function() {
      let entry = this.demo && this.demo.entry;
      if (!entry) {
        return '';
      }
      return location.origin + location.pathname + entry + '/';
    }
  },
  created: function() {
    window.onload = () => {
      this._findDemo();
    };
    window.onhashchange = () => {
      this._findDemo();
    }
  }
});
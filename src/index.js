import './index.scss'
import 'babel-polyfill'
import demoList from '../demo-list'

new Vue({
  el: '#app',
  data: {
    hideAppAsideOnDesktop: false,
    showAppAsideOnMobile: false,
    demoList: demoList,
    activeDemo: null,
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
    isDemoActived: function(demo) {
      if (!demo) return false;
      if (!this.activeDemo) return false;
      if (demo.entry !== this.activeDemo.entry) return false;
      return true;
    },
    _findDemo: function() {
      let entry = location.hash.replace('#/', '');
      this.activeDemo = demoList.find(demo => demo.entry === entry) || demoList[0];
    }
  },
  computed: {
    demoSrc: function() {
      let entry = this.activeDemo && this.activeDemo.entry;
      if (!entry) {
        this.iframeLoading = false;
        return '';
      }
      this.iframeLoading = true;
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
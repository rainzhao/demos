import './index.scss'

new Vue({
  el: '#app',
  data: {
    hideAppAsideOnDesktop: false,
    showAppAsideOnMobile: false
  },
  methods: {
    toggleAppAside: function(value) {
      if (value !== undefined) {
        this.hideAppAsideOnDesktop = this.showAppAsideOnMobile = !!value;
        return;
      }
      this.hideAppAsideOnDesktop = !this.hideAppAsideOnDesktop;
      this.showAppAsideOnMobile = !this.showAppAsideOnMobile;
    }
  },
  computed: {
    iframeSrc: function () {
      return location.origin + location.pathname + 'home' + '/';
    }
  }
});
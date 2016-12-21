import {isEmpty} from "../../../service/util";
import Vue from 'vue'

const treeBus = new Vue();

Vue.component('tree-nodes', {
  template: require('./tree-nodes.html'),
  props: {
    nodes: Array
  },
  computed: {

  },
  methods: {
    add: function() {
      treeBus.$emit('add')
    },
    update: function(node) {
    },
    remove: function(node) {
    }
  }
});

export default {
  template: `
    <div>
      <tree-nodes :nodes="data"/>
    </div>
  `,
  props: {
    data: Array
  },

  created: function() {
    treeBus.$on('add', () => {
      this.$emit('add')
    })
  }

};
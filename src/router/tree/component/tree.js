import {isEmpty} from "../../../service/util";
import Vue from 'vue'

const treeBus = new Vue();

Vue.component('tree-nodes', {
  template: require('./tree-nodes.html'),
  props: {
    nodes: Array,
    parent: Object
  },
  computed: {

  },
  methods: {
    add: function() {
      treeBus.$emit('add', this.parent)
    },
    update: function(node) {
      treeBus.$emit('update', node, this.parent);
    },
    remove: function(node) {
      treeBus.$emit('remove', node, this.parent);
    }
  }
});

export default {
  template: `
    <div>
      <tree-nodes :nodes="nodes" :parent="root"/>
    </div>
  `,
  props: {
    data: Array
  },
  methods: {
    enhanceNode: function(node) {
      if (!node.children) return;
      node.children.map(subNode => {
        subNode.$parent = node;
        this.enhanceNode(subNode);
      })
    },
    flattenNode: function(node, flattenedData = []) {
      flattenedData.push(node);
      if (!node.children) return flattenedData;
      node.children.map(subNode => {
        this.flattenNode(subNode, flattenedData)
      });

      return flattenedData;

    }
  },
  computed: {
    root: function() {
      return {$root: true, children: this.data};
    },
    nodes: function() {
      this.enhanceNode(this.root);
      return this.data;
    },
    flattenedData: function() {
      return this.flattenNode(this.root);
    }
  },
  created: function() {
    treeBus.$on('add', (parent) => {
      this.$emit('add', parent);
    });
    treeBus.$on('update', (node, parent) => {
      this.$emit('update', node, parent);
    });
    treeBus.$on('remove', (node, parent) => {
      this.$emit('remove', node, parent);
    });
  }

};
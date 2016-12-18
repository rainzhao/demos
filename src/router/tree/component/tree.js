import {isEmpty} from "../../../service/util";
import Vue from 'vue'

const Tree = Vue.component('tree', {
  template: require('./tree.html'),
  props: ['data', 'parent'],
  computed: {
    items: function() {
      let {data, parent} = this;
      return data.filter(item => {
        if (isEmpty(parent)) {
          return isEmpty(item.parentId);
        }
        return item.parentId === parent.id;
      })
    }
  },
});

export default Tree;
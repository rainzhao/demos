import './component/tree'
import tree from './component/tree'

const DATA = [
  {
    id: 1,
    name: 1,
    children: [
      {
        id: 11,
        name: 11
      }
    ]
  },
  {
    id: 2,
    name: 2
  }
];

export default {
  template: `
    <div>
      <tree :data="data" @add="addTreeNode"/>
    </div>
  `,
  data: function() {
    return {
      data: DATA
    }
  },
  methods: {
    addTreeNode: function() {
      console.log('add tree node');
    }
  },
  components: {
    tree
  }
}

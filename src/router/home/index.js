const data = [
  {
    id: 1
  },
  {
    id: 2
  }
];

const foo = {
  template: `
  <div>
    <ul>
      <li v-for="item in data" @click="updateItem(item)">
      {{item.id}}
      </li>  
    </ul>
    {{data | json}}
  </div>`,
  props: {
    data: Array
  },
  data: function() {
    return {

    };
  },
  methods: {
    updateItem: function (item) {
      item.id++;
    }
  },
  computed: {

  },

  filters: {
    json: function(val) {
      return JSON.stringify(val)
    }
  }
};

export default {
  template: `<div>
    <foo :data="data"></foo>
  </div>`,
  data: function() {
    return {
      data
    }
  },
  components: {
    foo
  }
}
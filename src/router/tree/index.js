import './component/tree'

const data = [
  {
    id: 1,
    name: 'lv1: 1'
  },
  {
    id: 2,
    name: 'lv1: 2'
  },
  {
    id: 11,
    parentId: 1,
    name: 'lv2: 11'
  },
  {
    id: 12,
    parentId: 1,
    name: 'lv2: 12'
  },
  {
    parentId: 2,
    id: 21,
    name: 'lv2: 21'
  },
  {
    id: 111,
    parentId: 11,
    name: 'lv3: 111'
  }
];

export default {
  template: `<div>
    <tree :data="data" />
  </div>`,
  data: () => ({
    data
  })
}
import moment from 'moment'

export default () => {
  document.body.innerHTML = `<p>hello world!</p>`;
  console.log(moment().format('YYYY-MM-DD hh:mm:ss'))
}
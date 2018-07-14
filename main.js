var app = new Vue({
  el: '#app',
  data: {
    message: {
      value: 'Hello Vue.js!'
    },
    list: ['りんご', 'バナナ', 'いちご'],
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    radius: 50
  },
  methods: {
    increment: function() {
      this.count += 1
    }
  }
})

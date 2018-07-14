var app = new Vue({
  el: '#app',
  data: {
    message: {
      value: 'Hello Vue.js!'
    },
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightpink'
    },
    list: ['りんご', 'バナナ', 'いちご'],
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    radius: 50,
    ok: false
  },
  methods: {
    increment: function() {
      this.count += 1
    }
  }
})

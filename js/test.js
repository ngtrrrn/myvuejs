new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!', 
    number: 3, 
    ok : false,
    html: "<h1>h1です</h1>",
    url: "http://google.com/",
    urlTwitter: "http://twitter.com/",
    attribute: 'href',
    twitterObject : {
      href: 'https://twitter.com/',
      id: 31
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    sayHi: function () {
      return this.message;
    }
  }
})

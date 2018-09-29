var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(data) {
// console.log(Object);
  // App.fetch = Object => 
    // for (var i of windows.data) {
      //console.log("hello")
    for (var i = 0; i < 20; i++) {
      this.$chats.append(MessageView.render(data.results[i]));
    }
    // }

  },
  
  renderMessage: function(message) {
    var messageEsc = _.escape(message);
    this.$chats.append(MessageView.render(messageEsc));
  }
}
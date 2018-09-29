var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
// on click 
  },

  render: function(data) {

    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].username && data.results[i].text && data.results[i].roomname) {
        this.$chats.append(MessageView.render(data.results[i]));
      }
    }
  },
  
  renderMessage: function(message) {
    var messageEsc = _.escape(message);
    this.$chats.append(MessageView.render(messageEsc));
  }
}
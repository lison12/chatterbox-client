var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('#refresh'),
  $select: $('#rooms select'),

  initialize: function() {
    // on click 
    // console.log(data)
    this.$refresh.on('click', () => {
    this.$chats.empty();
    this.$select.empty();
    App.startSpinner();
    App.fetch(App.stopSpinner);
    })
  },

  render: function(data) {

    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].username && data.results[i].text && data.results[i].roomname) {
        this.$chats.append(MessageView.render(data.results[i]));
      }
    }
    this.$chats.find('.username').click(() => Friends.toggleStatus(data.results[i].username))
  },
  
  renderMessage: function(message) {
    var messageEsc = _.escape(message);
    this.$chats.append(MessageView.render(messageEsc));
  }
}
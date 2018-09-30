var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $chats: $('#chats'),

  initialize: function(data) {
    RoomsView.$select.on('change', () => {
      this.$chats.empty();
      RoomsView.roomMessages(data);
    })
    // on('click', () => {
    // App.startSpinner();
    // App.fetch(App.stopSpinner);
    // })
  },
  
  render: function(data) {
    //renderRoom('string');
// debugger
    var roomArray = []

    for (var i = 0; i < data.results.length; i++) {
      //console.log(data.results[i].roomname)
      if (data.results[i].roomname) {
        roomArray.push(data.results[i].roomname);
      }
    }
    roomArray = _.uniq(roomArray);
    for (var i = 0; i < roomArray.length; i++) {
      this.$select.append(this.renderRoom(roomArray[i]));  //data.results[i].roomname
    }
    // roomArray = _.escape(roomArray);
    // console.log(roomArray)
  },

  renderRoom: function(string) {
    
    //console.log(this.$select.append('<option value="string"> string </option>'));
    this.$select.append(`<option value="string">${string}</option>`);
  },

  roomMessages: function(data) {
    // this.$chats.empty();
  
    // console.log(this.$select.find(':selected').text());
      var room = this.$select.find(':selected').text()
      console.log(room);
      // for (var key in data.result) {
      //   console.log(key)
      // }

    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].roomname === room && data.results[i].username && data.results[i].text) {
        this.$chats.append(MessageView.render(data.results[i]));
      }
      // if (data.results[i].roomname === $('select').text() && data.results[i].username && data.results[i].text) {
      //   this.$chats.append(MessageView.render(data.results[i]));
      // }
    }
  }

};

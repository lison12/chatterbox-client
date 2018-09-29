var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  render: function(data) {
    //renderRoom('string');
// debugger
    for (var i = 0; i < 10; i++) {
      //console.log(data.results[i].roomname)
      // if (data.results[i].roomname) {
      //   $('#rooms select').append(this.renderRoom(data.results[i].roomname));  //data.results[i].roomname
      // }
    }
  },

  renderRoom: function(string) {
    
    console.log(this.$select.append('<option value="string"> string </option>'));
    $select.append(`<option value="string">${string}</option>`);
  }

};

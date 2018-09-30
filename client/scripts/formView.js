var FormView = {

  $form: $('form'),
  $select: $('#rooms select'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(FormView.$select.find(':selected').text());
    
    var inputText = $("#message").val()         //Document.getElementById.("message").value
    var message = {
      username: App.username,
      text: inputText,
      roomname: FormView.$select.find(':selected').text() //'Lobby'
    }
    Parse.create(message);
    //messagesView.render()
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
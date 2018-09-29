var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // $( "submit" ).click(function() {
    //   $( "submit" ).submit();
    // });
    // var message = { 
    //  username: 
    //  text: 
    // }
    // console.log('click!');
    var message = {
      username: App.username,
      text: $( "message" ).get( )    //'Hola Senor' 
    }
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
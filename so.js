

// <script type='text/javascript'>
// For simplicity, we're using jQuery for some things
  // However, the library has no jQuery dependency
//$(function(){
// Initialize library
SE.init({ 
    // Parameters obtained by registering an app, these are specific to the SE
      // documentation site
    clientId: 1, 
    key: 'U4DMV*8nvpm3EOpvf69Rxw((', 
    // Used for cross domain communication, it will be validated
    channelUrl: 'https://api.stackexchange.com/docs/proxy',
    // Called when all initialization is finished
    complete: function(data) { 
        $('#login-button')
            .removeAttr('disabled')
            .text('Run Example With Version '+data.version); 
    }
});

// Attach click handler to login button
$('#login-button').click(function() {

    // Make the authentication call, note that being in an onclick handler
      // is important; most browsers will hide windows opened without a
      // 'click blessing'
    SE.authenticate({
        success: function(data) { 
            alert(
                'User Authorized with account id = ' + 
                data.networkUsers[0].account_id + ', got access token = ' + 
                data.accessToken
            ); 
        },
        error: function(data) { 
            alert('An error occurred:\n' + data.errorName + '\n' + data.errorMessage); 
        },
        networkUsers: true
    });
});
});
// </script>


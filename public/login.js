$(function(){
    console.log('Login screen loaded.');
    let username = $('#username');
    let password = $('#password');
    let login_button = $('#login-button');
    login_button.click(function(){
        console.log('Button clicked.');
        console.log(username.val());
        obj = {
            name : username.val(),
            pass : password.val()
        }
        // POST to server
        $.post(
            '/api/students/login',
            obj,
            function(data){
                console.log(data);
                if(data=='Success'){
                    window.location.href = 'stats.html';
                }else{
                    window.location.href = 'index.html';
                }
            }
        )
    });
});
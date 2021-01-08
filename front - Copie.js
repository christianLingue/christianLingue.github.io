const signupLink = document.querySelector('#signupLink'),
      loginForm = document.querySelector('#login');


/* document.addEventListener('DOMContentLoaded', function(){
    let bloc = document.createElement('div');
    
    bloc.id = 'gif-bloc';
    bloc.innerHTML = ` 
                    `
});
 */
signupLink.addEventListener('click', function(e){
    e.preventDefault();
    const formSignUp = document.querySelector('.signupContainer');
    loginForm.style.display = "none";
    formSignUp.style.display = "inherit";
});
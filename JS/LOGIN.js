//sign-in signup selector
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const introBtn = document.getElementById("intro");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

//entering value
var username = document.getElementById("Username");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var pVer = document.getElementById("pVer");

var usernameErr = document.getElementById("username-err"); 
var emailErr = document.getElementById("email-err");
var passErr = document.getElementById("pass-err");
var pVErr = document.getElementById("pVer-err");

username.addEventListener('blur',function(e){
   var pattern = /^[\w]{1,9}$/;
   var currentValue = e.target.value;
   var valid = pattern.test(currentValue);
   if(currentValue === ""){usernameErr.style.display = 'none';}
   else if(valid){usernameErr.style.display = 'none';}
   else{usernameErr.style.display = 'block';}
})

email.addEventListener('blur',function(e){
	var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var currentValue = e.target.value;
	var valid = pattern.test(currentValue);
	if(currentValue === ""){emailErr.style.display = 'none';}
	else if(valid){emailErr.style.display = 'none';}
	else{emailErr.style.display = 'block';}
   })

pass.addEventListener('input',function(e){
	var pattern = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
	var currentValue = e.target.value;
	var valid = pattern.test(currentValue);
	if(currentValue === ""){passErr.style.display = 'none';}
	else if(valid){passErr.style.display = 'none';}
	else{passErr.style.display = 'block';}
   })

pVer.addEventListener('input',function(e){
	var Pass = pass.value;
	var RePass = e.target.value;
	if(RePass === ""){pVErr.style.display = 'none';}
	else if(Pass===RePass){pVErr.style.display = 'none';}
	else{pVErr.style.display = 'block';}
   })

//submit-signup
const signUP = document.getElementById("signUpSub")
signUP.addEventListener("click", () => {
	var ver = 0;
	if(/^[\w]{1,9}$/.test(username.value)){;}
	else{
		ver = 1;
		passErr.style.display = 'block';
        username.value = "";
	}
	
	if(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(pass.value)){;}
    else{
		ver = 1;
		passErr.style.display = 'block';
		pass.value = "";
	}

	if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){;}
	else{
		emailErr.style.display = 'block';
		email.value = "";
		ver = 1;
	}

	if(pass.value===pVer.value){;}
	else{
        ver = 1;
		pVErr.style.display = 'block';
		pVer.value = "";
	}

	if(ver===0){
		window.open('https://tarunsingh611.github.io/UnderConstruction/');
	}
	else{;}
});


//submit-signIn
var user = document.getElementById("UserEM").value;
var pass = document.getElementById("PassChk").value;
const signIN = document.getElementById("signInSub")
signIN.addEventListener("click", () => {

	if(user.localeCompare("tarun"))
	{if(pass.localeCompare("tarun000"))
	{window.open('https://tarunsingh611.github.io/UnderConstruction/');}
    else{alert("wrong Password")};}
    
	else if(user.localeCompare("gautam"))
	{if(pass.localeCompare("gautam111"))
	{window.open('https://tarunsingh611.github.io/UnderConstruction/');}
    else{alert("wrong Password")};}

	else if(user.localeCompare("yogi"))
	{if(pass.localeCompare("yogi222"))
	{window.open('https://tarunsingh611.github.io/UnderConstruction/');}
    else{alert("wrong Password")};}

	else{alert("enter a registered username")};}
)	


//Intro
var sound = document.getElementById("voice");
introBtn.addEventListener("click", () => {
	voice.style.display = 'block' ;
	introBtn.style.display = 'none' ;
});
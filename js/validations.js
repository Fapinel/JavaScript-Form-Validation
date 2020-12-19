        const form = document.getElementById('form');
        const username = document.getElementById('username');
    /** const name = document.getElementById("name").value; **/
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const cpassword = document.getElementById('cpassword');
        const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    const phoneValue = phone.value.trim();

   
    if (usernameValue === '' || emailValue === '' || passwordValue === '' || cpasswordValue === '' || phoneValue === '') {

        swal("Try again!", "There's something wrong", "warning");

    } else {
        swal("Good job!", "Registration successful", "success");
    }

   

	if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else if (usernameValue.length <= 2) {
		setErrorFor(username, 'Username min 3 char');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue !== cpasswordValue) {
		setErrorFor(password, 'Passwords does not match');
	}else{
        setSuccessFor(password);
    }
	
	if(cpasswordValue === '') {
		setErrorFor(cpassword, 'Confirm password cannot be blank');
	} else if(passwordValue !== cpasswordValue) {
		setErrorFor(cpassword, 'Passwords does not match');
	} else{
		setSuccessFor(cpassword);
    }
    
    if(phoneValue === '') {
        setErrorFor(phone, 'phone cannot be blank');
        /*
    } else if (phoneValue.length <= 8){
        setErrorFor(phone, 'phone number min 7 char');
        */
	} else {
        setSuccessFor(phone);
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

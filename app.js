const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// login button

const signinBtn= document.querySelector('.signinBtn');
const signupBtn= document.querySelector('.signupBtn');
const formBx= document.querySelector('.formBx');
const login= document.querySelector('#login');

signupBtn.onclick =function() {
	formBx.classList.add('active')
	login.classList.add('active')
}
signinBtn.onclick =function() {
	formBx.classList.remove('active')
	login.classList.remove('active')
}


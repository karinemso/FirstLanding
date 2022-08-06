const btnMobile = document.querySelector(".btnmobile")

btnMobile.addEventListener("click", openav)


function openav() {
	let navBar = document.querySelector(".nav")
	let main = document.querySelector(".corpo")
	navBar.classList.toggle("active")
	btnMobile.classList.toggle("active")
	main.classList.toggle("active")
}


let inputname = document.querySelector(".inputname")
let inputemail = document.querySelector(".inputemail")
let submit = document.querySelector(".submit")

submit.addEventListener('click', message)

function message(e) {
	e.preventDefault()
	let name = inputname.value.length
	let email = inputemail.value.length
	let client = inputname.value
	if ( name >= 1 & email >=1 ) {
		let message = document.querySelector(".message")

	message.innerHTML = `<h4>Sucesso! <br> Confira seu email, ${client}!</h4>`
		message.style.marginTop="10px"
		inputname.value = ""
		inputemail.value = ""
		submit.style.display="none"
	}
	
}

function getDistanceFromTheTop(element) {
	const id = element.getAttribute("href");
	return document.querySelector(id).offsetTop;
}


function scrollTo(event){
	event.preventDefault();
	const distanceFromTheTop = getDistanceFromTheTop(event.target);
	 smoothScrollTo(0, distanceFromTheTop);
	let navBar = document.querySelector(".nav")
	let main = document.querySelector(".corpo")
	 if(window.matchMedia("(max-width:570px)")) {
		navBar.classList.toggle("active")
		btnMobile.classList.toggle("active")
		main.classList.toggle("active")
	 }

	
}

const menulinks = document.querySelectorAll(".navlista a")
 menulinks.forEach((link) => {
 	link.addEventListener("click",scrollTo)

 })
console.log(menulinks)

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}
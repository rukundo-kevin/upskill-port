
let text = "Rukundo Kevin is A ", speed = 300, id = 1;
let txt =document.querySelector("#txt");
let bars =document.querySelector(('#bars'));
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-ul");

const label = document.querySelectorAll('.form-control label')

label.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
        .join('')
})


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  if(hamburger.childNodes[1].classList.contains('fa-bars')){
    hamburger.innerHTML = `
          <li id="hamburger" class="hamburger"> <i class="fa fa-times fa-2x"></i>  </li>
    `;
  }else{
    hamburger.innerHTML = `
    <li id="hamburger" class="hamburger"> <i class="fa fa-bars fa-2x"></i>  </li>
`; 
  }
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

document.addEventListener('scroll',function(){
	if(scrollY > 2 && scrollY < 1050){
		//console.log('a' + window.scrollY);
		document.querySelector('ul').classList.add('active');
	}

	else if(scrollY > 1120){
		console.log(window.scrollY);
		document.querySelector('ul').classList.add('nav_white');
	}
	else if(scrollY < 1100){
		document.querySelector('ul').classList.remove('active');
		document.querySelector('ul').classList.remove('nav_white');
	}
})

const labels = document.querySelectorAll('.form-item label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
        .join('')
})


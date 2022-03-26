const imgContainers = document.querySelectorAll('.img-container');
imgContainers.forEach(c=>{
	if(c.getAttribute('aria-overlay')){
		c.style.backgroundColor = c.getAttribute('aria-overlay');
		c.querySelector('img').style.opacity = '0.6';
	}
});

const buttons = document.querySelectorAll('.button');
buttons.forEach(b=>{
	if(b.getAttribute('aria-color')){
		b.style.color = b.getAttribute('aria-color');
		b.style.border = `1px solid ${b.getAttribute('aria-color')}`;
	}
});
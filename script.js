const input=document.querySelectorAll('.controls input');

function handleU(){

 const suffix=this.dataset.sizing || '';
 // console.log(this.name);
 document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}

input.forEach(input=>input.addEventListener('change',handleU));

input.forEach(input=>input.addEventListener('mousemove',handleU));

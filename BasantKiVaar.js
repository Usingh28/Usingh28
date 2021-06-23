const button = document.querySelector('#BTN')
 
button.addEventListener('click', function() {
 
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
  const NewColor =   `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = NewColor;
})

const btn = document.querySelector('#Reset')
btn.addEventListener('click', function(){
    document.body.style.backgroundColor = '#1d1d1d';
})

const BCTW = document.querySelectorAll(p)

document.BCTW

// const classBlack = document.querySelectorAll('.black')
// const btnw = document.querySelector('#white')
// btnw.addEventListener('click', function(){
//   document.body.style.backgroundColor = '#fafafa';
//   classBlack. = '#1d1d1d'
// })
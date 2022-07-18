
function burger(){
    const sail = document.querySelector('.burger-sail'),
    repair = document.querySelector('.burger-repair');
    guns = document.querySelector('.burger-guns'),
    team = document.querySelector('.burger-team'),
    underSail = sail.querySelectorAll('li'),
    underRepair = repair.querySelectorAll('li'),
    underGuns = guns.querySelectorAll('li'),
    underTeam = team.querySelectorAll('li'),
    centerMain = document.querySelector('.center-main');

    hide(underRepair); 
    hide(underGuns); 
    hide(underTeam); 
    hide(underSail); 

    sail.addEventListener('click', (e) => {
        const target = e.target;
        if(target){
            hide(underRepair); 
            hide(underGuns); 
            hide(underTeam); 
            show(underSail);
        } 
    });

    repair.addEventListener('click', (e) => {
        const target = e.target;
        if(target){
            hide(underSail); 
            hide(underGuns); 
            hide(underTeam); 
            show(underRepair);
        } 
    });

    guns.addEventListener('click', (e) => {
        const target = e.target;
        if(target){
            hide(underRepair); 
            hide(underTeam); 
            hide(underSail); 
            show(underGuns);
        } 
    });

    team.addEventListener('click', (e) => {
        const target = e.target;
        if(target){
            hide(underRepair); 
            hide(underGuns); 
            hide(underSail); 
            show(underTeam);
        } 
    });

    //  Function show and Hide Burger
    function show(item){
        item.forEach(item => item.style.display = 'block');
    }
    function hide(item){
        item.forEach(item => item.style.display = 'none');
    }
}
burger();





    // Slider

    const prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    sliderLine = document.querySelector('.slider-line'),
    img = document.querySelectorAll('.slider-line img'),
    container = document.querySelector('.slider'),
    indicators = document.createElement('ol'),
    btnStop = document.querySelector('.btnStop'),
    btnStart = document.querySelector('.btnStart');
    dots = [];

let offset = 0;


// Кнопки
  // Кнопка вправо
function btnArrowRigth(){ 
  next.addEventListener('click', () => {
      offset += 500;
      if(offset > 1500){
          offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
     
      if(sliderLine.style.left  == (0 + 'px')){
            show(0);
      }else if(sliderLine.style.left  == (-500 + 'px')){
            show(1);
      } else if( sliderLine.style.left  == (-1000 + 'px')){
            show(2);
      }else if(sliderLine.style.left == (-1500 + 'px')) {
            show(3);
      }
  });
}
btnArrowRigth();

  // Кнопка влево
function btnArrowLeft(){ 
  prev.addEventListener('click', () => {
      offset -= 500;
      if(offset < 0){
          offset = 1500;
      }
      sliderLine.style.left = -offset + 'px';

      if(sliderLine.style.left  == (0 + 'px')){
          show(0);
      }else if(sliderLine.style.left  == (-500 + 'px')){
          show(1);
      } else if( sliderLine.style.left  == (-1000 + 'px')){
          show(2);
      } else if(sliderLine.style.left == (-1500 + 'px')){
          show(3);
      }
  
  });
}
btnArrowLeft();

// Создание палочек, часть кода взял с Udemy
function createDots(){
  

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 20%;
      margin-left: 20%;
      margin-bottom: 7%;
      list-style: none;

  `;
  container.append(indicators);
  for(let i = 0; i < img.length; i++){
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 6px;
          margin-right: 3px;
          margin-left: 3px;
          cursor: pointer;
          background-color: #fff;
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          opacity: .5;
          transition: opacity .6s ease;
      `;
      if(i == 0){
          dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);
  }

}
createDots();


// // Нажатие на палочки, пробовал сократить код, но в голову ничего не пришло
function touchDots(){
  dots[0].addEventListener('click', () => {
      sliderLine.style.left = 0 + 'px';
      show(0);
      offset = 0;
  });
  dots[1].addEventListener('click', () => {
      sliderLine.style.left = -500 + 'px';
      show(1);
      offset = 500;
  });
  dots[2].addEventListener('click', () => {
      sliderLine.style.left = -1000 + 'px';
      show(2);
      offset = 1000;
  });
  dots[3].addEventListener('click', () => {
      sliderLine.style.left = -1500 + 'px';
      show(3);
      offset = 1500;
  });
}
touchDots();


  
// // Изменение фона палочек 
function show(n){
  dots.forEach(dot => dot.style.opacity = '0.5');
  dots[n].style.opacity = 1;
  return n;
}




// Стоп и старт

function nextSlider() {
      offset += 500;
      if(offset > 1500){
          offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
     
      if(sliderLine.style.left  == (0 + 'px')){
            show(0);
      }else if(sliderLine.style.left  == (-500 + 'px')){
            show(1);
      } else if( sliderLine.style.left  == (-1000 + 'px')){
            show(2);
      }else if(sliderLine.style.left == (-1500 + 'px')) {
            show(3);
      }
}

let intervalSlider;
btnStart.addEventListener('click', () => {
  intervalSlider = setInterval(nextSlider, 2000);
});
btnStop.addEventListener('click', () => {
  clearTimeout(intervalSlider);
});


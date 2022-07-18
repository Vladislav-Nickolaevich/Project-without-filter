   // Burger__________________________________________
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




// / Карточки кораблей________________________________
function classCard(){
    class Ship{
        constructor(img, alt, fregat, clas, guns, frame, team, hold, speed, mobility, imgClass){
             this.img = img;
             this.alt = alt;
             this.fregat = fregat;
             this.clas = clas;
             this.guns = guns;
             this.frame = frame;
             this.team = team;
             this.hold = hold;
             this.speed = speed;
             this.mobility = mobility;
             this.imgClass = imgClass;
        }
        creat(){
            const centralPart = document.querySelector('.card-container');
            const div = document.createElement('div');
            div.classList.add(`card`);
            div.innerHTML += `
                            <div class="close">&times;</div>
                            <img class=${this.imgClass}  src=${this.img} alt=${this.alt}>
                            <p class="card-dscr">Фрегат "${this.fregat}"</p>
                            <p class="card-dscr">Класс: ${this.clas}</p>
                            <p class="card-dscr">Пушки: <span class="guns-card-filter">${this.guns} </span>шт</p>
                            <p class="card-dscr">Корпус: ${this.frame} шт</p>
                            <p class="card-dscr">Команда: <span class="team-card-filter">${this.team}</span> чел.</p>
                            <p class="card-dscr">Трюм: ${this.hold}</p>
                            <p class="card-dscr">Скорость: ${this.speed} узлов</p>
                            <p class="card-dscr">Маневренность: ${this.mobility}</p>
                        
            `;
            centralPart.append(div);
        }
    }
    const firstShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        10,
        218,
        189,
        2800,
        14.5,
        5.5,
        'img-first'
        ).creat();
    
    const secondShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        20,
        248,
        100,
        26000,
        12.5,
        5,
        'img-second'
        ).creat();
    const thirdShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        25,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    const fourthShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        30,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    const fivethdShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        40,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    const sixthdShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        45,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    const seventhShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        70,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    const eigththdShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        75,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    const ninethdShip = new Ship( 
        "img/ship.png",
        "Упс",
        "Морской Волк",
        4,
        40,
        258,
        120,
        23500,
        12.5,
        5.6,
        'img-thirt'
        ).creat();
    
}
classCard();


// Filter____________________________________________

const cards = document.querySelectorAll('.card');

const inputLowGuns = document.querySelector('.low-guns'),
      inputHighGuns = document.querySelector('.high-guns'),
      inputLowPeople = document.querySelector('.low-peolpe'),
      inputHigPeople = document.querySelector('.high-peolpe'),
      cardFirstOnTheFirstPage = document.querySelector('.card.first'),
      cardSecondOnTheFirstPage = document.querySelector('.card.second'),
      cardThirtOnTheFirstPage = document.querySelector('.card.thirt');

// Значения внутри карточек
const teamCardsNumber = document.querySelectorAll('.team-card-filter'),
      gunsCardChange = document.querySelectorAll('.guns-card-filter');
let arr = [];
gunsCardChange.forEach(item => arr.push(+item.innerHTML))

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }

// let filter = filterRange(arr, inputLowGuns.addEventListener('input', () => {
//     return +inputLowGuns.value;
// }), 70)
// console.log(filter)



// console.log(inputLowGuns.value)








// inputLowGuns.addEventListener('input', (e) => {
//     gunsCardChange.forEach(item => {
        
//         if(Number(item.innerHTML) <= Number(inputLowGuns.value)){
            
//             item.parentElement.parentElement.style.display = 'none'

//         } else {
//             item.parentElement.parentElement.style.display = 'block'

//         }
//     });

// });

// inputHighGuns.addEventListener('input', (e) => {
//     gunsCardChange.forEach(item => {
        
//         if(Number(item.innerHTML) >= Number(inputHighGuns.value)){
            
//             item.parentElement.parentElement.style.display = 'none'

//         } else {
//             item.parentElement.parentElement.style.display = 'block'

//         }
//     });

// });






// Modal____________________________________________



cards.forEach(item => item.addEventListener('click', func));

function func(e){
    activeCards('none', '200px');
    btnCloseAdd(e.currentTarget);
}

function activeCards(value, margin){
    cards.forEach(item => {
        item.style.display = value;
        document.querySelector('.central-part').style.marginLeft = margin;
        item.childNodes[1].classList.remove('show');
    });
}

function btnCloseAdd(card){
    const btnClose = card.childNodes[1];
    card.style.display = 'block';
    btnClose.classList.add('show');

    btnClose.addEventListener('click', (e) => {
        e.stopPropagation();
        activeCards('block', '0px');
    });
}


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








// Second Page_______________________________________
const cardsShip = document.querySelectorAll('.card'),
      cardSec = document.querySelector('.card-second-page'),
      aboutCap = document.querySelector('.about'),
      formSecPage = document.querySelector('.form');

// Form sent_______________________________________

const formMain = document.querySelector('form');
    
function getForm(e){
    e.preventDefault();
    const nameForm = formMain.querySelector('#name'),
          amountForm = formMain.querySelector('#amount'),
          classForm = formMain.querySelector('#class'),
          priceForm = formMain.querySelector('#price');

     const  value ={
            name: nameForm.value,
            class: classForm.value,
            price: priceForm.value,
            amount: amountForm.value,
        };
        console.log(value);
        e.target.reset();
}
formMain.addEventListener('submit', getForm);





// Weather____________________________________________


const urlResponse = 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=hWfHpLg4xMevjAzG0kz1nsknGcod7WD7';

function get(url){
    return fetch(url);
}

get(urlResponse)
    .then(response => response.json())
    .then(data => getWeather(data));



function getWeather(mainData){
    const day = mainData.data.timelines[0].intervals;
    const now = new Date().getHours();
    let dayDataOne;
    let dayDataTwo;
    let dayDataThree;
    let dayOneTemperature;
    let dayTwoTemperature;
    let dayThreeTemperature;



    // Morning
    function setMorning(){
        // Data Morning
             dayDataOne = (day[0].startTime).slice(0, 10);
             dayDataTwo = (day[24].startTime).slice(0, 10);
             dayDataThree = (day[48].startTime).slice(0, 10);
        // Temperature Morning
             dayOneTemperature = day[0].values.temperature;
             dayTwoTemperature = day[24].values.temperature;
             dayThreeTemperature= day[48].values.temperature;
    
            setOnTheWindow();
            // document.querySelector('.data-one').append(dayDataOne);
    }
    
    // Dinner
    function setDinner(){
        // Data Dinner
             dayDataOne = (day[4].startTime).slice(0, 10);
             dayDataTwo = (day[28].startTime).slice(0, 10);
             dayDataThree = (day[52].startTime).slice(0, 10);
        // Temperature Dinner
           dayOneTemperature = day[4].values.temperature;
             dayTwoTemperature = day[28].values.temperature;
             dayThreeTemperature = day[52].values.temperature;
    
            setOnTheWindow();
    }
    
    // Evening
    function setEvening(){
        // Data Evening
             dayDataOne = (day[10].startTime).slice(0, 10);
             dayDataTwo = (day[34].startTime).slice(0, 10);
             dayDataThree = (day[58].startTime).slice(0, 10);
        // Temperature Evening
             dayOneTemperature = day[10].values.temperature;
             dayTwoTemperature = day[34].values.temperature;
             dayThreeTemperature = day[58].values.temperature;
    
            setOnTheWindow();
    }

    function setOnTheWindow(){
        document.querySelector('.data-one').append(dayDataOne);
        document.querySelector('.degree-one').append(String(dayOneTemperature + 15).slice(1) + ' ℃');

        document.querySelector('.data-two').append(dayDataTwo);
        document.querySelector('.degree-two').append(String(dayTwoTemperature + 15).slice(1) + ' ℃');

        document.querySelector('.data-three').append(dayDataThree);
        document.querySelector('.degree-three').append(String(dayThreeTemperature + 15).slice(1) + ' ℃');
    }

    if(now <= 13 && now >= 0){
        setMorning();
    } else if(now >= 14  && now <= 19){
        setDinner();
    } else if(now >= 20 && now <= 24){
        setEvening();
    }
}

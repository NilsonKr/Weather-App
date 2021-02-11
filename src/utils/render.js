/* Render the card of the weather */


const appMount = document.querySelector('#app')
const iconUrl = `http://openweathermap.org/img/w/`

const date = new Date()
const backCard = () => {
    const id = Math.floor(Math.random() * (4 - 1) + 1)
    switch(id){
        case 1 : 
            return 'card-back1'
            break;
        case 2 : 
            return 'card-back2'
            break;
        case 3 : 
            return 'card-back3'
    }
} 
const convertUnits = (data) => {
    const farenheit = (data  * 9/5) + 32
    const kelvin = data + 273.15
   
    return [farenheit.toFixed(1), kelvin.toFixed(1)]
}


function render(data){
    const units = convertUnits(data.main.temp)
    const cardContainer = document.createElement('div')
    const weather = document.createElement('div')
    const grades = document.createElement('div')
    weather.className = 'Weather'
    grades.className = 'grades-container animate__animated animate__backInLeft '


    const gradesView = `
    <div class="grades"><h3>${data.main.temp} <span>°C</span></h3></div>
    <div class="grades"><h3>${units[0]} <span>°F</span></h3></div>
    <div class="grades"><h3>${units[1]} <span>°K</span></h3></div>
    `
    const view = `
            <div class="card-main ">
                <div class="card-info">
                    <h2 class="card-country">${data.name}</h2>
                    <p>${data.weather[0].main}<p/>
                    <img src="${iconUrl}${data.weather[0].icon}.png" alt= ${data.weather[0].main}/>
                </div>
            </div>
            <div class="card-details">
                <h4>Date: ${date.toLocaleString()}</h4>
            </div>
    `

    grades.innerHTML = gradesView
    cardContainer.innerHTML = view


    weather.append(cardContainer, grades)
    appMount.appendChild(weather)

    cardContainer.className = `card-container animate__animated animate__backInLeft ${backCard()}`
}

export default render
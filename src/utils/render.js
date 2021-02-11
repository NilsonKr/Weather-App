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



function render(data){
    const cardContainer = document.createElement('div')
    const view = `
            <div class="card-main ">
                <div class="card-info">
                    <h2>${data.main.temp}<span class="card-grades">°C</span></h2>
                    <p>${data.weather[0].main}<p/>
                </div>
                <h2 class="card-country">${data.name}</h2>
            </div>
            <div class="card-details">
                <div class="card-date">
                    <h4>Date: ${date.toLocaleString()}</h4>
                    <img src="${iconUrl}${data.weather[0].icon}.png" alt= ${data.weather[0].main}/>
                </div>
            </div>
    `
    cardContainer.innerHTML = view
    appMount.appendChild(cardContainer)
    cardContainer.className = `card-container animate__animated animate__backInLeft ${backCard()}`
}

export default render
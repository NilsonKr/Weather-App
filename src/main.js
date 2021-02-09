import validate from './utils/validate.js'
import fetchData from './utils/fetchData.js'
import render from './utils/render.js'

const inputCity = document.querySelector('#input-city')
const form = document.querySelector('#weather-form')
const submit = document.querySelector('#city-submit')


const handleSubmit = async ev => {
    submit.classList.add('animate__headShake')
    ev.preventDefault()
    const city = validate(inputCity.value)
    const response = await fetchData(city)
    render(response)

    submit.classList.remove('animate__headShake')
}



form.addEventListener('submit', handleSubmit)
submit.addEventListener('click', handleSubmit)


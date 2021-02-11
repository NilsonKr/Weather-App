/* The function that make the request to the api */


const fetchData = async city => {
    const secondWork = city.length > 1 ? `%20${city[1]}` : ''
    const urlApi = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city[0]}${secondWork}&lat=0&lon=0&units=metric&mode=xml%2C%20html`
    try {
        const data = await fetch(urlApi, {
            method: "GET",
            headers: {
            "x-rapidapi-key": "c2168baef0msh6ec3a4ac34e7fa3p1d5043jsn5f4c160daec8",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
       }}) 
       const response = await data.json()
       return response

    } catch (err) {
       console.error(err) 
    }
}

export default fetchData 
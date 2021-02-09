// Validate the data come from the input
function validate(data){
    let city = data.toLocaleLowerCase()
    
    if(city === 'south korea' ){
        city = 'korea'
    }

    city = city.split(' ')

    return city
}


export default validate
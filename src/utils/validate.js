// Validate the data come from the input
function validate(data){
    let city = data.toLocaleLowerCase()
    
    if(city === 'south korea' ){
        city = 'korea'
    }else if(city === 'nueva york'){
        city = 'new york'
    }

    city = city.split(' ')

    return city
}


export default validate
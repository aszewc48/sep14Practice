const axios = require('axios')

class CountryService{
    constructor(){
        this.myAxios = axios.create({
            baseURL: 'https://restcountries.com/v3.1/name/'
        })
    }
getCountry(countryName){
    return this.myAxios.get(countryName)
}

getAllCountries(){
    return this.myAxios.get('all')
}
}


module.exports = CountryService
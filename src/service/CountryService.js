export class CountryService {
    getCountry() {
       return fetch('https://restcountries.com/v3.1/all')
                .then((res) => res.json() )
                .then((d) =>d)
                .catch(error => console.error('Error:', error));
    }
}
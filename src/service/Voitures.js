export class CarsService {
    getCars() {
        return fetch('https://api.github.com/user', {heeader: {'Cache-Control':'no-cache'}})
                .then((res) => res.json())
                .then((d) => {
                    console.log(d);
                })
    }
}
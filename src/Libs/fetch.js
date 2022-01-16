import { dataTicket } from '../Store/index.js'

export function Fetch() {
    let url = "https://ico-fullstack-test.herokuapp.com/v1/histograma"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dataTicket.set(data)
        })
        .catch(error => {
            console.log(error)
            return []
        })
}

const url = 'https://dummyjson.com/quotes/random'
const quote = document.querySelector('.quote')
const refresh = document.querySelector('button')

let getStarterQuote = async() => {
    const starterQuote = await fetch(url)
    const starterQuoteData = await starterQuote.json()
    return starterQuoteData
}

console.log(getStarterQuote())
quote.innerText  
getStarterQuote().then((data) => quote.innerText = data.quote )
refresh.addEventListener('click', () => {
    window.parent.location = window.parent.location.href;
})
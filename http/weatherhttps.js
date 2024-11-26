let butt = document.querySelector(".press")
let inputPlace = document.querySelector(".input_secondpart")

butt.addEventListener("click", function(){
    let newInputPlace = inputPlace.value
    let API_KEY = "bf575db60333758cd1c8a7e2974b829a"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newInputPlace}&appid=${API_KEY}`, {
        method: "GET"
    })

    .then(Response => {
        if(!Response.ok){
            console.log("no.")
        } return Response.json()
    })

    .then(data => {
        console.log(data)
        let temp = Math.round(data.main.temp - 273.15)
        let temp2 = `${temp}°C`
        let weather = document.querySelector(".second_part")
        let p = document.createElement("p")
        p.textContent =  temp2
        weather.append(p)
        p.className = "temp"
        let a = document.createElement("p")
        let state = data.sys.country 
        a.textContent = state
        weather.append(a)
        a.className = "country"
    })

    .catch(Error => {
        console.log(Error)
    })
})



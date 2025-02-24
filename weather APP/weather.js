
// Search Function is created for search the city
const search = async () => {
    let cityName = document.getElementById("IN").value
    let key = "8d009d2be8306a3dbbeb2f9e8b5c412f"

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)

    let res = await data.json()
    // console.log(res);
    display(res);
}

// Disply Function is created for Display the value
function display(data) {
    let box3 = document.getElementById("box3")   // it take the user input
    box3.innerHTML = ""
    console.log(data);

    let tempCel = data.main.temp - 273.15;
    let T = tempCel.toFixed(1)     // to fixed is use for fixed the value like 4.5555 to 4 or 4.5 or 4.55

    let H = data.main.humidity
    let P = data.main.pressure
    let W = data.wind.speed
    let C = data.weather.description

    //Dynamically created elements
    let hum = document.createElement('p')
    let prss = document.createElement('p')
    let windS = document.createElement('p')
    let cityElm = document.createElement("p")
    let tempElm = document.createElement("p")
    let Wea = document.createElement("p")

    // take the values
    cityElm.innerText = `${data.name}`
    tempElm.innerText = `Temp: ${T}°C`
    hum.innerText = `Humidity: ${H} %`
    prss.innerText = `Pressure: ${P}`
    windS.innerText = `Wind Speed: ${W} km/h`

    //to add the value is box3
    box3.appendChild(cityElm)
    box3.appendChild(tempElm)
    box3.appendChild(hum)
    box3.appendChild(prss)
    box3.appendChild(windS)
}
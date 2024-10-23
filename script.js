const place=document.getElementById("search");
const placeDisplay=document.getElementById("status")
const placeC=document.getElementById("tc")
const placeF=document.getElementById("tf")
const wind=document.getElementById("wind")
const showWind=document.getElementById("showPlace")
const image=document.getElementById("showImg")
const btn=document.getElementById("search-button")
const load=document.getElementById("loading")
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q="
let furl;

btn.onclick=()=>{
    load.style.display="inline"
    setTimeout(() => {
        setTimeout(() => {
            load.style.display="none"
        }, 1100);
    }, 1000);
    
    
    setTimeout(() => {
        getInfo()
    }, 2000);
    
    
    
}
const getInfo= async ()=>{
    try {
        const city =place.value.toLowerCase()
        furl = url+city
        const response = await fetch(furl, options);
        const result = await response.json();
        console.log(city)
        placeDisplay.innerText=result.location.name
        placeC.innerText="Temp: "+result.current.temp_c+" °C"
        placeF.innerText="Temp: "+result.current.temp_f+" °F"
        wind.innerText="Wind: "+result.current.wind_kph+" kmph"
        showWind.innerText=result.current.condition.text
        image.innerHTML=`<img src="${result.current.condition.icon}" height="30">`
    } catch (error) {
        placeDisplay.innerText="Unknown Place"
        placeC.innerText="Temp: "+"--"+" °C"
        placeF.innerText="Temp: "+"--"+" °F"
        wind.innerText="Wind: "+"--"+" kmph"
        showWind.innerText="---"
        image.innerHTML=`<img src="kjhdk" height="30">`
        
    }
    
}
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '75c84088e1mshf9539f1e2d0626ep1ffc03jsnd78b21ea46b0',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

/*get Api First
ApiKey: 0bb32717f46836eb0fad78c557614acd
Api: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
*/
var searchValue = document.querySelector('#searchCity');
searchValue.addEventListener('keypress',setFunc);

function setFunc(e){
    if(e.keyCode == 13){    //for enter
        //console.log("Hello");
        getData(searchValue.value);
    }
}

function getData(value){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=0bb32717f46836eb0fad78c557614acd`;
    fetch(url)
    .then(function (response){
        console.log(response);
        return response.json()
        
    })
    .then(function (weather) {
        console.log(weather);
        document.querySelector(`#city`).innerHTML = weather.city.name;
        document.querySelector(`#temp`).innerHTML = weather.list[0].main.temp; //map((e)=> e.main.temp) ;
    })
    .catch(function (err){
        console.log(err);
    });
}

/*
fetch('https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=0bb32717f46836eb0fad78c557614acd')
.then(response =>response.json())
.then(console.log)

for five days getting data in array = https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=fce439bb916a50fc7ec9b4f2d64d25a4

*/
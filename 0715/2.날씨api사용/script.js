const weatherName = document.querySelector('.name');
const weatherFeels = document.querySelector('.feels_like');
const weatherTemp = document.querySelector('.temp');
const weatherDesc = document.querySelector('.description');
const weatherImg = document.querySelector('img');


function connectGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log( `위도:${lat} 경도:${lon}`);
  const APIKEY = 'd27a9e2f1bb375d48b418505555c1639';
  const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
    .then( (response) => response.json())
    .then( data => {
     console.log(data);
     const name = data.name
     const temp = data.main.temp;
     const desc = data.weather[0].description;
     const icon = data.weather[0].icon;
     const feels = data.main.feels_like;

     weatherName.innerHTML = name;
     weatherFeels.innerHTML = `체감 : ${feels}`;
     weatherTemp.innerHTML = `기온 : ${temp}`;
     weatherDesc.innerHTML = `날씨 : ${desc}`;

     const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
     weatherImg.setAttribute('src', iconURL);
   })
}

function errorGeo() {
  alert('위치 정보 연결 실패')
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);


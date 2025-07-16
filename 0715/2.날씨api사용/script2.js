const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};
// select 이벤트는 change를 사용함

const selectBox = document.querySelector('select');
const weatherName = document.querySelector('.name');
const weatherFeels = document.querySelector('.feels_like');
const weatherTemp = document.querySelector('.temp');
const weatherDes = document.querySelector('.description');
const weatherImg = document.querySelector('img');
const weatherSunrise = document.querySelector('.sunrise');
const weatherSunset = document.querySelector('.sunset');


selectBox.addEventListener('change', () => {
  const country = selectBox.value;
  const lat = countryCoordinates[country].latitude;
  const lon = countryCoordinates[country].longitude;
  // console.log(`위도 : ${lat} 경도 : ${lon}`)
  const APIKEY = 'd27a9e2f1bb375d48b418505555c1639';
  const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
    .then( (response) => response.json())
    .then( data => {
      // console.log(data);
      const name = data.name;
      const feels = data.main.feels_like;
      const temp = data.main.temp;
      const des = data.weather[0].description;
      const icon = data.weather[0].icon;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleString();
      const sunset = new Date(data.sys.sunset * 1000).toLocaleString();
  
      weatherName.innerHTML = `도시 : ${name}`;
      weatherFeels.innerHTML = `체감 : ${feels}`;
      weatherTemp.innerHTML = `기온 : ${temp}`;
      weatherDes.innerHTML = `날씨 : ${des}`;
      weatherSunrise.innerHTML =`일출(한국 시간 기준) : ${sunrise}`;
      weatherSunset.innerHTML = `일몰(한국 시간 기준) : ${sunset}`;

      const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

      weatherImg.setAttribute('src', iconURL);

    })
    .catch( e => {
      alert('날씨 정보 가져오기 오류');
    })
})
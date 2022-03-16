const apiKey   = 'eho6InERLwKsAfEVhQjRDPxGyfz8UIqb';
const cityForm = document.querySelector('form');
const UI       = document.querySelector('.weather-card');

const setStatus = (msg) => {
    document.querySelector('.load-status').innerText = msg;
};

const getCityCode = async (cityName) =>{
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/BD/search';
    const param   = '?apikey='+apiKey+'&q='+cityName;
    const URL     = baseUrl+param;

    const response = await fetch(URL);
    if(response.status!=200){
        throw new Error('Failed to get city');
    }
    const city = await response.json();

    return city[0];
}

const getWeatherInfo = async (cityCode) => {
    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'+cityCode;
    const URL     = baseUrl+'?apikey='+apiKey;

    const response = await fetch(URL);
    if(response.status!=200){
        throw new Error('Failed to get current weather information');
    }
    const info = await response.json();

    return info[0];
}


const getData = async (city) => {
    const cityData    = await getCityCode(city);
    if(cityData == undefined || cityData == null){
        throw new Error('Invalid City!');
    }
    const weatherData = await getWeatherInfo(cityData.Key);

    const data = { cityData, weatherData };
    return data;
};

const showData = (data) => {
    const { cityData, weatherData } = data;
    const dayStatus = weatherData.IsDayTime ? 'Day Time' : 'Night Time';

    const template = `
    <div class="icon-div">
        <img src="icons/${weatherData.WeatherIcon}.svg" class="icon">
    </div>
    <div class="text-muted text-uppercase text-center">
      <h3 class="my-3">${cityData.EnglishName}</h3>
      <p class="day-status">${dayStatus}</p>
      <h5 class="my-3">${weatherData.WeatherText}</h5>
      <div class="display-4 my-4">
        <span>${weatherData.Temperature.Metric.Value}</span>
        <span>&deg;${weatherData.Temperature.Metric.Unit}</span>
      </div>
    </div>
    `;
    
    UI.innerHTML = template;
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    if(!(UI.classList.contains('d-none'))){
        UI.classList.add('d-none');
    }
    setStatus('Loading...');
    
    const city = e.target.city.value.trim().toLowerCase();
    cityForm.reset();

    if(city.length == 0){
        setStatus('City field is empty!');
    }
    else{
        getData(city)
        .then(data => {
            setStatus('');
            UI.classList.remove('d-none');
            showData(data);
        })
        .catch(err => {
            setStatus(err.message);
        });
    }
});

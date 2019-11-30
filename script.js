const apiKey = '55b1f1a90ec4ba7a85c3be2bdf579ede';
const temp = document.getElementById('temp');
const tempMin = document.getElementById('temp-min');
const tempMax = document.getElementById('temp-max');
const description = document.getElementById('description');

const getTodayData = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Leeds,GB&units=metric&appid=${apiKey}`, {
      mode: 'cors'
    });
    const fetchedData = await response.json();

    console.log(fetchedData);

    //send the data to be displayed
    displayToday(fetchedData);
  } catch (err) {
    console.log('TCL: getTodayData -> err', err);
  }
};

const displayToday = apiData => {
  //rounded to integer
  temp.textContent = `${Math.round(apiData.main.temp)} °C`;
  tempMin.textContent = `min: ${Math.round(apiData.main.temp_min)} °C`;
  tempMax.textContent = `max: ${Math.round(apiData.main.temp_max)} °C`;

  description.src = `http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`;
};

getTodayData();

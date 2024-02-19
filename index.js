function updateTime() {
    // São Paulo
    let saopauloElement = document.querySelector("#saopaulo");
    if (saopauloElement) {
    let saopauloDateElement = saopauloElement.querySelector(".date");
    let saopauloTimeElement = saopauloElement.querySelector(".time");
    let saopauloTime = moment().tz("America/Sao_Paulo");

    saopauloDateElement.innerHTML = saopauloTime.format("MMMM, Do YYYY");
    saopauloTimeElement.innerHTML = saopauloTime.format("H:mm:ss [<small>]A[</small>]"
    );
    }
    
   // Düsseldorf
   let dusseldorfElement = document.querySelector("#dusseldorf");
   if (dusseldorfElement) {
   let dusseldorfDateElement = dusseldorfElement.querySelector(".date");
   let dusseldorfTimeElement = dusseldorfElement.querySelector(".time");
   let dusseldorfTime = moment().tz("Europe/Berlin");

   dusseldorfDateElement.innerHTML = dusseldorfTime.format("MMMM, Do YYYY");
   dusseldorfTimeElement.innerHTML = dusseldorfTime.format("H:mm:ss [<small>]A[</small>]");
    }
    
    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM, Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("H:mm:ss [<small>]A[</small>]"
    );
    }
    
    // New York
    let newyorkElement = document.querySelector("#newyork");
    if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("MMMM	Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
    
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
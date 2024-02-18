function updateTime() {
    
    //Time New York//
    let newYorkElement = document.querySelector("#newyork");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM, Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("H:mm:ss [<small>]A[</small>]");
    
    //Time São Paulo//
    let saoPauloElement = document.querySelector("#saopaulo");
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloTime = moment().tz("America/Sao_Paulo");
    
    saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM, Do YYYY");
    saoPauloTimeElement.innerHTML = saoPauloTime.format("H:mm:ss [<small>]A[</small>]");

    
    //Time Porto//
    let portoElement = document.querySelector("#porto");
    let portoDateElement = portoElement.querySelector(".date");
    let portoTimeElement = portoElement.querySelector(".time");
    let portoTime = moment().tz("Portugal");
    
    portoDateElement.innerHTML = portoTime.format("MMMM, Do YYYY");
    portoTimeElement.innerHTML = portoTime.format("H:mm:ss [<small>]A[</small>]");

    //Time Düsseldorf//
   let dusseldorfElement = document.querySelector("#dusseldorf");
   let dusseldorfDateElement = dusseldorfElement.querySelector(".date");
   let dusseldorfTimeElement = dusseldorfElement.querySelector(".time");
   let dusseldorfTime = moment().tz("Europe/Berlin");

   dusseldorfDateElement.innerHTML = dusseldorfTime.format("MMMM, Do YYYY");
   dusseldorfTimeElement.innerHTML = dusseldorfTime.format("H:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

const apiKey ="c4786700e71249e38a073701230808";

async function showWeather()
{
   const cityInput = document.getElementById("Ix") ;
   const cityName  = cityInput.value ;

   try 
   {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes&units=metric`);

        // const response = await fetch('http://api.weatherapi.com/v1/current.json?key=c4786700e71249e38a073701230808&q=London&aqi=yes');

      const data = await response.json();

      if(data.error){ throw new Error(data.error.message || 'City not found'); }

      console.log(data); //Log the API response for debugging

      const cx = document.getElementById("cx");
      cx.innerHTML = 
      `
      <div class="W2" id="w2">
        <div class="XX">

         <div class="Nx" id="P1">
            
         </div>

        <div class="Nx">
         <div class="N_img"><img src="temperature.png" height="50px" width="50px"></div>
         <div class="N_inp col1" id="I1"></div>
        </div>

        <div class="Nx">
         <div class="N_img"><img src="humidity.jpg" height="50px" width="50px"></div>
         <div class="N_inp col2" id="I2"></div>
        </div>

       <div class="Nx">
         <div class="N_img"><img src="Weather.png" height="50px" width="50px"></div>
         <div class="N_inp col3" id="I3"></div>
       </div>

       <div class="Nx">
        <div class="N_img"><img src="Location.png" height="50px" width="50px"></div>
         <div class="N_inp col3" id="I4"></div>
       </div>

       </div>
      
      </div>
      `;

      document.getElementById("P1").innerHTML = `<p class="parg1">${data.location.name}</p>`;

      document.getElementById("I1").innerHTML =`<p>${data.current.temp_c}°C</p>`;
      document.getElementById("I2").innerHTML =`<p>${data.current.humidity}%</p>`;
      document.getElementById("I3").innerHTML = `<p>${data.current.condition.text}</p>`;
      document.getElementById("I4").innerHTML = `<p>${data.location.country}</p>`;

      cityInput.value = "";
   }

     catch(error)
     {
         alert("Error fetching weather data. Please try again.")
         console.error(error);
     }
}
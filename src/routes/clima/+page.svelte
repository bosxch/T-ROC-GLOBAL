<script>
    import { getWeatherFrom } from "../services/weather.js";
    import { onMount } from "svelte";
    import WeatherFooter from '../../components/weather_footer.svelte' 
    import WeatherIcon from "../../components/weather_icon.svelte";
    import { writable } from 'svelte/store';

    
    let weather = writable({});
    let city = ''


    const  onLocalStorage = async () => {
    localStorage.getItem("city") ? 
   weather = await getWeatherFrom(localStorage.getItem("city")) 
   :
    weather = await getWeatherFrom()
    }

onMount(async () => {
    await onLocalStorage()
    const interval = setInterval(await onLocalStorage(), 60000);
    return () => {
    clearInterval(interval);
    }
})


const handleSubmit = async (city) => {
 weather = await getWeatherFrom(city)
 if(weather.message) {
    alert('Ups... That place isn´t in the Weather API, try another!')
    weather = await getWeatherFrom()
 }
 localStorage.setItem("city", JSON.stringify(city));
}

</script>


<section>
    <form>
        <input 
        type="text" 
        maxlength="40" 
        placeholder="You´re city..." 
        name="city" 
        class="input"
        bind:value={city}
        />
        <button on:click={handleSubmit(city)} type="submit">Search</button>
    </form>
    {#if weather.locationName}
    {#if error}
        <h3 color='red'>{error}</h3>
    {/if}
<div class="time_state">
      <div class="cont_tyt">
        <h1 class="location_name">{weather.locationName}</h1>
        <WeatherIcon icon={weather.conditionIcon}/>
    </div>
    <h3 class="location_time">{weather.localTime.split(' ')[1]}hs</h3>
      <h2 class="temperature">{weather.temperature}°</h2>
      <WeatherFooter windSpeed = {weather.windSpeed} humidity= {weather.humidity} feelsLike = {weather.feelsLike}/>
    
  </div>
  {:else}
  <svg viewBox="25 25 50 50">
    <circle r="20" cy="50" cx="50"></circle>
  </svg>
{/if}
</section>

<style>
    section{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3vh;
    }
    .time_state{
        width: 400px;
        max-width: 100%;
        border: 1px solid #eee;
        display: flex;
        align-items: stretch;
        box-shadow: 0px 0px 25px  rgb(0, 0, 0.1);
        border-radius: 8px;
        margin-top: 5vh;
        flex-direction: column;
     
    }
    .location_name {
        font-weight: 300;
        color: #303030;
        text-transform: uppercase;
    }
    .temperature{
            display: flex;
        justify-content: center;
        font-weight: 300;
        font-size: 5rem;
        margin-top: -0.3vh;
    }
    .location_time{
        font-weight: 400;
        color: #206dac;
        padding-left: 4vh;
    }
    .cont_tyt{
        display: flex;
        width: 90%;
        justify-content: space-between;
        flex-direction: row;
        margin-left: 4vh;
    }
    .input {
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 1em;
    background-color: #ccc;
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    transition: 300ms ease-in-out;
    }

    .input:focus {
    background-color: white;
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
    }
    button {
  --key-text-color: #969faf;
  --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);
  --docsearch-key-gradient: linear-gradient(-225deg,#d5dbe4,#f8f8f8);
  border: none;
  background: var(--docsearch-key-gradient);
  border-radius: 3px;
  box-shadow: var(--docsearch-key-shadow);
  color: var(--key-text-color);
  height: 2.5em;
  text-align: center;
  padding: 0.6em;
  margin: 0 0.6em;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  min-width: 1em;
  line-height: 1em;
  user-select: none;
  cursor: pointer;
}
button:active{
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
    
}
svg {
 width: 3.25em;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
}

circle {
 fill: none;
 stroke: hsl(214, 97%, 59%);
 stroke-width: 2;
 stroke-dasharray: 1, 200;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}

@keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}

</style>
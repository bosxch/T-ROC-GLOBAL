<script>
    export let humidity  
    export let windSpeed
    export let feelsLike
</script>

<footer>
    <div>
        <span>
            {humidity}%
        </span>
        <strong>
            Humidity
        </strong>
    </div>
    <div>
        <span>
            {windSpeed}km/h
        </span>
        <strong>
            Wind speed
        </strong>
    </div>
    <div>
        <span>
            {feelsLike}°
        </span>
        <strong>
            Feels like
        </strong>
    </div>

</footer>

<style>
    footer{
        border: 1.5px solid black;
        margin: 5px 5px 5px 5px;
        padding: 12px 32px;
        border-radius: 16px;
        display: flex;
        text-align: center;
        justify-content: space-around;
    }
    span{
        display: block;
        color: #303030
    }
    strong{
        font-weight: 500;
        color: #101010;
        font-size: 17px;


    }
</style>


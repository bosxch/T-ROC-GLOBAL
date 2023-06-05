<script>
    let greeting = false
</script>

<div class="min_req_container">
<button class="min_req" on:click|self={() => greeting = !greeting}>Click me!</button>
{#if greeting ===  true}
    <h1 class="greeting">Hello World!</h1>
{/if}
</div>

<style>
    .min_req_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 30vh;
    }
    .min_req, .greeting{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        width: 300px;
        max-width: 100%;
        place-content: center;
    }
    .greeting{
        display: flex;
        justify-content: center;
        font-size: medium;
        translate: -50px 2s;
    }
    .min_req{
        font-size: medium;
        padding: 1.5vh;
        border: 1px solid black;
        transition: 0.5s ease;
        user-select: none;
        cursor: pointer;
    }
    
    .min_req:hover {
        color: #ffffff;
        background: #008cff;
        border: 1px solid #008cff;
        text-shadow: 0 0 5px #ffffff,
              0 0 10px #ffffff,
              0 0 20px #ffffff;
        box-shadow: 0 0 3px #008cff,
              0 0 10px #008cff,
              0 0 25px #008cff,
              0 0 50px #008cff;
}
    .min_req:active {
        background-color: #044a83;
        transition: 0.2s ease;
    }
</style>
<script>
    import  Header  from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header/>

<slot/>

<Footer/>

<style>
    :global(body) {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding: 0;
        margin: 0;
    } 
</style>
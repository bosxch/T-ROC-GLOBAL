<script>
    import { onMount } from 'svelte';
    import { getGenres } from '../services/game_genres.js';
    import { getFifaRank } from '../services/fifa_ranking.js';

  let loading = false
  
    onMount( async () => {
      const genresData = await getGenres();
      const getCarbobo = await getFifaRank()
      console.log(getCarbobo)
      import('echarts').then(echarts => {
        let chartDom_pie = document.getElementById('main_pie');
        let myChart_pie = echarts.init(chartDom_pie);
        let option_pie;
  
        option_pie = {
          title: {
            text: 'Popular genres in video games',
            subtext: 'RAWG API TOP 5 GENRES',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Belong to the genre',
              type: 'pie',
              radius: '50%',
              /*
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              */
             data : genresData.map(genre => ({ value: genre.value, name: genre.name })),
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
  
        option_pie && myChart_pie.setOption(option_pie);
        loading = true
      });
    });

    let chart_bar;

onMount( () => {
  import('echarts').then(echarts => {
    chart_bar = echarts.init(document.getElementById('main_bar'));

    const option_bar = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };

    option_bar && chart_bar.setOption(option_bar);
  });
});


  </script>

  <div class="graphic_container">
    <div id="main_pie"></div>
    <div id="main_bar"></div>
  </div>

<style>
    .graphic_container{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        margin-top: 8vh;
    }
    #main_pie, #main_bar {
        width: 600px; 
        height: 400px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    @media screen and (max-width: 600px) {
        .graphic_container{
        display: flex;
        padding: 2rem;
        flex-direction: column; 
        margin-bottom: 4vh;
        width: 300px;
        }
        #main_pie, #main_bar {
        margin-bottom: 10vh;
        font-size: 0.85rem;
        width: 100%;
        }
        }
</style>
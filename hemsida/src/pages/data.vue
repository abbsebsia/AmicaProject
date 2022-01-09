<template>
<q-page>
  <div>
  <canvas id="myChart">

  </canvas>
  </div>
</q-page>
  
</template>

<script>


export default {
  data(){
    return{

    }
  },
  methods:{
   chart(){
     const Chart = require('chart.js');  
     const ctx = document.getElementById('myChart');
     const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

   }
  },
  mounted(){
    this.chart()
  }
}
</script>

<style>
#myChart{
  background: rgb(212, 226, 212);
  height: 400px;
  width: 400px;
  position: absolute;
  left: 35%;
  top: 10%;
}
</style>
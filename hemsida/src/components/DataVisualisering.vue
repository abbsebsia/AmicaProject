<template>
  <div class="example">
    <h5>Totala utsläpp: {{ this.$store.state.totalCarbon }}g CO2</h5>
    <h5>
      Snitt per kilometer:
      {{
        Math.round(
          this.$store.state.totalCarbon / this.$store.state.totalDistance
        )
      }}g CO2/km
    </h5>
    <h5>
      Snitt per person:
      {{
        Math.round(
          this.$store.state.totalCarbon / this.$store.state.totalAnswers
        )
      }}g CO2/person
    </h5>
    <apexcharts
      width="98%"
      height="300px"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["bil", "tåg-buss", "buss", "cykel-gång"],
        },
      },
      series: [
        {
          name: "data",
          data: [
            this.$store.state.bil,
            this.$store.state.bussTrain,
            this.$store.state.buss,
            this.$store.state.cykel,
          ],
        },
      ],
    };
  },
  computed: {},
};
</script>

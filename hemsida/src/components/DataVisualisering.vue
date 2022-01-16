<template>
  <div class="example">
    <h5>Totala utsläpp: {{ Math.round(this.totalCarbon) }}g CO2</h5>
    <h5>
      Snitt per kilometer:
      {{ Math.round(this.totalCarbon / this.totalDistance) }}g CO2/km
    </h5>
    <h5>
      Snitt per person:
      {{ Math.round(this.totalCarbon / this.totalAnswers) }}g CO2/person
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
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  setup() {
    const $store = useStore();

    const bil = computed({
      get: () => $store.state.example.bil,
    });
    const buss = computed({
      get: () => $store.state.example.buss,
    });
    const bussTrain = computed({
      get: () => $store.state.example.bussTrain,
    });
    const cykel = computed({
      get: () => $store.state.example.cykel,
    });
    const totalAnswers = computed({
      get: () => $store.state.example.totalAnswers,
    });
    const totalCarbon = computed({
      get: () => $store.state.example.totalCarbon,
    });
    const totalDistance = computed({
      get: () => $store.state.example.totalDistance,
    });
    return {
      bil,
      buss,
      bussTrain,
      cykel,
      totalAnswers,
      totalCarbon,
      totalDistance,
    };
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
          data: [this.bil, this.bussTrain, this.buss, this.cykel],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div>
      <center>
        <h1>Konversi Bitcoin Ke Rupiah</h1>
        <h6>Kurs 1 USD = 14.000 IDR</h6>
        <input
          class="input form-control"
          type="number"
          v-model="bitcoin"
          @keyup="convert"
        />
        <h1 v-if="bitcoin !== ''">BTC {{ bitcoin }} = Rp {{ rupiah }}</h1>
      </center>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ConvertionRupiahBitcoin",
  data() {
    return {
      rupiah: "",
      bitcoin: "",
    };
  },
  methods: {
    async convert() {
      const response = await axios.get(`https://blockchain.info/ticker`);
      const usdPrice = response.data.USD.last;
      this.rupiah = usdPrice * this.bitcoin * 14000;
    },
  },
};
</script>

<style>
.container {
  font-family: arial, sans-serif;
  display: flex;
  justify-content: center;
  margin: 10 auto;
}

.input.form-control {
  min-width: 350px;
  margin-bottom: 10px;
  min-height: 20px;
  border: 1px solid rgb(224, 224, 224);
  background-color: white;
  border-radius: 6px;
  padding: 10px;
}
</style>

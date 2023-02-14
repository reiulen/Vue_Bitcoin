<template>
  <center>
    <h1>Harga Bitcoin Hari Ini</h1>
  </center>

  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Mata Uang</th>
          <th>Harga Beli Bitcoin</th>
          <th>Harga Jual Bitcoin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dollar Australia</td>
          <td>{{ data?.AUD?.buy ?? '' }}</td>
          <td>{{ data?.AUD?.sell ?? '' }}</td>
        </tr>
        <tr>
          <td>Euro Eropa</td>
          <td>{{ data?.EUR?.buy ?? '' }}</td>
          <td>{{ data?.EUR?.sell ?? '' }}</td>
        </tr>
        <tr>
          <td>Poundstreling Inggris</td>
          <td>{{ data?.GBP?.buy ?? '' }}</td>
          <td>{{ data?.GBP?.sell ?? '' }}</td>
        </tr>
        <tr>
          <td>Yun Jepang</td>
          <td>{{ data?.JPY?.buy ?? '' }}</td>
          <td>{{ data?.JPY?.sell ?? '' }}</td>
        </tr>
        <tr>
          <td>Dollar Amerika</td>
          <td>{{ data?.USD?.buy ?? '' }}</td>
          <td>{{ data?.USD?.sell ?? '' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      data: {}
    };
  },
  methods: {
    async getData() {
      const response = await axios.get("https://blockchain.info/ticker");
      this.data = response.data;
    },
  },
  created() {
    this.getData();
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

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
  border: 1px solid;
}

td,
th {
  border: 1px solid;
  text-align: left;
  padding: 8px;
}
</style>

<template>
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/convertion-rupiah-bitcoin">
        <ConvertionRupiahBitcoin />
      </Route>
      <Route path="/convertion-bitcoin-rupiah">
        <ConvertionBitcoinRupiah />
      </Route>
      <Route path="*">
        404
      </Route>
    </Routes>
  </BrowserRouter>
</template>

<script>
import Home from "./views/Home.vue";
import ConvertionRupiahBitcoin from "./views/ConvertionRupiahBitcoin.vue";
import ConvertionBitcoinRupiah from "./views/ConvertionBitcoinRupiah.vue";
export default {
  name: "App",
  components: {
    Home,
    ConvertionRupiahBitcoin,
    ConvertionBitcoinRupiah,
  },
};
</script>

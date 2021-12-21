<template>
  <div class="main column">
    <div class="container">
      <div class="container-fluid">
        <div class="row">
          <div class="header col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 d-flex flex-column">
        <Header/>
        </div>
        <div class="home col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 d-flex">
          <Home/>
        </div>
        </div>
      </div>
       
    </div>
    <div class="ScrollTopComponent">
   <ScrollTopComponent>
      <a class="btn btn-light">
        <i class="fas fa-angle-double-up" size="3x" />
      </a>
  </ScrollTopComponent>
  </div>
   <div class="footer col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 d-flex">
          <Footer/>
        </div>
  </div>
  
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import ScrollTopComponent from './components/ScrollTopComponent.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer,
    ScrollTopComponent
  },
   data: () => ({
    dialog: false,
    drawer: true,
    keys: [],
    team: "Philadelphia Eagles",
   visible:false
  }),
  props: {
    source: String
  },
   methods: {
  
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}

@import url(//db.onlinewebfonts.com/c/9a1c7b194cdca0a0635c4d1931fc66dd?family=Dharma+Gothic);
</style>

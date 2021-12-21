<template>
<div class="col-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
<ul class="nav nav-tabs justify-content-between" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active"  v-on:click="showTab()" id="product-search-tab" data-bs-toggle="tab" data-bs-target="#product-search" type="button" role="tab" aria-controls="home" aria-selected="true"><i class="fab fa-searchengin"></i>Ürün Arama </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="campaigns-tab" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="fas fa-award"></i>Kampanyalar</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link"  id="order-tracking-tab" data-bs-toggle="tab" data-bs-target="#order-tracking" type="button" role="tab" aria-controls="order-tracking" aria-selected="false"><i class="fas fa-route"></i>Sipariş Takip</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="btn-3" data-bs-toggle="tab" data-bs-target="#order-tracking" type="button" role="tab" aria-controls="order-tracking" aria-selected="false"><i class="fas fa-calculator"></i>Cari Hesap</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="btn-4" data-bs-toggle="tab" data-bs-target="#order-tracking" type="button" role="tab" aria-controls="order-tracking" aria-selected="false"><i class="far fa-credit-card"></i>Online Ödeme</button>
  </li>
   <li class="nav-item" role="presentation">
    <button class="nav-link" id="btn-5" data-bs-toggle="tab" data-bs-target="#order-tracking" type="button" role="tab" aria-controls="order-tracking" aria-selected="false"><i class="far fa-credit-card"></i>Online Ödeme</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent" hidden>
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="product-search-tab">Ürün arama (burada vuetable kullanılabilir)</div>
  <div class="tab-pane fade" id="campaigns-tab" role="tabpanel" aria-labelledby="campaigns-tab">div2</div>
  <div class="tab-pane fade" id="order-tracking" role="tabpanel" aria-labelledby="order-tracking-tab">div3</div>
</div>

    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex  " id="slider-1" >
    <div class="col-12 col-sm-12 col-md-12 col-xl-3 col-lg-3 d-flex " id="left-search-box">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="12"
      label="Araç Bilgileri İle Arama"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0 text-dark"
    >

<div class="dropdown show" id="dropdown1">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Marka
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
   <div class="dropdown show" id="dropdown2">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Model
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
    <div class="dropdown show" id="dropdown3">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Kasa
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

  
   <div class="dropdown show" id="dropdown4">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Üretim Yılı
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
  
   <div class="dropdown show" id="dropdown5">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Motor Hacmi
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
   <div class="dropdown show" id="dropdown6">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    KW
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
  <b-form-group>
  <button class="btn btn-primary " id="search-piece"> Parça Ara</button>
  </b-form-group>
    </b-form-group>
  </b-card>
    </div>
     <div class="col-12 col-sm-12 col-md-12 col-xl-9 col-lg-9 d-flex">
     
     <div id="main-carousel">
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    
    <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :caption="item.text"
        :img-src="item.image"
      ></b-carousel-slide>
  </b-carousel>
</div>

    </div>

  </div>
    <div class="promotional-products row">
    <div class="promotional-products-header col-12 d-flex mt-5">
    <div class="col-2 p-0">
      <strong> Kampanyalı Ürünler </strong>
      </div>
         <div class="col-8">
      <a href="#" style="text-decoration:none; font-size:12px"> Tümü > </a>
      </div>
  </div>
    <b-card-group deck class="col-12 d-flex justify-content-between p-3 m-b-3">
      <b-card bg-variant="light" header="Debriyaj" class=" homeCard1 text-center text-primary p-5 m-2 col-3">
      <span>  Setlerinde </span>
      <br/>
      
<img v-bind:src="require('/src/assets/' + imgDebriyaj)" />      
        <b-card-text class="card-text">%25 İndirim</b-card-text>
      </b-card>

       <b-card bg-variant="light" header="Fren " class="text-center text-primary p-5 m-2 col-3 homeCard2 ">
 <span>  Disklerinde </span>
      <br/>
      <img v-bind:src="require('/src/assets/' + imgFren)" />
      
        <b-card-text class="card-text">%50 İndirim</b-card-text>      </b-card>

       <b-card bg-variant="light" header="Hava" class="text-center col-3 p-5 m-2 homeCard3">
        <span>  Filtrelerinde </span>
      <br/>
      <img v-bind:src="require('/src/assets/' + imgHava)" />
      
        <b-card-text class="card-text">%50 İndirim</b-card-text> 
             </b-card>
         <b-card bg-variant="light" header="Triger" class="text-center col-3 p-5 m-2 homeCard4">
<span>  Kayışlarında </span>
      <br/>
      <img v-bind:src="require('/src/assets/' + imgKayis)"/>
      <b-card-text class="card-text">%15 İndirim</b-card-text> 
            </b-card>  
      
    </b-card-group>
 <div class="carousel">
<Carousel></Carousel>
</div>
    </div>
</div>
</template>
 
<script>
 import Carousel from './Carousel.vue'

export default {
  components: {
    Carousel
  },
    data: function() {
    return {
      carouselItems: [
        {
          id: 1,
          image: "src/assets/slider.png",
        },
        {
          id: 2,
          image: "https://source.unsplash.com/LAaSoL0LrYs/1920x1080",
        },
        {
          id: 3,
          image: "https://source.unsplash.com/LAaSoL0LrYs/1920x1080",
        }
      ],
      imgSlider: "slider1.png",
      imgDebriyaj:"debriyaj.jpg",
      imgHava:"havafiltresi.jpg",
      imgKoltuk:"koltuk.jpg",
      imgFren:"frendiski.jpg",
      imgFooter:"footer.png",
      imgKayis:"kayış.jpg"
    };

    
    },
    methods: {
     prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      },
      showTab: function () {
      document.getElementById("myTabContent").hidden=false;
      document.getElementById("main-carousel").hidden=true;
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myTab button{
  border-radius:none!important;
color: #fff;
}
.footer{
  background-color:#f8f9fa!important;
}
#myTab button:hover
{
    height: 115%;
}

#myTab button  i
{
  font-size:xx-large;
  opacity:0.5;
  padding:10px!important;
}
#product-search-tab
{
  background-color:rgb(25 178 131);
  }
  #campaigns-tab
{
  background-color:#508fc7
}
#order-tracking-tab
{
  background-color:#f3ae21  
}
#btn-3
{
  background-color:#2847af;
}
#btn-4
{
  background-color:#9d6cdf;
}

#btn-5
{
  background-color: #f56d41;
}

#slider-1
{
  margin-top:3%;
}

#dropdown1 a, #dropdown2 a , #dropdown3 a, #dropdown4 a, #dropdown5 a, #dropdown6 a {
  color:#a3abb2!important;
  background: #fff;
  width:100%;
  margin:5px;
}
#search-piece
{
  width:100%;
  margin :30px 5px 0; 
}
.homeCard1, .homeCard1 > .card-header, .homeCard2, .homeCard2 > .card-header ,.homeCard2 > .card-text
,.homeCard3, .homeCard3 > .card-header, .homeCard4, .homeCard4 > .card-header
{
  color: #fff!important;
  font-family: "Dharma Gothic", Helvetica, Arial;
  font-size: 30px;
  word-spacing:10px;
}
.homeCard1, .homeCard1 > .card-header
{
  background:#009a60!important;

}
.homeCard2, .homeCard2 > .card-header{
   background:#000e1a!important;
}
.homeCard3, .homeCard3 > .card-header{
   background:#f4c01d!important;
}
.homeCard4, .homeCard4 > .card-header{
   background:#a3abb2!important;
}

.homeCard1 > .card-header, .homeCard2 > .card-header, 
.homeCard3 > .card-header , .homeCard4 > .card-header, .card-text
{
  font-size:50px;
}
.homeCard1 img, .homeCard2 img, .homeCard3 img, .homeCard4 img{
      width: 100%;
    height: auto; 
}
</style>


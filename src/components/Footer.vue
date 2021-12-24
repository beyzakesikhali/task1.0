<template>
  <div class="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12 footer">
      <div class="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12 mt-3 d-flex card-group div-footer-card-group ">
         
      <b-card-group deck class=" footer-card-group col-12 d-flex flex-md-row flex-xl-row flex-lg-row flex-sm-column flex-column justify-content-between p-3 m-b-3">
      <b-card bg-variant="light" header="Hızlı Kargo" class="text-center text-primary col-xl-2 col-lg-2 col-md-6 col-12 card1">
     <img v-bind:src="require('/src/assets/' + imgFooter1)" />
      
        <b-card-text>Saat 16:00'a kadar verdiğiniz siparişler aynı gün içinde kargoya verilir.</b-card-text>
      </b-card>

      <b-card bg-variant="light" header="Bağımsız Platform" class="text-center text-primary col-xl-2 col-lg-2 col-md-6 col-12 card1">
     <img v-bind:src="require('/src/assets/' + imgFooter2)" />
      
        <b-card-text>Saat 16:00'a kadar verdiğiniz siparişler aynı gün içinde kargoya verilir.</b-card-text>
      </b-card>

       <b-card bg-variant="light" header="Kolay Ödeme" class="text-center text-primary col-xl-2 col-lg-2 col-md-6 col-12card1">
     <img v-bind:src="require('/src/assets/' + imgFooter3)" />
      
        <b-card-text>Saat 16:00'a kadar verdiğiniz siparişler aynı gün içinde kargoya verilir.</b-card-text>
      </b-card>
        <b-card bg-variant="light" header="Farklı Adrese Sevkiyat" class="text-center text-primary col-xl-2 col-lg-2 col-md-6 col-12 card1">
     <img v-bind:src="require('/src/assets/' + imgFooter4)" />
      
        <b-card-text>Saat 16:00'a kadar verdiğiniz siparişler aynı gün içinde kargoya verilir.</b-card-text>
      </b-card> 
      
    </b-card-group>
       
      </div>
      <hr/>
      <div class="container">
      <div class="container-fluid">
       <div class="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12 d-flex flex-column flex-xl-row flex-md-row flex-md-column ">
             <div class="col-12 col-md-2 col-lg-2 col-sm-12 col-xl-2 d-flex flex-column">
            <p class="text-primary">Kategoriler</p>
  <span  class=" txt-footer categories" v-for="item in items" :key="item">{{item}}</span>
 
            </div>
                <div class="col-12 col-md-2 col-lg-2 col-sm-12 col-xl-2 d-flex flex-column">
           <p class="text-primary"> Kurumsal </p>
            <span  class="txt-footer institutional" v-for="item in items2" :key="item">{{item}}</span>

            </div>
                <div class="col-12 col-md-2 col-lg-2 col-sm-12 col-xl-2 d-flex flex-column">
           <p class="text-primary"> Genel </p>
            <span  class="txt-footer institutional" v-for="item in items2" :key="item">{{item}}</span>

            </div>
            <div class="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-2 d-flex flex-column">
            <div class="col-12 col-md-2 col-lg-2 col-sm-12 col-xl-12 d-flex flex-column">
              <p class="text-primary"> İletişim </p>
              <span class="txt-footer"><i class="far fa-building text-primary p-1"> </i> İstanbul Ticaret Odası</span>
              <span class="txt-footer"><i class="fas fa-map-marker-alt text-primary p-1"></i>@info.istanbultraktör.com</span>
              <span class="txt-footer"><i class="fas fa-envelope text-primary p-1"></i>Kozyatağı VD</span>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-sm-12 col-xl-12">
            <p class="text-primary"> Bizi Takip Edin </p>
            <div class="col-12 d-flex flex-row">
<span class="txt-footer"><i class="fab fa-facebook text-primary p-1"> </i> Facebook</span>
              <span class="txt-footer"><i class="fab fa-twitter text-primary p-1"></i>Twitter</span>
              <span class="txt-footer"><i class="fab fa-instagram text-primary p-1"></i>İnstagram</span>
            </div>
            </div>
            </div>
       <div class="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-2 d-flex flex-column ">
                <p class="text-primary"> Ödeme Seçenekleri </p>
                     <img v-bind:src="require('/src/assets/' + imgLast)" />


      </div>
            </div>

      

  </div>
   </div> </div>
</template>

<script>

export default {
  name: 'App',
 
   data: () => ({
       items:
    [   "New Holland Yedek Parça", "Fiat Traktör Yedek Parça", "Tumosan Yedek Parça", "Massey Ferguson yedek parça",
         "Erkunt Yedek Parça", "VAltra Yedek Parça", "Kampanyalar"
    ],
    items2:
    [
        "Anasayfa", "Hakkımızda", "Gizlilik", "Üyelik Sözleşmesi", "Garanti ve İade", "Sıkça Sorulan Sorular", "Öneri ve Şikayet"
    ],
     imgFooter1:'footer.png',
    imgFooter2:'footer2.png',
    imgFooter3:'footer3.png',
    imgFooter4:'footer4.png',
    imgLast:'footerlst.png'

  
  }),
  props: {
  }
}

</script>

<style>
.footer{
  background-color:#fafafa;
}
.txt-footer{
    font-size:10px!important;
    color:#6c757d; 
    padding:3px; 
}
.card{
  border:none !important; 
}
.card-header{
  border:none!important;
  background-color:rgb(248 249 250)!important;
}
.card-group{
  flex-wrap: nowrap!important;
    padding: 40px!important;
     
}

@media only screen and (max-width: 600px) {
  .div-footer-card-group  .footer-card-group .card .card-body
  {
    border-bottom:2px solid #b4b4b4!important;
  }
}

</style>

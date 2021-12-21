<template>
<section class="pt-5 pb-5">
  <div class="container">
    <div class="row">
        <div class="col-8 d-flex  ">
            <div class="col-5    p-0">
      <strong> Kampanyalı Ürünler </strong>
      </div>
         <div class="col-2">
      <a href="#" style="text-decoration:none; font-size:12px"> Tümü > </a>
      </div>
        </div>
     
        <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <div class="card">
                              <img v-bind:src="require('/src/assets/' + imgDebriyaj)" alt="100%x280" />
                                     <div class="card-body d-flex row">
                                    <div class="price-Info d-flex">
                                      <div class="col-6">
                                       <span class="text-xxsmall"> Brüt fiyat </span>
                                       <p > 1.150,00TL </p>
                                       </div>
                                      <div class="col-6 d-flex flex-column">
                                      <div class="d-flex flex-row">
                                      <div class="sale-label p-1">
                                        <span class="text-xsmall"> %15 </span>
                                        
                                      </div>
                                        <span class="text-xxsmall">İskontolu Fiyat</span>
                                        </div>
                                        <div > <p class="bold-text" > 977,50 TL </p></div>

                                      </div>
                                    </div>
                                    <div class="product-info col-12 d-flex">
                                        <div class="col-6 d-flex flex-column">
                                        <span class="text-xxsmall"> Marka: </span>
                                        <span class="text-xxsmall"> Model: </span>
                                        <span class="text-xxsmall">  Stok kodu: </span>
                                        <span class="text-xxsmall"> Referans No: </span>
                                        </div>
                                        <div class="col-6 d-flex flex-column">
                                         <span class="text-xxsmall"> HARS </span>
                                        <span class="text-xxsmall"> ERKUNT BAŞAK </span>
                                        <span class="text-xxsmall">  00-11-222 </span>
                                        <span class="text-xxsmall"> 777-852 </span>
                                        </div>
                                    </div>

                                    <div class="col-12 d-flex flex-row">
                                    <div class="adet m-1">
                                      <b-button-group>
                                      <b-button variant="primary"><span class="text-xxsmall"> + </span></b-button>
                                      <b-button variant="outline-primary" ><span class="text-xxsmall"> 999 </span></b-button>
                                      <b-button variant="primary"><span class="text-xxsmall"> - </span></b-button>
                                      </b-button-group>
                                    </div>
                                    <div class="button m-1">
                                      <b-button variant="primary"><span class="text-xxsmall"> Sepete Ekle </span></b-button>

                                    </div>
                                    </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                       <div class="card">
                              <img v-bind:src="require('/src/assets/' + imgHava)" alt="100%x280" />
                                     <div class="card-body d-flex row">
                                    <div class="price-Info d-flex">
                                      <div class="col-6">
                                       <span class="text-xxsmall"> Brüt fiyat </span>
                                       <p > 1.150,00TL </p>
                                       </div>
                                      <div class="col-6 d-flex flex-column">
                                      <div class="d-flex flex-row">
                                      <div class="sale-label p-1">
                                        <span class="text-xsmall"> %15 </span>
                                        
                                      </div>
                                        <span class="text-xxsmall">İskontolu Fiyat</span>
                                        </div>
                                        <div > <p class="bold-text" > 977,50 TL </p></div>

                                      </div>
                                    </div>
                                    <div class="product-info col-12 d-flex">
                                        <div class="col-6 d-flex flex-column">
                                        <span class="text-xxsmall"> Marka: </span>
                                        <span class="text-xxsmall"> Model: </span>
                                        <span class="text-xxsmall">  Stok kodu: </span>
                                        <span class="text-xxsmall"> Referans No: </span>
                                        </div>
                                        <div class="col-6 d-flex flex-column">
                                         <span class="text-xxsmall"> HARS </span>
                                        <span class="text-xxsmall"> ERKUNT BAŞAK </span>
                                        <span class="text-xxsmall">  00-11-222 </span>
                                        <span class="text-xxsmall"> 777-852 </span>
                                        </div>
                                    </div>

                                    <div class="col-12 d-flex flex-row">
                                    <div class="adet m-1">
                                      <b-button-group>
                                      <b-button variant="primary"><span class="text-xxsmall"> + </span></b-button>
                                      <b-button variant="outline-primary" ><span class="text-xxsmall"> 999 </span></b-button>
                                      <b-button variant="primary"><span class="text-xxsmall"> - </span></b-button>
                                      </b-button-group>
                                    </div>
                                    <div class="button m-1">
                                      <b-button variant="primary"><span class="text-xxsmall"> Sepete Ekle </span></b-button>

                                    </div>
                                    </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                        <div class="card">
                              <img v-bind:src="require('/src/assets/' + imgKayis)" alt="100%x280" />
                                     <div class="card-body d-flex row">
                                    <div class="price-Info d-flex">
                                      <div class="col-6">
                                       <span class="text-xxsmall"> Brüt fiyat </span>
                                       <p > 1.150,00TL </p>
                                       </div>
                                      <div class="col-6 d-flex flex-column">
                                      <div class="d-flex flex-row">
                                      <div class="sale-label p-1">
                                        <span class="text-xsmall"> %15 </span>
                                        
                                      </div>
                                        <span class="text-xxsmall">İskontolu Fiyat</span>
                                        </div>
                                        <div > <p class="bold-text" > 977,50 TL </p></div>

                                      </div>
                                    </div>
                                    <div class="product-info col-12 d-flex">
                                        <div class="col-6 d-flex flex-column">
                                        <span class="text-xxsmall"> Marka: </span>
                                        <span class="text-xxsmall"> Model: </span>
                                        <span class="text-xxsmall">  Stok kodu: </span>
                                        <span class="text-xxsmall"> Referans No: </span>
                                        </div>
                                        <div class="col-6 d-flex flex-column">
                                         <span class="text-xxsmall"> HARS </span>
                                        <span class="text-xxsmall"> ERKUNT BAŞAK </span>
                                        <span class="text-xxsmall">  00-11-222 </span>
                                        <span class="text-xxsmall"> 777-852 </span>
                                        </div>
                                    </div>

                                    <div class="col-12 d-flex flex-row">
                                    <div class="adet m-1">
                                      <b-button-group>
                                      <b-button variant="primary"><span class="text-xxsmall"> + </span></b-button>
                                      <b-button variant="outline-primary" ><span class="text-xxsmall"> 999 </span></b-button>
                                      <b-button variant="primary"><span class="text-xxsmall"> - </span></b-button>
                                      </b-button-group>
                                    </div>
                                    <div class="button m-1">
                                      <b-button variant="primary"><span class="text-xxsmall"> Sepete Ekle </span></b-button>

                                    </div>
                                    </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <div class="card">
                              <img v-bind:src="require('/src/assets/' + imgKoltuk)" alt="100%x280" />
                                     <div class="card-body d-flex row">
                                    <div class="price-Info d-flex">
                                      <div class="col-6">
                                       <span class="text-xxsmall"> Brüt fiyat </span>
                                       <p > 1.150,00TL </p>
                                       </div>
                                      <div class="col-6 d-flex flex-column">
                                      <div class="d-flex flex-row">
                                      <div class="sale-label p-1">
                                        <span class="text-xsmall"> %15 </span>
                                        
                                      </div>
                                        <span class="text-xxsmall">İskontolu Fiyat</span>
                                        </div>
                                        <div > <p class="bold-text" > 977,50 TL </p></div>

                                      </div>
                                    </div>
                                    <div class="product-info col-12 d-flex">
                                        <div class="col-6 d-flex flex-column">
                                        <span class="text-xxsmall"> Marka: </span>
                                        <span class="text-xxsmall"> Model: </span>
                                        <span class="text-xxsmall">  Stok kodu: </span>
                                        <span class="text-xxsmall"> Referans No: </span>
                                        </div>
                                        <div class="col-6 d-flex flex-column">
                                         <span class="text-xxsmall"> HARS </span>
                                        <span class="text-xxsmall"> ERKUNT BAŞAK </span>
                                        <span class="text-xxsmall">  00-11-222 </span>
                                        <span class="text-xxsmall"> 777-852 </span>
                                        </div>
                                    </div>

                                    <div class="col-12 d-flex flex-row">
                                    <div class="adet m-1">
                                      <b-button-group>
                                      <b-button variant="primary"><span class="text-xxsmall"> + </span></b-button>
                                      <b-button variant="outline-primary" ><span class="text-xxsmall"> 999 </span></b-button>
                                      <b-button variant="primary"><span class="text-xxsmall"> - </span></b-button>
                                      </b-button-group>
                                    </div>
                                    <div class="button m-1">
                                      <b-button variant="primary"><span class="text-xxsmall"> Sepete Ekle </span></b-button>

                                    </div>
                                    </div>
                                        
                                    </div>

                            </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4">
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840">
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e">
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23">
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129">
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6">
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <div class="col-12 text-center">
            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa fa-arrow-left"></i>
            </a>
            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa fa-arrow-right"></i>
            </a>
        </div>
        </div>
    </div>
</div>
</section>
</template>

<script>

export default {
    data: function() {
    return {
      
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
    
    }
  }
</script>
<style>
.text-xxsmall{
  font-size:xx-small;
    font-weight: bold;

}
.text-xsmall
{
  font-size:x-small;
  text-align: center;
    font-weight: bold;

}
.sale-label
{
    width: 39%;
    height: 98%;
    color: white;
    background: red;
    /* margin-left: 10px; */
    margin-right: 10px;
    padding: 4px;

}
.bold-text
{
  font-weight:bold
}
.product-info
{
  background-color:#f8f8f8;
}

</style>
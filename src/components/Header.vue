<template>
 <div class="header col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 d-flex flex-column ">
    <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 d-flex"  id="first-header">
      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 represatantive">
        <span class="text-blue"><i class="fas fa-user-friends"></i> Müşteri Temsilcisi: </span>
        <span class="represatantive-name text-black"> {{accountName}}</span>
        <span class="phone"><i class="fas fa-phone-square represatantive-phone"></i> 0555 555 55 55 </span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link menu-text" href="#" v-for="index in menu" :key="index">{{index}} <span class="sr-only"></span></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <hr />
    <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 d-flex"  id="second-header">
      <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
   <img v-bind:src="require('/src/assets/' + imgIst)"  />
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">

      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text text-primary search-box" ><i class="fas fa-search search-icon"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="Marka, Model veya Parça adı ara.." aria-label="Marka, Model veya Parça adı ara.." aria-describedby="basic-addon1">
  <div class="input-group-append">
    <span class="input-group-text text-primary search-box-text"  >Ara</span>
  </div>
</div>

      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
      <button v-on:click="hideText(element,$event)" class="btn btn-account" ><i class="fas fa-user-lock account-icon"></i> Hesabım <p id="account-name">{{accountName}}</p></button>
      <button class="btn btn-cart"><i class="fas fa-shopping-cart cart-icon"></i> Sepetim</button>

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Header',
 
  props: {
  },

  methods: {
    hideText: function (element,isToggled) {
      
      this.el=document.getElementById(element);
      if(isToggled)
      {
        console.log(this.el);
        this.el.innerHTML="";
      }
      else{
        console.log(this.el)
        this.el.innerHTML=this.accountName;
      }
      

    }
  },
    data:function() {

       return {
       menu:
    [   "Hesabım", "Kargo Takip", "Sipariş Takip", "Parça ve Hizmet Teklifi",
         "Destek", "Yardım", "İletişim" ,"Blog"
    ],
    logoUrl:'slider1.png',
    accountName:'Mehmet Demir',
    el:'',
    element:'',
    isToggled:false,
          imgIst:"istanbul.png",

    };
   
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-blue{
    color: #0f559b;
    font-size:10px
}
.header-menu{
     
}
.menu-text{
    font-size:15px;
}
#first-header{
  padding-top: 15px;
  margin-left:20px;
}
.represatantive
{
  padding-top:inherit;
}
.represatantive-name
{
  margin-left:15px;
  margin-right:10px;
}
.represatantive-phone
{
  color:#0f559b;
}
.search-box
{
  padding:0.5rem 0.5em 1rem!important;
  background-color:#fff!important;
}
.search-icon{
  line-height:inherit!important;
  color:#0f559b!important;
}
.search-box-text{
   padding:0.5rem 0.5em 1rem!important;
  color:#fff!important;
  background-color:#0f559b!important;

}
.btn-account{
  background-color:#0f559b!important;
  color:white!important;
  margin-left:5px!important;
  height:74%!important;
}

.btn-cart{
   background-color:#fff!important;
  color:#0f559b!important;
  border:#0f559b solid 1px !important;
  margin-left:5px!important;
  line-height:2!important;


}
#account-name{
  font-size:xx-small;
}
</style>


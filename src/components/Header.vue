<template>
  <b-col class="header d-flex flex-column" sm="12" xl="12" md="12" lg="12">
    <b-container>
      <b-container fluid >
        <b-row class="first-header">
     <b-col sm="1" md="1" xl="1" lg="1">
     </b-col>
          <b-col class="represatantive" sm="12" md="12" xl="5" lg="5">
            <span class="text-blue"><i class="fas fa-user-friends"></i> Müşteri Temsilcisi: </span>
            <span class="represatantive-name text-black"> {{accountName}}</span>
            <span class="phone"><i class="fas fa-phone-square-alt represatantive-phone"></i> 5 555 555 55 55 </span>
            <b-col sm="4" md="4" xl="5" lg="5">
             <b-navbar toggleable type="light" variant="light" class="mobile-menu">
    <b-navbar-brand href="#" class="mobile-menu-navbar-brand"></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="x-circle"></b-icon>
        <b-icon v-else icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
       <b-nav-item href="#" v-for="index in menu" :key="index" class="navbar-itemmm">{{index}} </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
          </b-col>
           </b-col>
            <b-col class="header-menu d-flex" sm="12" md="12" xl="5" lg="5">
              <b-row>
                <b-navbar type="ligth" variant="ligth" class="p-0 menu-navbar justify-content-end">
                <b-navbar-nav>
                <b-nav-item href="#" v-for="index in menu" :key="index" class="menu-navbar-item">{{index}} </b-nav-item>
                </b-navbar-nav>
                </b-navbar>
              </b-row>
            </b-col>
         <b-col sm="1" md="1" xl="1" lg="1">
     </b-col>
 
      </b-row>
      
      </b-container>
    </b-container>
    <b-col class="d-flex" id="second-header">
      <b-container>
        <b-container fluid class="d-flex flex-md-column flex-column flex-xl-row flex-lg-row">
         <b-col sm="1" md="1" xl="1" lg="1">
     </b-col>
     <b-col sm="4" md="4" xl="2" lg="2">
           <img v-bind:src="require('/src/assets/' + imgIst)" class="logo"  />
           </b-col>
            <b-col  sm="12" md="12" xl="6" lg="6" class="search-input-group">
              <div >
                <b-input-group>
                <b-input-group-prepend is-text >
                  <span><i class="fas fa-search"></i></span>
                <b-form-input  placeholder="Marka, Model veya Parça adı ara.."></b-form-input>
                  <b-input-group-append class="m-0">
                      <b-button size="sm" text="Button" variant="primary" class="m-0 btn-search">ARA</b-button>
                  </b-input-group-append>
                   </b-input-group-prepend>
                </b-input-group>
              </div>
            </b-col>
            <b-col sm="12" md="12" xl="2" lg="2" class="d-flex">
                          <b-button  v-on:click="hideText(element,$event)" class="btn btn-account p-0" >
                          <b-col class="d-flex align-items-center">
                          <i class="fas fa-user-lock account-icon"></i>
                          <b-row>
                          <span class="account-text"> Hesabım </span>
                          <span class="m-n5" id="account-name">{{accountName}}</span>
                          </b-row>
                          </b-col>
                          </b-button>

              <b-button  v-on:click="hideText(element,$event)" class="btn btn-cart p-0" >
              <span class="d-flex align-item-center justify-content-center"><div class="div-cart"><span class="cart-icon">
              <i class="fas fa-shopping-cart"></i></span>
              <div class="cart-size"><span class="cart-size-text"> 999</span>
              </div></div><span class="d-flex flex-column justify-content-center"><span class="cart-text"> Sepetim </span></span></span></b-button>
            </b-col>
                     <b-col sm="1" md="1" xl="1" lg="1">
     </b-col>


          </b-container>  
      </b-container>
    </b-col>
  </b-col>
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
    [   "HESABIM", "KARGO TAKİP", "SİPARİŞ TAKİP", "PARÇA VE HİZMET TEKLİFİ",
         "DESTEK", "YARDIM", "İLETİŞİM" ,"BLOG"
    ],
    logoUrl:'slider1.png',
    accountName:'Mehmet Demir',
    el:'',
    element:'',
    isToggled:false,
          imgIst:"mehmetlogo.png",

    };
   
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-blue{
    color: #00549a;
    font-size:10px;
}

.menu-text{
    font-size:15px;
    color:#0f559b!important;
    font-weight:bold;
}
.first-header{
  border-bottom: 2px solid #f1f1f1!important;
  margin-bottom: 25px!important;
}
.represatantive
{
  padding-top:0;
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

.btn-search{
  font-size:12px;
  font-weight:100;
}
.search-icon{
  line-height:inherit!important;
  color:#0f559b!important;
  font-weight:bold!important;
}
.search-box-text{
   padding:0.5rem 0.5em 1rem!important;
  color:#fff!important;
  background-color:#0f559b!important;

}
.div-btn-account
{
      margin-left: 4rem;
    margin-right: 0.75rem;
}
.btn-account{
  background-color: #0f559b!important;
    color: white!important;
    position: relative;
    border-radius:0!important;
    width: 100%;
    
}

.btn-account span{
  padding-left:0.25rem!important;
}

.btn-cart{
      color: #0f559b!important;
    background-color: white!important;
    position: relative;
    margin-left: 1.25rem!important;
    border-radius:0!important;
    width: 100%;
    height:100%!important;

}
.div-cart{
position:relative;
}
.cart-size{
  border-radius:50%;
  border:2px solid #f8d875!important;
  position:absolute;
  top:-5px;
  left:18px;
  font-size:9px;
  
}

.cart-icon{
  font-size:15px!important;
  margin-right:0.75rem!important;
  margin-left:0.25rem!important;
}




#account-name{
  font-size:8px;


}
.header-menu >nav{
  padding:0px!important;
}
.header-menu .nav-item
{
  padding-top:0!important;
  padding-right:0.25rem!important;
  align:right;
}
.hr-header{
  margin:0.5rem 0 1rem 0 !important;
  position:relative;
  
  .menu-navbar-item > a{
    text-size: 12px!important;
      color:#0f559b!important;
  font-weigth:bold;
  }
  
}
 .navbar-ligth .navbar-nav .nav-link{
      font-size:8px!important;
      padding-right:0px!important;

    }
    
    .phone{
      font-size:10px!important;
      font-weight:bold;
    }
    .represatantive-name
    {
      font-size:9px!important;
      font-weight:bold;
      margin-right:30px;

    }
    .account-text
    {
      font-size:9px;
      font-weight:bold;
  
    }
    .account-icon{  
      font-size:12px;
      margin-left:0.5rem;
    }

    .search-input-group{
      height:100%;
      margin-top:3px;
    }
    .search-input-group >div{
      width:95%;
    }

    .search-input-group .input-group  .input-group-prepend  .input-group-text
    {
      background-color: white!important;
      color:#0f559b!important;
      padding:0;
      margin:0;
      font-size:large!important;
      padding-left:1rem!important;

    }
        .search-input-group .input-group  .input-group-prepend  .input-group-text.b-icon.bi
        {
            font-weight:bold!important;
        }
  .search-input-group .input-group  .input-group-prepend  .input-group-text > input{
    border:none!important;
    height:inherit!important;
    font-size:  12px!important;
    color:black!important;
  }
    .search-input-group .input-group  .input-group-prepend
    {
      width:inherit;
    }
     .search-input-group .input-group  .input-group-prepend .input-group-append button
     {
       background-color:#0f559b!important;
       line-height:2!important;
    border-radius:0!important;
    border:0!important;
      
     }

     ::-webkit-input-placeholder {
   font-size: 12px;
   font-weight:bold; 
   
}
.menu-navbar
{
  color:#0f559b!important;
  font-weigth:bold;
}

:-moz-placeholder { /* Firefox 18- */
      font-size: 12px;
}

::-moz-placeholder {  /* Firefox 19+ */
      font-size: 12px;
}

:-ms-input-placeholder {
      font-size: 12px;
}

#second-header .container .container-fluid{
  margin-bottom:3rem!important;
  border-bottom:3px solid #0f559b;
  padding-bottom:3rem!important;
}

.mobile-menu{
  display:none!important;
}
.header-menu{
  display:block!important;
}
.mobile-menu-navbar-brand
{
  color:#0f559b!important;
}
.mobile-menu
{
  color:#0f559b!important;
}
.menu-navbar .navbar-nav .nav-item {
  padding-right:0px!important;
  font-weight:bold;
}
.menu-navbar .navbar-nav .nav-item .nav-link
{
    color:#00549a!important;
   /* padding-right:0px!important;*/

}
.logo{
  width:186px!important;
}
.cart-text{
  font-size:12px;
  font-weight:bold;
}
@media only screen and (max-width: 600px) {
  .represatantive {
    padding:0;
    margin:0;
    
  }

  .mobile-menu{
    display:block!important;
    background-color:#fff!important;
  }
  .header-menu{
    display:none!important;
  }

.search-input-group div
{
  margin-top:1rem;
  margin-bottom:1rem;
}


.search-input-group div .input-group
{
  margin-top:1rem;
}

}
</style>


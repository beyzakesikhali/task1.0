<template>
  <b-col class="header d-flex flex-column" sm="12" xl="12" md="12" lg="12">
    <b-container class="first-header">
      <b-container fluid class="first-header-fluid" >
        <b-row>
          <b-col class="represatantive m-0 p-0" sm="5" md="5" xl="5" lg="5">
            <span class="text-blue"><i class="fas fa-user-friends"></i> Müşteri Temsilcisi: </span>
            <span class="represatantive-name text-black"> {{accountName}}</span>
            <span class="phone"><i class="fas fa-phone-square represatantive-phone"></i> 0555 555 55 55 </span>
          </b-col>
    
            <b-col class="header-menu d-flex p-0 m-0 justify-content-end" sm="12" md="12" xl="7" lg="7">
              <b-row>
  
                <b-navbar type="ligth" variant="ligth" class="p-0">
                <b-navbar-nav>
                <b-nav-item href="#" v-for="index in menu" :key="index" class="navbar-itemmm">{{index}} </b-nav-item>
                </b-navbar-nav>
                </b-navbar>
              </b-row>
            </b-col>
      </b-row>
       <b-navbar toggleable type="light" variant="light" class="mobile-menu">
    <b-navbar-brand href="#" class="mobile-menu-navbar-brand">Menu</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
       <b-nav-item href="#" v-for="index in menu" :key="index" class="navbar-itemmm">{{index}} </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
      </b-container>
    </b-container>
    <b-col class="d-flex" id="second-header">
      <b-container>
        <b-container fluid>
         <b-col class="m-0 p-0 d-flex justify-content-between flex-xl-row flex-column">
            <b-col sm="12" md="12" lg="2" xl="2">
                <img v-bind:src="require('/src/assets/' + imgIst)"  />
            </b-col>
            <b-col  sm="12" md="12" xl="6" lg="6" class="search-input-group">
              <div >
                <b-input-group>
                <b-input-group-prepend is-text >
                  <b-icon icon="search" class="m-1"></b-icon>
                <b-form-input  placeholder="Marka, Model veya Parça adı ara.."></b-form-input>
                  <b-input-group-append class="m-0">
                      <b-button size="sm" text="Button" variant="primary" class="m-0">ARA</b-button>
                  </b-input-group-append>
                   </b-input-group-prepend>
                </b-input-group>
              </div>
            </b-col>
            <b-row class="d-flex justify-content-between " >
              <b-button  v-on:click="hideText(element,$event)" class="btn btn-account p-0" ><i class="fas fa-user-lock account-icon"></i><span class="account-text"> Hesabım </span><span class="m-n5" id="account-name">{{accountName}}</span></b-button>
              <b-button  v-on:click="hideText(element,$event)" class="btn btn-cart p-0" ><i class="fas fa-shopping-cart"></i><span class="account-text"> Sepetim </span><span class="m-n5" id="account-name">{{accountName}}</span></b-button>
            </b-row>

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
    [   "Hesabım", "Kargo Takip", "Sipariş Takip", "Parça ve Hizmet Teklifi",
         "Destek", "Yardım", "İletişim" ,"Blog"
    ],
    logoUrl:'slider1.png',
    accountName:'Mehmet Demir',
    el:'',
    element:'',
    isToggled:false,
          imgIst:"isttt.png",

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
    color:#0f559b!important;
    font-weight:bold;
}
.first-header{
  padding-top: 0px;
  margin-left:20px;
    border-bottom: 2px solid;
    border-color:#e7e9eb;
  margin-bottom: 25px!important;
}
.represatantive
{
  padding-top:0;
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
  background-color: #0f559b!important;
    color: white!important;
    height: 42%!important;
    width: 7.5rem!important;
    position: relative;
    margin-left: 0.25rem!important;
    margin-right: 0.25rem!important;
    margin-top: 0.4rem!important;
}

.btn-cart{
      color: #0f559b!important;
    background-color: white!important;
    height: 42%!important;
    width: 7.5rem!important;
    position: relative;
    margin-left: 0.25rem!important;
    margin-right: 1rem;
    margin-top: 0.4rem!important;
}
.btn-cart i {
   position:relative;
  margin-right:96px!important;
}
.btn-account i
{
  position:relative;
  margin-right:96px!important;
}


#account-name{
  font-size:xx-small;
  margin-top: 13px;
    position: absolute;
    margin-left: -85px;

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
  
  .navbar-itemmm > a{
    text-size: 12px!important;
  }
}
 .navbar-ligth .navbar-nav .nav-link{
      font-size:10px!important;

    }
    .first-header-fluid{
      padding-left: 57px!important;
    }
    .phone{
      font-size:12px!important;
    }
    .represatantive-name
    {
            font-size:12px!important;

    }
    .account-text
    {
      font-size:10px;
      position: absolute;
    margin-left: -73px;
    }
    .account-icon{  
      font-size:small;
    }

    .search-input-group
    {
   
    }
    .search-input-group .input-group  .input-group-prepend  .input-group-text
    {
      background-color: white!important;
      color:#0f559b!important;
      padding:0;
      margin:0;
      height: 89%!important;
      font-size:10px;

    }
  .search-input-group .input-group  .input-group-prepend  .input-group-text > input{
    border:none!important;
    height:inherit!important;
  }
    .search-input-group .input-group  .input-group-prepend
    {
      width:inherit;
      margin-top:0.50rem!important;
    }
     .search-input-group .input-group  .input-group-prepend .input-group-append button
     {
       background-color:#0f559b!important;
      
     }

     ::-webkit-input-placeholder {
   font-size: 10px;
}

:-moz-placeholder { /* Firefox 18- */
      font-size: 10px;
}

::-moz-placeholder {  /* Firefox 19+ */
      font-size: 10px;
}

:-ms-input-placeholder {
      font-size: 10px;
}

#second-header{
  margin-bottom:20px!important;
  border-bottom:2px solid #0f559b;
  padding-bottom:20px!important;
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
@media only screen and (max-width: 600px) {
  .represatantive {
    padding:0;
    margin:0;
    
  }
  .first-header-fluid
  {
    padding-left:0!important;
    margin:0;
  }
  .mobile-menu{
    display:block!important;
    background-color:#fff!important;
  }
  .header-menu{
    display:none!important;
  }
}
</style>


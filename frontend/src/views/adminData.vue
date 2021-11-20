<template>
  <div id="app">

    <router-view/>

    <div class="introS" >

      <div class="containerStart" align="center">
        <div class="intro__innerStart" align="center">

          <h2 class="intro__suptitleStart" style="color: white" align="center">Congratulations!</h2>

          <h2 class="container_suptitle">You are admin!</h2>


          <div class="wrapper">
        <table class="user_list"  border="1">
          <tr>
            <td align="center">email</td>
            <td align="center">name</td>
            <td align="center">surname</td>
            <td align="center">password</td>
            <td align="center">erase</td>
            <td align="center">upgrade</td>

          </tr>
          <tr v-for="(adminData) in registrationSystems" :key="adminData.id">
            <td align="center"><span>{{ adminData.email }}</span></td>

            <td align="center"><span>{{ adminData.name }}</span></td>

            <td align="center"><span>{{ adminData.surname }}</span></td>

            <td align="center"><span>{{ adminData.password }}</span></td>

            <td align="center"><div class="remove-item" @click="removeUser(adminData)">&times;</div></td>

            <td align="center"><div class="make_admin_button" @click="upgradeUser()"><span class="admin_button"></span></div></td>
          </tr>
        </table>
          </div>

          <div class="button_to_about_start " align="right">
            <a @click="$router.push('/about')">
              <input class="btn_of_about_start" type="submit" name="" value="About">
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import router from "../router";

export default {
  name: "registrationSystem",

  data() {

    return {
      registrationSystems: [],
      persons: [],
      hasLoaded: false,
    };

  },

  mounted() {
    this.getUserData();
  },
  methods: {

    removeUser(adminData) {
      console.log(adminData);
      axios.post("https://basicregistrationsystem-back.herokuapp.com/api/data/deleting", {
        removing: adminData.id
      })
          .then(() => {
            this.getUserData()
          });

    },

    upgradeUser(){
      axios.post("https://basicregistrationsystem-back.herokuapp.com/api/SelectingFromDefaultUsers", {

      })
    },


    getUserData() {
      axios.get("https://basicregistrationsystem-back.herokuapp.com/api/users").then((response) => {
        this.registrationSystems = response.data;

        this.hasLoaded = true;
      });
      }
  }
}
</script>

<style>



/* Buttons */

.btn_of_about_start{
  font-size: 20px;
  color: white;
  text-decoration: none;

  transition: color .1s linear;
  border: 0;
  background: none;
  cursor: none;

}
.btn_of_about_start:after{
  background-color: #fce38a;
  opacity: 0;
  cursor: none;
  transition: opacity .1s linear;
  color: deepskyblue;
}

.btn_of_about_start:hover{
  text-decoration: underline;
  color: deepskyblue;
  cursor: none;

}
.btn_of_about_start:hover:after,
.btn_of_about_start:after {
  opacity: 1;
  cursor: none;
}

.button_to_about_start{
  padding-right: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
}

.make_admin_button{
  position: relative;
  width: 10px;
  height: 10px;
  background: #eaeef0;
  margin: auto;
  border-radius: 50%;
  border: 2px solid #eaeef0;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
  8px 8px 15px rgba(0, 0, 0, 0.2),
  inset 3px 3px 5px rgba(0, 0, 0, 0.1),
  inset -1px -1px 5px rgba(255, 255, 255, 1);
}

.make_admin_button:hover{
  background: #5f2eea;
transition: background-color 1s;
}
.admin_button{

}
/* container */
.containerStart{
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow-x:auto;

}

.containerStart:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);
  background-color: white;
  opacity: 5;

}

.container_suptitle{
  text-align: justify;
  text-indent: 10px;
  color: white;
  font-weight: normal;
}

/* Intro */
.introS{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 350px;
  padding-bottom: 350px;
  line-height: 1.7;
  width: 60%;
  margin: auto ;
  height: 500px;
}

.intro__innerStart {

}

.intro__suptitleStart{
  font-family: Arial, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  text-transform: none;
  color: #ffffff;
  padding-top: 15px;
  text-align: justify;
  text-indent: 10px;
  display: flex;


}


.user_list{
  overflow-x:auto;
  border-radius: 10px;
  border: 3px solid white;

  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;

  margin: auto;
  width:70%;
  max-width: 70%;
}

.wrapper {
 /* overflow: auto;
  border-radius: 10px;
  border: 3px solid white;*/
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;

 margin: auto;
  width:70%;
  max-width: 70%;
}
</style>
<template>
  <div id="app">
    <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->

    <div class="intro" >
      <div class="container" align="center" >
        <div class="intro__inner" align="center">
          <h2 class="intro__suptitle" style="color: white">Register!</h2>

          <div class="questions">

            <div class="email_padding"> <input class="email" type="email" name="" placeholder="EMAIL"></div>

            <div class="name_padding"> <input class="name" type="text" name="" placeholder="NAME"></div>

            <div class="surname_padding"> <input class="surname" type="text" name="" placeholder="SURNAME"></div>

            <div class="pass_padding">

              <div class="control is-expanded">
                <input v-if="showPassword" type="text" class="password" v-model="password" placeholder="PASSWORD"/>
                <input v-else type="password" class="password" v-model="password" placeholder="PASSWORD">
              </div>

            </div>

            <div class="control">
              <button class="button" @click="toggleShow">
<span>
<i class='i_position' :class="{ 'fa fa-eye': showPassword, 'fa fa-eye-slash': !showPassword }"></i>
</span>
              </button>
            </div>

          </div>

          <div class="button_padding">
            <a @click="$router.push('/startPage')">
              <input class="btn" type="submit" name="" value="Submit">
            </a>
          </div>

          <div class="button_to_about " align="right">
            <a @click="$router.push('/about')">
              <input class="btn_of_about" type="submit" name="" value="About">
            </a>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      showPassword: false,
      password: null,

    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
};

</script>
<style>

/* Buttons */

/*show/hide*/
.button{
  display: inline-block;
  vertical-align: top;
  padding: 10px 30px;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  height: 60px;
  width: 60px;
  transition: background-color 1s;

}

.i_position{
  display: flex;
  align-items: center;
}

.control{
  padding-top: 0px;
}

/*submit*/
.btn {
  display: inline-block;
  vertical-align: top;
  padding: 10px 30px;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s;
}

.btn:hover {
  background-color: #fff;
  color: deepskyblue;
  width: 200px;
}

.button_padding{
  padding-top: 25px;
  padding-bottom: 35px;
}

/*about*/
.btn_of_about{
  font-size: 20px;
  color: white;
  text-decoration: none;

  transition: color .1s linear;
  border: 0;
  background: none;
  cursor: none;

}
.btn_of_about:after{
  background-color: #fce38a;
  opacity: 0;
  cursor: none;
  transition: opacity .1s linear;
  color: deepskyblue;
}

.btn_of_about:hover{
  text-decoration: underline;
  color: deepskyblue;
  cursor: none;
}
.btn_of_about:hover:after,
.btn_of_about:after {
  opacity: 1;
  cursor: none;
}

.button_to_about{
  padding-right: 15px;
  padding-bottom: 5px;
}

/* Container */

.container {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

}

.container:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);
  opacity: .5;
}

/*Intro*/

.intro {

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 350px;
  padding-bottom: 350px;
  line-height: 1.7;
  width: 70%;
  margin: auto ;
  height: 500px;

}

.intro__inner {

}
.intro__title {
  font-family: Arial, sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;

}
.intro__suptitle {

  text-decoration: underline;
  font-family: "Comic Sans MS";
  font-style: italic;
  font-size: 25px;
  padding: 20px;

}

/*questions*/

.questions{

}

::placeholder{
  font-size: 10px;
  font-weight: bold;
  color: #fff;
}

/*email*/

.email {
  display: inline-block;
  vertical-align: top;
  padding: 0;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;

  color: #fff;

  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s;
}

.email:focus {
  border: solid deepskyblue;
  width: 200px;
}

.email_padding{
  padding-top: 5px;
  padding-bottom: 25px;
}

/*name*/

.name {
  display: inline-block;
  vertical-align: top;
  padding: 0;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;

  color: #fff;

  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s;
}

.name:focus {
  border: solid deepskyblue;
  width: 200px;
}

.name_padding{
  padding-top: 5px;
  padding-bottom: 25px;
}

/*surname*/

.surname {
  display: inline-block;
  vertical-align: top;
  padding: 0;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;

  color: #fff;

  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s;
}

.surname:focus {
  border: solid deepskyblue;
  width: 200px;
}

.surname_padding{
  padding-top: 5px;
  padding-bottom: 25px;
}

/*password*/

.password {
  display: inline-block;
  vertical-align: top;
  padding: 0;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;

  color: #fff;

  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s;
}

.password:focus {
  border: solid deepskyblue;
  width: 200px;
}

.pass_padding{
  padding-top: 5px;
  padding-bottom: 25px;
}

</style>
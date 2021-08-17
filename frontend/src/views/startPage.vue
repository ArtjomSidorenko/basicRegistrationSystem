
<template>
  <div id="app">
    <!--    &lt;!&ndash;<div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>&ndash;&gt;-->

    <div class="introS" >

      <div class="containerStart" align="center">
        <div class="intro__innerStart" align="center">

          <h2 class="intro__suptitleStart" style="color: white" align="center">Hello again!</h2>

          <div class="login_positionStart">
            <a @click="$router.push('/login')">
              <input class="btn_login" type="submit" name="" value="Login">
            </a>
          </div>

          <div class="register_positionStart">
            <a @click="$router.push('/registration')">
              <input class="btn_register" type="submit" name="" value="Register"></a>
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


</script>
<style>
/* Buttons */
.btn_login {

  display: inline-block;
  vertical-align: top;
  cursor: none;
  padding: 10px 30px;
  margin: auto;
  text-align: center;

  background: none;


  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s, height 1s;


}

.btn_login:hover {
  background-color: #fff;
  color: deepskyblue;
  width: 240px;
  height: 100px;


}

.login_positionStart{
  padding-bottom: 25px;
  padding-top: 25px;

}
.btn_register {

  display: inline-block;
  vertical-align: top;




  margin: auto;
  text-align: center;

  background: none;


  border: 3px solid #fff;
  border-radius: 24px;

  text-indent: -7px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s, height 1s;
}

.btn_register:hover {
  background-color: #fff;
  color: deepskyblue;
  width: 240px;
  height: 100px;
}

.register_positionStart{
  padding-bottom: 35px;
  padding-top: 25px;
}



.btn_of_about_start{
  font-size: 20px;
  color: white;
  text-decoration: none;

  transition: color .1s linear;
  border: 0;
  background: none;

}
.btn_of_about_start:after{
  background-color: #fce38a;
  opacity: 0;

  transition: opacity .1s linear;
  color: deepskyblue;
}

.btn_of_about_start:hover{
  text-decoration: underline;
  color: deepskyblue;

}
.btn_of_about_start:hover:after,
.btn_of_about_start:after {
  opacity: 1;
}

.button_to_about_start{
  padding-right: 15px;
  padding-bottom: 5px;
}

/* Intro */
.containerStart{
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);



}

.containerStart:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);
  background-color: white;
  opacity: 5;

}

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
  font-size: 35px;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 25px;


}

</style>


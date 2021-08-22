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
            <td align="center">gmail</td>

            <td align="center">name</td>

            <td align="center">surname</td>

            <td align="center">password</td>

            <td align="center">x</td>
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

/* container */
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


}

.wrapper {
  overflow: auto;
  border-radius: 10px;
  border: 3px solid white;
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
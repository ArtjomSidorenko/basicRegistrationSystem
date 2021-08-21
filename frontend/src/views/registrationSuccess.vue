<template>
  <div id="app">
    <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->

    <div class="introAbout" >
      <div class="containerAbout" align="center" >
        <div class="intro__innerAbout" align="center">

          <h1 class="intro__titleAbout" align="center">You are registered!</h1>

          <div class="button_paddingAbout">
            <a @click="$router.push('/login')">
              <input class="btnAbout" type="submit" name="" value="Login">
            </a>
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

/* Button */

.btn_of_about_start{
  font-size: 20px;
  color: white;
  text-decoration: none;
  cursor: none;
  transition: color .1s linear;
  border: 0;
  background: none;

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
}

.btnAbout {
  display: inline-block;
  vertical-align: top;
  padding: 10px 30px;
  cursor: none;
  margin: auto;
  text-align: center;

  background: none;

  border: 3px solid #fff;
  border-radius: 24px;

  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  height: 60px;
  width: 150px;
  transition: width 1s, background-color 1s;
}

.btnAbout:hover {
  background-color: #fff;
  color: deepskyblue;
  width: 240px;

}
.button_paddingAbout{
  padding-bottom: 35px;
}

/* Container */

.containerAbout {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

}

.containerAbout:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);
  opacity: .5;
}

/*Intro*/

.introAbout {

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
.intro__innerAbout {

}
.intro__titleAbout {

  text-decoration: underline;
  font-family: "Comic Sans MS";
  font-style: italic;
  font-size: 45px;
  padding-top: 15px;
  color: white;

}

</style>
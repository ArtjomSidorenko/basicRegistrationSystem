<template>
  <div id="app">


    <div class="introAbout" >
      <div class="containerAbout" align="center" >
        <div class="intro__innerAbout" align="center">
          <h1 class="intro__titleAbout" align="center">About!</h1>
          <h1 class="intro__suptitleAbout" style="color: white">I am Artjom and so on. Dream up the text.</h1>
          <div class="button_paddingAbout"> <a @click="$router.push('/')"> <input class="btnAbout" type="submit" name="" value="Home"></a></div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>

</script>
<style>

/* Button */
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
  width: 200px;

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
.intro__suptitleAbout {
  font-family: Arial, sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  text-transform: none;
  color: #ffffff;
  padding-top: 5px;
}

</style>
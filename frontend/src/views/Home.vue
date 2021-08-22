<template>
  <div id="app">


    <div class="intro" >
      <div class="container" align="center" >
        <div class="intro__inner" align="center">

          <h2 class="intro__suptitle" style="color: white">Hello again!</h2>

          <h1 class="intro__title" align="center">Welcome to the hub</h1>

          <div class="button_padding">
            <a @click="$router.push('/startPage')">
              <input class="btn" type="submit" name="" value="Get Started">
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

</script>
<style>

/* Buttons */
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
  padding-bottom: 35px;
}

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

</style>
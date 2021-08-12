<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <div class="cursor"></div>

    <div class="intro" >
      <div class="container" >
        <div class="intro__inner" >
          <h2 class="intro__suptitle" style="color: white">Login/Register</h2>
          <h1 class="intro__title">Welcome to the hub</h1>
          <input class="btn" type="submit" name="" value="Get Started">

        </div>
      </div>
    </div>
    <div class="cursor"></div>



    </div>
</template>
<script>
/*let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
  console.log(e)
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}*/
/*const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = `${x}px`;
  cursor.style.left = `${y}px`;
});*/
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  console.log(e)
  cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")


});
</script>
<style>
/* Button */
.btn {

  display: inline-block;
  vertical-align: top;
  padding: 8px 30px;
  margin: auto;
  text-align: center;

  background: none;

  border: 0;
  border: 3px solid #fff;
  border-radius: 24px;

  font-size: 24px;
  font-weight: 750;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  height: 70px;
  width: 300px;
  transition: width 1s, background-color 1s;
}

.btn:hover {
  background-color: #fff;
  color: deepskyblue;
  width: 480px;


}

/* cursor */
.cursor{
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  pointer-events: none;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}
cursor::after{
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  border: 8px solid gray;
  border-radius: 50%;
  opacity: .5;
  top: -8px;
  left: -8px;
}


/* Intro */
.container{
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: center;
  margin: auto;
  width: 60%;
  height: 800px;
  line-height: 30px;
  font-size: 20px;


}

.container:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);
  background-color: white;
  opacity: .5;
}

.intro{

}

.intro__inner {
padding: 200px;

}

.intro__suptitle{
  letter-spacing: 5px;
}

.intro__title {
  color: #fff;
  font-size: 80px;
  font-weight: 650;
  text-transform: uppercase;
  line-height: 1;

}

body {
  background: url("../pictures/bgWithCirclesXS.jpg") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  color: white;

}
* {
  font-family: "Do Hyeon", sans-serif;
}

/* Scroll */

::-webkit-scrollbar {
  width: 10px;
  background: white;

}

::-webkit-scrollbar-track {
  background: white;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background:#5f2eea;
  border-radius: 10px;

}

::-webkit-scrollbar-thumb:hover {
  background: #4200ff;
  border-radius: 10px;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>

    <div class="intro" >


    <div class="cursor"></div>



    </div>
  </div>
</template>
<script>

export default {
  mounted() {

    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".intro h1, h2, input")
    window.addEventListener('mousemove', cursor);

    function cursor(e){
      console.log(e)
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
    }
    navLinks.forEach(link =>{
link.addEventListener("mouseleave", () =>{
  mouseCursor.classList.remove("link-grow");
  link.classList.remove("hovered-link")
});


});
    navLinks.forEach(link =>{
      link.addEventListener("mouseover", () =>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link")
      });

    });

  }
}
</script>
<style>
/*select */
::selection {
  color: white;
  background-color: deepskyblue;

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
  transition-property: background, transform;
  z-index: 0;
  transform-origin: 100% 100%;
  transform: translate(-50%, -50%);
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

.link-grow {
  transform: scale(2);
  background: #5f2eea;
}

.hovered-link{
  color: white;

}

/* Intro */






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
  overflow: hidden;
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

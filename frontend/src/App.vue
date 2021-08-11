<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->


    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <h2 class="intro__suptitle">Creative Template</h2>
          <h1 class="intro__title">Welcome to MoGo</h1>

          <a class="btn" href="#">Get started</a>
        </div>
      </div>
    </div>
    <div class="cursor"></div>
    <div class="cursor2"></div>


    </div>
</template>
<script>
let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
  console.log(e)
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}
</script>
<style>
/* cursor */
cursor{
  position: absolute;
  left: 0;
  top: 0;
  border: 2px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: .1s;
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
  text-align: center;
}

.container:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);
  background-color: white;
  opacity: .5;
}

intro{

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

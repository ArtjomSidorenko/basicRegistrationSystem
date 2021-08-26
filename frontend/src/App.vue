<template>
  <div id="app">

    <router-view/>

    <div class="cursor"></div>

    <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="auto" objectbg="#999793" opacity="80" name="circular"></loader>

  </div>

</template>
<script>

export default {


  mounted() {

    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".intro h1, h2, input")
    window.addEventListener('mousemove', cursor);

    function cursor(e){
      /*console.log(e)*/
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
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  transition-property: background, transform;
  transform-origin: 100% 100%;
  z-index: 1;
  backdrop-filter: blur(10px);

}

.link-grow {
  transform: scale(1.5);
  background: white/*#5f2eea*/;
  cursor: none;
}

.hovered-link{
  color: blue;
  cursor: none;
}

/*body*/

body {
  background: url("../pictures/bgWithCirclesXS.jpg") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  cursor: none;
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

</style>
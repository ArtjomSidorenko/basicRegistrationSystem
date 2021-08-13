<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->

    <div class="intro" >

      <div class="container" >
        <div class="intro__inner" >
          <h2 class="intro__suptitle" style="color: white">Hello again!</h2>
          <h1 class="intro__title">Welcome to the hub</h1>
          <a @click="$router.push('/startPage')"> <input class="btn" type="submit" name="" value="Get Started"></a>
        </div>
      </div>
    </div>




  </div>
</template>
<script>


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
  height: 550px;
  line-height: 30px;
  font-size: 20px;
  align-items: center;


}

.container:hover ~ .cursor{
  transform: translate(-50%, -50%) scale(1.5);

  opacity: .5;
}

.intro{
  align-items: center;
}

.intro__inner {
  padding: 100px;

}

.intro__suptitle{
  letter-spacing: 5px;
}

.intro__title {
  color: #fff;
  font-size: 70px;
  font-weight: 550;
  text-transform: uppercase;
  line-height: 1;

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

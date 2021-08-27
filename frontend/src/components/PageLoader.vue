<template>

  <transition name="fade">
    <div v-if="show" class="preloader">
      <p>hello</p>
      <div class="circles">

        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>

      </div>
    </div>


  </transition>

</template>


<script>
export default {
  name: 'preloader',
  data() {
    return {
      show: true
    }

  },

  mounted() {
    this.showToggle()
  },

  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 1000);
    }
  }
}

</script>


<style>

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
}

p {
  color: #5f2eea;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  letter-spacing: 0px;
  word-spacing: -5px;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
}

.circles {
  display: flex;
  margin-top: 1rem;
}

.circle {
  width: 1rem;
  height: 1rem;
  margin: 1rem;
  background-color: #5f2eea;
  border-radius: 50%;

  animation-name: scaleIn;
  animation-duration: 1s;
  transform: scale(0);
}


@keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
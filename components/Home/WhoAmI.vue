<template>
  <div class="who-am-i">
    <div class="overlay">
      <div>
        <h1 class="font-semi-bold">Ahmed Refaat</h1>
        <p class="font-medium">SOFTWARE ENGINEER, FRONT END DEVELOPER.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.who-am-i {
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/images/who-am-i.jpeg");
  background-position: center center;
  background-origin: content-box;
  background-repeat: no-repeat;
  position: relative;


  .overlay {
    padding-inline: 1rem;
    color: #fff;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(#000, .1);

    h1 {
      font-size: 7rem;
      text-transform: uppercase;
      letter-spacing: 10px;
      line-height: 1.3;

      @media (max-width: 991px) {
        font-size: 6rem;
        line-height: 1.2;
      }

      @media (max-width: 767px) {
        font-size: 4.5rem;
        line-height: 1.1;
      }
    }

    p {
      font-size: 1.6rem;
      letter-spacing: 2px;
      word-spacing: 10px;
      text-transform: uppercase;

      @media (max-width: 991px) {
        font-size: 1.3rem;
      }

      @media (max-width: 767px) {
        font-size: 1.1rem;
      }
    }
  }
}
</style>

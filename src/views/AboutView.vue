<template>
  <div class="about w-100 h-100 d-flex align-items-center justify-content-center">
      <div class="about-container p-4 mt-5">
        <div class="about-title-holder d-flex align-items-center pt-4">
          <h4 class="about-title w-25">ABOUT ME</h4>
        </div>
        <div class="about-paragraph-container d-flex flex-column align-items-start ps-3 pt-4 text-black">
          <h3 class="ms-4">Hello, I am Lazola Makubalo</h3>
          <p class="about-paragraph ps-4">
            I am a software developer based in Cape Town. I love building amazing apps.
            Navigate to my <router-link to="/projects" class="">project section</router-link> to 
            see some of the projects that I have built.
            If you have any project that you need help with. Don't hesitate to <router-link to="/contact">contact</router-link> me.
          </p>
        </div>
        <div class="d-flex">
          <div class="w-50 h-100 d-flex flex-column align-items-start ps-5 pt-4">
            <h5 class="web-dev-title decorated">Web Development</h5>
            <p class="text-start">I develop websites and web applications using various programming languages</p>
          </div>
          <div class="w-50 h-100 d-flex flex-column align-items-start ps-3 pt-4">
            <h5 class="ui-ux-title decorated">UI/UX Design</h5>
            <p class="text-start">I also learnt UI/UX design at LifeChoices</p>
          </div>
        </div>
        <div class="d-flex flex-column align-items-start ps-5 pt-3">
          <h4 class="decorated text-black interests">Interests</h4>
          <div class="interests-container list-unstyled">
            <li class="py-2 text-start ps-3">
              <i class="bi bi-music-note-beamed  icons"></i>
              Music
            </li>
            <li class="py-2 text-start ps-3">
              <i class="bi bi-pencil-fill  icons"></i>
              Drawings
            </li>
            <li class="py-2 text-start ps-3">
              <i class="bi bi-book-half icons"></i>
              Reading
            </li>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  a.router-link-exact-active {
    text-decoration: none;
    color: black;
  }
  .about-container {
    height: 65%;
    width: 55%;
    background: rgba(255, 255, 255, 0.755);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(3, 3fr);
  }

  .about-title {
    scale: .9;
    position: relative;
    z-index: 1;
  }

  .about-title::before, .interests-title::before {
    content: '';
    width: 35px;
    height: 35px;
    background: var(--theme-color);
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    translate: -1rem -.2rem
  }

  .about-paragraph {
    text-align: left;
    width: 90%;
  }

  .decorated {
    position: relative;
    z-index: 1;
  }

  .decorated::before {
    content: '';
    height: 30px;
    width: 30px;
    background: var(--theme-color);
    border-radius: 50%;
    position: absolute;
    translate: -.7rem -.2rem;
    z-index: -1;
  }

  .interests{
    position: relative;
    scale: .95;
  }

  .interests-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
  }

  .icons {
    padding-right: .5rem;
    scale: 3
  }
</style>
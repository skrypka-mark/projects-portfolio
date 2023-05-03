<script setup>
</script>

<template>
  <main>
    <div class="container">
      <div class="about-developer">
        <div class="image-container">
          <img src="../img/AvatarImages/Mark.png" alt="image front-end-developer">
        </div>

        <div class="contact-info-container">
          <h3 class="name-developer">Mark Skrypka</h3>

          <p class="employment-branch">Front-end developer</p>

          <div class="contact-info">
            <ul>
            <li class="title-list">Telegram :</li>
            <li class="title-list">Phone :</li>
            <li class="title-list">E-mail :</li>
          </ul>

          <ul>
            <li class="info">@infy0</li>
            <li class="info">+380992462363</li>
            <li class="info">divineript@gmail.com</li>
          </ul>
          </div>
        </div>

        <div class="global-info-container">
          <div>
            <h4 class="title-global-list-info">Frames</h4>

            <ul class="info-list">
              <li>ReactJS</li>
              <li>NuxtJS</li>
              <li>NodeJS</li>
              <li>Vue3</li>
            </ul> 
          </div>

          <div>
            <h4 class="title-global-list-info">Languages</h4>

            <ul class="info-list">
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>SCSS / SASS</li>
              <li>CSS3</li>
            </ul> 
          </div>

          <div>
            <h4 class="title-global-list-info">More...</h4>

            <ul class="info-list">
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Trello</li>
              <li>Figma</li>
              <li>Linkedin</li>
            </ul> 
          </div>

          <div>
            <h4 class="title-global-list-info">Skills</h4>

            <ul class="info-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul> 
          </div>
        </div>
      </div>

      <hr>

      <div class="about-developer">
        <div class="image-container">
          <img src="../img/AvatarImages/Aleksey.png" alt="image front-end-developer">
        </div>

        <div class="contact-info-container">
          <h3 class="name-developer">Aleksey Samarskiy</h3>

          <p class="employment-branch">UX | UI designer</p>

          <div class="contact-info">
            <ul>
            <li class="title-list">Telegram :</li>
            <li class="title-list">Phone :</li>
            <li class="title-list">E-mail :</li>
          </ul>

          <ul>
            <li class="info">@simpleeuser</li>
            <li class="info">+380633734830</li>
            <li class="info">divineript@gmail.com</li>
          </ul>
          </div>
        </div>

        <div class="global-info-container">
          <div>
            <h4 class="title-global-list-info">Frames</h4>

            <ul class="info-list">
              <li>ReactJS</li>
              <li>Vue3</li>
            </ul> 
          </div>

          <div>
            <h4 class="title-global-list-info">Languages</h4>

            <ul class="info-list">
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>SCSS / SASS</li>
              <li>CSS3</li>
            </ul> 
          </div>

          <div>
            <h4 class="title-global-list-info">More...</h4>

            <ul class="info-list">
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Trello</li>
              <li>Figma</li>
            </ul> 
          </div>

          <div>
            <h4 class="title-global-list-info">Skills</h4>

            <ul class="info-list">
              <li>UX design</li>
              <li>UI design</li>
              <li>Mobile first</li>
              <li>Adaptation</li>
              <li>Animation</li>
              <li>Geometric</li>
              <li>Design mobile app</li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>

.container {
  max-width: 1030px;
  margin: 45px 45px 0 45px;
  display: flex;
  justify-content: space-between;
}

.about-developer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 436px;
}

.contact-info-container {
  width: 50%;
}

.name-developer {
  font-weight: 600;
  color: #fff;
  font-size: 16px;
}

.emloyment-branch {
  font-weight: 300;
  font-size: 14px;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.title-list {
  font-size: 12px;
  color: #fff;
  font-weight: 500;
}

.info {
  font-size: 12px;
  font-weight: 300;
}

.global-info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 48px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.global-info-container div {
  width: 50%;
  padding: 15px;
}

.title-global-list-info {
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
}

.info-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.info-list li {
  margin-right: 21px;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 10px;
}

</style>
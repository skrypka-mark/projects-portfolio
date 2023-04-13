<script setup>
</script>

<template>
  <main>
    <div class="container">
      <div class="gallery">
        <img src="/src/assets/images/Project1.png" alt="" class="title-image-project">
        <div class="image-collage">
          <img src="/src/assets/images/Project3.png" alt="" class="gallery-image-project">
          <img src="/src/assets/images/Project3.png" alt="" class="gallery-image-project">
          <img src="/src/assets/images/Project3.png" alt="" class="gallery-image-project">
          <img src="/src/assets/images/Project3.png" alt="" class="gallery-image-project">
        </div>
      </div>

      <div class="about-project">
        <div class="info-content">
          <div class="points">
            <ul>
              <li class="point-list">GitHub</li>
              <li class="point-list">Figma</li>
              <li class="point-list">Tech Stack</li>
              <li class="point-list">Description</li>
            </ul>
          </div>

          <div class="project-info">
            <a href="https://github.com/test-project.git">https://github.com/test-project.git</a>
            <a href="https://www.figma.com/file/Wk2jbvoalPVHTLaLdLwlu2/Our-portfolio-project?node-id=1%3A46&t=NyiY0AegEXjXSmoY-1">https://www.figma.com/file/Wk2jbvoalsdhh323h76f6fnjjs...</a>
            <p>Vue.js, NUXT, SCSS, NodeJs</p>
            <p>MakerPlace is a platform that allows users to buy and sell 3D models online. The marketplace connects buyers and sellers in a secure and efficient way, allowing for easy transactions and reliable delivery of 3D models. <br> Users can create an account and upload their own 3D models for sale. They can set the price, description, and specifications of their models. Buyers can browse through the available 3D models, view images and specifications, and purchase the ones that they want.</p>
          </div>
        </div>

        <a class="open-website" href="">Open website</a>
      </div>

      <div class="detail">

      </div>
    </div>
  </main>
</template>

<style>
.gallery {
  width: 430px;
  height: 550px;
}

.title-image-project {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.image-collage {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.gallery-image-project {
  width: 205px;
  height: 130px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.about-project {
  width: 580px;
  height: 250px;
}

.info-content {
  display: flex;
  justify-content: space-between;
}

.point-list {
  font-size: 14px;
  font-style: 600;
  color: #fff;
  margin-bottom: 8px;
}

.open-website {
  margin-top: 60px;
  position: absolute;
  padding: 5px 15px;
  background: #9428BA;
  text-decoration: none;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
}

.project-info {
  width: 80%;
}

.project-info a {
  font-size: 14px;
  color: #5BA8DF;
  font-style: 400;
  margin-bottom: 10px;
}

.project-info p {
  font-size: 14px;
  color: #fff;
  opacity: 75%;
  font-style: 400;
  margin-bottom: 10px;
}

.project-info:last-child {
  height: 155px;
  overflow: hidden;
}

.details {
  width: 100px;
  height: 100px;
  background: #000;
}

</style>
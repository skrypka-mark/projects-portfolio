<script setup>
import { nanoid } from 'nanoid';
import { isValidURL } from '@/utils/isValidURL';

const getFullImagePath = name => new URL(`/src/assets/images/${name}`, import.meta.url).href;

const galleryImages = [
    { image: getFullImagePath(`Project1.png`) },
    { image: getFullImagePath(`Project3.png`) },
    { image: getFullImagePath(`Project3.png`) },
    { image: getFullImagePath(`Project3.png`) },
    { image: getFullImagePath(`Project3.png`) }
];

const characteristics = [
    { value: 'github', label: 'Github' },
    { value: 'figma', label: 'Figma' },
    { value: 'techStack', label: 'Tech Stack' },
    { value: 'description', label: 'Description' }
];

const characteristicsDetails = {
    github: 'https://github.com/test-project.git',
    figma: 'https://www.figma.com/file/Wk2jbvoalPVHTLaLdLwlu2/Our-portfolio-project?node-id=1%3A46&t=NyiY0AegEXjXSmoY-1',
    techStack: 'Vue.js, NUXT, SCSS, NodeJs',
    description: 'MakerPlace is a platform that allows users to buy and sell 3D models online. The marketplace connects buyers and sellers in a secure and efficient way, allowing for easy transactions and reliable delivery of 3D models. <br /><br /> Users can create an account and upload their own 3D models for sale. They can set the price, description, and specifications of their models. Buyers can browse through the available 3D models, view images and specifications, and purchase the ones that they want.'
};
</script>

<template>
    <div class='container'>
        <div class='gallery'>
            <img :src='galleryImages[0].image' alt='' class='title-image-project' />
            <div class='image-collage'>
                <img
                    :key=nanoid()
                    v-for='{ image } in galleryImages.slice(1)'
                    :src=image
                    class='gallery-image-project'
                    alt=''
                />
            </div>
        </div>

        <div class='about-project'>
            <div class='info-content'>
                <ul class='points'>
                    <li :key=value v-for='{ value, label } in characteristics' class='point-list'>
                        <p>
                            {{ label }}
                        </p>
                    </li>
                </ul>

                <ul class='project-info'>
                    <li :key=value v-for='{ value } in characteristics' class='point-list'>
                        <a :href=characteristicsDetails[value] target='_blank' v-if=isValidURL(characteristicsDetails[value])>
                            {{ characteristicsDetails[value] }}
                        </a>
                        <p v-else-if='value === `description`' v-html=characteristicsDetails[value] />
                        <p v-else>
                            {{ characteristicsDetails[value] }}
                        </p>
                    </li>
                </ul>
            </div>

            <a class='open-website' href=''>
                Open website
            </a>
        </div>

        <div class='detail'>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    display: flex;
    gap: 20px;
    padding: $container-gap;
}

.gallery {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 430px;
}

.title-image-project {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
}

.image-collage {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.gallery-image-project {
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.about-project {
    width: 50%;
}

.info-content {
    display: flex;
    justify-content: space-between;
}

.point-list {
    font-size: 14px;
    font-style: 600;
    line-height: 17px;
    color: white;
}

.open-website {
    padding: 7px 15px;
    background: #9428BA;
    text-decoration: none;
    border-radius: 5px;

    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    color: white;
}

.points {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.project-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;

    line-height: 17px;

    & p {
        font-size: 14px;
        color: white;
        opacity: 75%;
        font-style: 400;
    }
    & a {
        display: block;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        font-size: 14px;
        color: #5BA8DF;
        font-style: 400;
    }
    & > .point-list:last-child {
        height: 150px;
        overflow-y: hidden;

        --mask-height: 10px;
        --mask-image-content: linear-gradient(
            to bottom,
            black var(--mask-height),
            transparent
        );
        --mask-size-content: 100%;

        mask-image: var(--mask-image-content);
        -webkit-mask-image: var(--mask-image-content);

        mask-size: var(--mask-size-content);
        -webkit-mask-size: var(--mask-size-content);

        mask-position: 0 0, 100% 0;
        -webkit-mask-position: 0 0, 100% 0;

        mask-repeat: no-repeat, no-repeat;
        -webkit-mask-repeat: no-repeat, no-repeat;
    }
}

.details {
    width: 100px;
    height: 100px;
    background: black;
}
</style>

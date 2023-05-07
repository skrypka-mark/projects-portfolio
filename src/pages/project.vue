<script setup>
import { ref } from 'vue';
import { breakpointsTailwind, useBreakpoints, useElementHover } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { isValidURL } from '@/utils/isValidURL';

const LINK_MAX_LENGTH = 55;

const descriptionContentRef = ref(null);
const isDescriptionContentHovered = useElementHover(descriptionContentRef);
const breakpoints = useBreakpoints(breakpointsTailwind);

const getFullImagePath = name => new URL(`/src/assets/images/${name}`, import.meta.url).href;
const trimLink = link => link.length >= LINK_MAX_LENGTH ? `${link.slice(0, LINK_MAX_LENGTH).trim()}…` : link;

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
    description: 'MakerPlace is a platform that allows users to buy and sell 3D models online. The marketplace connects buyers and sellers in a secure and efficient way, allowing for easy transactions and reliable delivery of 3D models. <br /><br /> Users can create an account and upload their own 3D models for sale. They can set the price, description, and specifications of their models. Buyers can browse through the available 3D models, view images and specifications, and purchase the ones that they want. MakerPlace is a platform that allows users to buy and sell 3D models online. The marketplace connects buyers and sellers in a secure and efficient way, allowing for easy transactions and reliable delivery of 3D models. <br /><br /> Users can create an account and upload their own 3D models for sale. They can set the price, description, and specifications of their models. Buyers can browse through the available 3D models, view images and specifications, and purchase the ones that they want.'
};

const detailsList = [
    { value: true, label: 'mobile first' },
    { value: true, label: 'bem metodology' },
    { value: true, label: 'adaptation' },
    { value: true, label: 'rewievs' },
    { value: false, label: 'database' },
    { value: false, label: 'back-end' },
    { value: false, label: 'cms' },
    { value: false, label: 'SPA' },
    { value: false, label: 'hosting' }
];
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
                    <li
                        :key=value
                        v-for='{ value, label } in characteristics'
                        class='point-list'
                    >
                        <p>
                            {{ label }}
                        </p>
                    </li>
                </ul>

                <ul class='project-info' ref=descriptionContentRef>
                    <li :key=value v-for='{ value } in characteristics' class='point-list'>
                        <a :href=characteristicsDetails[value] target='_blank' v-if=isValidURL(characteristicsDetails[value])>
                            {{ trimLink(characteristicsDetails[value]) }}
                        </a>
                        <div v-else-if='value === `description`' class='description-container'>
                            <p v-html=characteristicsDetails[value] class='description-content' :class='{ "hovered": isDescriptionContentHovered }' />
                            <Transition name='fade' mode='out-in'>
                                <div class='description-content__overlay' v-if=isDescriptionContentHovered>
                                    <p v-html=characteristicsDetails[value] />
                                </div>
                            </Transition>
                        </div>
                        <p v-else>
                            {{ characteristicsDetails[value] }}
                        </p>
                    </li>
                </ul>
            </div>

            <a class='open-website' href=''>
                Open website
            </a>

            <div class='details'>
                <h4 class='title'>Details</h4>
                <section class='details-list'>
                    <div class='block-1'>
                        <div :key='detail.label' v-for='detail in detailsList.slice(0, 5)' class='details-list__item'>
                            <p>
                                {{ detail.label }}
                            </p>
                        </div>
                    </div>
                    <div class='block-2'>
                        <div :key='detail.label' v-for='detail in detailsList.slice(5)' class='details-list__item'>
                            <p>
                                {{ detail.label }}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}



.container {
    display: flex;
    gap: 20px;
    margin: $container-gap;
}

.gallery {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    flex-basis: 40%;
}

.title-image-project {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.image-collage {
    --gallery-gap: 20px;

    display: flex;
    flex-wrap: wrap;
    gap: var(--gallery-gap);
}

.gallery-image-project {
    width: calc(50% - calc(var(--gallery-gap) / 2));
    object-fit: cover;
    border-radius: 10px;
}

.about-project {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-start;
    flex-shrink: 2;
    flex-basis: 60%;
    gap: 20px;

    & > .info-content {
        display: flex;
        justify-content: space-between;

        & > .points {
            display: flex;
            flex-direction: column;
            gap: 10px;

            & > .point-list {
                position: relative;
                font-size: 14px;
                font-style: 600;
                line-height: 17px;
                color: white;

                & p {
                    font-weight: 600;
                }
            }
        }
    }

    & > .open-website {
        width: fit-content;
        padding: 7px 15px;
        background: #9428BA;
        text-decoration: none;
        border-radius: 5px;

        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        color: white;
    }

    & > .details {
        background: rgba(0, 0, 0, .1);

        padding: 15px 20px;
        border-radius: 10px;

        & > .title {
            font-family: 'Inter';
            font-size: 14px;
            font-weight: 600;
            line-height: 17px;
        }
        & > .details-list {
            display: flex;
            gap: 20px;
        }
        .details-list__item p {
            font-family: 'Inter';
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
        }
    }
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
        // max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        font-size: 14px;
        color: #5BA8DF;
        font-style: 400;
    }
    .description-container {
        position: relative;

        .description-content {
            height: 115px;
            overflow-y: hidden;
            transition: .3s ease-out;

            margin: -10px;
            padding: 10px;
            margin-right: 0;

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

            mask-position: 0 0;
            -webkit-mask-position: 0 0;

            mask-repeat: no-repeat;
            -webkit-mask-repeat: no-repeat;

            &.hovered {
                // height: 130px;
                opacity: 0;
                // filter: blur(4px);
                // scale: 1.05;
                // transform: translateY(10px);
            }
        }
        .description-content__overlay {
            height: fit-content;
            position: absolute;
            inset: 0;

            margin: -10px;
            padding: 10px;
            margin-right: 0;
            margin-top: 0;

            background: rgba(0, 0, 0, .1);
            backdrop-filter: blur(4px);
            border-radius: 5px;
        }
    }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const containerRef = ref(null);

const scrollYHandler = () => {
    const overlay = document.getElementById('overlay');
    containerRef.value.style.top = `${overlay.scrollTop * -1 + 55}px`;
};

onMounted(() => {
    const overlay = document.getElementById('overlay');
    const overlayChild = document.getElementById('overlay-child');

    overlay.addEventListener('scroll', scrollYHandler);
    
    if(overlayChild) {
        const containerHeight = getComputedStyle(containerRef.value).height;
        overlayChild.style.height = containerHeight;
    }
});
onBeforeUnmount(() => {
    const overlay = document.getElementById('overlay');
    overlay.removeEventListener('scroll', scrollYHandler);
});
</script>

<template>
    <section :class='$style.container' ref=containerRef>
        <slot />
    </section>
</template>

<style lang='scss' module src='./styles.module.scss' />

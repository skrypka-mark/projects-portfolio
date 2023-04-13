<script setup>
defineProps({
    id: String,
    name: String,
    image: String
});
</script>

<template>
    <div :class='$style[`portfolio-card`]'>
        <RouterLink :to='{ name: `project`, params: { id } }' :class='$style[`link-image`]'>
            <img :class='$style[`project-image`]' :src=image :alt=name />
            <div :class='$style.overlay' />
        </RouterLink>
        <h3 :class='$style[`project-title`]'>
            {{ name }}
        </h3>
    </div>
</template>

<style lang='scss' module src='./styles.module.scss' />

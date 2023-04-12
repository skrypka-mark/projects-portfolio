<script setup>
defineProps({
    checked: { type: Boolean, default: false },
    onToggle: Function
});
</script>

<template>
    <label :class='$style.container'>
        <input type='checkbox' :checked=checked @change=onToggle />
        <span :class='$style.slider'></span>
    </label>
</template>

<style lang='scss' module src='./styles.module.scss' />

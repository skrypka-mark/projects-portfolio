<script setup>
import Container from '@/components/Container';
</script>

<template>
    <main class='main-layout'>
        <Container>
            <slot />
        </Container>
    </main>
</template>

<style lang='scss' scoped>
.main-layout {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 55px;
    // @include main-container;
}
</style>

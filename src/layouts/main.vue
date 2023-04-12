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
    @include main-container;
}
</style>

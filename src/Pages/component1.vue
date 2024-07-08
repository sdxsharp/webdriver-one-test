<template>
    <button @click="count++">increase number</button>
    <p class="count">{{ count }}</p>
</template>

<script setup>
    import { ref } from 'vue'

    const count = ref(0)
</script>
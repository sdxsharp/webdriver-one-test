<template>
    <input type="checkbox" v-model="checked" />
    <p class="checked">{{ checked ? 'yes' : 'no' }}</p>
</template>

<script setup>
    import { ref } from 'vue'
    const checked = ref(false)
</script>
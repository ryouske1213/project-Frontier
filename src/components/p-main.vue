<script setup>
import { computed, toRef } from 'vue'
const props = defineProps(['Database'])

const returnProps = computed(() => {
    console.log(props)
})

</script>

<template lang="pug">
div
  div(class="w-full justify-items-center mt-20")
    div(class="w-full h-20 bg-slate-100" v-for="link in props")
        p(class="text-black") {{ returnProps }}
</template>

<script setup>
import {ref,reactive, computed, onMounted} from 'vue'
import axios from 'axios'

const data = ref()

const Database = computed(() => {
    axios.get('https://randomuser.me/api/?results=3010').then((res) => data.value = res) 
    return data
})
</script>

<template lang="pug">
div
  div(class="w-full grid grid-cols-6 justify-items-center mt-20")
    div(class="w-40 h-40 bg-slate-100")
    p(class="text-white") {{ Database }}
</template>

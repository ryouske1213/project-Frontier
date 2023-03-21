<script setup>
import Header from '../components/p-header.vue'
import Main from '../components/p-main.vue'
import {ref,reactive, computed, onMounted} from 'vue'
import axios from 'axios'

const data = ref()

const Database = onMounted(async() => {
    await axios.get('https://randomuser.me/api/?results=15').then((res) => data.value = res) 
    return data.value
})
</script>

<template lang="pug">
div(class="w-full h-screen bg-slate-500")
  Header(:Database="data")
  Main(:Database="data?.data.results")
</template>

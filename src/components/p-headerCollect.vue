<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
</script>

<template lang="pug">
div
  div(class="")
    div(class="w-full")
      div(class="w-full flex justify-between items-center py-5 pl-10 bg-slate-200")
        div(class="flex")
          p(class="px-2" @click="router.push('/')") ALL 
          p(class="px-2" @click="router.push('/collect')") Favorite

</template>

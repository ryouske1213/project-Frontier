<script setup>
import {ref, computed} from 'vue'
const props = defineProps(['returnModel'])


const Close = ref(false)

const returnPropsModel = computed(() => {
    return props.returnModel
})
</script>

<template lang="pug">
div
  div(class="fixed bg-black bg-opacity-75 left-0 top-0 bottom-0 right-0 overscroll-contain" v-if="Close")
    div(class="w-full h-full flex justify-center items-center")
      div(class="relative w-1/2 h-1/2 bg-zinc-800 rounded-lg")
        img(class="absolute w-10 h-10 -right-10 -top-10 bg-slate-300 rounded-xl cursor-pointer" src="../assets/X.png")
        div(class="w-full flex justify-center mt-10")
          img(:src="returnPropsModel.picture.large")
        div(class="w-full")
          div(class="w-full text-white text-2xl font-bold p-2 text-center mt-10")
            p(class="mt-4") 性別: {{ returnPropsModel.gender }}
            p(class="mt-4") 姓名: {{ returnPropsModel.name.title }} {{ returnPropsModel.name.first }}
            p(class="mt-4") 國家: {{ returnPropsModel.location.country }}
            p(class="mt-4") 城市: {{ returnPropsModel.location.city }}
            p(class="mt-4") 信箱: {{ returnPropsModel.email }}
</template>

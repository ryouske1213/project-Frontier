<script setup>
import Model from '../components/p-model.vue'
import { ref, computed } from 'vue'

const props = defineProps(['Datas'])
const onModel = ref(false)
const returnModel = ref()

const returnProps = computed(() => {
  return props.Datas
})

const onClickModel = (link) => {
  returnModel.value = link
  onModel.value = !onModel.value

  console.log(onModel.value)
}



</script>

<template lang="pug">
div
  Model(:returnModel="returnModel" v-if="onModel")
  div(class="w-full h-full mt-20 grid grid-cols-5 gap-3 justify-items-center")
    div(v-for="link, index in returnProps")
      div(class="w-full h-full relative" @click="onClickModel(link)")
        div(class="bg-Card w-full h-full col-span-2 overflow-hidden rounded-lg bg-cover bg-no-repeat opacity-50")
        div(class=" absolute top-0 w-full flex justify-center items-center")
          div(class="w-[280px] h-[330px] border border-gray-600 m-3 rounded-lg")
            div(class="w-full flex justify-center mt-6")
              img(class="rounded-lg" :src="link.picture.large")
            p(class="text-black font-bold text-2xl mt-2 text-center") 姓名: {{ link.name.title }} {{ link.name.first }}
            p(class="text-black text-2xl font-bold mt-2 text-center") 信箱
            p(class="w-full text-black font-bold px-2 text-center") {{ link.email }}
            p(class="w-full text-black font-bold text-2xl mt-2 text-center") 城市: {{ link.location.city }}
</template>

<style scoped>
.bg-Card {
  width: 300px;
  height: 350px;
  background-image: url('../assets/Card.png');
}
</style>
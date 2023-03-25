<script setup>
import Model from '../components/p-model.vue'
import { ref, computed } from 'vue'

const props = defineProps(['Datas'])
const onModel = ref(false)
const replaceColor = ref(false)
const collectIcon = ref(true)
const returnModel = ref()

const returnProps = computed(() => {
  return props.Datas
})

const materialModel = (link) => {
  returnModel.value = link
}

const onOpenModel = () => {
  onModel.value = !onModel.value
  console.log(onModel.value = !onModel.value)
}

const onReplaceColor = () => {
  replaceColor.value = !replaceColor.value
}

function changeCollect(){
  collectIcon.value = !collectIcon.value
}




</script>

<template lang="pug">
div
  div(class="w-full flex justify-end")
    div(:class="replaceColor ? 'w-10 h-10 mx-2 cursor-pointer bg-red-400' : 'w-10 h-10 mx-2 cursor-pointer bg-slate-600'" @click="onReplaceColor")
    div(:class="replaceColor ? 'w-10 h-10 mx-2 cursor-pointer bg-slate-600' : 'w-10 h-10 mx-2 cursor-pointer bg-red-400'" @click="onReplaceColor")
  div(:class="replaceColor ? 'w-full h-full mt-10 grid grid-cols-5 gap-3 justify-items-center' : 'w-full h-full mt-10 grid grid-cols-1 justify-items-center'")
    div(v-for="link, index in returnProps")
      div(class="w-full h-full relative" @click="materialModel(link)")
        div(:class="replaceColor ? 'bg-Card w-full h-full col-span-2 overflow-hidden rounded-lg bg-cover bg-no-repeat opacity-50' : 'w-[1200px]'")
        div(:class="replaceColor ? 'absolute top-0 w-full flex justify-center items-center' : 'w-full bg-gray-500 rounded-lg'")
          div(:class="replaceColor ? 'w-[280px] h-[330px] border border-gray-600 m-3 rounded-lg': 'w-full'")
            div(class="w-full flex justify-center mt-6")
              img(class="rounded-lg" :src="link.picture.large")
            p(class="text-black font-bold text-2xl mt-2 text-center") 姓名: {{ link.name.title }} {{ link.name.first }}
            p(class="text-black text-2xl font-bold mt-2 text-center") 信箱
            p(class="w-full text-black font-bold px-2 text-center") {{ link.email }}
            p(class="w-full text-black font-bold text-2xl mt-2 text-center") 城市: {{ link.location.city }}
            div(class="w-full flex justify-end pr-2" @click="changeCollect()")
              img(class="absolute w-7" src='../assets/collect-icon.png')
              img(class="absolute w-7" src='../assets/collect-black-icon.png')
              //- div(class="w-full flex justify-end pr-2" @click="changeCollect()" v-if="collectIcon = false")

    Model(:returnModel="returnModel" v-if="onModel" @onOpenModel="onOpenModel")
</template>

<style scoped>
.bg-Card {
  width: 300px;
  height: 350px;
  background-image: url('../assets/Card.png');
}
/* .showCollect {
  background-image: url('../assets/collect-icon.png');
}
.hiddenCollect {
  background-image: url('../assets/collect-black-icon.png');
} */
</style>
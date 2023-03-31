<script setup>
import HeaderCollect from "../../components/p-headerCollect.vue";
import { useRoute } from "vue-router";
import { ref, computed, onMounted, reactive } from "vue";

// const cart = JSON.parse(localStorage.getItem("collectData", JSON.stringify(cart))) ?? []
const ObtainData = localStorage.setItem("cart") ?? []
const returnObtaiData = localStorage.getItem("cart", JSON.parse(ObtainData)) ?? []

// const ObtainData = JSON.parse(localStorage.getItem("collectData", JSON.stringify(returnLocal.value))) ?? []
// console.log(carts)

onMounted(() => {
  ObtainData
  returnObtaiData
  // window.localStorage.setItem('collectData', JSON.stringify(ObtainData))
  // console.log(returnLocal = ObtainData)
})

</script>

<template lang="pug">
div
  HeaderCollect

  div(class="w-full h-full flex my-5 mx-5")
    //- div(class=" bg-zinc-500 rounded-lg" )
    //-   img(class="absolute w-10 h-10 -right-10 -top-10 bg-slate-300 rounded-xl cursor-pointer" src="../assets/X.png")
    //-   div(class="w-full flex justify-center mt-10")
    //-     img(:src="ObtainData.picture.large")
    //-   div(class="w-full")
    //-     div(class="w-full text-white text-sm font-bold p-2 text-center mt-2")
    //-       p(class="mt-4") 性別: {{ ObtainData.gender }}
    //-       p(class="mt-4") 姓名: {{ ObtainData.name.title }} {{ ObtainData.name.first }}
    //-       p(class="mt-4") 國家: {{ ObtainData.location.country }}
    //-       p(class="mt-4") 城市: {{ ObtainData.location.city }}
    //-       p(class="mt-4") 信箱: {{ ObtainData.email }}
  div {{ returnObtaiData }}
</template>

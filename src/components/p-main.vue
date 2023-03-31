<script setup>
import Model from "../components/p-model.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ref, computed, toRaw, reactive, onMounted, toRef } from "vue";

const router = useRouter();
const props = defineProps(["Datas"]);
const onModel = ref(false);
const replaceColor = ref(false);
const collectIcon = ref(true);
const returnModel = ref();
const count = ref(0);
const id = ref(1);
const data = ref();
// const cart = ref()

onMounted(async () => {
  await axios
    .get("https://randomuser.me/api/?results=50")
    .then((res) => (data.value = res));
  return data.value;
});

const mergeID = computed(() => {
  const _pairingData = toRaw(data.value?.data.results) ?? [];
  const _mergeData = toRaw(props.Datas) ?? _pairingData;
  return _mergeData;
});

const materialModel = (link) => {
  returnModel.value = link;
  onModel.value = !onModel.value;
};

const onReplaceColor = () => {
  replaceColor.value = !replaceColor.value;
};

function changeCollect(link) {
  // const carts = [link];
  // const cart = [];
  // const myArray = [];

  // // carts.forEach((item) => {
  // //   console.log(item)
  // // })

  // cart.push({
  //   id: id.value,
  //   count: count.value,
  //   data: carts,
  // });

  // for(let i = 0; i < cart.length; i++) {
  //   myArray.push([i].length++)
  // }

  // const localCarts = localStorage.setItem("carts", JSON.stringify(cart)) ?? cart;
  // console.log(myArray);

  let myArray = [1, 2, 3];

  myArray.forEach(function (item, index, array) {
    array[index] = item + index;
  });

  console.log(myArray); // [2, 3, 4]
  // console.log(toRaw(mergeID))

  // localStorage.getItem("cart") ?? []
  // returnModel.value = link
  // router.push('./collect')
  // console.log(pushLocalData)
}

function onButtonModel() {
  onModel.value = false;
}
</script>

<template lang="pug">
div
  Model(:returnModel="returnModel" v-if="onModel" class=" relative z-10" @onButtonModel="onButtonModel")
  div(class="w-full flex justify-end")
    div(:class="replaceColor ? 'w-10 h-10 mx-2 cursor-pointer bg-red-400' : 'w-10 h-10 mx-2 cursor-pointer bg-slate-600'" @click="onReplaceColor")
    div(:class="replaceColor ? 'w-10 h-10 mx-2 cursor-pointer bg-slate-600' : 'w-10 h-10 mx-2 cursor-pointer bg-red-400'" @click="onReplaceColor")
  div(:class="replaceColor ? 'w-full h-full mt-10 grid grid-cols-5 gap-3 justify-items-center' : 'w-full h-full mt-10 grid grid-cols-1 justify-items-center'")
    div(v-for="link in mergeID")
      div(class="w-full h-full relative")
        div(:class="replaceColor ? 'bg-Card w-full h-full col-span-2 overflow-hidden rounded-lg bg-cover bg-no-repeat opacity-50' : 'w-[1200px]'")
        div(:class="replaceColor ? 'absolute top-0 w-full flex justify-center items-center' : 'w-full bg-gray-500 rounded-lg'")
          div(:class="replaceColor ? 'w-[280px] h-[330px] border border-gray-600 m-3 rounded-lg': 'w-full'" @click="materialModel(link)")
            div(class="w-full flex justify-center mt-6")
              img(class="rounded-lg" :src="link.picture.large")
            p(class="text-black font-bold text-2xl mt-2 text-center") 姓名: {{ link.name.title }} {{ link.name.first }}
            p(class="text-black text-2xl font-bold mt-2 text-center") 信箱
            p(class="w-full text-black font-bold px-2 text-center") {{ link.email }}
            p(class="w-full text-black font-bold text-2xl mt-2 text-center") 城市: {{ link.location.city }}
          div(class="absolute w-full bottom-3 left-64")
            img(class="w-7" src='../assets/collect-icon.png' @click="changeCollect(link)")
              //- img(class="absolute w-7" src='../assets/collect-black-icon.png' @click="changeCollect(link)")
              //- div(class="w-full flex justify-end pr-2" @click="changeCollect()" v-if="collectIcon = false")
  //- Model(:returnModel="returnModel")

</template>

<style scoped>
.bg-Card {
  width: 300px;
  height: 350px;
  background-image: url("../assets/Card.png");
}
/* .showCollect {
  background-image: url('../assets/collect-icon.png');
}
.hiddenCollect {
  background-image: url('../assets/collect-black-icon.png');
} */
</style>

<script setup>
import Main from '../components/p-main.vue'
import { onMounted, ref, toRaw, computed, reactive} from 'vue'
import axios from 'axios'

const data = ref()


onMounted(async() => {
  await axios.get('https://randomuser.me/api/?results=50').then((res) => data.value = res) 
  return data.value
})


const showDatas = ref()
const exportData = ref()
const Datas = ref()
const pageSize = ref([10, 30, 50])
const currentPage2 = ref(1)
const pageSize2 = ref(30)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const returnDatas = computed(() => {
  exportData.value = toRaw(data.value?.data?.results)
  return exportData.value
})


const pageTotal = computed(() => {
  return toRaw(data?.value?.data?.info.results)
})

const page = computed(() => {
  return toRaw(data?.value?.data?.info.page)
})

const handleSizeChange = (currentIndex) => {
  Datas.value = returnDatas.value.slice(0, currentIndex)
}

const handleCurrentChange = (currentIndex) => {
  Datas.value = returnDatas.value.slice((currentIndex - 1) * pageSize2.value, currentIndex * pageSize2.value)
}


</script>

<template lang="pug">
div
  div(class="")
    div(class="w-full")
      div(class="w-full flex justify-between items-center py-5 pl-10 bg-slate-200")
        div(class="flex")
          p(class="px-2") ALL 
          p(class="px-2") Favorite
        div(class="flex")
          div(class="demo-pagination-block flex mr-10")
            el-pagination(
              v-model:current-page="currentPage2"
              v-model:page-size="pageSize2"
              :page-sizes="pageSize"
              :small="small"
              :disabled="disabled"
              :background="background"
              layout="sizes, prev, pager, next"
              :total="pageTotal"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            )

            
            button(class="w-8 ml-6 bg-red-400")
            button(class="w-8 ml-6 bg-slate-600")
  Main(:Datas="Datas")

</template>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['Database'])
const returnResult = props?.Database?.data?.info?.results

const Result = ref(Number(returnResult))

const currentPage2 = ref(5)
const pageSize2 = ref()
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (number) => {
  console.log(number)
}
const handleCurrentChange = (number) => {
  console.log(number)
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
              :small="small"
              :disabled="disabled"
              :background="background"
              layout="sizes, prev, pager, next"
              :total="30"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            )
            
            button(class="w-8 ml-6 bg-red-400")
            button(class="w-8 ml-6 bg-slate-600")

</template>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
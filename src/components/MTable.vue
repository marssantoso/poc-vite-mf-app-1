<template>
  <el-table ref="tableRef" row-key="date" :data="data" style="width: 100%">
    <el-table-column
      v-for="field in fields"
      :key="field.key"
      :prop="field.key"
      :label="field.label"
      :width="field.width"
    />
  </el-table>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, defineProps } from 'vue'
import type { TableInstance } from 'element-plus'
import { useFetch } from '@vueuse/core'

interface User {
  id: number
  username: string
  name: string
  address: string
  email: string
}

interface Field {
  key: string
  label: string
  width?: number
}

const tableRef = ref<TableInstance>()
const props = defineProps<{
  fields: Field[]
  source: string
  transformer?: (raw: any[]) => any
}>()

const data = ref<User[]>([])

onBeforeMount(async () => {
  const fetchOpts = {
    afterFetch(ctx: { data: any }) {
      if (!ctx.data || !props.transformer) return ctx
      ctx.data = props.transformer(ctx.data)
      return ctx
    },
  }
  const res = await useFetch(props.source, fetchOpts).get().json()
  data.value = res.data.value
})
</script>

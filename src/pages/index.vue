<template>
  <h1>App 1</h1>
  <p>This page is served by a child service in a micro FE architecture.</p>
  <MTable :fields="FIELDS" :source="tableSource" :transformer="tableTransformer" />
  <RouterLink to="/app-1/subpage">Go To SubPage</RouterLink>
</template>

<script setup lang="ts">
import MTable from '@/components/MTable.vue'

const FIELDS = [
  { key: 'id', label: 'ID', width: 50 },
  { key: 'username', label: 'Username', width: 200 },
  { key: 'name', label: 'Name', width: 200 },
  { key: 'email', label: 'Email', width: 300 },
  { key: 'address', label: 'Address' },
]
const tableSource = `${import.meta.env.API_HOST_APP_1}/users`
const tableTransformer = (raw: any[]) =>
  raw.map(({ id, name, username, email, address }) => ({ id, name, username, email, address: address.city }))
</script>

<style scoped lang="scss"></style>

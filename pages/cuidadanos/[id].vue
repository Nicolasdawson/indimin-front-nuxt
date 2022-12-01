<template>
  <div class="overflow-x-auto relative sm:rounded-lg">
    <table class="min-w-full leading-normal">
  <thead>
    <tr>
      <th scope="col" class="py-3 px-6">Id</th>
      <th scope="col" class="py-3 px-6">Nombre</th>
      <th scope="col" class="py-3 px-6">Apellido</th> 
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
      <td scope="row" class="py-4 px-6">{{cuidadano.cuidadanoId}}</td>
      <td class="py-4 px-6">{{cuidadano.nombre}}</td>
      <td class="py-4 px-6">{{cuidadano.apellido}}</td>
    </tr>
  </tbody>
</table>
  </div>

  <thead>
    <tr>
      <th class="py-3 px-6">Tareas</th>
    </tr>
  </thead>

  <div class="overflow-x-auto relative sm:rounded-lg">
    <table class="min-w-full leading-normal">
  <thead>
    <tr>
      <th scope="col" class="py-3 px-6">Id</th>
      <th scope="col" class="py-3 px-6">Nombre</th>
      <th scope="col" class="py-3 px-6">Apellido</th> 
    </tr>
  </thead>
  <tbody>
    <tr v-for="tarea in cuidadano.tareas" class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
      <td scope="row" class="py-4 px-6">{{tarea.descripcion}}</td>
      <td class="py-4 px-6">{{new Date(tarea.fecha).toLocaleString()}}</td>
    </tr>
  </tbody>
</table>
  </div>

</template>

<script setup>
  import { GetCuidadano } from '../../services/cuidadanosService.js'
  const { id } = useRoute().params
  const { data:cuidadano } = await GetCuidadano(id);
  definePageMeta({
    layout: "cuidadanos",
  })
</script>

<style>
</style>


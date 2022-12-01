<template>
  <div class="flex items-tight justify-right mb-4">
    <button @click="showModal=true">Crear</button>
  </div>
  <div class="overflow-x-auto relative sm:rounded-lg">
    <table class="min-w-full leading-normal">
  <thead>
    <tr>
      <th scope="col" class="py-3 px-6">Id</th>
      <th scope="col" class="py-3 px-6">Nombre</th>
      <th scope="col" class="py-3 px-6">Apellido</th> 
      <th scope="col" class="py-3 px-6"></th>
      <th scope="col" class="py-3 px-6"></th>
      <th scope="col" class="py-3 px-6"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p in cuidadanos" class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
      <td scope="row" class="py-4 px-6">{{p.cuidadanoId}}</td>
      <td class="py-4 px-6">{{p.nombre}}</td>
      <td class="py-4 px-6">{{p.apellido}}</td>
      <td><NuxtLink :to="`/cuidadanos/${p.cuidadanoId}`" class="margin-right:16px font-medium text-green-600 dark:text-green-500 hover:underline">Detalle</NuxtLink></td>
      <td><NuxtLink @click="(ModalUpdateAction(p.cuidadanoId))" class="margin-right:16px font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</NuxtLink></td>
      <td><NuxtLink @click="(ModalDeleteAction(p.cuidadanoId))" class="margin-right:16px font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</NuxtLink></td>
    </tr>
  </tbody>
</table>
<SavedModal v-show="showModal" @close-modal="showModal = false" />
<DeleteModal v-show="showModalDelete" @close-modal="showModalDelete = false" :cuidadanoId=idCuidadano />
<UpdateModal v-show="showModalUpdate" @close-modal="showModalUpdate = false" :cuidadanoId=idCuidadano />
  </div>
</template>

<script setup>
import { GetCuidadanos } from '../../services/cuidadanosService.js'
const { data: cuidadanos } = await GetCuidadanos()
definePageMeta({
    layout: "cuidadanos",
  })
</script>

<script>
import SavedModal from '~/components/SavedModal.vue'
import DeleteModal from '~/components/DeleteModal.vue'
import UpdateModal from '~/components/UpdateModal.vue'
export default {
  components: { SavedModal, DeleteModal, UpdateModal  },
  data() {
    return {
      showModalDelete: false,
      showModal: false,
      showModalUpdate: false,
      idCuidadano: 0,
      nombre: '',
      apellido: '',
    }
  },
  methods:{
    ModalDeleteAction(id){
      this.idCuidadano = id,
      this.showModalDelete = true
    },
    ModalUpdateAction(id){
      this.idCuidadano = id,
      this.showModalUpdate = true;
    }
  }
}

</script>

<style>
button {
  background-color: #66BB6A;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
<template>
  
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div>
        <h6>Creacion Cuidadano</h6>
      </div>
      <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nombre
      </label>
      <input v-model="nombre" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Nombre">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Apellido
      </label>
      <input v-model="apellido" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Apellido">
    </div>
    <div><button @click=" async() => await Crear()">Crear</button></div>
  </div>
</form>
    </div>
  </div>
</template>
  <script>
  import { CreateCuidadano } from '../services/cuidadanosService.js'
  export default {
    data() {
      return {
        apellido: "",
        nombre: ""
      }
    },
  methods:{
    async Crear() {
      try{
        let cuidadano = { nombre: this.nombre, apellido: this.apellido };
        let result = await CreateCuidadano(cuidadano);
      } catch (error){
        console.log(error)
      }
    }
  }
}

</script>

<style scoped>

form {
    display: inline-block;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 350px;
  width: 600px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

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
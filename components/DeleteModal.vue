<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div>
          <h6>¿Deseas Eliminar el cuidadano?</h6>
        </div>
        <div>
            <div><button @click=" async() => await Crear()">Crear</button></div>
        </div>
      </div>
    </div>
  </template>
    <script>
import { DeleteCuidadano } from '../services/cuidadanosService.js'
    export default {
        props:['cuidadanoId'],
    methods:{
      async Crear() {
        try{
          let id = this.cuidadanoId;
          let response = await DeleteCuidadano(id);
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
<template>
  <div class="container">
    <h1>La materia</h1>
    <p>Make: {{materia.make}}</p>
    <p>Body: {{materia.body}}</p>
    <p>Price: {{materia.price}}</p>
    <p>Year: {{materia.year}}</p>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from "vue";
import materias from "../data/data.json"


const materia = ref(null)
const route = useRoute()
const {id} = route.params

onBeforeMount(() =>{
  materia.value = materias.find(m => m.id === parseInt(id)) //Convertir el string a int

})
</script>

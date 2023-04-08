<template>

  <v-container>
    <v-row justify="center" style="margin-bottom: 5px;">
      <v-col class="d-flex align-center justify-center" cols="12">
        <span class="titulo-home">MATERIAS INSCRITAS</span>
      </v-col>
    </v-row>
  </v-container>

  <div>
    <TarjetaMateria v-for="(item, index) in items" :key="index" :titulo="item.titulo.toString()" :profesor="item.profesor.toString()"
                    :salon="item.salon.toString()" :dias="item.dias.toString()" :horario="item.horario.toString()">
    </TarjetaMateria>
  </div>

</template>

<script >
import TarjetaMateria from '@/components/TarjetaMateria.vue'
import datosJson from '@/data/data.json'

export default {
  components:{
    TarjetaMateria,
  },
  data() {
    return {
        items: datosJson,
    };
  },



};

</script>

<style>


</style>

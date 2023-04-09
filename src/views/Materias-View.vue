<template>
  <NavBarAlumno></NavBarAlumno>
  <v-container>
    <v-row justify="center" style="margin-bottom: 5px;">
      <v-col class="d-flex align-center justify-center" cols="12">
        <span class="titulo-home">MATERIAS INSCRITAS</span>
      </v-col>
    </v-row>
  </v-container>

  <div>
    <TarjetaMateria v-for="(item, index) in items" :key="index" :titulo="item.titulo" :profesor="item.profesor"
                    :salon="item.salon" :dias="item.dias" :horario="item.horario">
    </TarjetaMateria>
  </div>

</template>

<script >
import TarjetaMateria from '@/components/TarjetaMateria.vue'
import NavBarAlumno from '@/components/NavBarAlumno.vue'
import firebase from "firebase/compat";

export default {
  components:{
    TarjetaMateria,
    NavBarAlumno
  },
  data() {
    return {
        items:[]
    };
  },
  mounted() {
    const db = firebase.firestore();
    const materiasRef = db.collection('materias');

    // Obtener todos los documentos de la colección
    materiasRef.get().then((querySnapshot) => {
      const materias = [];
      querySnapshot.forEach((doc) => {
        materias.push(doc.data());
      });
      this.items = materias; // Asignar los datos al array de Vue
    });
  },

};

</script>

<style>


</style>

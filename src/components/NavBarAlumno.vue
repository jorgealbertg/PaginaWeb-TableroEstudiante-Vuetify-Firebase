<template>
  <div>
    <v-app-bar color="#384FFE">
      <v-container fluid>
        <v-row class="d-flex justify-start align-center">
            <v-col class="text-left" cols="6">
              <v-img src="@/imgs/logoTec.png" height="70" width="200"></v-img>
            </v-col>
            <v-col class="d-inline-flex align-center justify-end" cols="6">
              <v-btn style="color: white" to="/">
                Inicio
              </v-btn>
              <v-btn style="color: white" to="/Materias">
                Lista de materias
              </v-btn>
              <v-btn @click="logout">
                <img src="@/imgs/logout-variant.svg" height="25" width="25" alt="hola">
              </v-btn>
            </v-col>

        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from "firebase/compat";
import router from '@/router'

export default {
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        router.push("/Login")

      }).catch((error) => {
        // En caso de ocurrir un error al cerrar sesión
        console.error(error);
      });
    }
  }
};

</script>

<style>

</style>

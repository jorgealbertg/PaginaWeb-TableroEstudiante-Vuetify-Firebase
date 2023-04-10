<template>
  <div>
    <v-app-bar color="#384FFE">
      <v-container fluid>
        <v-row class="d-flex justify-start align-center flex-nowrap">
          <v-col class="text-left" cols="6">
            <v-img src="@/imgs/logoTec.png" height="70" width="200"></v-img>
          </v-col>
          <v-col class="d-inline-flex align-center justify-end" cols="6">
            <v-btn style="color: white" to="/Login">
              Iniciar Sesión
            </v-btn>
            <v-btn style="color: white" to="/Register">
              Registrarse
            </v-btn>
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>



</script>

<style>

</style>

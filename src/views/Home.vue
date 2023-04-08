<template>
  <v-app>
    <v-container fill-height>
      <v-row class="flex-wrap" justify="center" align="center">
        <v-col class="pt-2 text-center" cols="12">
          <span class="titulo-home">INFORMACIÓN DEL ALUMNO</span>
        </v-col>

      </v-row>
      <v-row class="d-flex justify-center align-center pt-2 flex-sm-row flex-column">
        <v-col class="text-center" cols="12">
          <v-avatar size="200" image="@/img/juanEscutia.jpeg"></v-avatar>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center align-center pt-2 flex-sm-row flex-column">
        <v-col class="text-left" offset="1" cols="3">
          <span class="titulo-campos ">Nombre Completo <br> </span>
          <span class="datos-alumno ">Juan Escutia</span>
        </v-col>

        <v-col class="text-left" offset="1" cols="3">
          <span class="titulo-campos ">Matrícula <br> </span>
          <span class="datos-alumno ">A01361234</span>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center align-center pt-2 flex-sm-row flex-column">
        <v-col class="text-left" offset="1" cols="3">
          <span class="titulo-campos ">Correo Institucional  <br> </span>
          <span class="datos-alumno ">A01361234@tec.mx</span>
        </v-col>
        <v-col class="text-left" offset="1" cols="3">
          <span class="titulo-campos ">Carrera <br> </span>
          <span class="datos-alumno ">ISC</span>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center align-center pt-2 flex-sm-row flex-column">
        <v-col class="text-left" offset="1" cols="3">
          <span class="titulo-campos ">Correo Personal <br></span>
          <span class="datos-alumno ">murioporlapatria@gmail.com</span>
        </v-col>
        <v-col class="text-left" offset="1" cols="3">
        </v-col>
      </v-row>

    </v-container>
  </v-app>

</template>

<script setup>

</script>

<style>
.bordes-marcados{
  border: 1px solid black;
}
.titulo-home{
  font-size: 35px;
  font-weight: bold;
  color: #384FFE;
}

.titulo-campos{
  font-size: 25px;
  font-weight: bold;
  color: #384FFE;
  text-align:start;
}

.datos-alumno{
  font-size: 25px;
  font-weight: bold;
  color: #787C9D;
  text-align:start;
}

</style>

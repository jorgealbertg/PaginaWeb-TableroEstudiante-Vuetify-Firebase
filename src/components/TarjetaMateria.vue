<template>
<v-dialog v-model="showDialog">
  <v-card class="mx-auto" style="max-width: 900px; width: 100%; border-radius: 25px;" >

    <v-container>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="6">
          <v-card-title>
            <span class="titulo-dialog">{{titulo}}</span>
          </v-card-title>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-1">
      <v-row>
        <v-col>
          <v-card-text>
          <span class="datos-dialog">
          Profesor: {{profesor}} <br> <br>
          Salón: {{salon}} <br> <br>
          Días: {{dias}} <br> <br>
          Horario: {{horario}} <br> <br>
          </span>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <v-card-actions>
            <v-btn @click="showDialog = false" class="ml-auto titulo-btn">CERRAR</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</v-dialog>

<v-container class="mb-0">
  <v-row justify="center" align="center">
    <v-col>
      <v-card style="max-width: 1100px; border-radius: 12px;" class="mx-auto" elevation="3">
        <v-card-title>
          <span class="titulo-campos">{{titulo}}</span>
        </v-card-title>
        <v-card-subtitle>
          <span class="datos-alumno">Profesor: {{profesor}}</span>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn @click="showDialog = true" class="ml-auto titulo-btn">
            <span> Ver Detalles</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>

</template>

<script>

export default {
  props: {
    titulo: String,
    profesor: String,
    salon: String,
    dias: String,
    horario: String
  },
  data() {
    return {
      showDialog: false,
    };
  },
}

</script>

<style>

.titulo-campos{
  font-size: 22px;
  font-weight: bold;
  color: #384FFE;
  text-align:start;
}

.titulo-btn{
  font-size: 18px;
  font-weight: bold;
  color: #384FFE;
  text-align:start;
  text-transform: none;
  font-family: 'Roboto', sans-serif;
}

.datos-alumno{
  font-size: 22px;
  font-weight: bold;
  color: #787C9D;
  text-align:start;
}

.datos-dialog{
  font-size: 24px;
  font-weight: bold;
  color: #787C9D;
  text-align:start;
}


.titulo-dialog{
  font-size: 26px;
  font-weight: bold;
  color: #384FFE;
  text-align: center;
}

</style>

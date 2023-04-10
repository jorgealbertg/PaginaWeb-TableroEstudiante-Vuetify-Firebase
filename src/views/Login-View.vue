<template>
  <NavBarAuth></NavBarAuth>

  <v-dialog ref="dialog" v-model="dialogVisible">
    <v-card class="mx-auto" style="max-width: 900px; width: 100%; border-radius: 25px;">
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="6">
          <v-card-title>
            <span class="titulo-dialog">Error de Inicio de sesión</span>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="12">
          <v-card-text>
            <span class="text-dialog">Las credenciales son inválidas, es posible que la contraseña sea incorrecta o el email no tenga una cuenta registrada.</span>
          </v-card-text>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn color="primary" @click="dialogVisible = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <div style="display: flex; align-items: center; justify-content: center; height: 80vh;">
    <v-card class="card-tamano">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col class="d-flex justify-center align-center">
            <v-card-title>
              <span class="titulo-home">INICIO DE SESIÓN</span>
            </v-card-title>
          </v-col>
        </v-row>



        <v-card-text>
          <v-form @submit.prevent="login">
            <v-row>
              <v-text-field
                v-model="email"
                label="Correo Institucional"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                v-model="password"
                label="Contraseña"
                :rules="passwordRules"
                type="password"
                required
              ></v-text-field>
            </v-row>

            <v-row>
                <v-btn  class="boton" type="submit" color="#384FFE" :disabled="!emailRules.every(rule => rule(this.email) === true) || !passwordRules.every(rule => rule(this.password) === true)">Iniciar sesión</v-btn>
            </v-row>

          </v-form>

        </v-card-text>
      </v-container>
    </v-card>
  </div>





</template>

<script>
import firebase from "firebase/compat";
import router from '@/router'
import NavBarAuth from '@/components/NavBarAuth.vue'

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "El correo electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo electrónico debe tener un formato válido",
      ],
      passwordRules: [
        (v) => (v && v.length >= 6) || "La contraseña debe tener al menos 6 caracteres",
      ],
      dialogVisible: false,
    };
  },

  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        router.push('/');
        })
        .catch((error) => {
          // En caso de que haya un error al iniciar la sesión
          this.dialogVisible = true; // Abrimos el diálogo de error
        });
    },
  },
  components:{
    NavBarAuth
  }
};
</script>

<style>

.card-tamano{
  max-width: 900px;
  width: 100%;
  border-radius: 25px;
}

.titulo-home{
  font-size: 35px;
  font-weight: bold;
  color: #384FFE;
  text-align:center;
}

.boton{
  width: 100%;
  color: white;

}

.titulo-dialog{
  font-size: 26px;
  font-weight: bold;
  color: #384FFE;
  text-align: center;
}

.text-dialog {
  font-size: 20px;
  color: black;
  text-align: center;
}

</style>

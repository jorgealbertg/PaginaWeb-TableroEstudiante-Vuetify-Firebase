<template>
  <NavBarAuth></NavBarAuth>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="email"
        label="Correo Institucional"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Contraseña"
        :rules="passwordRules"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Iniciar sesión</v-btn>
    </v-form>

    <v-dialog ref="dialog" v-model="dialogVisible">
      <v-card>
        <v-card-title>Error de inicio de sesión</v-card-title>
        <v-card-text>Credenciales inválidas</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogVisible = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
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
          // Error de inicio de sesión
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

</style>

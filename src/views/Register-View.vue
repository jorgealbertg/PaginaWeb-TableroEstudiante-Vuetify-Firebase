<template>
  <NavBarAuth></NavBarAuth>

  <v-dialog v-model="showSuccessDialog">
    <v-card>
      <v-card-title>Registro exitoso</v-card-title>
      <v-card-text>
        <p>¡Felicidades! Tu registro se ha completado exitosamente.</p>
        <p>Serás redirigido automaticamente</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" to="/Login">Entendido</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-card>
    <v-card-title>Crea una cuenta</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="fullName" label="Nombre Completo" required></v-text-field>
        <v-text-field v-model="matricula" label="Matrícula" required></v-text-field>
        <v-text-field v-model="institutionalEmail" label="Correo Institucional" required :rules="emailRules"></v-text-field>
        <v-text-field v-model="personalEmail" label="Correo Personal" required :rules="emailRules"></v-text-field>
        <v-text-field v-model="password" label="Contraseña" type="password" required :rules="passwordRules"></v-text-field>
        <v-text-field v-model="confirmPassword" label="Confirmar Contraseña" type="password" required :rules="confirmPasswordRules"></v-text-field>
        <v-checkbox v-model="termsAndConditions" label="Aceptar términos y condiciones" required :rules="termsRules"></v-checkbox>
        <v-btn color="primary" @click="register" :disabled="!valid">Registrarse</v-btn>
      </v-form>
    </v-card-text>
  </v-card>


</template>


<script>
import NavBarAuth from "@/components/NavBarAuth.vue";
import firebase from "firebase/compat";
import router from '@/router'

export default {
  components:{
    NavBarAuth
  },
  data() {
    return {
      fullName: '',
      matricula: '',
      institutionalEmail: '',
      personalEmail: '',
      password: '',
      confirmPassword: '',
      termsAndConditions: false,
      valid: false,
      emailRules: [
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico correctamente'
      ],
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirmar la contraseña es requerido',
        v => (v && v === this.password) || 'Las contraseñas no coinciden'
      ],
      termsRules: [
        v => v === true || 'Debe aceptar los términos y condiciones'
      ],

      // estado del formulario aquí
      showSuccessDialog: false,
    }
  },
  methods: {
    register() {
      // Validar el formulario antes de enviar
      this.$refs.form.validate()

      // Verificar si el formulario es válido
      if (this.valid) {
        // Registrar el correo institucional y contraseña con Firebase Auth
        firebase.auth().createUserWithEmailAndPassword(this.institutionalEmail, this.password)
          .then(() => {
            // Guardar los datos adicionales del usuario en la base de datos de Firebase
            const db = firebase.firestore()
            db.collection('users').doc(this.institutionalEmail).set({
              fullName: this.fullName,
              matricula: this.matricula,
              personalEmail: this.personalEmail
            })
              .then(() => {
                this.showSuccessDialog = true;
                setTimeout(() => {
                  router.push('/Login')
                }, 5000);
              })
              .catch((error) => {
                // Ocurrió un error al guardar los datos en la base de datos de Firebase
                console.error(error)
              })
          })
          .catch((error) => {
            // Ocurrió un error al registrar el correo institucional y contraseña en Firebase Auth
            console.error(error)
          })
      }
    }
  }


};

</script>

<style>

</style>

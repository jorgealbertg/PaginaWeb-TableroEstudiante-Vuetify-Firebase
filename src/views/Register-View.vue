<template>
  <NavBarAuth></NavBarAuth>

  <v-dialog v-model="showSuccessDialog">
    <v-card class="mx-auto" style="max-width: 900px; width: 100%; border-radius: 25px;">
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="6">
          <v-card-title>
            <span class="titulo-dialog">Registro exitoso</span>
          </v-card-title>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="12">
          <v-card-text>
            <p class="text-dialog">¡Felicidades! Tu registro se ha completado exitosamente.</p>
            <p class="text-dialog">Serás redirigido automaticamente</p>
          </v-card-text>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn color="primary" to="/Login">De Acuerdo</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


  <v-dialog v-model="dialogVisible2">
    <v-card class="mx-auto" style="max-width: 900px; width: 100%; border-radius: 25px;">
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="6">
          <v-card-title>
            <span class="titulo-dialog">Error de Registro</span>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center justify-center" cols="12">
          <v-card-text>
            <span class="text-dialog">El registro no se pudo realizar debido a que el correo ya se encuentra asociado a un usuario existente dentro de la base de datos.</span>
          </v-card-text>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn color="primary" @click="dialogVisible2 = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
    <v-card class="card-tamano">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col class="d-flex justify-center align-center">
            <v-card-title>
              <span class="titulo-home">CREA UNA CUENTA</span>
            </v-card-title>
          </v-col>
        </v-row>

          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field v-model="fullName" label="Nombre Completo" required></v-text-field>
              <v-text-field v-model="matricula" label="Matrícula" required></v-text-field>
              <v-text-field v-model="institutionalEmail" label="Correo Institucional" required :rules="emailRules"></v-text-field>
              <v-text-field v-model="personalEmail" label="Correo Personal" required :rules="emailRules"></v-text-field>
              <v-text-field v-model="password" label="Contraseña" type="password" required :rules="passwordRules"></v-text-field>
              <v-text-field v-model="confirmPassword" label="Confirmar Contraseña" type="password" required :rules="confirmPasswordRules"></v-text-field>
              <v-row justify="start" >
                <v-col cols="12" class="py-0"  >
                  <v-checkbox v-model="termsAndConditions" label="Aceptar términos y condiciones" required :rules="termsRules"></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-btn class="boton" color="#384FFE" @click="register" :disabled="!valid">Registrarse</v-btn>
              </v-row>
            </v-form>
          </v-card-text>


      </v-container>

    </v-card>
  </div>



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
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe tener un formato válido'
      ],
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres'
      ],
      confirmPasswordRules: [
        v => !!v || 'La confirmación de la contraseña es requerida',
        v => (v && v === this.password) || 'Las contraseñas no coinciden'
      ],
      termsRules: [
        v => v === true || 'Debes aceptar los términos y condiciones'
      ],

      // estado del formulario aquí
      showSuccessDialog: false,
      dialogVisible2: false,
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
                }, 6000);
              })
              .catch((error) => {
                // En caso de error al guardar los datos en la base de datos de Firebase
                console.error(error)
              })
          })
          .catch((error) => {
            console.error(error)
            // En caso de error al registrar el correo institucional y la contraseña en Firebase
            this.dialogVisible2 = true;
          })
      }
    }
  }


};

</script>

<style>
.titulo-home{
  font-size: 35px;
  font-weight: bold;
  color: #384FFE;
  text-align:center;
}

.card-tamano{
  max-width: 900px;
  width: 100%;
  border-radius: 25px;
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

<template>
  <q-layout>
    <q-page-container class="bg-grey-10">
      <q-page class="row">
        <div
          :class="(orientation === 'portrait') ? 'col-12 flex items-end justify-center' : 'col-6 flex flex-center'"
          :style="(orientation === 'portrait') ? 'height: 55vh;' : ''">
          <img src="statics/juventudeina.png" width="260"/>
        </div>
        <div :class="(orientation === 'portrait') ? 'col-12 q-pt-sm q-px-xl' : 'col-6 flex flex-center'"  >

          <div class="">
            <q-input
              color="primary"
              class="q-mt-sm bg-white"
              input-class=" text-black"
              style="border-radius: 4px;"
              outlined
              dense
              dark
              v-model="email"
              type="text"
              placeholder="Email"
            />
            <q-input
              color="primary"
              class="q-mt-sm bg-white"
              input-class=" text-black"
              style="border-radius: 4px;"
              outlined
              dense
              dark
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              placeholder="Senha"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  color="orange-3"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-btn
              class="q-mt-sm full-width"
              color="primary"
              label="Login"
              @click="login"
            />

            <q-btn
              class=" q-mt-sm full-width"
              color="red-8"
              label="Registrar"
              @click="registerModel = true"
            />

            </div>
        </div>
        <div class="absolute text-grey-6" style="bottom: 0; font-size: 11px; width: 100%; text-align: center;">
          Letrinhas pequenas podem ser inseridas aqui.
        </div>
        <q-dialog v-model="registerModel" maximized class="bg-grey-10">
          <div>
            <div class=" bg-grey-10 fit q-pa-lg" style="font-size: 14px; text-align: center;">
              <div class="text-white q-pb-md" style="font-size: 26px;">
                Registrar
              </div>
              <div class="text-white" style="text-align: left;">
                Nome e Sobrenome
              </div>
              <q-input
                v-model="registerFullname"
                type="text"
                class="q-mt-sm bg-white"
                input-class=" text-black"
                style="border-radius: 4px;"
                outlined
                dense
                dark
                placeholder="Nome"
                color="primary"
              />
              <div class="text-white q-pt-sm" style="text-align: left;">
                Email
              </div>
              <q-input
                v-model="registerEmail"
                type="text"
                class="q-mt-sm bg-white"
                input-class=" text-black"
                style="border-radius: 4px;"
                outlined
                dense
                dark
                placeholder="Email"
                color="primary"
              />
              <div class="text-white q-pt-sm" style="text-align: left;">
                Senha
              </div>
              <q-input
                v-model="registerPassword"
                :type="isPwdB ? 'password' : 'text'"
                color="primary"
                class="q-mt-sm bg-white"
                input-class=" text-black"
                style="border-radius: 4px;"
                outlined
                dense
                dark
                placeholder="Senha"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwdB ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    color="orange-3"
                    @click="isPwdB = !isPwdB"
                  />
                </template>
              </q-input>
              <q-btn
                class=" q-mt-md full-width"
                color="red-8"
                label="Criar conta"
                @click="register"
              />
            </div>
            <div class="absolute" style="bottom: 0; width: 100%;" @click="registerModel = false">
              <q-btn
                class="bg-grey-10"
                icon="chevron_left"
                label="voltar"
                flat
                color="white"
                @click="registerModel = false"
              />
            </div>
          </div>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
import firebase from 'firebase'

export default {

  name: 'PageIndex',

  data (){
    return {
      email: '',
      password: '',
      isPwd: true,
      isPwdB: true,
      orientation: '',
      registerFullname: '',
      registerEmail: '',
      registerPassword: '',
      registerModel: false
    }
  },

  preFetch({ store, redirect }) {
    store.state.$firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        redirect('/home')
      }
    })
  },

  mounted (){
    this.doOnOrientationChange()
    window.addEventListener("orientationchange", this.doOnOrientationChange);

  },

  dismounted (){
    window.removeEventListener("orientationchange", this.doOnOrientationChange)
  },

  methods:{

    doOnOrientationChange (){
      this.orientation = ((screen.orientation.type.indexOf('portrait') === 0) ? 'portrait' : 'landscape')
    },

    login (){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },

    register (){
      let displayName = this.registerFullname
      firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword).then(function(user) {

        user.user.updateProfile({
            displayName: displayName
        }).then(function() {
            // Update successful.
        }, function(error) {
            // An error happened.
            console.log('error: ' + error);
        });
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        })
    }

  }

}
</script>

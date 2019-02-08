<template>
  <q-page class="column fit">
    <div class="col q-pa-md">
       Seja bem vindo ao aplicativo da Juventude INA!
    </div>
  </q-page>
  <!--q-page class="column fit">
    <div class="col" style="height: 100px;">
      Jumbotron
    </div>
    <div class="col row gutter-xs q-pa-sm">
        <div class="col-4">
          <q-btn
            class="fit"
            color="white"
            text-color="grey-8"
            icon=""
            label="Pregações"
          />
        </div>
        <div class="col-4">
          <q-btn
            class="fit"
            color="white"
            text-color="grey-8"
            icon=""
            label="Agenda"
          />
        </div>
        <div class="col-4">
          <q-btn
            class="fit"
            color="white"
            text-color="grey-8"
            icon=""
            label="Orações"
          />
        </div>
        <div class="col-4">
          <q-btn
            class="fit"
            color="white"
            text-color="grey-8"
            icon=""
            label="Pregações"
          />
        </div>
        <div class="col-4">
          <q-btn
            class="fit"
            color="white"
            text-color="grey-8"
            icon=""
            label="Pregações"
          />
        </div>
        <div class="col-4">
          <q-btn
            class="fit"
            color="white"
            text-color="grey-8"
            icon=""
            label="Pregações"
          />
        </div>
    </div>
  </q-page -->
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  preFetch ({ store, redirect }) {
    store.state.$firebase.auth().onAuthStateChanged(function(user) {
      if(!user) {
        redirect('/')
      }
    })
  }
}
</script>

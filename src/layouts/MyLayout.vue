<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="no-shadow">
      <q-toolbar
        class="bg-primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Juventude INA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="400"
      show-if-above
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list>
          <q-item clickable to="home" active-class="bg-orange-2 text-primary">
            <q-item-section avatar>
              <q-icon name="home" color="grey-7" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="schedule">
            <q-item-section avatar>
              <q-icon name="date_range" color="grey-7" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Agenda</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="prayers">
            <q-item-section avatar>
              <q-icon name="fas fa-pray" color="grey-7" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Orações</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="maintenance">
            <q-item-section avatar>
              <q-icon name="settings" color="grey-7" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Manutenção</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable @click.native="signOut()">
            <q-item-section avatar>
              <q-icon name="exit_to_app" color="grey-7" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Sair</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="statics/bg.png" style="height: 150px;">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="statics/cross_placeholder.png" class="bg-white">
          </q-avatar>
          <div class="text-weight-bold">{{user.displayName}}</div>
          <div>{{user.email}}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-10">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import firebase from 'firebase'

export default {
  name: 'MyLayout',

  data () {
    return {
      user: {},
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },

  mounted () {
    this.user = this.$store.state.$firebase.auth().currentUser
    if(this.user === null){
      this.user = {}
    }else{
      var loadData = setInterval(() =>{
        this.user = this.$store.state.$firebase.auth().currentUser
        if(this.user === null){
          this.user = {}
        }else{
          clearInterval(loadData)
        }
      },100)
    }
  },

  methods: {

    openURL,

    signOut (){
      firebase.auth().signOut();
    },

  },

  preFetch ({ store, redirect }) {
    store.state.$firebase.auth().onAuthStateChanged(function(user) {
      if(!user) {
        redirect('/')
      }
    })
  }

}
</script>

<style>

  .q-img__image {
    background-size: auto !important;
  }

</style>

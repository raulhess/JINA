<template>
  <q-page class="column fit">
    <q-list separator padding class="bg-grey-2">
      <q-item-label header>Próximos Eventos</q-item-label>
      <q-item>
        <q-item-section avatar>
          <q-item-label overline>23/03</q-item-label>
          <q-item-label>18:00</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>Reunião de Adolescentes</q-item-label>
          <q-item-label caption>Descrição breve do evento</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-item-label overline>23/03</q-item-label>
          <q-item-label>19:30</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>Reunião de Jovens</q-item-label>
          <q-item-label caption>Descrição breve do evento</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list separator padding class="bg-grey-2 q-mt-md">
      <q-item-label header>Pedidos de Oração do Dia</q-item-label>
    </q-list>
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

  data () {
    return {
      user: {},
    }
  },

  mounted () {

  },

  methods: {

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

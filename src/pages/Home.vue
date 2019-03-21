<template>
  <q-page class="column fit">
    <q-list separator padding class="col-auto q-mt-md bg-grey-2">
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

    <q-list separator padding class="col bg-grey-2 q-my-md">
      <q-item-label header>Pedidos de Oração do Dia</q-item-label>
      <q-item class="bg-red-8 text-white">
        <q-item-section>
          <q-item-label>Liderança da Igreja</q-item-label>
          <q-item-label caption class="text-grey-4">Pedido fixo</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label header>Pedidos de Oração Recentes</q-item-label>
      <q-item class="bg-blue-8 text-white">
        <q-item-section>
          <q-item-label overline class="text-grey-4">18/03/2019</q-item-label>
          <q-item-label>Cachorro do João</q-item-label>
          <q-item-label caption class="text-blue-2">Pedido feito por: <i>João Marcos</i></q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn round flat color="white" icon="add" />
        </q-item-section>
      </q-item>
      <q-item class="bg-blue-8 text-white">
        <q-item-section>
          <q-item-label overline class="text-grey-4">16/03/2019</q-item-label>
          <q-item-label>Perna da Maria</q-item-label>
          <q-item-label caption class="text-blue-2">Pedido feito por: <i>Maria Antônia</i></q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn round flat color="white" icon="done" />
        </q-item-section>
      </q-item>
      <q-item class="bg-blue-8 text-white">
        <q-item-section>
          <q-item-label overline class="text-grey-4">14/03/2019</q-item-label>
          <q-item-label>Colega de Trabalho</q-item-label>
          <q-item-label caption class="text-blue-2">Pedido anônimo</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn round flat color="white" icon="add" />
        </q-item-section>
      </q-item>
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

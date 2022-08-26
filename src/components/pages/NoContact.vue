<template>
  <div class="emoty__list">
    <img src="../../assets/book.svg" alt="book">
    <p>Nenhum contato foi criado ainda</p>
    <ButtonAdd/>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import ButtonAdd from '../forms/ButtonAdd.vue'

export default {
  name:'NoContact',
  components:{
    ButtonAdd
  },
  data() {
    return {
      openDialog: false,
    };
  },
  methods: {
    ...mapActions('modal', [
      'addContact'
    ]),
  }
}

</script>

<style>
  p{
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .emoty__list {
    margin-top: 10rem !important;
    margin: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }
</style>
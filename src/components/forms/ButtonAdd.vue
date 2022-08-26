<template>
  <button @click="addContact()" class="search__actions__add">
    <i class="fa-solid fa-plus"></i>
      Criar Contato
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name:'ButtonAdd',
  methods: {
    ...mapActions('modal', [
      'addContact'
    ]),
  }
}
</script>

<style>

</style>
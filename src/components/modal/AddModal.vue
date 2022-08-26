<template>
  <ModalTemplate>
    <template v-slot:title>
      Criar novo contato
    </template>
    <template v-slot:body>
      <Input
        v-model="obj.name"
        label="Nome"
        icon="persone"
        hint="Por favor digite seu nome"
        color="#2196F3"
      />
      <Input
        v-model="obj.email"
        label="Email"
        icon="persone"
        hint="Por favor digite seu nome"
        color="#2196F3"
      />
      <Input
        id="text-input"
        v-mask="'(##)#####-####'" 
        v-model="obj.cellphone"
        label="Telefone"
        icon="persone"
        hint="Por favor digite seu nome"
        color="#2196F3"
      />
    </template>
    <template v-slot:actions>
      <ButtomText :label="'Cancelar'" @closeModal="closeModal()" :actionName="'closeModal'"/>
      <ButtomRounded :label="'Salvar'" @saveModal="saveModal()" :actionName="'saveModal'" :disabled="!dirty"/>
    </template>
  </ModalTemplate>
</template>
<script>

import Input from '../forms/Input.vue'
import ButtomText from '../forms/ButtonText.vue'
import { mapActions } from 'vuex'
import ButtomRounded from '../forms/ButtonRounded.vue'
import ModalTemplate from '../modal/ModalTemplate.vue';

export default {
  components:{
    Input,
    ButtomRounded,
    ButtomText,
    ModalTemplate,
  },
  data:()=>({
    obj:{
      name: '',
      email: '',
      cellphone: '',
    },
    dirty: false
  }),
  created() {
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'modal/addContact') {
        this.visible = true;
      }
    });
  },
  watch:{
    obj:{
      handler() {
        this.dirty = true;
      },
      deep: true
    }
  },
  methods:{
    ...mapActions('contact', [
      'insertContact',
      'getContactById'
    ]),
    closeModal(){
      this.$emit('closeModal')
    },
    saveModal(){
      this.insertContact({
        id: this.generateRandomInteger(),
        ...this.obj
      })
      this.closeModal();
    },
    generateRandomInteger(){
        return Math.floor(Math.random() * 1000) + 1;
    },
    teste(){
      return this.getContactById()
    }
  },
  beforeDestroy() {
    this.unsubscribe();
  },
}
</script>

<style scoped>
  #text-input {
    width: 8rem !important;
  }
</style>
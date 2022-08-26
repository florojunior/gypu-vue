<template>
  <div v-if="dialogEdit">
    <ModalTemplate>
      <template v-slot:title>
        Editar Contato
      </template>
      <template v-slot:body>
        <Input
          v-model="obj.name"
          label="Nome"
        />
        <Input
          v-model="obj.email"
          label="Email"
        />
        <Input
          id="text-input"
          v-model="obj.cellphone"
          label="Telefone"
        />
      </template>
      <template v-slot:actions>
        <ButtomText :label="'Cancelar'" @closeModal="closeEdit()" :actionName="'closeModal'"/>
        <ButtomRounded :label="'Salvar'" @saveModal="saveModal()" :actionName="'saveModal'"/>
      </template>
    </ModalTemplate>
  </div>
</template>

<script>

import Input from '../forms/Input.vue'
import ButtomRounded from '../forms/ButtonRounded.vue'
import ButtomText from '../forms/ButtonText.vue'
import { mapActions } from 'vuex'
import ModalTemplate from '../modal/ModalTemplate.vue';

export default {
  components:{
    Input,
    ButtomRounded,
    ButtomText,
    ModalTemplate,
  },
  props:{
    dialogEdit: Boolean,
    id: Number
  },
  data:()=>({
    obj:{
      name: '',
      email: '',
      cellphone: '',
    } 
  }),
  async mounted() {
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'modal/editContact') {
        this.visible = true;
      }
    });
  },
  methods:{
    ...mapActions("contact", ["getContactById","updateContact"]),
    closeEdit(){
      this.$emit('closeEdit')
    },
    saveModal(){
      this.updateContact(this.obj);
      this.closeEdit();
    }
  },
  watch:{
    async dialogEdit(){ 
       this.obj =  Object.assign({}, await this.getContactById(this.id));
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
<template>
  <div class="list">
    <table v-if="getList.length > 0">
      <tr class="list__table__header">
        <th>Contatos</th>
        <th>E-mail</th>
        <th>Telefone</th>
      </tr>
      <tr class="list__table__body" v-for="(contact, index) in getListFiltered" :key="index" :class="{'list__new-line': showColoredRow && getLastAdded.id == contact.id}">
        <td>
          <span class="list__tag-name" :style="{'background-color': randomColor()}">{{contact.name[0]}}</span>
          <span >{{contact.name}}</span>
        </td>
        <td>{{contact.email}}</td>
        <td>{{contact.cellphone}}</td>
        <td>
          <div class="list__action">
            <button @click="editItem(contact.id)" class="list__action__edit" title="Editar">
              <img src="../../assets/edit.svg" alt="">
            </button>
              <button  @click="deleteItem(contact.id)" class="list__action_delete" title="Deletar">
              <img src="../../assets/delete.svg" alt="">
            </button>
          </div>
        </td>
      </tr>
    </table>
    <NoContactVue v-else/>
    <AddModal v-if="openDialog" @closeModal="closeModal"/>
    <EditModal @closeEdit="closeEdit" :dialogEdit="dialogEdit" :id="idSelected"/>
    <DeleteModal @closeDelete="closeDelete" :dialogDelete="dialogDelete" :id="idSelected"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AddModal from '../modal/AddModal.vue';
import EditModal from '../modal/EditModal.vue'
import DeleteModal from '../modal/DeleteModal.vue';
import NoContactVue from './NoContact.vue';


export default {
  name: "List",
  components: { AddModal, EditModal, DeleteModal, NoContactVue },
  data() {
    return {
      openDialog: false,
      dialogEdit: false,
      dialogDelete: false,
      idSelected: null,
      showColoredRow: false
    };
  },
  methods: {
    ...mapActions('modal', [
      'addContact'
    ]),
    ...mapActions('contact', [
      'initStateValuesFromLocalStorage'
    ]),
    randomColor(){
      return `#${Math.floor(Math.random()*16777215).toString(16)}`
    },
    closeModal() {
      this.openDialog = false;
    },
     closeEdit() {
      this.dialogEdit = false;
    },
    editItem (id) {
      this.idSelected =  id;
      this.dialogEdit = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deleteItem(id){
      this.idSelected =  id;
      this.dialogDelete = true;
    }
    
  },
  created() {
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'modal/addContact') {
        this.openDialog = true;
      }

      if (action.type === 'contact/insertContact') {
        const SECONDS_ANIMATION_DURATION = 10000;
        this.showColoredRow = true;
        setTimeout(()=>{
          this.showColoredRow = false;
        }, SECONDS_ANIMATION_DURATION);
      }
    });
    this.initStateValuesFromLocalStorage();
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  computed:{
    ...mapGetters("contact", ['getList', 'getListFiltered']),
    getLastAdded(){
      return this.getList.at(-1)
    },
  }
}
</script>

<style>
  .list__new-line {
    background-color: #fff3f2;
  }
  .list__tag-name{
    text-transform: uppercase;
    padding-bottom: 3px !important;
    font-size: 1rem !important;
    margin-top: 0px !important;
    margin-right: 1rem;
    border-radius: 15px;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem 0 0;
    padding: 2px;
    padding-right: 6px;
    padding-left: 7px;
  }
  .list__action {
    display: flex;
    justify-content: center;
  }
  .list__action__edit{
    cursor: pointer;
    background: none;
    margin-right: 20px;
  }
  .list__action_delete {
    cursor: pointer;
    background: none;
  }
  .list__table__header {
    font-size: 0.813rem;
    color: #9198af;
    width: 3.188rem;
    height: 0.938rem;
    margin: 0 0 0 28.063rem;
    font-weight: normal !important;
    font-stretch: normal;
    font-style: normal;
    line-height: normal !important;
    letter-spacing: normal;
  }
  .list {
    background-color: #f8f9fd;
    display: flex;
    width: 95% !important;
    justify-content: center;
    margin-right: 20px;
    padding: 20px;
  }
  table {
    background: white;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    font-weight: normal;
    font-size: 0.875rem;
    text-align: left;
    padding: 8px;
  }
  tr {
    border: groove;
    border-color: #f8f9fd2b;
  }
  .list__table__body:hover td {
    background-color: #fff3f2;
    transition: 0.3s;
  }

</style>
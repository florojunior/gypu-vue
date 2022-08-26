<template>
  <div>
    <div class="search">
      <div class="search__banner">
        <img src="../../assets/ubook.svg" alt="ubook">
      </div>
      <div class="search__actions">
        <ButtonAdd v-if="showAddButton" />
      </div>
      <input class="search__input" type="text" v-model="inputSearch" placeholder="Buscar..." @input="setFilter"  />
      <span id="search__input__icon">
          <i id="search__input__icon__fa" class="fa fa-search" onclick="sua_funcao_aqui()"></i>
      </span>
      <!--<div class="search__input">
        <input placeholder="Buscar..." class="input-text" type="text"  > 
        <i class="fas fa-search"></i>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ButtonAdd from '../forms/ButtonAdd.vue'

export default {
    name: "AppHeader",
    components:{
      ButtonAdd
    },
    data() {
      return {
        inputSearch: '',
        openDialog: false,
      };
    },
    methods: {
      ...mapActions('modal', [
        'addContact'
      ]),
      ...mapActions('contact', [
        'setInputFilter'
      ]),
      closeModal() {
          this.openDialog = false;
      },
      setFilter(){
        this.setInputFilter(this.inputSearch)
      }
    },
    computed:{
      ...mapGetters("contact", ['getList']),
      showAddButton(){
        return this.getList.length > 0
      },
    }
}
</script>

<style>
#search__input__icon{
  width: 30px;
  height: 30px;
  padding: 10px;
  position: relative;
  left: -39px;
  top: 1px;
}
#search__input__icon {
  margin-top: 5px;
  color: #9297ac;
  cursor: pointer;
}
.search__banner{
  padding: 10px
}
.search__actions{
  padding: 10px
}
.search__input {
  background-color: #e4e7f4;
  margin: 0 0 0 1.5rem;
  padding: 0.438rem 0.5rem 0.375rem;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  width: 100%;
}
.search {
  justify-content: space-around;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
}
.search__actions__add {
  margin-left: 0px !important;
  margin-right: 0px !important;
  font-weight: 500;
  width: 9rem;
  height: 2rem;
  margin: 0 1.5rem 0 3.75rem;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  /* background-color: var(--light-yellowish-green); */
  background: #dbff90;
  color: #fa7268;
  border-style: none;
  cursor: pointer;
}
</style>
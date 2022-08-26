<template>
  <button class="danger" @click="eventBtn">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: { type: String , required: false, default: ''},
    actionName: { type: String , required: false, default: ''},
  },
  methods:{
    eventBtn(){
      this.$emit(this.actionName);
    }
  }
}
</script>

<style scoped>
  button{
    height: 2rem;
    border: none;
    background-color: inherit;
    margin-right: 15px;
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    color: #fa7268
  }
  .default {
    color: #fa7268
  }
</style>
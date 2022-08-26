<template>
  <button @click="eventBtn" :disabled="disabled"><span>{{label}}</span></button>
</template>

<script>
export default {
  props: {
    label: { type: String , required: false, default: ''},
    actionName: { type: String , required: false, default: ''},
    disabled: { type: Boolean , required: false, default: false},
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
    width: 4.5rem;
    height: 2rem;
    padding: 0.5rem 1rem;
    margin-right: 15px;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    background-color: #fa7268;
  }

  span {
    width: 2.5rem;
    height: 1rem;
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: white;
  }
</style>
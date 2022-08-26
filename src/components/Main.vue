<template>
  <div>
    <app-header />
    <app-list />
  </div>
</template>

<script>
import Header from './pages/Header.vue';
import List from './pages/List.vue';
export default {
    components: { 
      'app-header' : Header,
      'app-list' :List
    }
}
</script>

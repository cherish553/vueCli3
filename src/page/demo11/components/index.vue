<template>
  <div>
    <div>{{'我是用data赋值的'+values}}</div>
    <div>{{'我是用props赋值的'+value}}</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {
      values: this.value
    };
  }
};
</script>
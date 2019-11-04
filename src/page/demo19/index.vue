<template>
  <div style="width:100%">
    <pdf :src="url"></pdf>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf
  },
  data(){
      return{
          url: './a.pdf'
          }
  }
};
</script>
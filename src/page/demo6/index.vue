<template>
  <div>
    <h1>v-slot用法</h1>
    <cherish>
      <template slot="one" slot-scope="slotProp">
        <h4>{{slotProp.one.name}}</h4>
      </template>
      <template #[a]='{two:cherish}'>
        <h4>{{cherish.name}}</h4>
      </template>
      <!-- <template #[a]="{two:cherish}">
        <h2>{{cherish.name}}</h2>
      </template>-->
    </cherish>
  </div>
</template>
<script>
import cherish from "./compoents/index";
export default {
  components: {
    cherish
  },
  data() {
    return {
      a: "two",
      msg: "这是根组件的消息"
    };
  }
};
</script>
<template>
  <div>
    <h1>全局eventBus</h1>
    {{title(222)}}
    <template v-if="id">
      <div v-if="image.name">{{image.name}}</div>
    </template>
    <el-button @click="id=2">点击我</el-button>
    <el-button @click="title=444">点击我2</el-button>
    <child1 data />
  </div>
</template>
<script>
import child1 from "./components/child1";
import { mixins } from "./mixins";
import { mixins as mixins2 } from "./mixins2";
export default {
  mixins: [mixins, mixins2],
  data() {
    return {
      id: null,
      image: {
        name: "新建文件夹"
      }
    };
  },
  computed: {
    title() {
      return function(e){
      console.log(e)
      if (this.id) return "编辑";
      else return "添加";
      }
    }
  },
  components: {
    child1
  },
  mounted() {
    this.$bus.$on("nameOfEvent", $event => {
      // console.log($event);
    });
  }
};
</script>

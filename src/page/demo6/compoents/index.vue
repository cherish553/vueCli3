<template>
  <div class="container">
    <h3>之前slot的基础用法</h3>
    <slot name="one" :one="one"></slot>
    <h3>v-slot的基础用法</h3>
    <slot name="two" :two="two"></slot>
    <!-- <header>
      <slot name="header" :msg='msg'></slot>
    </header>-->
    <!-- <footer>
      <slot name="footer"></slot>
    </footer>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      one: { name: "oldCherish" },
      two: { name: "cherish" }
    };
  }
};
</script>
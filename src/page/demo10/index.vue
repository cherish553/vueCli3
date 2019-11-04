<template>
  <div>
    <h1>BFC</h1>
    <h2>一个BFC是一个HTML盒子并且至少满足下列条件中的任何一个：</h2>
    <h2>一、float的值不为none</h2>
    <h2>二、position的值不为static或者relative</h2>
    <h2>三、display的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex中的其中一个</h2>
    <h2>四、overflow的值不为visible</h2>

    <h3>使用bfc防止外边距折叠</h3>
    <div class="container">
      <p>Sibling 1</p>
      <p>Sibling 2</p>
      <div class="newBFC">
        <p>Sibling 3</p>
      </div>
    </div>
    <div>
      <div class="float">float</div>
      <p
        class="p"
      >静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦静安寺东京阿斯哦对撒娇哦i大数据都i爱睡觉的i哦按实际到四点就阿斯哦念佛i阿萨阿斯哦发哈斯哦分哈斯哦分Hasidic哦</p>
    </div>
  </div>
</template>
<script>
// 浮动，绝对定位元素，inline-blocks, table-cells,
// table-captions,和overflow的值不为visible的元素，
// （除了这个值已经被传到了视口的时候）将创建一个新的块级格式化上下文

// 1.使用BFC来防止外边距折叠
// 这一开始听起来可能有些困惑，因为我们在前面讨论了BFC导致外边距折叠的问题。
// 但我们必须牢记在心的是毗邻块盒子的垂直外边距折叠只有他们是在同一BFC时才会发生。
// 如果他们属于不同的BFC，他们之间的外边距将不会折叠。所以通过创建一个新的BFC我们可以防止外边距折叠。

// 2.使用BFC来包含浮动
// 一个BFC可以包含浮动。很多时候我们会碰到这种情况，一个容器里有浮动元素。
// 由于这个原因，容器元素没有高度，它的浮动孩子将会脱离页面的常规流。
// 我们通常使用清除浮动来解决这个问题，最受欢迎的方法是使用一个clearfix的伪类元素。
// 但我们同样可以通过定义一个BFC来达到这个目的。

export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.da {
  width: 300px;
  height: 100px;
  background-color: skyblue;
  margin: 20px;
}
.float {
  width: 300px;
  height: 300px;
  float: left;
  background: rgba(0, 0, 0, 0.3);
}
.p {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 300px;
}
.container {
  background-color: skyblue;
  overflow: hidden; /* creates a block formatting context */
}
p {
  margin: 10px 0;
  background-color: lightgreen;
}
.newBFC {
  overflow: hidden; /* creates new block formatting context */
}
h2 {
  text-align: left;
}
</style>

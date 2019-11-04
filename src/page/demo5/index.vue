<template>
  <div>
    <h1>ztree在vue中使用</h1>
    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zNode: [
        {
          id: 1,
          pId: 0,
          name: "普通的父节点",
          t: "我很普通，随便点我吧",
          open: true,
          icon: require("@/assets/logo.png")
        },
        { id: 11, pId: 1, name: "叶子节点 - 1", t: "我很普通，随便点我吧" },
        { id: 12, pId: 1, name: "叶子节点 - 2", t: "我很普通，随便点我吧" },
        { id: 13, pId: 1, name: "叶子节点 - 3", t: "我很普通，随便点我吧" },
        {
          id: 2,
          pId: 0,
          name: "NB的父节点",
          t: "点我可以，但是不能点我的子节点，有本事点一个你试试看？",
          open: true
        },
        {
          id: 21,
          pId: 2,
          name: "叶子节点2 - 1",
          t: "你哪个单位的？敢随便点我？小心点儿..",
          click: false
        },
        {
          id: 22,
          pId: 2,
          name: "叶子节点2 - 2",
          t: "我有老爸罩着呢，点击我的小心点儿..",
          click: false
        },
        {
          id: 23,
          pId: 2,
          name: "叶子节点2 - 3",
          t: "好歹我也是个领导，别普通群众就来点击我..",
          click: false
        },
        {
          id: 3,
          pId: 0,
          name: "郁闷的父节点",
          t: "别点我，我好害怕...我的子节点随便点吧...",
          open: true,
          click: false
        },
        { id: 31, pId: 3, name: "叶子节点3 - 1", t: "唉，随便点我吧" },
        { id: 32, pId: 3, name: "叶子节点3 - 2", t: "唉，随便点我吧" },
        { id: 33, pId: 3, name: "叶子节点3 - 3", t: "唉，随便点我吧" }
      ],
      setting: {
        check: {
          enable: true
        },
        view: {
          //   showLine: false
        },
        data: {
          key: {
            title: "t"
          },
          simpleData: {
            enable: true
          }
        },
        callback: {
          beforeClick: this.beforeClick,
          onClick: this.onClick
        }
      }
    };
  },
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting, this.zNode);
    const treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    const nodeId = treeObj.getNodeByParam("id", 31);
    // treeObj.checkNode(nodeId, true, false)
    console.log(nodeId);
  },
  methods: {
    // 点击tree之前
    beforeClick(treeId, treeNode, clickFlag) {
      //   console.log(treeId);
      //   console.log(treeNode);
      //   console.log(clickFlag);
      return treeNode.click != false;
    },
    onClick(event, treeId, treeNode, clickFlag) {
      //   console.log(treeNode);
      //   clickFlag === 1? '普通选中': clickFlag === 0 ? '取消选中' : '追加选中'
    }
  }
};
</script>
<style lang='less'>
.ztree {
  position: absolute;
  margin-left: 50%;
  height: 200px;
  transform: translate(-50%);
}
// @import中路劲需要使用 “~”
@import "~@/plugin/zTree/zTreeStyle.css";
</style>

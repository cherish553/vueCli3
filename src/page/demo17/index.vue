<template>
  <div>
       <h1>editor富文本</h1>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>

    <!-- Or manually control the data synchronization（或手动控制数据流） -->
    <!-- <quill-editor :content="content" :options="editorOption" @change="onEditorChange($event)"></quill-editor> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
          // some quill options
        }
    };
  },
  methods: {
   onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
  }
};
</script>
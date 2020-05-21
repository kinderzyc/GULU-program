<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">One</g-tabs-item>
        <g-tabs-item name="2">Two</g-tabs-item>
        <g-tabs-item name="3">Three</g-tabs-item>
        <g-tabs-item name="4">Four</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">我是来自One的content 1</g-tabs-pane>
        <g-tabs-pane name="2">我是来自Two的content 2</g-tabs-pane>
        <g-tabs-pane name="3">我是来自Three的content 3</g-tabs-pane>
        <g-tabs-pane name="4">我是来自Four的content 4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  export default {
    components: {
        'g-tabs':Tabs,
         'g-tabs-body':TabsBody,
          'g-tabs-head':TabsHead,
           'g-tabs-item':TabsItem,
            'g-tabs-pane':TabsPane
    },
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }
          <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">One</g-tabs-item>
                <g-tabs-item name="2">Two</g-tabs-item>
                <g-tabs-item name="3">Three</g-tabs-item>
                <g-tabs-item name="4">Four</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">我是来自One的  content 1</g-tabs-pane>
                <g-tabs-pane name="2">我是来自Two的  content 2</g-tabs-pane>
                <g-tabs-pane name="3">我是来自Three的  content 3</g-tabs-pane>
                <g-tabs-pane name="4">我是来自Four的  content 4</g-tabs-pane>
            </g-tabs-body>
            </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<template>
  <div class="">
    <h1>{{ msg }}--{{msg1}}</h1>
    <p>{{text}}--{{delbar}}</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '我是home页面123',
      msg1: '从git上修改的',
      text: 'git pull拉取 你好 git add . 添加  git commit -m "提交了" git push 完成',
      delbar: '删除'
    }
  }
}
</script>

<template>
  <div class="">
    <h1>{{ msg }}--{{msg1}}</h1>
    <p>{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'mine',
  data () {
    return {
      msg: '个人中心---',
      msg1: '从git上修改的',
      text: 'git pull拉取 d  git add . 添加  git commit -m "提交了" git push 完成'
    }
  }
}
</script>

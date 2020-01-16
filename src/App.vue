<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header>
          <div class="head-left">
            <h3>后台管理系统</h3>
          </div>
          <el-radio-group v-model="isCollapse">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          <div class="head-right">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
              <el-menu-item index="top1">处理中心</el-menu-item>
              <el-submenu index="top2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="top2-1">选项1</el-menu-item>
                <el-menu-item index="top2-2">选项2</el-menu-item>
                <el-menu-item index="top2-3">选项3</el-menu-item>
                <el-submenu index="top2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="top2-4-1">选项1</el-menu-item>
                  <el-menu-item index="top2-4-2">选项2</el-menu-item>
                  <el-menu-item index="top2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
          </div>
        </el-header>
        <el-container>
          <el-aside :style= "{ height: height, width: isCollapse ? 'auto' : '200px' }">
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="false">
              <router-link :to="{name: 'Home'}">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
              </router-link>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1" @click="goTo('/order')">订单列表</el-menu-item>
                  <el-menu-item>选项2</el-menu-item>
                  <el-menu-item>选项3</el-menu-item>
                  <el-menu-item>选项1</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <router-link :to="{ name: 'Maps' }">
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">Echart图表</span>
                </el-menu-item>
              </router-link>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-aside>

          <el-container>
            <el-main>
              <router-view/>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>

      </el-container>
    </div>
  </div>
</template>
<script>
import { demoLog } from './assets/js/demo.js'
import $ from 'jquery'
$(function () {
  $('.body').click(function (event) {
    console.log('可以')
  })
})

export default {
  data () {
    return {
      activeIndex: '1',
      height: (window.innerHeight - 70) + 'px',
      width: '200px',
      isCollapse: false // 默认展开
    }
  },
  created () {
    demoLog()
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less">

 .head-left{
   float: @pull-left;
   h3{
     color: @color;
   }
 }
 .head-right{
   float: @pull-right
 }

 .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    display: block;
    position: relative;
    overflow-y: auto;
  }
  .el-menu a{
    text-decoration: none
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-footer{
    background-color: #B3C0D1;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>



<template>
  <el-container>
    <el-aside width="200px" >
      <el-menu mode="vertical" :default-active="$route.path" router style="height:100vh">
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="index + 1+''"
          :key="`menu-item-${index}`"
        >
          <template slot="title">{{item.title}}</template>
          <el-menu-item
            v-for="(subitem, subindex) in item.items"
            :index="subitem.path"
            :key="`menu-item-${index}-${subindex}`"
          >{{subitem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>chooopa的后台管理界面</el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component({})
export default class Main extends Vue {
    menu = {

        items:[

            {  
                title:'内容管理',
                items:[
                    {title:'首页',path:"/"},

                    {title:'课程管理',path:"/courses/list"},

                    {title:'课时管理',path:"/episodes/list"}
                ]
            },

            {  
                title:'运营管理',
                items:[
                    {title:'用户管理',path:"/users/list"}
                ]
            }
        ]
    }
}
</script>

<style>

</style>

<template>
  <div>
    <h3>课程列表</h3>
    <div><el-button type="primary" @click="$router.push('/courses/listCreate')">创建课程</el-button>
    </div>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(col,name) in columns"
        :prop="name"
        :key="name"
        :label="col.label"
        :width="col.width"
      ></el-table-column>
        <el-table-column label="操作" width="200" align="center">
        <template v-slot="scope">
            <el-button type="success" @click="$router.push(`/courses/ListEdit/${scope.row._id}`)">编辑</el-button>
            <el-button type="danger" @click="remove(scope.row._id)">删除</el-button>        
        </template>
    </el-table-column>
    </el-table>

  
  </div>
</template>

<script lang="ts">
import { Component,Vue} from 'vue-property-decorator';

@Component({

})
export default class CourseList extends Vue{ 
    data = {

    }
    columns={
        _id:{label:'ID'},
        name:{label:'课程名称'},
        cover:{label:'课程封面'}
    }
    async fetch(){
      let result = await this.$http.get('courses',{
          
      })
      this.data = result.data
    }
    async remove(id:any){
        try {
             await this.$confirm('确认删除?') //会抛出错误
        } catch (error) {
            return
        }
       
        this.$http.delete('courses/'+id)
        this.$message.success('删除成功')
        this.fetch()
    }
    created(){
        this.fetch()
    }
}
</script>

<style>

</style>
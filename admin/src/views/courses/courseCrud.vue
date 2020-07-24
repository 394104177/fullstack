<template>
  <div>
   <avue-crud 
   :data="data.data" 
   :option="option"
   @row-save="create"
   @row-update="update"
   @row-del="remove">

   </avue-crud>
  
  </div>
</template>

<script lang="ts">
import { Component,Vue, Prop} from 'vue-property-decorator';

@Component({

})
export default class ResourceList extends Vue{ 
    @Prop(String) resource:string
    data = {

    }

    option={
       
    }
    async create(row:any,done:any){
       await this.$http.post(`${this.resource}`,row)
       this.$message.success("创建成功")
       this.fetch()
       done()

    }

    async update(row:any,index:any,done:any){
        let newrow = JSON.parse(JSON.stringify(row))
        delete newrow.$index
        await this.$http.put(`${this.resource}/`+row._id,newrow)
       this.$message.success("创建成功")
       this.fetch()
       done()
    }

 
    async fetchOption(){
        let result = await this.$http.get(`${this.resource}/option`)
      this.option = result.data
    }
    async fetch(){
      let result = await this.$http.get(`${this.resource}`,{
          
      })
      this.data = result.data
    }
    async remove(row:any){
        try {
             await this.$confirm('确认删除?') //会抛出错误
        } catch (error) {
            return
        }
       
       await this.$http.delete(`${this.resource}`+row._id)
        this.$message.success('删除成功')
        this.fetch()
    }

    created(){
        this.fetchOption()
        this.fetch()
    }
}
</script>

<style>

</style>
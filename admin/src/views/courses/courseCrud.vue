<template>
  <div>
    <avue-crud
      :data="data.data"
      :option="option"
      :page="page"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="changeSearch"
   
    ></avue-crud>
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

    option:any={
       
    }
    page={
        total:1,
        // pageSize:2,
        // pageSizes:[2,5,10]
    }
    query:any={
        limit:2
    }
    async create(row:any,done:any){
       await this.$http.post(`${this.resource}`,row)
       this.$message.success("创建成功")
       this.fetch()
       done()

    }
   
    async remove(row:any){
        try {
             await this.$confirm('确认删除?') //会抛出错误
        } catch (error) {
            return
        }
       console.log(row)
       await this.$http.delete(`${this.resource}/`+row._id)
        this.$message.success('删除成功')
        this.fetch()
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
          params:{
              query:this.query
          }
      })
      this.data = result.data
      this.page.total = result.data.total
    }
 
    async changePage(page){
       this.query.page = page.currentPage
       this.query.limit = page.pageSize
       this.fetch()
    }

    async changeSearch(where,done){
  
        for (const key in where) {
            let field = this.option.column.find(v=>{
               return v.prop===key 
            })
            if(field.regex){
                    where[key] = {$regex:where[key]}
            }
        }
        
        this.query.where = where
        await this.fetch()
        done()
    }
    async changeSort({prop,order}){
        if(!order){
            this.query = {}
        }else{
            this.query = {
                [prop]:order==='ascending'?1:-1
            }
        }
        this.fetch()
     
    }
    async imgbefore(file,done){
        console.log("imgbefore",file)
       await done()
    }
    imgafter(res,done){
        console.log("imgafter",res)
        done()
    }
    imgpreview(file,column){
        console.log("imgpreview",file,column)
    }
    imgdelete(){
        console.log("imgdelete")
        return true
    }
    created(){
        this.fetchOption()
        this.fetch()
    }
}
</script>

<style>

</style>
<template>
  <div>
      <h3>{{isnew?'创建':'编辑'}}课程</h3>
        <ele-form
        v-model="data"
        :form-desc="columns"
        :request-fn="submit"
        ></ele-form>
  </div>
</template>

<script lang="ts">
import { Component,Vue, Prop} from 'vue-property-decorator';

@Component({

})
export default class CourseListEdit extends Vue{ 

    @Prop(String) id!:string

    data = {

    }
    columns={

        name:{label:'课程名称',type:'input'},
        cover:{label:'课程封面',type:"input"}
    }

    get isnew(){
        return !this.id
    }
    async fetch(){
      let result = await this.$http.get(`courses/${this.id}`)
      this.data = result.data
    }
    async submit(data:any){
        this.data = {}
        const url = this.isnew?'courses':'courses/'+this.id
        const method = this.isnew?'post':'put'
       await this.$http[method](url,data)
       this.$message.success('上传成功')
       this.$router.go(-1)
    }
    created(){
        !this.isnew && this.fetch()
    }
}
</script>

<style>

</style>
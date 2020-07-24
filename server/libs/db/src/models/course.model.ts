import { prop, modelOptions, arrayProp, Ref } from "@typegoose/typegoose"
import { ApiProperty } from "@nestjs/swagger"
import { Episode } from "./episode.model"


@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Course{
    @ApiProperty({description:'课程名称'})
    @prop()
    name: string

    @ApiProperty({description:'封面图'})
    @prop()   //使用该属性才能关联到数据库，否则只是一个普通的对象属性
    cover:string

    @arrayProp({itemsRef:'Episode'})
    episodes: Ref<Episode>[]

}
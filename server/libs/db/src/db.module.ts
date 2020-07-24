import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose"
import { User } from './models/user.model';
import { Episode } from './models/episode.model';
import { Course } from './models/course.model';

const models =TypegooseModule.forFeature([User,Episode,Course])
@Global()
@Module({
    imports:[
        TypegooseModule.forRoot('mongodb://localhost/fullstack',{
            useCreateIndex:true,
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true

        }),
        models
    ],
  providers: [DbService],
  exports: [DbService,
    models],
})
export class DbModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs\t/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';

import { AliOssModule } from 'nestjs-ali-oss';
 


@Module({
  imports: [
    AliOssModule.register({
        region: 'oss-cn-hongkong',
                accessKeyId: 'LTAI4GKS3A74ufjT3kCxX1DW',
                accessKeySecret: 'w4us3NzIehtK9r2MByv1Q6j76fBzu6',
                bucket: 'stackflow'
    //   }),
    //   MulterModule.register({
    //       storage: MAO({
    //         config: {
    //             region: 'oss-cn-hongkong',
    //             accessKeyId: 'LTAI4GKS3A74ufjT3kCxX1DW',
    //             accessKeySecret: 'w4us3NzIehtK9r2MByv1Q6j76fBzu6',
    //             bucket: 'stackflow'
    //         }
    //     })
        //   dest:'uploads'
      }),
      DbModule,
      UsersModule,
      CoursesModule,
      EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

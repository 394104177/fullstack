import { Controller, Get, UseInterceptors, Post, Req, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express"
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('uploads')
  @UseInterceptors(FileInterceptor('file')) //拦截器
  async upload(@UploadedFile('file') file){
   return {
       url:`http://localhost:3000/uploads/${file.filename}`
   }
  }
}

import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './entities/cliente.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

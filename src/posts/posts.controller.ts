import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Cliente } from './entities/cliente.entity';


@Controller('clientes')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Cliente[]> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cliente> {
    return await this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() post: Cliente): Promise<Cliente> {
    return await this.postsService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: Cliente): Promise<Cliente> {
    return await this.postsService.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cliente> {
    return await this.postsService.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Cliente } from './entities/cliente.entity';


@Injectable()
export class PostsService {
    constructor(@InjectModel(Cliente.name) private readonly postModel: Model<Cliente>){
    }

  async findAll(): Promise<Cliente[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Cliente> {
    return await this.postModel.findById(id).exec();
  }

  async create(post: Cliente): Promise<Cliente> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async update(id: string, post: Cliente): Promise<Cliente> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }

  async delete(id: string): Promise<Cliente> {
    return await this.postModel.findByIdAndDelete(id);
  }
}

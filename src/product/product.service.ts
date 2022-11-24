import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose'
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private productModel: Model<Product>
    ) {
    }

    async getProducts(): Promise<Product[]> {
        return await this.productModel.find();
    }
    async getProduct(productId: string): Promise<Product>{
        return await this.productModel.findById(productId);
    }
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product>{
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }
    async deleteProduct(productId: string): Promise<Product | any>{
        return await this.productModel.findByIdAndDelete(productId)
    }
    async updateProduct(productId, createProductDTO: CreateProductDTO): Promise<Product>{
        return await this.productModel.findByIdAndUpdate(productId, createProductDTO, { new: true});
    }
}

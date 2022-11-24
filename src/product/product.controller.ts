import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ) {
    }
    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'success',
            product: product
        })
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts()
        return res.status(HttpStatus.OK).json({
            message: 'success',
            products: products
        })
    }
}

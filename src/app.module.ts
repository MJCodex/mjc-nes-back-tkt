import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MDB_CONNECTION_STRING } from './secret/mongo-connection';

@Module({
    imports: [
        ProductModule,
        MongooseModule.forRoot(MDB_CONNECTION_STRING)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}

import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {BookEntity} from "./book/book.entity";
import { BookModule } from './book/book.module';
import {BookController} from "./book/book.controller";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres' as 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: Number(configService.get<number>('DB_PORT')),
                username: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE', 'hecate-library'),
                schema: configService.get<string>('DB_SCHEMA', 'public'),
                synchronize: true,
                entities: [BookEntity]
            })
        }),
        BookModule
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}

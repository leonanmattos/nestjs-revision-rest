import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vivo:vivo@cluster0.yfuk7.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

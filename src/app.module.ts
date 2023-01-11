import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Lesson} from './lesson/lesson.entity'
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:process.env.mongo_URL,
      synchronize:true,
      useUnifiedTopology: true,
      entities:[
        Lesson,Student
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:true,
      debug: false,
      playground: true,
    }),
    LessonModule,
    StudentModule
  ],
})
export class AppModule {}

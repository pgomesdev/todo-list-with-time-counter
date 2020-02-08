import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    playground: process.env.NODE_ENV === 'development',
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/interfaces/graphql.ts'),
    },
  })],
})

export class ApplicationModule {};

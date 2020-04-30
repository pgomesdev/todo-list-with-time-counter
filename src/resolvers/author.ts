import { Resolver, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { Query } from '@nestjs/common';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveProperty('posts')
  async getPosts(@Parent() author) {
    const { id } = author;

    return this.postsService.findAll({ authorId: id });
  }
}
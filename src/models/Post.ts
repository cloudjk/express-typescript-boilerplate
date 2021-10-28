import { IsInt, IsOptional, MaxLength } from 'class-validator';

export class Post {
  @IsInt()
  @IsOptional()
  userId?: number;

  @MaxLength(100)
  title?: string;

  @MaxLength(1000)
  body?: string;
}

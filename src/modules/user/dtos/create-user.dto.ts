/**
 * @description Create User Dto
 * You can add class validator to validate incoming request
 */
export class CreateUserDto {
  title: string;

  authorId: any;

  genreId: any;

  publishDate: Date;
}
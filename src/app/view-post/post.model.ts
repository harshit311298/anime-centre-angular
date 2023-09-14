export class Post {
    constructor(
      public date: string = '',
      public imageSrc: string = '',
      public title: string = '',
      public author: string = '',
      public postDate: string = '',
      public tags: string[] = [],
      public content: string = '',
      public profilePicSrc: string='../../assets/images/7052206.jpg',
      public comments: Comment[]
    ) {}
  }
  // Define a Comment type
interface Comment {
  author: string;
  text: string;
  // You can add more properties like date, etc. if needed
}
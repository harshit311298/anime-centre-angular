import { Component,Input,OnInit } from '@angular/core';
import { Post } from './post.model'; // Import the Post class
import { UrlSegment } from '@angular/router';

interface Comment {
  author: string;
  text: string;
}
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
// post.component.ts
posts: Post[] = [
  {
    date: 'June 25, 2020',
    imageSrc: '../../assets/images/7052206.jpg',
    title: 'Standard post title 1',
    author: 'John Doe',
    postDate: '25 June 2020',
    tags: ['Bootstrap4'],
    profilePicSrc:'../../assets/images/7052206.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex...',
      comments:[
        { author: 'Alice', text: 'Great post!' },
        { author: 'Bob', text: 'I love this!' }
      ]  },
  {
    date: 'June 25, 2020',
    imageSrc: '../../assets/images/1311951.jpg',
    title: 'Standard post title 2',
    author: 'Jane Smith',
    postDate: '26 June 2020',
    tags: ['Angular', 'JavaScript'],
    profilePicSrc:'../../assets/images/7052206.jpg',
    content:
      'Another example post with some content...',
      comments:[]
  }

  // Add more posts as needed
];

constructor() {}

ngOnInit() {}
// Define a property to store the new comment text
newCommentText: string = '';

  // Property to manage comment display
  currentCommentIndex: number = 0;
 // Property to show all comments or not
 showAll: boolean = false;

 // Method to show all comments
 showAllComments(post: Post) {
   this.showAll = true;
 }

  // Method to show the previous comment
  showPreviousComment() {
    if (this.currentCommentIndex > 0) {
      this.currentCommentIndex--;
    }
  }

  // Method to show the next comment
  showNextComment() {
    const currentPost = this.posts[this.currentCommentIndex];
    if (currentPost && this.currentCommentIndex < currentPost.comments.length - 1) {
      this.currentCommentIndex++;
    }
  }

  // Add a comment to a post
  addComment(post: Post) {
    if (this.newCommentText.trim() === '') {
      return; // Don't add empty comments
    }

    const newComment: Comment = {
      author: 'User', // You can change this to the actual user's name
      text: this.newCommentText
    };

    // Add the new comment to the post's comments array
    post.comments.push(newComment);

    // Clear the input field after adding the comment
    this.newCommentText = '';
  }
}

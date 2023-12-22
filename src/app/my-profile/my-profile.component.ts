import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeProfilePictureDialogComponent } from '../change-profile-picture-dialog/change-profile-picture-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface Post {
  imageUrl: string;
  caption: string;
  date: string;
}
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  constructor(private router: Router,private dialog: MatDialog) {}
  chooseRandomImage(): string | null {
    if (this.imageFilenames.length === 0) {
      return null;
    }
  
    const randomIndex = Math.floor(Math.random() * this.imageFilenames.length);
    const randomImage = this.imageFilenames[randomIndex];
  
    // Remove the chosen image from the array to avoid selecting it again
    this.imageFilenames.splice(randomIndex, 1);
  
    return randomImage;
  } 
  userProfile = {
    name: '@john_Doe883',
    email: 'john.doe@example.com',
    location: 'New York',
    fullName:'John Doe',
    description:"I am an otaku: a person having an intense or obsessive interest especially in the fields of anime and manga.These examples are programmatically compiled from various online sources to illustrate current usage of the word 'otaku.' Any opinions expressed in the examples do not represent those of Merriam-Webster or its editors. Send us feedback about these examples.",
    joinDate: new Date('2023-01-15')
  };
  imageFilenames: string[] = [
    '../../assets/images/1.jpg',
    '../../assets/images/2.jpg',
    '../../assets/images/3.jpg',
    '../../assets/images/4.jpg',
    '../../assets/images/5.jpg',
    '../../assets/images/6.jpg',
    '../../assets/images/7.jpg',
    '../../assets/images/8.jpg',
    '../../assets/images/9.jpg',
    '../../assets/images/10.jpg',
    '../../assets/images/11.jpg',
    '../../assets/images/12.jpg',
    '../../assets/images/13.jpg',
    '../../assets/images/14.jpg',
    '../../assets/images/15.jpg',
    '../../assets/images/16.png',
    '../../assets/images/17.jpg',
    '../../assets/images/18.jpg',
    '../../assets/images/19.jpg',
    "../../assets/images/1325984.jpeg",
    "../../assets/images/1323417.jpeg",
    "../../assets/images/1322714.jpeg",
    "../../assets/images/677543.jpg",
    "../../assets/images/pxfuel (1).jpg",
    "../../assets/images/pxfuel.jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (10).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (6).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (1).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (2).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (3).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (4).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (5).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (7).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (8).jpg",
    "../../assets/images/wallpaperflare.com_wallpaper (9).jpg",

  ];
  posts: Post[] = [
    {
      imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
      caption: 'Enjoying a sunny day!',
      date: 'August 15, 2023'
    },
    {
      imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
      caption: 'Exploring new places.',
      date: 'August 10, 2023'
    },
    {
      imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
      caption: 'A beautiful sunset view.',
      date: 'August 5, 2023'
    },
    {
      imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
      caption: 'Enjoying a sunny day!',
      date: 'August 15, 2023'
    },
    {
      imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
      caption: 'Exploring new places.',
      date: 'August 10, 2023'
    },
    {
      imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
      caption: 'A beautiful sunset view.',
      date: 'August 5, 2023'
    }
,
{
  imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
  caption: 'Enjoying a sunny day!',
  date: 'August 15, 2023'
},
{
  imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
  caption: 'Exploring new places.',
  date: 'August 10, 2023'
},
{
  imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
  caption: 'A beautiful sunset view.',
  date: 'August 5, 2023'
}
,    {
  imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
  caption: 'Enjoying a sunny day!',
  date: 'August 15, 2023'
},
{
  imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
  caption: 'Exploring new places.',
  date: 'August 10, 2023'
},
{
  imageUrl: this.chooseRandomImage()||'../../assets/images/1.jpg',
  caption: 'A beautiful sunset view.',
  date: 'August 5, 2023'
}


  ];
  userProfileImageUrl = '../../assets/images/pxfuel (1).jpg';

  changeProfilePicture(): void {
    const dialogRef = this.dialog.open(ChangeProfilePictureDialogComponent, {
      width: '400px', // Set the width of the dialog as per your design
    });
  
    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed, such as refreshing the profile picture.
    });
  }

  logout(): void {
    console.log("user logged out.")
    this.router.navigate(['/login']);
    // You can also redirect the user to the login page after logging out if needed
  }
  
}

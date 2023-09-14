import { Component,OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal if using ng-bootstrap
import { MatDialog } from '@angular/material/dialog';

import { StoryModalComponent } from '../story-modal/story-modal.component';
interface ContentItem {
  title: string;
  imageUrl: string;
  description: string;
  expanded: boolean;
}
interface SuggestedFriend {
  profileImage: string;
  username: string;
  requestSent: boolean;
}
@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.css']
})
export class FeaturedContentComponent implements OnInit {
  isModalOpen: boolean = false;
  ngOnInit(): void {
   this.generate()
    // This method will be automatically called when the component initializes
    // You can perform any initialization tasks here
  }
  arraylength: Number = Math.floor(Math.random() * 11) + 1; // Ensure it's at least 1
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
  ];
  chooseRandomImage(): string | null {
    if (this.imageFilenames.length === 0) {
      return null; // Return null if the array is empty
    }
  
    const randomIndex = Math.floor(Math.random() * this.imageFilenames.length);
    const randomImage = this.imageFilenames[randomIndex];
  
    // Remove the chosen image from the array to avoid selecting it again
    this.imageFilenames.splice(randomIndex, 1);
  
    return randomImage;
  } 
  tvShows = [
    {
      title: 'Clannad',
      image: this.chooseRandomImage(),
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: this.chooseRandomImage(),
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: this.chooseRandomImage(),
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: this.chooseRandomImage(),
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: this.chooseRandomImage(),
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: this.chooseRandomImage(),
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: this.chooseRandomImage(),
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: this.chooseRandomImage(),
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: this.chooseRandomImage(),
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: this.chooseRandomImage(),
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },

    // Add more TV show objects as needed
  ];
stories: { image: string; seen: boolean }[] = []; // Initialize the 'stories' array with the correct type annotation
generate(): any | null {
  let seen = [true, false];
  // let stories: { image: string; seen: boolean }[] = []; // Initialize the 'stories' array with the correct type annotation
  console.log("=============sssssssssssssssssssssss>", this.arraylength)

  for (let i = 0; i < this.arraylength.valueOf(); i++) {
    const randomImage = this.chooseRandomImage();
    if (randomImage !== null) {
      this.stories.push({
        image: randomImage,
        seen: seen[Math.floor(Math.random() * seen.length)],
      });
    }
  }
  console.log("stories================>", this.stories)
  // return this.stories; // Return the generated array
}

  expandedDescriptions: boolean[] = new Array(this.tvShows.length).fill(false);

  toggleDescription(index: number): void {
    this.expandedDescriptions[index] = !this.expandedDescriptions[index];
  }

  getDescription(index: number): string {
    const description = this.tvShows[index].description;
    return this.expandedDescriptions[index] ? description : description.split(' ').slice(0, 20).join(' ');
  } 
  markAsSeen(index: number): void {
    this.stories[index].seen = true;

    const seenStory = this.stories.splice(index, 1)[0];
    this.stories.push(seenStory);
  }
  // constructor(private modalService: NgbModal) {}

  // openStoryModal(storyImage: string): void {
  //   const modalRef = this.modalService.open(StoryModalComponent);
  //   modalRef.componentInstance.storyImage = storyImage;
  // }
  suggestedFriends: SuggestedFriend[]  = [
    { username: 'Utsur Yamigashi', profileImage: '../../assets/images/pxfuel (1).jpg', requestSent: false },
    { username: 'イタチ 打ちは', profileImage: '../../assets/images/pxfuel.jpg', requestSent: true },
    // ... Add more user objects
  ];

  addFriend(index: number): void {
    this.suggestedFriends[index].requestSent = true;
  } 

  constructor(private dialog: MatDialog) { }

  openStoryModal(storyImage: string): void {
    const dialogRef = this.dialog.open(StoryModalComponent, {
      data: { storyImage }
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle actions after the modal is closed if needed
    });
  }
}
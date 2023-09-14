import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  tvShows = [
    {
      title: 'Clannad',
      image: "../../assets/images/19.jpg",
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: "../../assets/images/wallpaperflare.com_wallpaper (10).jpg",
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: "../../assets/images/19.jpg",
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: "../../assets/images/wallpaperflare.com_wallpaper (10).jpg",
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: "../../assets/images/19.jpg",
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: "../../assets/images/wallpaperflare.com_wallpaper (10).jpg",
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: "../../assets/images/19.jpg",
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: "../../assets/images/wallpaperflare.com_wallpaper (10).jpg",
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      title: 'Clannad',
      image: "../../assets/images/19.jpg",
      description: "Tomoya Okazaki is a third year high school student resentful of his life. His mother passed away from a car accident when he was younger, causing his father to resort to alcohol and gambling. This results in fights between the two until Tomoya's shoulder is injured in a fight. Since then, Tomoya has had distant relationships with his father, causing him to become a delinquent over time. While on a walk to school, he meets a strange girl named Nagisa Furukawa who is a year older, but is repeating due to illness. Due to this, she is often alone as most of her friends have moved on. The two begin hanging out and slowly, as time goes by, Tomoya finds his life shifting in a new direction."
    },
    {
      title: 'Naruto Shippudden',
      image: "../../assets/images/wallpaperflare.com_wallpaper (10).jpg",
      description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },

    // Add more TV show objects as needed
  ];
  expandedDescriptions: boolean[] = new Array(this.tvShows.length).fill(false);

  toggleDescription(index: number): void {
    this.expandedDescriptions[index] = !this.expandedDescriptions[index];
  }

  getDescription(index: number): string {
    const description = this.tvShows[index].description;
    return this.expandedDescriptions[index] ? description : description.split(' ').slice(0, 20).join(' ');
  }
  }

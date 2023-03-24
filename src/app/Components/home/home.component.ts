import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [
    {
      title: 'HP Laptops',
      description: 'Best laptop with high performance',
      buttonText: 'Buy',
      img: './assets/Carousels/Carousel3.jpg'
    },
    {
      title: 'Boat Headphones',
      description: 'Best headphones with high quality',
      buttonText: 'Buy',
      img: './assets/Carousels/item1.jpg'
    },
    {
      title: 'Dove Cream',
      description: 'Most natural cream for your most beautiful skin',
      buttonText: 'Buy',
      img: './assets/Carousels/item6.jpg'
    },
    {
      title: 'Cosmo Cosmetics',
      description: 'Cosmo Cosmetics for cosmic looks',
      buttonText: 'Buy',
      img: './assets/Carousels/item3.jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Buy',
      img: './assets/Carousels/Carousel1.jpg'
    },

    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Buy',
      img: './assets/Carousels/item5.jpg'
    },

    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Buy',
      img: './assets/Carousels/item6.jpg'
    },

    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Buy',
      img: './assets/Carousels/Carousel2.jpg'
    },

  ];


  // carousels = [
  //   {
  //     title: 'iPhone',
  //     description: 'Launching iPhone15 on the colorful day of year',
  //     status: 'active',
  //     img: "./assets/Carousels/Carousel1.jpg"
  //   },
  //   {
  //     title: 'Samsung',
  //     description: 'Launching Samsung on the colorful day of year',
  //     status: '',
  //     img: "./assets/Carousels/Carousel1.jpg"
  //   },
  //   {
  //     title: 'Nokia',
  //     description: 'Launching Nokia on the colorful day of year',
  //     status: '',
  //     img: "./assets/Carousels/Carousel1.jpg"
  //   },

  // ];


}

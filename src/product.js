import alexa from "./Assets/images/alexa.webp"
import console from "./Assets/images/console.webp"
import shoes from "./Assets/images/shoes.webp"
import laptop from "./Assets/images/laptop.webp"
import smartphone from "./Assets/images/smartphone.webp"
import headphone from "./Assets/images/headphone.webp"
const products = [
  {
    id: 1,
    name: "Alexa",
    image: alexa,
    brand: "Amazon",
    category: "Smart Home",
    description: 'Meet Echo Dot - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound.',
    price: 99.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 100,
  },
  {
    id: 2,
    name: "Gaming Console",
    image: console,
    brand: "Sony",
    category: "Gaming",
    description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    price: 399.99,
    countInStock: 5,
    rating: 4.8,
    numReviews: 50,
  },
  {
    id: 3,
    name: "Shoes",
    image: shoes,
    brand: "Nike",
    category: "Footwear",
    description: 'The Nike Air Zoom Pegasus 38 returns with the same reliable cushioning and a breathable mesh upper. New to the shoe is an even more comfortable tongue and a slight increase in the forefoot stack height.',
    price: 79.99,
    countInStock: 20,
    rating: 4.2,
    numReviews: 200,
  },
  {
    id: 4,
    name: "Laptop",
    image: laptop,
    brand: "Dell",
    category: "Computers",
    description: 'The MacBook Air is back with a vengeance, with the new M1 chip delivering performance gains that make it a viable alternative to the MacBook Pro. With its sleek, lightweight design and Retina display, it\'s perfect for on-the-go productivity.',
    price: 899.99,
    countInStock: 3,
    rating: 4.9,
    numReviews: 10,
  },
  {
    id: 5,
    name: "Smartphone",
    image: smartphone,
    brand: "Apple",
    category: "Phones",
    description:
      "The Galaxy S21 Ultra 5G is the ultimate smartphone, with a 6.8-inch Quad HD+ AMOLED display, 5G connectivity, a 108MP camera, and a powerful Exynos 2100 processor. It also features an impressive 5,000mAh battery and support for the S Pen, making it the perfect device for productivity and creativity",
    price: 799.99,
    countInStock: 15,
    rating: 4.7,
    numReviews: 150,
  },
  {
    id: 6,
    name: "Headphone",
    image: headphone,
    brand: "Bose",
    category: "Audio",
    description:
      "The Bose QuietComfort 35 II headphones offer world-class noise cancellation, Bluetooth connectivity, and up to 20 hours of battery life. They also feature Google Assistant and Amazon Alexa built-in for hands-free control.",
    price: 299.99,
    countInStock: 8,
    rating: 4.4,
    numReviews: 75,
  },
];

export default products;

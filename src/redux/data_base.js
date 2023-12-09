// import main catagories image
import c0 from '../assets/images/menu-cafe.jpeg';
import c1 from '../assets/images/milk-flavor-latte.jpeg';
import c2 from '../assets/images/other.jpeg';
import c3 from '../assets/images/snacks.webp';
// import meals from first catagory
import c1t1 from '../assets/images/espreso.jpeg';
import c1t2 from '../assets/images/americano.jpeg';
import c1t3 from '../assets/images/cappuccino.jpeg';
import c1t4 from '../assets/images/piccolo.jpeg';
import c1t5 from '../assets/images/affogato.jpeg';
import c1t6 from '../assets/images/caramel-macchiato.jpeg';
// import meals from second catagory
import c2t1 from '../assets/images/vanilla latte.jpeg';
import c2t2 from '../assets/images/caramel latte.jpeg';
import c2t3 from '../assets/images/cappuccino latte .jpeg';
import c2t4 from '../assets/images/cafe latte.jpeg';
// import meals from third catagory
import c3t1 from '../assets/images/ice tea.jpeg';
import c3t2 from '../assets/images/lychee tea.jpeg';
import c3t3 from '../assets/images/lemon tea.jpeg';
import c3t4 from '../assets/images/coconut.jpeg';
import c3t5 from '../assets/images/mineral water.jpeg';
// import meals from fourth catagory
import c4t1 from '../assets/images/frencheese.jpeg';
import c4t2 from '../assets/images/orion ring.jpeg';
import c4t3 from '../assets/images/corndog.jpeg';
import c4t4 from '../assets/images/roti bakar.jpeg';
import c4t5 from '../assets/images/cinnamon roll.jpeg';

const ar1 = [
  {
    id: 0,
    src: c1t1,
    name: 'Espresso',
    discription: 'Espresso Roast khas kami yang lembut dengan rasa yang kaya dan rasa manis karamel adalah inti dari semua yang kami lakukan.',
    price: 18,
    order: 0,
  },
  {
    id: 1,
    src: c1t2,
    name: 'Americano',
    discription: 'kopi Americano adalah espresso yang ditambahkan air panas. Soal rasa, tentunya Americano lebih ringan dibandingkan espresso.',
    price: 22,
    order: 0,
  },
  {
    id: 2,
    src: c1t3,
    name: 'Cappuccino',
    discription: 'secangkir kopi cappuccino memiliki perbandingan espresso, steamed milk dan busa yang sama,',
    price: 25,
    order: 0,
  },
  {
    id: 3,
    src: c1t4,
    name: 'Piccolo',
    discription: 'minuman kopi susu yang merupakan gabungan antara satu shot espresso dan susu',
    price: 22,
    order: 0,
  },
  {
    id: 4,
    src: c1t5,
    name: 'Affogato',
    discription: 'paduan es krim (gelato) dan dilumuri espresso',
    price: 22,
    order: 0,
  },
  {
    id: 5,
    src: c1t6,
    name: 'Caramel macchiato',
    discription: 'campuran satu shot espresso, susu steam, dan sirup vanila serta topping saus karamel',    
    price: 25,
    order: 0,
  },
];

const ar2 = [
  {
    id: 0,
    src: c2t1,
    name: 'Vanilla latte',
    discription: 'perpaduan espresso, susu, dan sirup vanilla',
    price: 23,
    order: 0,
  },
  {
    id: 1,
    src: c2t2,
    name: 'Caramel latte',
    discription: 'perpaduan espresso dengan susu dan saus karamel',
    price: 26,
    order: 0,
  },
  {
    id: 2,
    src: c2t3,
    name: 'Cappuccino latte',
    discription: 'perpaduan cappuccino, espresso, steamed milk, foamed milk, kopi latte',
    price: 26,
    order: 0,
  },
  {
    id: 3,
    src: c2t4,
    name: 'Caffe latte',
    discription: 'kopi susu',
    price: 22,
    order: 0,
  },

];
const ar3 = [
  {
    id: 0,
    src: c3t1,
    name: 'ice tea',
    discription: '',
    price: 5,
    order: 0,
  },
  {
    id: 1,
    src: c3t2,
    name: 'lychee tea',
    discription: '',
    price: 12,
    order: 0,
  },
  {
    id: 2,
    src: c3t3,
    name: 'lemon tea',
    discription: '',
    price: 10,
    order: 0,
  },
  {
    id: 3,
    src: c3t4,
    name: 'coconut',
    discription: '',
    price: 20,
    order: 0,
  },
  {
    id: 4,
    src: c3t5,
    name: 'mineral water',
    discription: '',
    price: 4,
    order: 0,
  },

];
const ar4 = [
  {
    id: 0,
    src: c4t1,
    name: 'French Fries',
    discription: 'kentang goreng',
    price: 8,
    order: 0,
  },
  {
    id: 1,
    src: c4t2,
    name: 'Onion Ring',
    discription: 'bawang bombai yang ditaburi tepung roti',
    price: 8,
    order: 0,
  },
  {
    id: 2,
    src: c4t3,
    name: 'Corndog',
    discription: 'sosis yang dilapisi lapisan tepung jagung',
    price: 10,
    order: 0,
  },
  {
    id: 3,
    src: c4t4,
    name: 'Roti bakar',
    discription: 'roti yang dibakar dengan berbagai macam varian rasa',
    price: 7,
    order: 0,
  },
  {
    id: 4,
    src: c4t5,
    name: 'Cinnamon roll',
    discription: 'roti manis yang bercampur dengan campuran bubuk kayu manis',
    price: 15,
    order: 0,
  },

];

const catagories = [
  {
    id: 0,
    name: 'COFFEE',
    src: c0,
    list: ar1,
  },
  {
    id: 1,
    name: 'MILK FLAVOR LATTE',
    src: c1,
    list: ar2,
  },
  {
    id: 2,
    name: 'OTHERS',
    src: c2,
    list: ar3,
  },
  {
    id: 3,
    name: 'SNACKS',
    src: c3,
    list: ar4,
  },

];
export default catagories;

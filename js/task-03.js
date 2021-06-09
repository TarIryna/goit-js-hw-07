const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryElMaker = image => {
  const { url, alt } = image;
  return `
    <li class="images-03">
      <img src="${url}" alt="${alt}" width="600px">
    </li>
`;
};
const galleryList = document.querySelector('ul');
const galleryMaker = images
  .map(galleryElMaker)
  .join(' ');
galleryList.insertAdjacentHTML('beforeend', galleryMaker);


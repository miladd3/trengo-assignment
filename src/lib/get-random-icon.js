const iconArray = ['user', 'phone', 'envelope', 'link'];
const getRandomIcon = () =>
  iconArray[Math.floor(Math.random() * iconArray.length)];

export default getRandomIcon;

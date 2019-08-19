let number = 0;

//This function returns a random number
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

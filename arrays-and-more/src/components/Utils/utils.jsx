
export const utils = (persona, size = 's') => {

  return (
    'https://i.imgur.com/' + 
    persona.imgId +
    size + 
    '.jpg'
  );

}

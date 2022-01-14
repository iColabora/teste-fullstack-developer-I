const endPoint = 'https://ico-fullstack-test.herokuapp.com/v1/histograma';

const fetchEndPoint = async () => {
  const promise = await fetch(endPoint);
  const data = await promise.json();
  // const objet = [[data[0]], [data[1]], [data[2]], [data[3]], [data[4]]];
  return data;
};

export default fetchEndPoint;


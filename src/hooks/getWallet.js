export default function getWallet() {
  fetch('https://jsonblob.com/1089898374311985152', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(result => {
      if (result.ok) {
        return result.json();
      }
    })
    .then(data => {
      console.log('data', data);
      return data;
    })
    .catch(error => {
      console.error('err', error);
    });
}

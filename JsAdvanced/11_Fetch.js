/* what is fetch()? - fetch() is a modern browser API used to make HTTP requests. */
const reqURL = 'https://api.github.com/users/AryanYadav1024';
async function getUser(){
  try {
    const response = await fetch('GET',reqURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error");
  }
};

getUser();


document.writeln('Hello World!');

const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg', '2,jpg', '3.jpg'];

function login(username) {
  setTimeout(() => {
    console.log('Processing username now!');
  }, 200);

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'Dika') {
        failed('Wrong username!');
      }
      success({ token });
    }, 400);
  });
}

function getUser(token) {
  console.log('Processing apiKey');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) {
        failed('Token empty, cannot access!');
      }
      success({ apiKey: 'Xkey123' });
    }, 700);
  });
}

function getPicture(apiKey) {
  console.log('Getting user picture now!');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!apiKey) {
        failed('apiKey empty, cannot access!');
      }
      success({ pic: pictures });
    }, 1500);
  });
}

async function displayUser() {
  try {
    const { token } = await login('Dika');
    console.log(token);
    const { apiKey } = await getUser(token);
    console.log(apiKey);
    const { pic } = await getPicture(apiKey);
    console.log(pic);
  } catch (err) {
    console.log(err);
  }
}
displayUser();

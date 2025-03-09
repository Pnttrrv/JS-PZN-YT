document.writeln('Hello World!');

// const token = ~~[Math.random() * 12345678];
// const pictures = ['1.jpg', '2,jpg', '3.jpg'];

// function login(username) {
//   setTimeout(() => {
//     console.log('Processing username now!');
//   }, 200);

//   return new Promise((success, failed) => {
//     setTimeout(() => {
//       if (username != 'Dika') {
//         failed('Wrong username!');
//       }
//       success({ token });
//     }, 400);
//   });
// }

// function getUser(token) {
//   console.log('Processing apiKey');
//   return new Promise((success, failed) => {
//     setTimeout(() => {
//       if (!token) {
//         failed('Token empty, cannot access!');
//       }
//       success({ apiKey: 'Xkey123' });
//     }, 700);
//   });
// }

// function getPicture(apiKey) {
//   console.log('Getting user picture now!');
//   return new Promise((success, failed) => {
//     setTimeout(() => {
//       if (!apiKey) {
//         failed('apiKey empty, cannot access!');
//       }
//       success({ pic: pictures });
//     }, 1500);
//   });
// }

// async function displayUser() {
//   try {
//     const { token } = await login('Dika');
//     console.log(token);
//     const { apiKey } = await getUser(token);
//     console.log(apiKey);
//     const { pic } = await getPicture(apiKey);
//     console.log(pic);
//   } catch (err) {
//     console.log(err);
//   }
// }
// displayUser();

console.log('hi');
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput;
  } else if (userInput == 'bomb') {
    return userInput;
  } else {
    return 'wrong choice!';
  }
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return 'rock';
  } else if (number == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return 'Draw';
  }
  //   if (getUserChoice == 'rock') {
  //     if (getComputerChoice == 'paper') {
  //       return 'Computer Wins';
  //     } else if (getComputerChoice == 'scissors') {
  //       return 'User Wins';
  //     }
  //   } else if (getUserChoice == 'paper') {
  //     if (getComputerChoice == 'scissors') {
  //       return 'Computer Wins';
  //     } else if (getComputerChoice == 'rock') {
  //       return 'User Wins';
  //     }
  //   } else if (getUserChoice == 'scissors') {
  //     if (getComputerChoice == 'rock') {
  //       return 'Computer Wins';
  //     } else if (getComputerChoice == 'paper') {
  //       return 'User Wins';
  //     }
  //   }

  switch (getUserChoice) {
    case 'rock':
      if (getComputerChoice == 'paper') {
        return 'Computer Wins';
      } else if (getComputerChoice == 'scissors') {
        return 'User Wins';
      }
      break;
    case 'paper':
      if (getComputerChoice == 'scissors') {
        return 'Computer Wins';
      } else if (getComputerChoice == 'rock') {
        return 'User Wins';
      }
      break;
    case 'scissors':
      if (getComputerChoice == 'rock') {
        return 'Computer Wins';
      } else if (getComputerChoice == 'paper') {
        return 'User Wins';
      }
      break;
    case 'bomb':
      return 'User Wins!';
      break;

    default:
      return 'Wrong Choice';
      break;
  }
};

const playGame = () => {
  const userChoice = getUserChoice(prompt('Masukkan pilihan'));

  console.log(`User : ${userChoice}`);
  const compChoice = getComputerChoice();
  console.log(`Computer : ${compChoice}`);
  console.log(determineWinner(userChoice, compChoice));
};

playGame();
// const choiceComp = getComputerChoice()
// const choiceUser = getUserChoice("scissors")
// const result = determineWinner(choiceUser,choiceComp)
// console.log("computer"+" "+choiceComp)
// console.log("user"+" "+choiceUser)
// console.log(result)

const array = [1, 2, 3];
array[10] = 42;
console.log(array.length);

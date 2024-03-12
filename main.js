
const responses = [
    'It is certain.',
    'It is decidedly so.',
    'Reply hazy try again.',
    'Cannot predict right now.',
    'Do not count on it.',
    'My sources say no.',
    'Outlook not so good.',
    'Signs point to yes.'
  ];
  
  function greet(userName = '') {
    console.log(`Hello, ${userName}!`);
  }
  
  function getMagicEightBallResponse() {
    const randomNumber = Math.floor(Math.random() * responses.length);
    return responses[randomNumber];
  }
  
  greet(); // Greet without a name
  
  const userQuestion = 'Will I have a great day tomorrow?'; // for context
  const prediction = getMagicEightBallResponse();
  
  console.log(`Magic Eight Ball says: ${prediction}`);
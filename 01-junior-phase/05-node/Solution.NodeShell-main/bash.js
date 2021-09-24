const prompt = (data) => {
  console.log(data);
  process.stdout.write('> ');
};

const main = (data) => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');
  switch (command) {
    case 'pwd':
      require('./pwd')(prompt);
      break;
    case 'ls':
      require('./ls')(prompt);
      break;
    case 'cat':
      require('./cat')(arg, prompt);
      break;
    case 'curl':
      require('./curl')(arg, prompt);
      break;
    default:
      prompt('not found');
  }
};

prompt('Welcome to Node Shell!');
process.stdin.on('data', main);

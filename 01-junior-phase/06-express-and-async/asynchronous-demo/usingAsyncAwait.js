
// First, require fs
// Let's define the function
// Then "consume" the promise using async/await
// Add async call, but forget async/await keywords
// add await keyword
// Add try/catch

const fs = require('fs')

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(error)
      }
      else {
        resolve(data)
      }
    })
  })
}

// const asyncAwaitCall = async () => {
//   const steps = await usingAsyncAwait('./pokemon-master.txt')
//   console.log('The steps to becoming a Pokemon master are: ', steps)
// }

const main = async () => {
  try {
    const textPromise = readFile('./frankenstein.txt')
    console.log('Here is my text: ', textPromise)
   // console.log(await textPromise) // WRITE THIS AFTER
  }
  catch (error) {
    console.log("An error occurred", error)
  }
}

main()

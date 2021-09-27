/*
By default, all async functions in node's fs package asks for regular callbacks - they do not return promises.
Fortunately Node.js also provides a promisify method in it's built-in util package to transform any of its async functions to, instead, return promises.
*/
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g)
  const tally = {}
  let mostFrequentWord = null

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word
  })
  return mostFrequentWord
}

const findPassword = async () => {
  // Your code goes here
  try {
    const startingPoemText = await readFileAsync(
      'poems/starting-poem.txt',
      'utf-8'
    )
    let mostCommonWord = mostFrequentWord(startingPoemText)

    const secondPoemText = await readFileAsync(
      `poems/${mostCommonWord}.txt`,
      'utf-8'
    )
    mostCommonWord = mostFrequentWord(secondPoemText)

    const thirdPoemText = await readFileAsync(
      `poems/${mostCommonWord}.txt`,
      'utf-8'
    )
    mostCommonWord = mostFrequentWord(thirdPoemText)

    console.log(mostCommonWord)
  } catch (error) {
    console.error('Oh no! An error occurred: ', error)
  }
}

findPassword()

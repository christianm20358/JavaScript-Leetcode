/* eslint-disable no-console */

// Function to get a cryptographically random
function cryptoRandNum(): number {
  const cryptoRandom = window.crypto.getRandomValues(new Uint32Array(1))[0]
  console.log(cryptoRandom)

  const updateCryptoRandom = cryptoRandom / (2 ** 32 - 1)
  console.log(updateCryptoRandom)

  const secondNewCryptoRand = updateCryptoRandom * 10
  console.log(secondNewCryptoRand)

  const final = Math.floor(secondNewCryptoRand)
  return final
}

// Recursive solution to subset sum problem in TypeScript
// Time complexity is O(2^n)

// recursive function generates random numbers until a set sum is reached
function recursiveRandNum(): number[] {
  const arr = []
  for (let index = 0; index < 5; index++)
    arr.unshift(cryptoRandNum())

  document.write('Length is ', arr.length.toString())
  return arr
}

function loopSum(a: number[]): number {
  let counter = 0
  for (let index = 0; index < a.length; index++) {
    const element = a[index]
    counter = element + counter
  }
  return counter
}

document.write('Array values are ', recursiveRandNum().toString(), '\n')

export const arrTotal = recursiveRandNum().reduce((partialSum, a) => partialSum + a, 0)

export const forTotal = loopSum(recursiveRandNum())

document.write('\n Reduce ', arrTotal.toString(), '\n')
document.write('\n Counter', forTotal.toString(), '\n')

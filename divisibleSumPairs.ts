export function isInteger(number: string): boolean {
  const regex = new RegExp(/.+[1-9]/);
  if (regex.exec(number)) {
    return false;
  }
  return true;
}

/**
 * This function adds on pairs of integers and checks if they are divisible by a given integer
 * @param n the length of array ar
 * @param k the integer divisor
 * @param ar an array of integers
 */
export function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    const elementI = ar[i];
    for (let j = i + 1; j < ar.length; j++) {
      const elementJ = ar[j];
      if ((elementI + elementJ) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

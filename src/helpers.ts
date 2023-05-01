
export async function fetchData(url: string) {
  const response = await fetch(url)
  return await response.json()
}

export function getRandomInteger(min: number, max: number): number {
  return Math.ceil(min + Math.random() * (max - min));
}

export function getUniqRandomNumArray (totalNums: number, maxNums=100): number[] {
  let randomNumber: number
  let count = 0
  const numsArray: number[] = []

  while (count < totalNums) {
    randomNumber = getRandomInteger(0, maxNums)
    if (!numsArray.includes(randomNumber)) {
      numsArray.push(randomNumber)
      count++
    }
  }

  return numsArray
}
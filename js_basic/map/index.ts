interface MapCallback<T, U> {
  (value: T, index?: number, array?: T[]): U;
}

function map<T, U>(targetArray: T[], callback: MapCallback<T, U>) {
  const returnArray: U[] = [];
  for (let i = 0; i < targetArray.length; i++) {
    returnArray.push(callback(targetArray[i]));
  }
  return returnArray;
}

export default map;
interface CallbackFn<T, U> {
  (value: T, index?: number, array?: T[]): U;
}

function map<T, U>(targetArray: T[], callback: CallbackFn<T, U>) {
  const returnArray: U[] = [];
  for (let i = 0; i < targetArray.length; i++) {
    returnArray.push(callback(targetArray[i]));
  }
  return returnArray;
}

// function map<U>(this: T[], callbackFn: CallbackFn<T, U> ) {
//   const returnArray: U[] = [];
//   for (let i = 0; i < this.length; i++) {
//     returnArray.push(callbackFn(this[i]));
//   }
//   return returnArray;
// }

export default map;
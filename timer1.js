// grab values from the console
const myArgs = process.argv.slice(2);

//attempt to convert all the elements into numbers:
const convert = (array) => {
  let convertArray = [];
  for (let elem in array) {
    if (Math.sign(array[elem]) !== -1 && !isNaN(array[elem])) {
      convertArray.push(array[elem]);
    }
  }
  return convertArray;
};

const countdown = (callback, array) => {
  // convert the data into numbers:
  let countDownArray = callback(array);
  // multiply the result of each item:
  for (let time in countDownArray) {
    countDownArray[time] = countDownArray[time] * 1000;
  }
  
  // set Alarm to go off at the dedicated intervals:
  for (let i = 0; i < countDownArray.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, countDownArray[i]);
  }
};

countdown(convert, myArgs);


// const spinner = () => {
//   let interval = 50;
//   const printer = ['\r|   ', '\r/    ', '\r-     ','\r\\     '];
//   for (let i = 0; i < printer.length; i++) {
//     setTimeout(() => {
//       process.stdout.write(printer[i]);
//     }, interval);
//     interval += 100;
//   }
// };

// process.stdout.write('\x07');
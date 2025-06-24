console.log(new Date()); // 2025-06-12T05:21:30.195Z
console.log(new Date(2023, 5, 12)); // 2023-06-12T06:00:00.000Z
console.log(new Date(2023, 5, 12, 12, 45, 0, 999)); // 2023-06-12T06:00:00.000Z
console.log(new Date(2023, 5, 12).getTime()); // 1686549600000
console.log(new Date(1686549600000)); // 2023-06-12T06:00:00.000Z

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate('6-12-2023')); // 2023-06-12T06:00:00.000Z

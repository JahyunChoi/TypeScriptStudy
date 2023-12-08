type Combinable = number | string;
type ConvertionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConvertionDescriptor
  //리터럴 유니언으로 딱 두개만 허용
  //하나만할거면 그냥 하드코딩하라 
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Mx", "Anna", "as-text");
console.log(combinedNames);

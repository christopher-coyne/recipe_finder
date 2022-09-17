export const capitalize = (myString: string) => {
  const newStr = myString
    .split(" ")
    .map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return newStr;
};

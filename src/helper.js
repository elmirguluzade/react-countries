export const numFixer = (num) => {
    num = num.toString().split("").reverse().join("");
    for (let i = 0; i < num.length; i++) {
      if (i % 4 === 3) num = num.slice(0, i) + "." + num.slice(i);
    }
    return num.split("").reverse().join("");
  };

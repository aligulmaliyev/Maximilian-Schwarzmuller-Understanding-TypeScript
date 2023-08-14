// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Ali", hobbies: ["Sports"] }, { age: 40 });
// console.log(mergedObj.hobbies);

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value.";
//   if (element.length === 1) {
//     descriptionText = "Got 1 element.";
//   } else if (element.length > 1) {
//     descriptionText = "Got " + element.length + " elements";
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe(["Sports", "Cooking"]));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// extractAndConvert({ name: "Ali" }, "name");

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }
//   removeItem(item: T) {
//     if (this.data.indexOf(item) === 1) return;
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Ali");
// textStorage.addItem("Manu");
// textStorage.removeItem("Ali");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const aliObj = { name: "Ali" };
// objStorage.addItem(aliObj);
// objStorage.addItem({ name: "Manu" });
// // //...
// objStorage.removeItem(aliObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  data: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = data;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Ali", "Anna"];

// names.push("Manu");
// names.pop();
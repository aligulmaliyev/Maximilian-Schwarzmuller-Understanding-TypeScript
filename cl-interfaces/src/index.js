// class BaseClassWithPrivateStaticField {
//   static #PRIVATE_STATIC_FIELD = 10;

//   static basePublicStaticMethod() {
//     return BaseClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
//   }
// }

// class SubClass extends BaseClassWithPrivateStaticField {}

// console.log(SubClass.basePublicStaticMethod()); // TypeError: Cannot read private member #PRIVATE_STATIC_FIELD from an object whose class did not declare it

class ClassWithField {
  constructor() {
    console.log("constructor");
  }
  static {
    console.log("Static 1");
  }
}

new ClassWithField();

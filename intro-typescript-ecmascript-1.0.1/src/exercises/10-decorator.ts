 

/*
    ===== TypeScript code =====
*/
 //generic function <T> T could be any letter
 
 function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

//need to set in tsconfig.json
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
  
    constructor(t: string) {
      this.title = t;
    }
  }
  
  const bug = new BugReport("Needs dark mode");
  console.log(bug.title); // Prints "Needs dark mode"
  console.log(bug.type);  //prints "report"
//  class MyClass{
//      public property: string = 'My Property';

//      print(){
//          console.log('Hello World');
//      }
//  }

//  console.log(MyClass);

//  const myCls = new MyClass();

//  console.log(myCls.property)
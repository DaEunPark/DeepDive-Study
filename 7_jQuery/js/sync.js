function func1() {
    console.log('func1');
    func2();
  }
  
  function func2() {
    console.log('func2');
    func3();
  }
  
  function func3() {
    console.log('func3');
  }
  
  func1();
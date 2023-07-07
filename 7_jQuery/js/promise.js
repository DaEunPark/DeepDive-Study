//Promise 선언
function asyncFunc(param) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() { // 비동기 함수
        param ? resolve("resolved!") : reject("rejected!");
      }, 2000);
    });
  };
  
  //Promise 실행
  asyncFunc(false)
    .then(function(data) {
      // resolve가 실행된 경우(성공), resolve 함수에 전달된 값이 data에 저장된다
      console.log(data);
    },function(reason) {
      // reject가 실행된 경우(실패), reject 함수에 전달된 값이 reason에 저장된다
      console.log(reason);
      throw "Error:" + reason;
    }).catch(function(error) {
      console.error(error);
    });
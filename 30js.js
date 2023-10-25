// 30 days javaScript

function createCounterFun(init){
    let counter = init
  
    function add(){
      return ++counter;
    }
  
    function decrement(){
      return --counter
    }
  
    function reset(){
      counter = init
      return counter
    }
  
    return {
      add,
      decrement,
      reset
    }
  
  }
  
  class createCounter{
    constructor(init){
      this.init = init
      this.counter = init
    }
  
    add(){
      return ++this.counter
    }
    decrement(){
      return --this.counter
    }
    reset(){
      this.counter = this.init
      return this.counter
    }
  }
  
  class Adder {
    constructor(a) {
       this.a = a;
    }
  
    add(b) {
      const sum = this.a + b;
      return sum;
    }
  }
  
  function createAdder(a) {
    return function add(b) {
      const sum = a + b;
      return sum;      
    }
  }
  
  // dinamic programing
  
  function memoize(fn) {
    const cache ={}
    return function(...args) {
        let key = JSON.stringify(args)
        if(key in cache){
          return cache[key];
        }
        cache[key] = fn(...args)
        console.log(cache)
        return cache[key]
    }
  }
  
  //  let callCount = 0;
  // const memoizedFn = memoize(function (a, b) {
  // 	 callCount += 1;
  //    return a + b;
  //  })
  //  memoizedFn(2, 3) // 5
  //  memoizedFn(2, 3) // 5
  //  console.log(callCount) // 1 
  
  const curry = function (fn) {
    let nums = []
    return function curried(...args) {
        nums = [...nums,...args]
        if(fn.length === nums.length ){
          const res = fn(...nums)
          nums = []
          return res
        }else{
          return curried
        }
    }
  }
  
  function suma(a,b) { return a + b}
  
  const csum = curry(suma)
  
  // console.log(csum(1)(2));
  
  // PROMISE
  
  var addTwoPromises = async function(promise1, promise2) {
    r1 = await promise1;
    r2 = await promise2;
    return r1+r2
  };
  
  //sleep
  async function sleep(millis) {
    await new Promise((resolve,reject)=>{
      setTimeout(resolve,millis)
    })
  }
  
  // calear las funciones uno depuses de otra 
  async function promisePool(functions,n){
    let i = 0;
  
    async function callback() {
      if(i === functions.length){
        return ;
      }
      await functions[i++]()
      await callback()
    }
  
    const nPromise = Array(n).fill().map(callback)
    await Promise.all(nPromise)
  }
  
  //timelimted cache
  
  class TimeLimitedCache {
    cache = new Map();
  
    set(key, value, duration) {
        const alreadyExist = this.cache.get(key);
        if (alreadyExist) {
            clearTimeout(alreadyExist.timeoutId);
        }
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
  
        this.cache.set(key, { value, timeoutId });
        return Boolean(alreadyExist);
    }
  
    get(key) {
        if (this.cache.has(key))
            return this.cache.get(key).value;
        return -1;
    }
  
    count() {
        return this.cache.size;
    }
  }
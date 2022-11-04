function cachingDecoratorNew(func) {
  let cache = [];
  return function(...args) {
    const hash = args.join(',');
    const objectInCache = cache.find((item) => item['hash'] === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache['value']);
      return "Из кэша: " + objectInCache['value'];
    }
    
    const result = func(...args);
    if (!objectInCache) {
      cache.push({hash, value: result});    
    }

    if (cache.length > 5) {
      cache.shift();
    }    

    console.log("Вычисляем: " + result)
    return "Вычисляем: " + result;
  }
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0; 
  wrapper.allCount = 0;
 
  function wrapper(...args) {    

    if (!timeoutId) {
      func(...args);
      wrapper.count += 1;
      timeoutId = setTimeout(() => { 
        func(...args);
        wrapper.count += 1;
        }, delay);
      
    } else {  
      if (timeoutId) {
        clearTimeout(timeoutId);
      }    

      timeoutId = setTimeout(() => { 
        func(...args);
        wrapper.count += 1;
        }, delay);      
    }
    wrapper.allCount += 1;
  }  
  return wrapper;  
}
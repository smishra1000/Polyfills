function asyncTask1(){
return new Promise(function(resolve,reject){
setTimeout(function(){
resolve("first promise");
},2000)
})
}

function asyncTask2(){
return new Promise(function(resolve,reject){
setTimeout(function(){
resolve("second promise");
},4000)
})
}

function asyncTask3(){
return new Promise(function(resolve,reject){
setTimeout(function(){
resolve("third promise");
},6000)
})
}



var promises = [asyncTask1,asyncTask2,asyncTask3]

Promise.all = function(){
let result = [];
return new Promise(function(resolve,reject){
promises.forEach(function(promise,index){
promise().then(function(res){
	result.push(res);
  if(index===promises.length-1){
  resolve(result);
  }
}).catch(function(err){
reject(err);
})
})
})
}

Promise.all().then(function(res){
	console.log("after all ",res);
}).catch(function(err){
console.log(err);
})









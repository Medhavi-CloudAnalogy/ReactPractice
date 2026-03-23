// console.log("script start");

// const hello = ()=>{
//     console.log("hiiii !!!");
// }
// let id = setTimeout(hello,100);

// for(let i=0 ; i<100 ; i++){
//     console.log("...");
// }
// console.log("setTimeout id:",id);
// clearTimeout(id);
// console.log("script end");




// set Interval

// console.log("script start");

// // let intervalId = setInterval(()=>{
// //     console.log(Math.random())
// // },10);

// clearInterval(intervalId)
// console.log("script end")


// let body = document.body;
// let btn = document.querySelector(".btn");

// const intervalId = setInterval(()=>{
//     const red = Math.floor(Math.random()*126);
//     const blue = Math.floor(Math.random()*126);
//     const green = Math.floor(Math.random()*126);
//     body.style.backgroundColor = `rgb(${red},${green},${blue})`
// },1000);

// btn.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     console.log("Rooook Diya !!!")
// })




// call back function 

// function sumTwoNumbers(number1,number2,sucess){
    
//     if(typeof(number1) === 'number' && typeof(number2) === 'number'){
//         sucess(number1,number2);
//     }else{
//         failure();
//     }
    
// }

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }

// sumTwoNumbers(4,5,addNumbers);




//call back hell , pyramid of doom
// const head1 = document.querySelector(".heading1");
// const head2 = document.querySelector(".heading2");
// const head3 = document.querySelector(".heading3");
// const head4 = document.querySelector(".heading4");
// const head5 = document.querySelector(".heading5");
// const head6 = document.querySelector(".heading6");
// const head7 = document.querySelector(".heading7");


// setTimeout(()=>{
//     head1.innerHTML = "Heading 1";
//     head1.style.color = 'red';
//         setTimeout(()=>{
//         head2.innerHTML = "Heading 2";
//         head2.style.color = 'blue';
//             setTimeout(()=>{
//             head3.innerHTML = "Heading 3";
//             head3.style.color = 'green';
//                 setTimeout(()=>{
//                 head4.innerHTML = "Heading 4";
//                 head4.style.color = 'yellow';
//                     setTimeout(()=>{
//                     head5.innerHTML = "Heading 5";
//                     head5.style.color = 'orange';
//                         setTimeout(()=>{
//                         head6.innerHTML = "Heading 6";
//                         head6.style.color = 'crimson';
//                             setTimeout(()=>{
//                             head7.innerHTML = "Heading 7";
//                             head7.style.color = 'pink';
// },1000)
//     },2000)
//         },2000)
//             },1000)
//                 },2000)
//                     },3000)
//                         },1000);


// function changeText(elem,text,color,time,onSucessCallback,onFaliureCallback){
//     setTimeout(()=>{
//         elem.textContent = text;
//         elem.style.color = color;

//         if(onSucessCallback){
//             onSucessCallback();
//         }
//         else{
//             if(onFaliureCallback){
//                 onFaliureCallback();
//             }
//         }
//     },time);
// }

// changeText(head1,"one","red",1000,()=>{
//     changeText(head2,"two","blue",1000,()=>{
//         changeText(head3,"three","lightgreen",1000,()=>{
//             changeText(head4,"four","yellow",1000,()=>{
//                 changeText(head5,"five","crimson",1000,()=>{
//                     changeText(head6,"six","cyan",1000,()=>{
//                         changeText(head7,"seven","pink",1000,()=>{
//                         },()=>{console.log("Your element does not exist.");})
//                     },()=>{console.log("Your element does not exist.");})
//                 },()=>{console.log("Your element does not exist.");})
//             },()=>{console.log("Your element does not exist.");})
//         },()=>{console.log("Your element does not exist.");})
//     },()=>{console.log("Your element does not exist.");})
// },()=>{console.log("Your element does not exist.");})


// PROMISES

// let basket = ["coffee","sugar","salt","vegetable","rice"];

// let friedRicePromise = new Promise((resolve,reject)=>{
//     if(basket.includes("vegetable")&&basket.includes("rice")&&basket.includes("salt")){
//         resolve("tasty Fried Rice");
//     }else{
//         reject("Can not fulfill promise");
//     }
// })


// friedRicePromise.
//     then((res)=>{
//         console.log("lets eat",res);
//     }).
//     catch((error)=>{
//         console.log(error);
//     })



// function ricePromise(){
//     let basket = ["coffee","sugar","salts","vegetable","rice"];
//     return new Promise((resolve,reject)=>{
//         if(basket.includes("vegetable")&&basket.includes("rice")&&basket.includes("salt")){
//             resolve("tasty Fried Rice");
//         }else{
//             reject("Can not fulfill promise");
//         }
//     })
// }

// ricePromise().then((res)=>{
//         console.log("lets eat",res);
//     }).
//     catch((error)=>{
//         console.log(error);
//     })


//promise ans setTimeout

// function myPromise(){
//     const value = true;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise().then(()=>{console.log("resolved")})
// .catch(()=>{console.log("rejected")});


//XHR => XML HTTP Request

// const URL ="https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// // console.log(xhr);

// xhr.open("GET",URL);

// // xhr.onreadystatechange = function(){
// //     if(xhr.readyState === 4){
// //         const response = xhr.response
// //         const data = JSON.parse(response);
// //         console.log(typeof data);
// //     }
// // }

// xhr.onload = function(){
//     const response = xhr.response
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();
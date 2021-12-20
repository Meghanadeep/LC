// const a = function(x) {
//     this.x = x;
// }

// const b = function(x,y) {
//     this.y = y;
//     this.x = a.call(b, x).x;
//     this.getX = () => {
//         return this.x;
//     };
//     this.getY = () => {
//         return this.y;
//     }
// }

// console.log(new a(3));
// console.log(new b);
// console.log(new b(5,6).getX());

// const obj = {
//     a: {
//         b: {
//             c:1
//         }
//     }
// };
// //const cloneObj = Object.assign({},obj);
// const cloneObj = JSON.parse(JSON.stringify(obj));
// cloneObj.a.b.c = 2;
// console.log(obj)

// const x = ["" ,""];
// const y = ["", ""];
// const h = {};
// const i = {};
// console.log(x+y);
// console.log(h+i);
// const a = [1,2,3,4,5];
// const b = [2,3,4,5,6,7];
// const c = a+b;
// const d = a.concat(b);
// console.log(c);
// console.log(d);
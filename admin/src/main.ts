import Vue from 'vue'
import App from './App.vue'
import './plugins/element.ts'
import './plugins/avue.js'
import router from './router'
import axios from 'axios'
// import Eleform from 'vue-ele-form'
// Vue.use(Eleform)
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
    baseURL:'http://localhost:3000'
})
    
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// interface SearchFunc {
//     (source: string, subString: string): number;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1?1:2;
// }
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }   

// interface Animal {
//     name: string;
//     }
// interface Cat {
//     name: string;
//     run(): void;
//     }
    
// const animal: Animal = {
//     name: 'tom'
//     };
// let tom = animal as Cat;
// tom.run = function(){}
// tom.run()

// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true
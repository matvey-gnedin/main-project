const time = 5000;
const step = 20;

let arr = document.querySelectorAll('.guarantees-container');

for (let i = 0; i < arr.length; i++){
    let k = arr[i].innerHTML
    let n = 0;
    let t = Math.round(time/(k/step));
    let interval = setInterval(()=>{
        n += step
        if (n == k) {
            clearInterval(interval)
        }
        arr[i].innerHTML = n; 
    }, t)
}

// arr.forEach(function(elem){
//     let k = elem.innerHTML
//     n = 0;
//     let t = Math.round(time/(k/step));
//     setInterval(()=>{
//         n += step
//         if (n == k) {
//             clearInterval(interval)
//         }
//         elem.innerHTML = n; 
//     }, t)
// })

    // let l = document.querySelector(elem)
    // n = 0;
    // let t = Math.round(time/(num/step));
    // let interval = setInterval(()=>{
    //     n += step
    //     if (n == num) {
    //         clearInterval(interval)
    //     }
    //     l.innerHTML = n; 
    // }, t)



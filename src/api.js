
export function FetchMine(url) {
    const res = fetch(url).then(data =>  data.json())
    return res
}


// await  fetch(
//   "https://api.ismcserver.online/89.33.12.3"
//   , {
//     headers: {
//         "Authorization"
//   : 
//   "ca0154c5-0bef-4ccf-99e6-dfcce977a137"
//    // insert your token here
//     }
//   }).then(res => res.json()).then(res => console.log(res))
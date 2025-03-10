

// fetch("https://northwind.vercel.app/api/categories").then((res)=>res.json()).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// axios("https://northwind.vercel.app/api/categories").then((res)=>{
//     console.log(res.data);
// })

// function getAllData(){
//     axios("https://northwind.vercel.app/api/categories").then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// function getDataById(id){
//     axios(`https://northwind.vercel.app/api/categories/${id}`).then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// function deleteDataById(id){
//     axios.delete(`https://northwind.vercel.app/api/categories/${id}`).then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// function addNewData(payload){
//     axios.post(`https://northwind.vercel.app/api/categories/`, payload).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// function editDataById(id, payload){
//     axios.put(`https://northwind.vercel.app/api/categories/${id}`, payload).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// deleteDataById(1)
// getDataById(2)
// getDataById(5)
// getAllData()


//async vs await

// async function sum(a,b){
//     return a+b
// }

// console.log(sum(2,3));

// sum(2,3).then((res)=>{
//     console.log(res);
// })


// async function getAllData(){

// }

const getAllData = async()=>{
    try {
        const response = await axios("https://northwind.vercel.app/api/categories")
        console.log(response.data);
    } catch (error) {
        console.log(error.message); 
    }
}
const deleteDataById = async(id)=>{
    try {
        const response = await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
        console.log(response.data);
    } catch (error) {
        console.log(error.message); 
    }
}


// getAllData()

// deleteDataById(4)


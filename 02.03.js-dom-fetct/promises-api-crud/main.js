const apiUrl = "https://book-store-api-liard-three.vercel.app"

// console.log(fetch(`${apiUrl}/books`));


fetch(`${apiUrl}/books`).then((response)=>{
    // console.log(response);
    // console.log(response.json());  
    if(!response.ok){
        throw new Error("some error occured!")
    }
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);    
})

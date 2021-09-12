const BASE_URL = "https://blog-7be92-default-rtdb.firebaseio.com/posts.json"

let api = {
    createPost : async function ( data ){
        let result = await fetch(BASE_URL ,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( data )
        })
        return await result.json()
    }
}


export default api 


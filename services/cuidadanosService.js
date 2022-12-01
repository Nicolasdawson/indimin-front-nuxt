export async function GetCuidadanos(){
    const response = await useFetch('https://localhost:7288/api/cuidadanos', {
        method: 'GET',
        mode: 'no-cors'
})
return response;
}

export async function CreateCuidadano(body){
    let response = await useFetch('https://localhost:7288/api/cuidadanos', {
            method: 'POST',
            body: JSON.stringify(body)
    })

    return { response };
}

export async function GetCuidadano(id){
    let response = await useFetch('https://localhost:7288/api/cuidadanos/' + id, {
        method: 'GET',
})
return response;
}

export async function UpdateCuidadano(body){
    let response = await useFetch('https://localhost:7288/api/cuidadanos/' + body.cuidadanoId, {
            method: 'PUT',
            body: JSON.stringify(body)
})
return {response};
}

export async function DeleteCuidadano(id){
    let response = await useFetch('https://localhost:7288/api/cuidadanos/' + id, {
        method: 'DELETE'
})
return {response};
}

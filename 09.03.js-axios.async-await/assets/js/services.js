import { BASE_URL } from "./constants.js";

//get all data
const getAllData = async(endpoint)=>{
    try {
        const response = await axios(`${BASE_URL}/${endpoint}`)
        return response.data
    } catch (error) {
        console.log(error);   
    }
}

//get data by data
const getDataById = async(endpoint, id)=>{
    try {
        const response = await axios(`${BASE_URL}/${endpoint}/${id}`)
        return response.data
    } catch (error) {
        console.log(error);   
    }
}

// delete data by id

const deleteDataById = async(endpoint, id)=>{
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        return response
    } catch (error) {
        console.log(error);   
    }
}

//add new data

const addNewData = async(endpoint, payload)=>{
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload)
        return response
    } catch (error) {
        console.log(error);   
    }
}

//edit data by id
const editDataById = async(endpoint, id, payload)=>{
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload)
        return response
    } catch (error) {
        console.log(error);   
    }
}

export {
    getAllData, 
    getDataById,
    deleteDataById,
    addNewData,
    editDataById
}
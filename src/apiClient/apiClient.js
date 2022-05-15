import axios from "axios";

const baseUrl = 'http://localhost:8000';

export const getBatches = async () => {
    const res = await axios.get(baseUrl + '/batches/')
    return res
}

export const getVideos = async () => {
    const res = await axios.get(baseUrl + '/courses/')
    return res
}
export const getMaterial = async () => {
    const res = await axios.get(baseUrl + '/material/')
    return res
}

export const getNotif = async () => {
    const res = await axios.get(baseUrl + '/notif/')
    return res
}

export const getStudents = async () => {
    const res = await axios.get(baseUrl + '/profiles/')
    return res
}
import axios from "axios";

const baseUrl = 'https://edugeeks.pythonanywhere.com';

export const getBatches = async () => {
    const res = await axios.get(baseUrl + '/batch/')
    return res
}

export const getVideos = async () => {
    const res = await axios.get(baseUrl + '/video/')
    return res
}
export const getMaterial = async () => {
    const res = await axios.get(baseUrl + '/study_material/')
    return res
}

export const getNotif = async () => {
    const res = await axios.get(baseUrl + '/notif/')
    return res
}

export const getStudents = async () => {
    const res = await axios.get(baseUrl + '/user/')
    return res
}
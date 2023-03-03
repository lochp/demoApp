import axios from "axios";
import { Utils } from "../utils/Utils";

const URL = 'https://demoapp-6bc0a-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const AppWs = {

    putUserData: (payload, successFnc, FailedFnc)=>{
        if (payload == null) return;
        const {userName, password} = payload;
        const url = `${URL}user/${userName}.json`;
        axios.put(url, payload).then(resp => {console.log(resp.data); successFnc && successFnc(resp.data)}).catch(e => {console.log(e); FailedFnc && FailedFnc(e)});
    },

    getUserData: (payload, successFnc, FailedFnc)=>{
        if (payload == null) return;
        const {userName, password} = payload;
        const url = `${URL}user/${userName}.json`;
        console.log(url);
        axios.get(url).then(resp => {console.log(resp.data); successFnc && successFnc(resp.data)}).catch(e => {console.log(e); FailedFnc && FailedFnc(e)});
    },

    postNotification: (payload, successFnc, FailedFnc)=>{
        if (Utils.isEmpty(payload)) return;
        const {userName, notification} = payload;
        const url = `${URL}notification/${userName}.json`;
        axios.post(url, notification).then(resp => {console.log(resp.data); successFnc && successFnc(resp.data)}).catch(e => {console.log(e); FailedFnc && FailedFnc(e)});
    },

    getNotifications: (payload, successFnc, FailedFnc)=>{
        if (Utils.isEmpty(payload)) return;
        const {userName} = payload;
        const url = `${URL}notification/${userName}.json`;
        console.log(url);
        axios.get(url).then(resp => {console.log(resp.data); successFnc && successFnc(resp.data == null ? {} : resp.data /* (Array.isArray(resp.data) ? resp.data : [resp.data]) */)}).catch(e => {console.log(e); FailedFnc && FailedFnc(e)});
    }

}
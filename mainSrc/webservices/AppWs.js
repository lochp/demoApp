import axios from "axios";

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
    }

}
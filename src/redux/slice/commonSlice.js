import {createSlice} from "@reduxjs/toolkit";

const commonState = {
    showModal : false
}
const commonSlice = createSlice({
    name : 'common',
    initialState : commonState ,
    reducers : {
        setShowModal : (state , action)=>{
            return {
                ...state,
                showModal: !state.showModal
            }
        }
    }
})

export const {setShowModal} = commonSlice.actions
export default commonSlice.reducer
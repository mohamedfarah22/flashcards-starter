import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const addQuizThunk =(payload)=>{
    return (dispatch)=>{
        dispatch(addQuiz(payload))
        dispatch(addQuizId({topicId:payload.topicId, quizId:payload.id}))
    }
 }

const quizzesSlice = createSlice({
    name:'quizzes',
    initialState:{quizzes:{}},
    reducers:{
        addQuiz:(state,action) =>{
            const quizObj = {
                id: action.payload.id,
                topicId : action.payload.topicId,
                name: action.payload.name,
                cardIds: action.payload.cardIds
            }
            state.quizzes[action.payload.id]=quizObj;
        }
    }
});



export const selectQuizzes = state => state.quizzes.quizzes;

export const {addQuiz} = quizzesSlice.actions;

export default quizzesSlice.reducer;
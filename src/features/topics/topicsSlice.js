import { createSlice } from "@reduxjs/toolkit";
const topicsSlice = createSlice({
    name:'topic',
    initialState:{topics:{}},
    reducers:{
        addTopic:(state,action) =>{
            const topicObj = {
                id:action.payload.id,
                name:action.payload.name,
                icon:action.payload.icon,
                quizIds:[]
            }
            state.topics[action.payload.id]=topicObj
            
        },
        addQuizId : (state,action) => {
            const {quizId, topicId} =action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }

})

export const selectTopics = state => state.topics.topics;

export const {addTopic, addQuizId} = topicsSlice.actions;

export default topicsSlice.reducer;
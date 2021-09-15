import React, { useEffect, useReducer, useState } from 'react'
import CourseInfo from './CourseInfo';
import Form from './From';

const samurajProgramowaniaCourses = [
    {id: '1', title: 'Web developer od podstaw w 15 dni'},
    {id: '2', title: 'sdlkajsf'},
    {id: '3', title: 'Web djaskfjsadf 15 dni'},
    {id: '4', title: 'WebSKJSSF podstaw w 15 dni'},
    {id: '5', title: 'Web developer odlkjljl 15 dni'},
]

const coursesReducer = (state, action) => {
    switch (action.type) {
        case "ADD":            
            return [...state, {id: action.id, title: action.title}]; 
        case "REMOVE":
            return state.filter(course => course.id !== action.id);
        case "FETCH":
            return action.data;  
        default:
            throw new Error("Ooops something went wrong");
    }
}

const fetchAsyncData = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
}

const App3 = () => {
    const [isFetched, setIsFetched] = useState(false)
    const [state, dispatch] = useReducer(coursesReducer, []);

    const asyncFetch = async () => {
        await fetchAsyncData();
        dispatch({
            type: 'FETCH', 
            data: samurajProgramowaniaCourses
        })
        setIsFetched(true);
    }

    useEffect(() => {
        asyncFetch();        
    }, [])

    const coursesElement = state.map(course => 
        <CourseInfo 
            key={course.id}
            onClickHandler={dispatch} 
            {...course}
        />)

    return ( 
        <div>
            <Form 
                onClickHandler={dispatch} 
                isFetched={isFetched}
            />
            {coursesElement}

        </div>
     );
}
 
export default App3;
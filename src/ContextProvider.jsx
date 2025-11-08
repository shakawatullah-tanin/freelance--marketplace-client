import React, { useState } from 'react';
import { AuthContext } from './ContextApi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const ContextProvider = ({children}) => {

    const [userInfo,setUserInfo] =useState({})

    const {email,password}= userInfo;

    const createUser=()=>{

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{

            const user = result.user

            console.log(user)
        }

        ).catch(error=>console.log(error.message))

    }


    const user={

        userInfo,
        setUserInfo,
        createUser


    }

    return (

        <AuthContext value={user}>
            {children}
        </AuthContext>
       
    );
};

export default ContextProvider;
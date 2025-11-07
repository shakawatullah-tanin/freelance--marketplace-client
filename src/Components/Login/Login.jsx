import React from 'react';

const Login = () => {

    const handleLogin = (e) =>{

        e.preventDefault()

        const form = e.target

        const formData = new FormData(form)


        const formUser = Object.fromEntries(formData.entries())

        console.log(formUser)
    }
    return (
        <div className='text-center'>
            <h1 className=' text-xl md:text-5xl font-bold'>Login</h1>
            <form className='my-20 w-fit p-16 rounded-lg mx-auto form-bg'  onSubmit={handleLogin}>

                <input className='p-2' type="email" name="email" placeholder='Email' /> <br />
                <input className='p-2' type="password" name="password" placeholder='Password' /><br />
                <button >Sign in with Google</button><br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
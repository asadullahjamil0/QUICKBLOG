import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/10 rounded-lg'>
                <div className='flex flex-col items-center justfy-center'>
                    <div className='w-full py-6 text-center'>
                        <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>Login</h1>
                        <p className='font-light'>Enter your credential to access the admin panel</p>
                    </div>

                    <form onSubmit={handleSubmit} className='w-full mt-6 sm:max-w-md text-gray-600'>
                        <div className='flex flex-col'>
                            <label>Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)} value={email}
                                type="email" required placeholder='Enter your Email' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                        </div>

                        <div className='flex flex-col'>
                            <label>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)} value={password}
                                type="password" required placeholder='Enter your Password' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                        </div>
                        <button type="submit" className='bg-primary text-white text-center py-2 w-full'>Login</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

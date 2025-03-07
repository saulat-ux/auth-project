import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Input from '../components/Input';
import  {Lock, Mail, User } from 'lucide-react'

// type Props = {
   
// }

const SignUpPage: React.FC = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')



    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  

  return (

   <motion.div
   initial = {{opacity: 0, y :20}}
   animate= {{opacity: 1, y :0}}
   transition={{duration: 0.5}}
   className='max-w-md w-full bg-gray-800 bg-opacity-50 p-5  rounded-2xl shadow-xl 
			overflow-hidden'
   >
    
    <div className="p-8">
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>Create Account</h2>
    </div>

    <form onSubmit={handleSignUp}>
    <Input
        icon={User}
        type='text'
        placeholder='Full name'
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

<Input
        icon={Mail}
        type='email'
        placeholder='Email Address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

<Input
        icon={Lock}
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    	<motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						
					>
						Sign Up
					</motion.button>

    </form>
    
     </motion.div>
  )
}

export default SignUpPage
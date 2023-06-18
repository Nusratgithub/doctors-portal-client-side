import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import facebook from '../../../assets/images/login/facebook.svg'
import google from '../../../assets/images/login/google.svg'
import linkedin from '../../../assets/images/login/linkedin.svg'
import { AuthContext } from '../../../contexts/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth'


const SocialLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { signInWithGoogle } = useContext(AuthContext)

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        // setAuthToken(user);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className='flex justify-center items-center gap-4 mb-b-50'>
      <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-not-allowed'>
        <img src={facebook} alt="" />
      </div>
      <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-not-allowed'>
        <img src={linkedin} alt="" />
      </div>
      <div onClick={handleGoogleSignIn} className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer'>
        <img src={google} alt="" />
      </div>
    </div>
  )
}

export default SocialLogin
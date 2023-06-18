import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // useSetTitle('Dashboard')
    return (
       <section className='py-5 px-5 rounded bg-slate-50' data-aos='fade-up' data-aos-duration='1000'>
          <h3 className='text-lg md:text-2xl lg:text-3xl font-bold mb-1'>Welcome, {user?.displayName}. 👋</h3>
          <p className='text-base'>Here is what’s happening with your appointment.</p>
       </section>
      
    );
};

export default Dashboard;
import React, { useContext } from 'react';
import { Link, Navigate, Outlet,NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { AiFillFolder, AiFillHome } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import useAdmin from '../hooks/useAdmin';
import DashboardTopHeader from '../Pages/Dashboard/Dashboard/DashboardTopHeader';
import { toast } from 'react-hot-toast';

const DashboardLayout = () => {
    const { user,logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const handleUserLogout = () => {
        logOut()
            .then(() => {
                Navigate('/')
                toast.warning('User Logout Successfully!', { autoClose: 400 })
            })
            .catch(error => {
               toast.error(error.message, { autoClose: 400 })
            })
    }
    return (
        <>
            <div className='drawer drawer-mobile overflow-hidden'>
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className={`drawer-content bg-gray-200 overflow-hidden`}>
                    <DashboardTopHeader/>
                    <div className='p-8'>
                        <Outlet />
                    </div>
                </div>

                <div className={`drawer-side`}>
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <div className={`menu w-64 text-base-content bg-[#111827] h-screen flex flex-col justify-between duration-300`}>
                        <div className={`flex flex-col items-center my-2 pb-3 border-b border-theme-body duration-300`}>
                            <h4 className="mx-2 mt-2 font-medium text-gray-300 flex gap-1 items-center">{user?.displayName}
                            </h4>
                            <p className="mx-2 mt-1 text-sm font-medium text-gray-300">{user?.email}</p>
                        </div>

                        <div className={`flex flex-col justify-between flex-1 mt-2 md:mt-6`}>
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            to="/"
                                            className='flex items-center py-2 md:py-3 px-5 text-sm md:text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                                        >
                                            <AiFillHome className='text-lg md:text-xl' />
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myappointment"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'flex items-center py-2 md:py-3 px-5 text-sm md:text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                                                    : 'flex items-center py-2 md:py-3 px-5 text-sm md:text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                                            }
                                        >
                                            <MdDashboard className='text-lg md:text-xl' />
                                            <span>MyAppointment</span>
                                        </NavLink>
                                    </li>
                                    {isAdmin && <>
                                        <li>
                                            <Link
                                                to="/dashboard/allusers"
                                                className='flex items-center py-2 md:py-3 px-5 text-sm md:text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                                            >
                                                <AiFillFolder className='text-lg md:text-xl' />
                                                <span>AllUsers</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/dashboard/adddoctor"
                                                className='flex items-center py-2 md:py-3 px-5 text-sm md:text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                                            >
                                                <AiFillFolder className='text-lg md:text-xl' />
                                                <span>AddDoctor</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="/dashboard/managedoctor"
                                                className='flex items-center py-2 md:py-3 px-5 text-sm md:text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                                            >
                                                <AiFillFolder className='text-lg md:text-xl' />
                                                <span>ManageDoctor</span>
                                            </Link>
                                        </li>    
                                    </>
                                    }




                                </ul>
                            </nav>
                        </div>
                        <div className={`border-t border-theme-body`}>
                            <button onClick={handleUserLogout}
                                className='flex w-full items-center py-3 px-5 text-base tracking-wide text-gray-400 hover:text-gray-200 transition hover:bg-gray-800'
                            >
                                <FiLogOut className='text-base md:text-xl' />
                                <span className="ml-3">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default DashboardLayout;
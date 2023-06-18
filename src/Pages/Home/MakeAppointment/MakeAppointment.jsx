import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="text-white lg:mt-32  py-10 mt-10 lg:py-0 "
            style={{
                background: `url(${appointment})`
            }}
        >
           
            <div className='container mx-auto px-[21px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <img src={ doctor } className='-mt-[90px] hidden lg:block' alt="" />
                    <div className='lg:w-[533px]'>
                        <h4 className='text-success font-bold text-xl leading-[22px] mb-[22px]'>Appointment</h4>
                        <h2 className='text-4xl mb-[22px]'>Make an appointment Today</h2>
                        <p className='text-base leading-[21px] mb-11'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
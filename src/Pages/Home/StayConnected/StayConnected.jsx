import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'

const StayConnected = () => {
    return (
        <section className='pt-16 pb-[71px] mb-5'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='container mx-auto px-[21px]'>
                <div className='lg:w-[500px] mx-auto'>
                    <div className='text-center mb-10'>
                        <h4 className='text-success font-bold text-xl leading-[22px] mb-[22px]'>Appointment</h4>
                        <h2 className="text-4xl text-slate-200 leading-[41px] font-normal">What Our Patients Says</h2>
                    </div>
                    <form>
                        <div className='mb-5'>
                            <input type="email" name="email" placeholder='Email Address' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-5'>
                            <input type="text" name="subject" placeholder='Subject' className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                        </div>
                        <div className='mb-9'>
                        <textarea name="message" rows="7" className="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" placeholder="Your message"></textarea>
                        </div>
                        <div className='text-center'>
                            <PrimaryButton>GET APPOINTMENT</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default StayConnected;
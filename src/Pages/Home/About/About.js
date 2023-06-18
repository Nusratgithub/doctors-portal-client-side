import React from 'react';
import img from  '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const About = () => {
  return (
    <div className="lg:m-16 my-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <img src={img} className="w-full h-[500px] rounded-lg shadow-2xl" alt='' />
        <div className='my-auto'>
          <h4 className='text-success font-bold text-xl leading-[22px] mb-3'>About-Us</h4>
          <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-5 text-base text-justify leading-[21px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default About;
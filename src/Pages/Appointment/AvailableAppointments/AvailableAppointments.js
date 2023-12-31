import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-side-eight.vercel.app/appointmentOptions?date=${date}`)
            const data = res.json();
            return data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='container mx-auto my-16'>
            <p className='text-center text-success text-xl font-bold'>Available Appointments on {date}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                // refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;
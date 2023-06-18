import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-success font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <PrimaryButton> <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
import React, { useEffect, useState } from 'react';
import Socket from "../../socket/index";
import useTempState from './../../custom-hooks/useTempState'
const Errors = () => {
    const [errors, setErrors] = useTempState([], 5000);

    useEffect(() => {
        Socket.on("err", function (err) {
            setErrors(["خطا", err]);
        });
    }, []);
    return (
        <div>
            <ul className="errors">
                {errors.map(err => <li className="event">{err[1] + err[0]}</li>)}
            </ul>
        </div>
    );
}

export default Errors;
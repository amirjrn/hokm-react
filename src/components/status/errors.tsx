import React, { useEffect, useState } from 'react';
import setAndRemoveState from '../../logic/setAndRemoveState'
import Socket from "../../socket/index";
const Errors = () => {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        Socket.on("err", function (err) {
            setAndRemoveState(setErrors, ["خطا", err], 10000)
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
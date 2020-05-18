import React, { useEffect, useState } from 'react';
import Socket from "../../socket/index";
import Suit from '../../components/deck/suit';
import { useSelector } from 'react-redux';
const Infos = () => {
    const [hokm, setHokm] = useState();
    const [hakem, setHakem] = useState();
    const teams = useSelector(state => state.teams);
    useEffect(() => {
        Socket.on("taeen-hakem", function (name) {
            setHakem(name);
        })
        Socket.on("hokm", function (hokm) {
            setHokm(hokm);
        });
    }, []);
    return (
        <div>
            <div>{hokm ? <Suit suit={hokm} /> : "حکم تعیین نشده"}</div>
            <ul className="winnings">
                {teams.map((team, i) =>
                    <li>
                        <ul>
                            <li>{team.won_bazi}{i === 0 ? ":" : null}</li>
                            <li>{team.won_dast}{i === 0 ? ":" : null}</li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Infos;
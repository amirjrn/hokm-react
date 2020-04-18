import React, { useEffect, useState } from 'react';
import Socket from "../../socket/index";
import Suit from '../../components/deck/suit';
import { useSelector } from 'react-redux';
import { setWinner } from './../../store/actions/teams';
const Infos = () => {
    const [hokm, setHokm] = useState();
    const [hakem, setHakem] = useState();
    const teams = useSelector(state => state.team);
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
            <div>{`حاکم بازی : ${hakem ? hakem : "تعیین نشده"}`}</div>
            <div>{hokm ? <Suit suit={hokm} /> : "حکم تعیین نشده"}</div>
            <div>
                {teams.map(team => <ul><li>بازی برنده : {team.won_bazi}</li><li>دست برنده :{team.won_dast}</li></ul>)}
            </div>
        </div>
    );
}

export default Infos;
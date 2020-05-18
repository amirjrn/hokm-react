import React from 'react';
import { useSelector } from 'react-redux';
import Hokms from './hokms';

const Hokm = () => {
    const hakem = useSelector(state => state.hakem);
    const hokm = useSelector(state => state.hokm);
    const name = useSelector(state => state.name);
    return (
        <ul className="suits">
            {(hakem === name && !hokm) ? <Hokms suits={["del", "khaj", "khesht", "pik"]} /> : null}
            {(!hokm && hakem !== name) ? "منتظر حکم بمانید" : null}
        </ul>
    );
}

export default Hokm;
import { HeaderContainer } from "./styles";
import ignite from '../../assets/ignite.svg'

import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
            <img src={ignite} alt="" />
            <nav>
                <NavLink to="/">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
import React from 'react'
import { styled } from 'styled-components'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
  return (
    <NavStyled>
        <ul className='menu-items'>
            {menuItems.map((item) => {
                return <li key = {item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? 'active': ''}>

                    
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            })}

        </ul>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
padding: 2rem 1.5rem;
width: 250px;
height: 100%;
background: rgb(255, 247, 247);
border: 3px solid #FFFFFF;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1rem;
.menu-items{
    flex: 1;
    display: flex;
    flex-direction: column;
    li{
        padding-top: 25px;
        display: grid;
        grid-template-columns: 30px auto;
        align-items: center;
        margin: .7rem 0;
        font-weight: 500;
        font-size: 17px;
        cursor: pointer;
        transition: all .4s ease-in-out;
        color: rgba(34, 34, 96, .6);
        padding-left: .01rem;
        position: relative;
        i{
            color: rgba(34, 34, 96, 0.6);
            font-size: 20px;
            transition: all .4s ease-in-out;
        }
    }
}

.active{
    color: rgba(34, 34, 96, 1) !important;
    i{
        color: rgba(34, 34, 96, 1) !important;

    }
    &::before{
        content: "";
        position: absolute;
        left: -15px;
        top: 20px;
        width: 4px;
        height: 62%;
        background: #222260;
        border-radius: 0 10px 10px 0;

    }
}
`;

export default Navigation
import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src = "/images/logo.svg" />
            <NavMenu>
                <a>
                <img src = "/images/home-icon.svg" />
                <span>HOME</span>
                </a>
                <a>
                <img src = "/images/search-icon.svg" />
                <span>SEARCH</span>
                </a>
                <a>
                <img src = "/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
                </a>
                <a>
                <img src = "/images/original-icon.svg" />
                <span>ORIGINALS</span>
                </a>
                <a>
                <img src = "/images/movie-icon.svg" />
                <span>MOVIES</span>
                </a>
                <a>
                <img src = "/images/series-icon.svg" />
                <span>SERIES</span>
                </a>
            </NavMenu>
            <img scr = "" />
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background:#232230;
    display: flex;
    align-item: center;
    padding: 0 36px;

`
const Logo = styled.img`
    width: 80px;
    

`
const NavMenu = styled.nav`
flex: 1;
margin-left: 25;
align-items: center;
display: flex;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height:20px;
        }
        span{
            font-size: 13px; 
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                //Top: 0;
                Left: 0;
                Right: 0;
                Bottom: -6px;
                //opacity: 0.3;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) ;
                transform: scaleX(0);
            }
        
        }
        &:hover{
            span:after{
                transform: scaleX(1);
               //opacity: 1;
            }
    
        }
    }

`
const UserImg = styled.img`
padding: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  cursor: pointer;
`

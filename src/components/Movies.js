import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/Qc5sc0Wq8aU/mqdefault_6s.webp?du=3000&sqp=CJOA2YwG&rs=AOn4CLD9CnOAjjwfNU3Z-emskTnhcUBybQ" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/vaS85trx_ag/mqdefault_6s.webp?du=3000&sqp=CMCP2YwG&rs=AOn4CLCYaxDjM7vBtX973eML3ml2k-NJkQ" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/jtbp9Nu2evk/mqdefault_6s.webp?du=3000&sqp=CI-j2YwG&rs=AOn4CLDYqv70zKINDanZ9VDLrv6g00wrwQ" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/iwqftOMly2k/mqdefault_6s.webp?du=3000&sqp=CLGj2YwG&rs=AOn4CLAUCgFtcrZYFlYj5QJ8jPD-MVGLIw" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/sWfgTiJ3sCs/mqdefault_6s.webp?du=3000&sqp=CI-X2YwG&rs=AOn4CLA51ZL8dfDrTc6ILQ2IQKjRm3MCdQ" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/R7vvG58h4RQ/mqdefault_6s.webp?du=3000&sqp=COD22IwG&rs=AOn4CLCdeRdCwrDdSfiCj4xVSvpP93gQPQ" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/zUb993aQzCU/mqdefault_6s.webp?du=3000&sqp=CLOV2YwG&rs=AOn4CLAzIRWUlV7q_je1gPb-7LnR8nmvRg" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/D8snSmi-vvw/mqdefault_6s.webp?du=3000&sqp=CMiF2YwG&rs=AOn4CLCZ4cX8oXxl4VH8OyvsXBEfCD7O7Q" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/l-h2Jwb0rqY/mqdefault_6s.webp?du=3000&sqp=CN7i2IwG&rs=AOn4CLAHhI35q4YTDvuJ2_rzP2h_JodDGA" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/jxgWYTzmr6I/mqdefault_6s.webp?du=3000&sqp=CIaF2YwG&rs=AOn4CLDdP8sv8ezP0ZA5SrS0-k8x_YafCQ" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/AXQLC0DISoY/mqdefault_6s.webp?du=3000&sqp=CJqj2YwG&rs=AOn4CLBs4tdkOc_tgoRbp5yGk-yTY4YASA" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/an_webp/s5mIgLy1dKs/mqdefault_6s.webp?du=3000&sqp=CN2M2YwG&rs=AOn4CLDzlW8Kk380yVBZAwIbLPdHx3yVAw" />
                </Wrap>
                
                
               
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`


`
const Content = styled.div`

    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    
`
const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) ;

    img{
        height:100%;
        width:100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }

`
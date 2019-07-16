import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        const FooterBox = styled.div`
        position:absolute;
        right:0; botton:0; left:0;
        padding:1rem;
        background-color:${
        (props)=>{
            if(props.theme==="basic") return 'skyblue';
            return 'yellow';
        }}
        text-align:center;`
        return (
            <div>
                <FooterBox theme="basic">React styled -Component Test!!</FooterBox>
            </div>
        );
    }
}

export default Footer;
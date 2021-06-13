import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import '../App.css'

const featured = ({latest}) => {

const Wrapper = styled.section`
display: flex;
justify-content: center;
padding:2%;
`;

     const latestIssue = latest.map(data=>{
            return(

                <div className="gfcard" >
                <Card style={{ width: '30rem',  transition: 'transform .2s' }}>
                <Card.Img variant="top" src={data.url} />
                </Card>
                </div>

            )
        });


    return (

    <Wrapper>
    {latestIssue}
    </Wrapper>

    )
}

export default featured

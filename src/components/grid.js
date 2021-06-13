import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import '../App.css'

const grid = ({notLatest}) => {

const Wrapper = styled.section`
display: flexbox;
flex-direction: column;
flex-wrap:wrap;
padding:2%;

`;


     const notLatestIssue = notLatest.map(data=>{
            return(

                <div className="gfcard"  style={{padding:'1%',  transition: 'transform .2s'}} >
              <Card style={{ width: '8rem'}}>
                <Card.Img variant="top" src={data.url} />
                </Card>
                </div>

            )
        });

    return (
         <Wrapper>
        {notLatestIssue}
        </Wrapper>
    )
}

export default grid

import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import '../App.css'
const gridFeatured = ({latest, notLatest}) => {

const Wrapper = styled.section`
display: flex;
justify-content:center;
align-item: center;
flex-direction: row;
flex-wrap:nowrap;


`;

const Item1 = styled.section`
display: flex;
flex-direction: column;
padding:2%;
max-width:800px

`;

const Item2 = styled.section`
display: flex;
flex-direction: row;
flex-wrap:wrap;
padding:2%;
max-width: 700px;

`;


     const latestIssue = latest.map(data=>{
            return(
                <div className="gfcard" >
               <Card style={{ width: '21rem', transition: 'transform .2s'}}>
                <Card.Img variant="top" src={data.url} />
                </Card>
                </div>
                )
        });

         const notLatestIssue = notLatest.map(data=>{
            return(
                <div className="gfcard"  >
               <Card style={{ width: '7rem',transition: 'transform .2s'}}>
                <Card.Img variant="top" src={data.url} />
                </Card>
                </div>
            )
        });

    return (
        <Wrapper>
        <Item1>
        {latestIssue}
        </Item1>
        <Item2>
        {notLatestIssue}
        </Item2>
      </Wrapper>
    )
}

export default gridFeatured

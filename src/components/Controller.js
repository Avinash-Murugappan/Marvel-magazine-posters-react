import {React, useState}from 'react'
import Featured from './featured'
import Grid from './grid'
import GridFeatured from './gridFeatured'

const Controller = ({Display, setDisplay, cData}) => {

const latest = cData.filter((data)=>{
    if(data.latest){
        return data
    }
});

console.log(latest);

const notLatest = cData.filter((data)=>{
    if(!data.latest){
        return data
    }
});

console.log(notLatest);


const whatDisplay = Display;
    if(whatDisplay === 'featured' ){
        return <Featured latest={latest} />
    }
    if(whatDisplay === 'grid'){
        return <Grid notLatest={notLatest} />
    }
    if(whatDisplay === 'gridFeatured'){
        return <GridFeatured latest={latest} notLatest={notLatest} />
    }

    return (
        <div >

        </div>
    )
}

export default Controller

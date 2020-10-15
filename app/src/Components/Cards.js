import React from 'react'
import Card from "./Card";

const Cards = props => {
    const { items } = props;
    return (
        <div className="container-fluid d-flex justify-content-center" style={{marginTop:'50px', width:"70%"}}>
            <div className="row">
                {items.map((item, i)=>{
                    return(<div className="col-md-12" key={i}>
                        <Card data={item} index={i} />
                    </div>);
                })}
            </div>
        </div>
    )
}

export default Cards
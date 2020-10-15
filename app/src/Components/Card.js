import React from 'react'

const Card = props => {
    const { data, index } = props;
    return (
        <div className="card" style={{marginBottom:"20px"}}>
            <div className="row">
                <div className="col-md-4">
                    <img src={data.image_url} alt="Ice Cream shop" className="img-fluid"/>
                </div>
                <div className="card-body text-left text-dark col-md-8">
                    <h4 className="card-title">
                        {index+1}. {data.name}
                    </h4>
                    <h5 className="card-subtitle mb-2 text-muted">
                        {data.location.display_address}
                    </h5>
                    <br />
                    <br />
                    <h6>Review By: {data.topReview.name}</h6>
                    <p className="card-text text-secondary" >
                        {data.topReview.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;

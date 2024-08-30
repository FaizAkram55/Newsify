import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {  
        let {title, description, imageUrl, newsUrl,publishedAt,author}=this.props;
        return ( 
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://platform.vox.com/wp-content/uploads/sites/2/2024/08/cropped-compass-GettyImages-2149699571.jpg?quality=90&strip=all&crop=0%2C8.1573238124716%2C100%2C83.685352375057&w=1200":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} <br/> on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Newsitem

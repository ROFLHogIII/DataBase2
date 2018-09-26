import React from 'react';
import { Link } from 'react-router-dom';

let BlogCard = (props) => (
    <React.Fragment>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <p>{props.blog.title}</p>
                </div>
                <div className="card-body text-dark">
                    <p className="card-text"> {props.blog.content}</p>
                </div>
                <Link to={`/singleblog/${props.blog.id}`}>Click for full post</Link>
            </div>
        </div>
    </React.Fragment>
)

export default BlogCard;
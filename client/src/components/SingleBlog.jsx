import React, { Component, Fragment } from 'react';

class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleBlog: {},
        };
    }

    componentWillMount() {
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(singleBlog => this.setState({ singleBlog }))
            .catch(error => console.log(`Error getting single blog: ${error}`))
    }


    render() {
        return (
            <Fragment>
                <h1>Hello from Blog Post {this.props.match.params.id}</h1>
                <div className="col-md-3">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            <p>{this.state.singleBlog.title}</p>
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text">{this.state.singleBlog.content}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SingleBlog
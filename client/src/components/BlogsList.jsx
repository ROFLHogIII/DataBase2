import React, { Component, Fragment } from 'react';
import BlogCard from "./BlogCard"


const blogAPI = "/api/blogs/"

class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogsList: [],
            title: '',
            content: '',
        }
    }

    componentWillMount() {
        fetch(blogAPI)
            .then(response => response.json())
            .then(blogsList => this.setState({ blogsList }))
            .catch(error => console.log(`Error getting all the blogs: ${error}`));
    }

    renderBlogs() {
        return this.state.blogsList.map(blog => {
            return <BlogCard key={blog.id} blog={blog} />
        })
    }

    render() {
        return (
            <Fragment>
                <input placeholder='title' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                <input placeholder='content' value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
                <button classtitle='btn btn-primary' onClick={() => this.handleButtonClick()}>Blog it up!</button>
                <div classtitle="container-fluid">
                    <div classtitle="row">
                        {this.renderBlogs()}
                    </div>
                </div>
            </Fragment>
        )
    }
};
export default BlogsList;
import React from 'react';

const BlogDetail = ({ match }) =>{
    return (
        <div>BlogDetail {match.params.blogId}</div>
    );
}

export default BlogDetail;

import React from 'react';

const CategoryDetail = ({ match }) =>{
    return (
        <div>CategoryDetail {match.params.categoryId}</div>
    );
}

export default CategoryDetail;

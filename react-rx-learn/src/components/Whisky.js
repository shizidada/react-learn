import React from 'react';

const Whisky = ({ whisky }) => (
    <div>
        <img style={{ width: '200px', height: '200px' }} src={whisky.imageUrl} alt={whisky.title}/>
        <h3>{whisky.title}</h3>
    </div>
);

export default Whisky;
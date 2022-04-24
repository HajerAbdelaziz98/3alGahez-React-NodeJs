import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Category = (props) => {
    return (
        <>
            <h1> You selected {props.name} </h1>
        </>
    );
}

export default Category;
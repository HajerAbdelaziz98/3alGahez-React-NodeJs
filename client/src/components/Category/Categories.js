import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter, NavLink } from 'react-router-dom';

const Categories = () => {
    const { categories } = useSelector(state => state.categories);
    // console.log(categories);
    return (
        <>
            <div id="categories" className='categories'>
                {categories && categories.map(c => (
                    <li className='nav-item' key={c._id} value={c._id}>
                        <Link to='/menu/cat1' className='nav-link' name="cat1">
                            {c.category}
                        </Link>
                    </li>
                ))}
            </div>

        </>

    );
}

export default Categories;
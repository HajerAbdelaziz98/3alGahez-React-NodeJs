import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { getCategories } from '../../redux/actions/categoryActions';
import { getProductsByFilter } from '../../redux/actions/filterActions';
import Card from '../Card/Card';
import './menu.css';
import Slide from 'react-reveal/Slide';
import { showLoading } from '../../helpers/loading';

const Menu = () => {
  const { loading } = useSelector((state) => state.loading);
  const [text, setText] = useState('');
  const [categoryIds, setCategoryIds] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const handleSearch = (e) => {
    e.preventDefault();
    resetState();

    setText(e.target.value.toUpperCase());

    dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
  };

  const handleCategory = (e) => {
    resetState();

    const currentCategoryChecked = e.target.value;
    const allCategoriesChecked = [...categoryIds];
    const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

    let updatedCategoryIds;
    if (indexFound === -1) {
      // add
      updatedCategoryIds = [...categoryIds, currentCategoryChecked];
      setCategoryIds(updatedCategoryIds);
    } else {
      // remove
      updatedCategoryIds = [...categoryIds];
      updatedCategoryIds.splice(indexFound, 1);
      setCategoryIds(updatedCategoryIds);
    }

    dispatch(
      getProductsByFilter({ type: 'category', query: updatedCategoryIds })
    );
  };

  const resetState = () => {
    setText('');
    setCategoryIds([]);
  };

  return (
    <>
      <section className="menu-page">
        <Slide top>
          <form className="search-form">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              value={text}
              onChange={handleSearch}
            />
          </form>
        </Slide>
        <Slide left>
          <div className="ctg-filter-crt border-right">
            <div className="text-muted mb-2 d-flex justify-content-center align-items-center">
              <span className="fas fa-sliders-h"></span>&nbsp;<b>Filters</b>
            </div>

            <div className="border-top border-bottom categories-fltr p-3">
              {categories &&
                categories.map((c) => (
                  <div key={c._id} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="category"
                      value={c._id}
                      id={`${c._id}flexCheckChecked`}
                      // id='flexCheckChecked'
                      // checked={categoryIds.includes(c._id)}
                      onChange={handleCategory}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`${c._id}flexCheckChecked`}
                    >
                      {c.category}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </Slide>

        {/* <div className='menu-food-ctr'>
				{products &&
					products.map(p => (
						<Card key={p._id} product={p} homePage={true} />
					))}
			</div> */}

        {loading ? (
          <div className="text-center">{showLoading()}</div>
        ) : (
          <Slide right>
            <div className="menu-food-ctr">
              {products.map((p) => (
                  <Card
                    key={p._id}
                    product={p}
                    homePage={true}
                    seller={p.seller}
                  />
              ))}
            </div>
          </Slide>
        )}
      </section>
    </>
  );
};

export default Menu;

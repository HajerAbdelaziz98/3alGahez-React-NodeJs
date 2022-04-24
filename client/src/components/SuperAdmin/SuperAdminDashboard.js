import React, { useEffect } from 'react';
// components
import SuperAdminHeader from './SuperAdminHeader';
import SuperAdminActionBtns from './SuperAdminActionBtns';
import SuperAdminCategoryModal from './SuperAdminCategoryModal';
import SuperAdminProductModal from './SuperAdminProductModal';
import SuperAdminBody from './SuperAdminBody ';
// redux
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';
import SuperAdminBodyOrders from './SuperAdminBodyOrders';

const SuperAdminDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section>
      <SuperAdminHeader />
      <SuperAdminActionBtns />
      <SuperAdminCategoryModal />
      <SuperAdminProductModal />
      <SuperAdminBody />
      {/* <SuperAdminBodyOrders /> */}
    </section>
  );
};

export default SuperAdminDashboard;

import React from 'react';
import { SideBar } from './components/SideBar/SideBar';
import AddProductForm from './components/AddProductForm/AddProductForm';
import { ProductsLists } from './components/ProductsList/ProductsLists';
import {AdminHeader} from './components/AdminHeader/AdminHeader';
import './components/AdminPage.module.css.css'


export const AdminPage = () => {
  return (
    <>
      <AdminHeader />
      <SideBar 
      AddProductForm={<AddProductForm/>} 
      ProductsList={<ProductsLists/>} 
      />

    </>
  );
}

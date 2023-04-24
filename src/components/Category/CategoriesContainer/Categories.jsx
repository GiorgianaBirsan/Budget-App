import React, { useState, useEffect } from 'react';
import './Categories.css';
import { Button } from '../../common/Button';
import BudgetCategory from './CategoryItem/BudgetCategory';
import { Modal } from '../../common/Modal';
import AddCategoryForm from './CategoryItem/AddCategoryForm';
import { rgb } from 'polished';

const defaultListCategories = [
  {
    title: 'Utilities',
    amount: '0',
    color: rgb(47, 129, 236),
    value: 'utilities',
  },
  {
    title: 'Shopping',
    amount: '0',
    color: rgb(192, 153, 220),
    value: 'shopping',
  },
  {
    title: 'Personal',
    amount: '0',
    color: rgb(251, 220, 173),
    value: 'personal',
  },
  { title: 'Saving', amount: '0', color: rgb(126, 200, 157), value: 'saving' },
];

export default function Categories() {
  const [listCategories, setListCategories] = useState(defaultListCategories);
  const [isOpen, setIsOpen] = useState(false);

  const addCategoryHandler = category => {
    setListCategories([category, ...listCategories]);
  };

  //GET / SET WALLET ITEMS FROM/IN LIST FROM LOCAL STORAGE
  useEffect(() => {
    const category = JSON.parse(localStorage.getItem('listCategories'));
    setListCategories(category);
  }, []);

  useEffect(() => {
    if (listCategories) {
      localStorage.setItem('listCategories', JSON.stringify(listCategories));
    }
  }, [listCategories]);

  return (
    <>
      <div className="categories_container_header">
        <h1>Categories</h1>
        <Button
          children="+"
          onClick={() => {
            setIsOpen(true);
          }}
        ></Button>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} title="Add new category">
        <AddCategoryForm addHandler={addCategoryHandler} handlerVisibility={setIsOpen} />
      </Modal>

      <div className="categories_collection">
        {/* NEW ADDED CATEGORIES, EXTRA OF DEFAULT CATEGORIES  */}
        {listCategories.map((category, index) => {
          return (
            <BudgetCategory
              key={index}
              title={category.title}
              amount={category.amount}
              color={category.color}
              borderColor={category.color}
            />
          );
        })}
      </div>
    </>
  );
}

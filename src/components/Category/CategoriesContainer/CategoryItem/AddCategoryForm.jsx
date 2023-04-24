import React, { useState } from 'react';
import './BudgetCategory.css';

const categories = {
  title: '',
  amount: 0,
  color: '#000',
  value: '',
};

export default function AddCategoryForm(props) {
  const [category, setCategory] = useState(categories);

  const inputHandler = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          category.value = category.title;
          category.title = category.title.charAt(0).toUpperCase() + category.title.slice(1);
          props.addHandler(category);
          props.handlerVisibility(false);
        }}
      >
        <div className="wallet_color">
          <label>Choose a color : </label>
          <input
            type="color"
            name="color"
            value={category.color}
            onChange={inputHandler}
            required
          />
        </div>
        <div className="title">
          <label>Title</label>
          <input type="text" name="title" value={category.title} onChange={inputHandler} required />
        </div>

        <button className="submit_btn" children="Submit" type="submit" />
      </form>
    </>
  );
}

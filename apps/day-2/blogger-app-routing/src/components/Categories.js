import React from 'react';

import { categories, categoryAll } from '../data/store';

const Categories = (props) => {
  const categoriesWithAll = [categoryAll, ...categories];
  return <div>
    <h4>Categories</h4>
    <div className="list-group">
      {categoriesWithAll.map(c => <button onClick={() => props.onCategorySelect(c)} key={c.id} className="list-group-item list-group-item-action">
        {c.name}
      </button>)}
    </div>
  </div>;
};

export default Categories;

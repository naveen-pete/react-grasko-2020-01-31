import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryAll } from '../constants';

class Categories extends Component {
  render() {
    const categoriesWithAll = [categoryAll, ...this.props.categories];
    return <div>
      <h4>Categories</h4>
      <div className="list-group">
        {categoriesWithAll.map(c => <button onClick={() => this.props.onCategorySelect(c)} key={c.id} className="list-group-item list-group-item-action">
          {c.name}
        </button>)}
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Categories);

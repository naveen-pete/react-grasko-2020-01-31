import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return <div>
      <h4 className="mr-3">Post Form</h4>

      <div className="card bg-light">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea className="form-control" id="body" name="body" placeholder="Enter body" rows="3" cols="30">
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select required className="form-control" id="category" name="category">
                <option value=""></option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

    </div>;
  }
}

export default PostForm;

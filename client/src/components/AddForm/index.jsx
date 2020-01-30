import React from 'react';

import './AddForm.scss';

const AddForm = () => {
  return (
    <form className="add-form">
      <div className="form-group">
        <div className="add-form__row">
          <h4>
            <label htmlFor="title">Title</label>
          </h4>
          <input
            type="email"
            className="form-control"
            id="title"
            placeholder="Enter email"
          />
        </div>
        <div className="add-form__row">
          <h4>
            <label htmlFor="image">Image URL</label>
          </h4>
          <input
            type="email"
            className="form-control"
            id="image"
            placeholder="Enter image URL"
          />
        </div>
        <div className="add-form__row">
          <h4>
            <label htmlFor="description">Description</label>
          </h4>
          <textarea
            rows="8"
            type="email"
            className="form-control"
            id="description"
            placeholder="Enter text"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AddForm;

import { useState } from "react";

const ProductForm = (props) => {
  const { submitHandler, initialProduct, formText } = props;
  const [formState, setFormState] = useState(initialProduct)

  const changeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="card">
      <h5 className="card-header">{formText}</h5>
      <div className="card-body">
        <form onSubmit={(e) => submitHandler(e, formState)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control form-control-sm"
              value={formState.title}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="form-control form-control-sm"
              value={formState.price}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              value={formState.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary btn-sm">{formText}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm;
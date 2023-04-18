const productvalidation = (values) => {
  let errors = {};

  if (!values.productName) {
    errors.productName = "productName Name is required";
  }
  if (!values.brand) {
    errors.brand = "Brand Name is required";
  }
  if (!values.price) {
    errors.price = "Price is required";
  }
  if (!values.category) {
    errors.category = "Category is required";
  }
  if (!values.subCategory) {
    errors.subCategory = "Subcategory is required";
  }
  return errors;
};

export default productvalidation;

function printFormData(formData) {
  for (let field of formData.entries()) {
    console.log(field);
  }
}

export {printFormData};

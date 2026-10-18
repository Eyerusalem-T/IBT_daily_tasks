export function validateOrderInput(data) {
  const fieldErrors = {};

  if (!data.dishId || typeof data.dishId !== "string" || !data.dishId.trim()) {
    fieldErrors.dishId = "Please select a valid dish.";
  }

  const phonePattern = /^(\+2519\d{8}|09\d{8})$/;
  if (!data.phone || !phonePattern.test(data.phone.trim())) {
    fieldErrors.phone =
      "Phone number must be a valid Ethiopian number (e.g., 0911223344).";
  }

  const isValid = Object.keys(fieldErrors).length === 0;
  return { isValid, fieldErrors };
}

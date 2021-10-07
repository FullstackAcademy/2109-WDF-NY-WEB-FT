
// This is a simple child component to test error
// handling, if it recieves a prop with
// throwError === true, it
// throws a JS error.
// Otherwise it just renders null
const ErrorTester = (props) => {
  if (props.throwError) {
    throw new Error("An error occured in the ErrorTester's render");
  }
  return null;
}

export default ErrorTester;
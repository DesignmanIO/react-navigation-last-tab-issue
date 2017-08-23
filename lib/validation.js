/**
 * Validation object
 */
const validate = {
  /**
   * Validate password
   * @function password
   * @param  {string} password Check if password is valid
   * @return {string} Error text or false
   */
  password(password = "") {
    if (
      password.length &&
      password.match(
        /^.{8,}$/
      )
    ) {
      // yay, it's valid
      return false;
    } else {
      return "Password must contain at least 8 characters";
    }
  },
  /**
   * Make sure passwords match
   * @function confirmPassword
   * @param  {string} password First password
   * @param  {string} confirmPassword Check if equal
   * @return {string} Error text or false
   */
  confirmPassword(password, confirmPassword) {
    if (password.length && password === confirmPassword) {
      return false;
    } else {
      return "Passwords must match";
    }
  },
  /**
   * Validate email
   * @function email
   * @param  {string} email Validate email
   * @return {string} Error text or false
   */
  email(email = "") {
    if (
      email.length &&
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      return false;
    } else {
      return "Enter a valid email address";
    }
  },
  /**
   * Text should have at least one character
   * @function text
   * @param  {string} text Any text
   * @return {string} Error text or false
   */
  text(text = "") {
    if (text.length) return false;
    return "Enter one or more characters";
  },
  numberMax(number, max) {
    if (number > max) return `Exceeded maximum value of ${max}`;
    return false;
  }
};

export default validate;

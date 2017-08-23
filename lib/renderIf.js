/**
 * @function renderIf
 * @param  {bool} condition Boolean condition
 * @param  {func} ifCallback Render if true
 * @param  {func} elseCallback Render if false
 * @return {*} Returns the value from the if or else callback (usually a component)
 * @example {renderIf(A === 1, () => <ComponentA />, () => <ComponentB />)}
 */
const renderIf = (condition, ifCallback, elseCallback) => {
  if(condition) return ifCallback();
  return typeof elseCallback === 'function' && elseCallback();
};

export default renderIf;

/**
  Returns node(s) that match the given val argument as a ShallowRender element.
  @param {ShallowWrapper} wrapper - Enzyme wrapper element
  @param {string} val - the data-test attr. value to find within the wrapper children.
  @return {ShallowWrapper}
*/
export const findTestByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

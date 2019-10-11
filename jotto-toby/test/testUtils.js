import checkPropTypes from 'check-prop-types';


/**
  Returns node(s) that match the given val argument as a ShallowRender element.
  @param {ShallowWrapper} wrapper - Enzyme wrapper element
  @param {string} val - the data-test attr. value to find within the wrapper children.
  @return {ShallowWrapper}
*/
export const findTestByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError).toBeUndefined();
}

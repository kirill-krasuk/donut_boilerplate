module.exports = component => `export { default as ${ component.name } } from './${ component.name }${ component.isLoadable ? '/loadable' : '' }';
`;

// Definindo as ações para o reducer
export const actionTypes = {
    INPUT: 'INPUT',
    OPERATOR: 'OPERATOR',
    EQUALS: 'EQUALS',
    CLEAR: 'CLEAR',
  };
  
  export const inputAction = (payload) => ({
    type: actionTypes.INPUT,
    payload,
  });
  
  export const operatorAction = (payload) => ({
    type: actionTypes.OPERATOR,
    payload,
  });
  
  export const equalsAction = () => ({
    type: actionTypes.EQUALS,
  });
  
  export const clearAction = () => ({
    type: actionTypes.CLEAR,
  });
  
import { actionTypes } from './Actions';

// Função reducer para atualizar o estado da calculadora
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        displayValue:
          state.waitingForSecondOperand || state.displayValue === '0'
            ? String(action.payload)
            : state.displayValue + action.payload,
        waitingForSecondOperand: false,
      };
    case actionTypes.OPERATOR:
      return {
        ...state,
        operator: action.payload,
        firstOperand: Number(state.displayValue),
        waitingForSecondOperand: true,
      };
    case actionTypes.EQUALS:
      if (state.operator && state.firstOperand !== null) {
        const secondOperand = Number(state.displayValue);
        let result = 0;

        switch (state.operator) {
          case '+':
            result = state.firstOperand + secondOperand;
            break;
          case '-':
            result = state.firstOperand - secondOperand;
            break;
          case '*':
            result = state.firstOperand * secondOperand;
            break;
          case '/':
            result = state.firstOperand / secondOperand;
            break;
          default:
            break;
        }

        return {
          ...state,
          displayValue: String(result),
          operator: null,
          firstOperand: null,
          waitingForSecondOperand: false,
        };
      }
      return state;
    case actionTypes.CLEAR:
      return {
        displayValue: '0',
        operator: null,
        firstOperand: null,
        waitingForSecondOperand: false,
      };
    default:
      return state;
  }
};

export default calculatorReducer;

// Reducer.js
import { actionTypes } from './Actions';

const performOperation = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return operand2;
  }
};

const handleEquals = (state) => {
  const { firstOperand, displayValue, operator, operations } = state;

  if (operator !== null) {
    const newOperations = [...operations, firstOperand, operator, Number(displayValue)];
    const result = calculateTotal(newOperations);

    return {
      ...state,
      displayValue: String(result),
      firstOperand: result,
      waitingForSecondOperand: false,
      operator: null,
      operations: [],
    };
  } else {
    return state;
  }
};

const calculateTotal = (operations) => {
  let result = operations[0];

  for (let i = 1; i < operations.length; i += 2) {
    const operator = operations[i];
    const operand = operations[i + 1];

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
      default:
        break;
    }
  }

  return result;
};

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
      if (state.operator !== null) {
        const result = performOperation(state.firstOperand, Number(state.displayValue), state.operator);
        return {
          ...state,
          displayValue: String(result),
          firstOperand: result,
          waitingForSecondOperand: true,
          operator: action.payload,
        };
      } else {
        return {
          ...state,
          firstOperand: Number(state.displayValue),
          waitingForSecondOperand: true,
          operator: action.payload,
        };
      }
    case actionTypes.EQUALS:
      return handleEquals(state);
    case actionTypes.CLEAR:
      return {
        displayValue: '0',
        operator: null,
        firstOperand: null,
        waitingForSecondOperand: false,
        operations: [],
      };
    case actionTypes.BACKSPACE:
      let value = state.displayValue;
      let newValue = value.substr(0, value.length - 1);
      return {
        ...state,
        displayValue: newValue,
      };
    default:
      return state;
  }
};

export default calculatorReducer;

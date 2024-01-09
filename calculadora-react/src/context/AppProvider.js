import React, {useReducer} from 'react';
import calculatorReducer from './Reducer'
import actionTypes from './Actions';
import {Provider} from './AppContext';
import PropTypes from 'prop-types';

const initialState = {
    displayValue: '0',
    operator: null,
    firstOperand: null,
    waitingForSecondOperand: false,
    operations: [],
  };
  

const AppProvider = props => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    return(
        <Provider value={{state,dispatch}}>
            {props.children}
        </Provider>
    );
};

AppProvider.propTypes= {
    children: PropTypes.node,
};

export default AppProvider;
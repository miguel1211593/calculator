import React, { useContext } from 'react';
import Button from './Button';
import SpecialButton from './SpecialButton';
import  AppContext from './../context/AppContext';
import { actionTypes } from './../context/Actions';
import './Calculator.css'; 


const Calculator = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleButtonClick = (value) => {
    if (Number.isInteger(Number(value)) || value === '.') {
      dispatch({ type: actionTypes.INPUT, payload: value });
    } else {
      switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
          dispatch({ type: actionTypes.OPERATOR, payload: value });
          break;
        case '=':
          dispatch({ type: actionTypes.EQUALS });
          break;
        case 'C':
          dispatch({ type: actionTypes.CLEAR });
          break;
        case '<-':
          dispatch({ type: actionTypes.BACKSPACE });
          break;
        default:
          break;
      }
    }
  };

return (
  <div className="calculator">
    <div className="display">{state.displayValue}</div>
        <div className="tableNumbers">
        <table>
        <tbody>
        <tr>
            <td colSpan="3">
              <Button value="C" onClick={() => handleButtonClick("C")} />
            </td>
            <td colSpan="1">
            <SpecialButton
                value="<-"
                image="./../images/backspace.png"
                onClick={() => handleButtonClick("<-")} />
            </td>
          </tr>
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0,"."].reduce((rows, number, index) => {
              if (index % 3 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(number);
              return rows;
            }, []).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((number) => (
                  <td key={number}>
                    <Button value={String(number)} onClick={() => handleButtonClick(String(number))} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="operators">
          <table>
            <tr>
              <td>
                <Button value="/" onClick={() => handleButtonClick("/")} />
                <Button value="x" onClick={() => handleButtonClick("*")} />
                <Button value="-" onClick={() => handleButtonClick("-")} />
                <Button value="+" onClick={() => handleButtonClick("+")} />
                <Button value="=" onClick={() => handleButtonClick("=")} />
              </td>
            </tr>
          </table>
        </div>
        </div>
  </div>
);

  
  
};

export default Calculator;

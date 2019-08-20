import React from 'react';

function Counter(props)
{
  const {index, loadingTextStyle, clickCount, handleIncrement, handleDecrement,  handleRemove} = props;

    let styleForMessage = loadingTextStyle();
    let styleForCounter = "d-block p-2 bg-dark text-white w-25 mx-auto my-2 rounded";
    let msg = <h1>Count is less than 3</h1>;
    if(clickCount >= 3) {
        styleForMessage.background = '#F6F6F6';
        styleForCounter = "d-block p-2 bg-danger text-white w-25 mx-auto my-2 rounded";
        msg = <h1>Count is bigger than 3</h1>;
    }
    if(clickCount >= 5) { console.log(clickCount)
        styleForMessage.background = '#DfDfDf';
        styleForCounter = "d-block p-2 bg-info text-white w-25 mx-auto my-2 rounded";
        msg = <h1>Count is bigger than 5</h1>;
    }


    return (
    <div style={{border: '5px 0 solid #C9C9C9', padding: '10px', backgroundColor: '#F1F1F1'}}>
      <div style={{margin: '20px auto', width: '30px', backgroundColor: 'orange', borderRadius: '50%'}}> #{index + 1}</div>
      <div style={styleForMessage}>{msg}</div>
      <div className={styleForCounter}>Count: {clickCount}</div>
      <button onClick={handleIncrement}  className="btn btn-primary mx-3">Increment</button>
      <button onClick={handleDecrement}  className="btn btn-info mx-3">Decrement</button>
      <button onClick={handleRemove}  className="btn btn-danger mx-3">Remove</button>
    </div>
  );
}

export default Counter;

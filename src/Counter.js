import React from 'react';

function Counter(props)
{
    const {handleSetIncrementValue, handleSetDecrementValue, counter, index, loadingTextStyle, handleIncrement, handleDecrement,  handleRemove} = props;

    let styleForMessage = loadingTextStyle();
    let styleForCounter = "d-block p-2 bg-dark text-white w-100 mx-auto my-2 rounded";
    let msg = <h1>Count is less than 3</h1>;
    if(counter.clickCount >= 3) {
        styleForMessage.background = '#F6F6F6';
        styleForCounter = "d-block p-2 bg-danger text-white w-100 mx-auto my-2 rounded";
        msg = <h1>Count is bigger than 3</h1>;
    }
    if(counter.clickCount >= 5) { console.log(counter.clickCount)
        styleForMessage.background = '#DfDfDf';
        styleForCounter = "d-block p-2 bg-info text-white w-100 mx-auto my-2 rounded";
        msg = <h1>Count is bigger than 5</h1>;
    }


    return (
        <div style={{border: '5px 0 solid #C9C9C9', padding: '10px', backgroundColor: '#F1F1F1'}}>
            <div style={{margin: '20px auto', width: '30px', backgroundColor: 'orange', borderRadius: '50%'}}> #{index + 1}</div>
            <div className={styleForCounter}>
                <span className="badge badge-pill badge-warning mb-2"><h4>Count: {counter.clickCount}</h4></span>
                <div className="rounded" style={styleForMessage}>{msg}</div>
            </div>

            <div className="badge badge-info mx-4 py-2 align-content-center justify-content-center">
            <button onClick={handleIncrement} className="btn btn-primary mx-3">Increment by</button>
            <span className="badge badge-light mx-auto" style={{width: '30px', height: '30px'}}>
                <h6><input style={{border: 'none', width: '25px', height: '25px'}} id={`increment-${counter.id}`} value={counter.incrementBy} onChange={handleSetIncrementValue}/></h6>
            </span>
            </div>

            <div className="badge badge-primary mx-4 py-2 align-content-center justify-content-center">
            <button onClick={handleDecrement} className="btn btn-info mx-3">Decrement by</button>
            <span className="badge badge-light mx-auto"  style={{width: '30px', height: '30px'}}>
                <h6><input style={{border: 'none', width: '25px', height: '25px'}} id={`decrement-${counter.id}`} value={counter.decrementBy} onChange={handleSetDecrementValue}/></h6>
            </span>
            </div>

            <button onClick={handleRemove} className="btn btn-danger mx-3">Remove <span className="badge badge-light">#{index + 1}</span></button>
        </div>
    );
}

export default Counter;

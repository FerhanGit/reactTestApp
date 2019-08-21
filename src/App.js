import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component
{
  constructor(props) {
    super(props)
    this.state = this.props.data
  }

  handleIncrement = (id) => {
    this.setState(prevState => {
      const countersNew = prevState.counters.map(counter => {
        if(counter.id === id) {
          counter.clickCount = counter.clickCount + 1
        }
        return counter
      })

      return {
        counters: countersNew
      }
    })
  }

  handleDecrement = (id) => {
    this.setState(prevState => {
      const countersNew = prevState.counters.map(counter => {
        if(counter.id === id) {
          counter.clickCount = counter.clickCount - 1
        }
        return counter
      })

      return {
        counters: countersNew
      }
    })
  }

  getNextId = (obj) => {
    const nextId = (Math.max.apply(Math, obj.map(function(o) {
      return o.id;
    })) + 1);
    return isFinite(nextId) ? nextId : 1;
  }

  handleAdd = () => {
    const nextId = this.getNextId(this.state.counters)
    const newCounterts = this.state.counters;
    newCounterts.push({id: nextId, clickCount: 0});
    this.setState({counters: newCounterts})
  }

  handleRemove = (id) => {
    this.setState(prevState => {
      const countersNew = prevState.counters.filter(counter => {
        if(counter.id !== id) {
          return counter
        }
      })

      return {
        counters: countersNew
      }
    })
  }

  componentDidMount() {
    this.setState(prevState => {
      const countersNew = prevState.counters.map(counter => {
          counter.clickCount = 2
          return counter
      })

      return {
        counters: countersNew
      }
    })
  }

  loadingTextStyle() {
    return ({
      background: '#C6C6C6',
      color: '#000000'
    })
  }

  render() {
    return (
        <div className="App d-flex justify-content-center">
          <p>
          <ul style={{margin:0}}>
            {this.state.counters.map((counter, index) => <ol key={counter.id} style={{margin: '40px'}}><Counter index={index} key={counter.id} loadingTextStyle={this.loadingTextStyle} clickCount={counter.clickCount} handleIncrement={() => this.handleIncrement(counter.id)} handleDecrement={() => this.handleDecrement(counter.id)} handleRemove={() => this.handleRemove(counter.id)}/></ol>)}
          </ul>
          <button className="btn btn-success mt-5 m-x-0" onClick={this.handleAdd}>Add new item</button>
          </p>
        </div>
    );
  }
}

export default App;

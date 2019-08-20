import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component
{
  constructor() {
    super()
    this.state = {
      counters: [
        {
          id: 1,
          clickCount: 0
        },
        {
          id: 2,
          clickCount: 3
        },
        {
          id: 3,
          clickCount: 6
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
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

  handleDecrement(id) {
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
    return (Math.max.apply(Math, obj.map(function(o) {
      return o.id;
    })) + 1);
  }

  handleAdd() {
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
        <div className="App">
          <button className="btn btn-success mt-5" onClick={this.handleAdd}>Add new item</button>
          <ul>
            {this.state.counters.map((counter, index) => <ol style={{margin: '40px'}}><Counter index={index} key={counter.id} loadingTextStyle={this.loadingTextStyle} clickCount={counter.clickCount} handleIncrement={() => this.handleIncrement(counter.id)} handleDecrement={() => this.handleDecrement(counter.id)} handleRemove={() => this.handleRemove(counter.id)}/></ol>)}
          </ul>
        </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    };
  }
  // Class methods to update state
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    }
    this.setState({...this.state, groceries: [...this.state.groceries, newItem]});
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm addItem={this.addItem} />
         </div>
        <GroceryList
          groceries={this.state.groceries} 
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      // message: 'Hello',
      monsters: [
        // { name: 'sanjay', id: '1spfjoisd' },
        // { name: "sreekar", id: '2df' },
        // { name: 'prasanth', id: '3dsfv' }
      ],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this); // for every new class method we need to bind it
    // but to avoid it we can use arrow function.
  }

  componentDidMount() { // this code is called when this component is mounts/rendered into DOM for the first time
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(array => this.setState({ monsters: array })) // this promise gets the response.json as 'array' here

  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // } // we can use arrow function instead of this to avoid the explicit binding

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <div>


          {/* <header className="App-header">
          <p>
            {this.state.message}
          </p>
          <button onClick={() => {
            this.setState(
              {
                message: 'Hello sanjay',
              })
          }}>
            Click Here</button>
        </header> */
          }
        </div>

        <h1>Monsters World</h1>
        
        {/* <input type="search" placeholder='Search' onChange={e => (
          this.setState({ searchField: e.target.value }, () => ({console.log(this.state)})
          ))} /> */}

        <SearchBox
          placeholder='Search'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}>

          {/* Children props are the props we pass between the brackets of the
          component we pass */}
          {/* {
              this.state.monsters.map(m => (
                <h1 key={m.id}>{m.name}</h1>))
          } */}
          {/* all h1's produced will be together the child prop here */}
        </CardList>

      </div>
    );
  }
}

export default App;

'use strict';

import React from 'react';
import data from './data/horns';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: [],
      selected: ''
    }
  }

  componentDidMount() {
    this.setState({ horns: data });
  }
  
  handleChange = (e) => {
    let current = this.state.horns.filter(horn => e.target.value === horn.title);
    this.setState({ selected: current[0] });
  }

  render() {
    return (
      <main>
        <section className="dropdown">
          <h3>Select A Horn!</h3>

          <select onChange={this.handleChange}>
            <option value="default">View All Horns</option>
            {data.map(horn => <option value={horn.title}>{horn.title}</option>)}
          </select>
        </section>

        <section className="images">
          <ul>
            {!this.state.selected ? 
              this.state.horns.map(horn => {
                return <li>
                  <h2>{horn.title}</h2>
                  <img src={horn.image_url} />
                  <p>{horn.description}</p>
                </li>
              })
              :
              <li>
                <h2>{this.state.selected.title}</h2>
                <img src={this.state.selected.image_url} />
                <p>{this.state.selected.description}</p>
              </li>          
            }
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;

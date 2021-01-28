'use strict';

import React from 'react';
import data from './data/horns';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: []
    }
  }

  handleChange = (e) => {
    let current = this.state.horns.filter(horn => e.target.value === horn.title);
    this.setState({ horns: current });
  }

  componentDidMount() {
    this.setState({ horns: data });
  }

  render() {
    return (
      <main>
        <select onChange={this.handleChange}>
          {data.map(horn => <option value={horn.title}>{horn.title}</option>)}
        </select>

        <section className="images">
          <ul>
            {this.state.horns.map(horn => {
              return <li>
                <h2>{horn.title}</h2>
                <img src={horn.image_url} />
                <p>{horn.description}</p>
              </li>
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;

import React from 'react';
import { Versions } from '../data/PokemonDetail';

type PokeBookProps = {
  id: number;
  onSelectId: (id: number) => void;
};

export class PokeBook extends React.Component<PokeBookProps, {}> {
  render() {
    let numOptions: Array<JSX.Element> = [];
    for (let i = 1; i <= 893; i++) {
      numOptions.push(
        <option
          key={`select-no${i}`}
          value={i}
          selected={this.props.id === i ? true : false}
        >
          {`No. ${('000' + i.toString()).slice(-3)}`}
        </option>
      );
    }

    return (
      <div className='sidebar'>
        <select
          className='form-select book-select'
          onChange={(i: React.ChangeEvent<HTMLSelectElement>) =>
            this.handleChange(i)
          }
        >
          {numOptions}
        </select>
        <select className='form-select book-select'></select>
      </div>
    );
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const id = event.target.value;
    this.props.onSelectId(parseInt(id));
  }
}

import React from 'react';
import { Generation, isGeneration } from '../data/Generation';

type PokeBookProps = {
  id: number;
  onSelectId: (id: number) => void;
  onSelectGen: (generation: Generation | 'default') => void;
};

export class PokeBook extends React.Component<PokeBookProps, {}> {
  render() {
    let numOptions: Array<JSX.Element> = [];
    for (let i = 1; i <= 893; i++) {
      numOptions.push(
        <option key={`select-no${i}`} value={i}>
          {`No. ${('000' + i.toString()).slice(-3)}`}
        </option>
      );
    }
    let genOptions: Array<JSX.Element> = [];
    genOptions.push(
      <option key='default' value='default'>
        default
      </option>
    );
    genOptions.push(
      <option key='Red-Blue' value='Red-Blue'>
        Red-Blue
      </option>
    );
    genOptions.push(
      <option key='Gold-Silver' value='Gold-Silver'>
        Gold-Silver
      </option>
    );
    genOptions.push(
      <option key='Ruby-Sapphire' value='Ruby-Sapphire'>
        Ruby-Sapphire
      </option>
    );
    genOptions.push(
      <option key='Firered-Leafgreen' value='Firered-Leafgreen'>
        Firered-Leafgreen
      </option>
    );
    genOptions.push(
      <option key='Diamond-Pearl' value='Diamond-Pearl'>
        Diamond-Pearl
      </option>
    );
    genOptions.push(
      <option key='Heartgold-Soulsilver' value='Heartgold-Soulsilver'>
        Heartgold-Soulsilver
      </option>
    );
    genOptions.push(
      <option key='Black-White' value='Black-White'>
        Black-White
      </option>
    );
    genOptions.push(
      <option key='Omegaruby-Alphasapphire' value='Omegaruby-Alphasapphire'>
        Omegaruby-Alphasapphire
      </option>
    );
    genOptions.push(
      <option key='X-Y' value='X-Y'>
        X-Y
      </option>
    );
    genOptions.push(
      <option key='Ultrasun-Ultramoon' value='Ultrasun-Ultramoon'>
        Ultrasun-Ultramoon
      </option>
    );

    return (
      <div className='sidebar'>
        <select
          className='form-select book-select'
          onChange={(i: React.ChangeEvent<HTMLSelectElement>) =>
            this.handleBookNo(i)
          }
          defaultValue={this.props.id}
        >
          {numOptions}
        </select>
        <select
          className='form-select book-select'
          defaultValue='default'
          onChange={(i: React.ChangeEvent<HTMLSelectElement>) =>
            this.handleGeneration(i)
          }
        >
          {genOptions}
        </select>
      </div>
    );
  }

  handleBookNo(event: React.ChangeEvent<HTMLSelectElement>) {
    const id = event.target.value;
    this.props.onSelectId(parseInt(id));
  }

  handleGeneration(event: React.ChangeEvent<HTMLSelectElement>) {
    const generation = event.target.value;
    if (isGeneration(generation) || generation === 'default') {
      this.props.onSelectGen(generation);
    }
  }
}

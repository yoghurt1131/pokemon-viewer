import React from 'react';
import { Generation, Generations, isGeneration } from '../data/Generation';

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
      <option key='generation-i' value='generation-i'>
        generation-i
      </option>
    );
    genOptions.push(
      <option key='generation-ii' value='generation-ii'>
        generation-ii
      </option>
    );
    genOptions.push(
      <option key='generation-iii' value='generation-iii'>
        generation-iii
      </option>
    );
    genOptions.push(
      <option key='generation-iv' value='generation-iv'>
        generation-iv
      </option>
    );
    genOptions.push(
      <option key='generation-v' value='generation-v'>
        generation-v
      </option>
    );
    genOptions.push(
      <option key='generation-vi' value='generation-vi'>
        generation-vi
      </option>
    );
    genOptions.push(
      <option key='generation-vii' value='generation-vii'>
        generation-vii
      </option>
    );
    genOptions.push(
      <option key='generation-viii' value='generation-viii'>
        generation-viii
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

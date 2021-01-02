import React from 'react';

type PokeBookProps = {
  id: number;
  onSelectId: (id: number) => void;
};

export class PokeBook extends React.Component<PokeBookProps, {}> {
  render() {
    let options: Array<JSX.Element> = [];
    for (let i = 1; i <= 893; i++) {
      options.push(
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
      <select
        id='numselect'
        className='form-select'
        onChange={(i: React.ChangeEvent<HTMLSelectElement>) =>
          this.handleChange(i)
        }
      >
        {options}
      </select>
    );
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const id = event.target.value;
    this.props.onSelectId(parseInt(id));
  }
}

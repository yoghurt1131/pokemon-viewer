import React from 'react';

type PokeBookProps = {
  onSelectId: (id: number) => void;
};

export class PokeBook extends React.Component<PokeBookProps, {}> {
  render() {
    let options: Array<JSX.Element> = [];
    for (let i = 1; i <= 893; i++) {
      options.push(
        <option key={`select-no${i}`} value={i}>
          {`No. ${('000' + i.toString()).slice(-3)}`}
        </option>
      );
    }
    return (
      <form className='pure-form pure-form-stacked sidebar-content'>
        <select
          id='numselect'
          onChange={(i: React.ChangeEvent<HTMLSelectElement>) =>
            this.handleChange(i)
          }
        >
          {options}
        </select>
      </form>
    );
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const id = event.target.value;
    this.props.onSelectId(parseInt(id));
  }
}

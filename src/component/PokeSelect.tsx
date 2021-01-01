import React from 'react';

type PokeSelectProps = {
  onClickPrev: () => void;
  onClickNext: () => void;
};

export class PokeSelect extends React.Component<PokeSelectProps, {}> {
  render() {
    return (
      <div className='buttons'>
        <button
          className='pure-button'
          onClick={() => this.props.onClickPrev()}
        >
          Previous
        </button>
        <button
          className='pure-button'
          onClick={() => this.props.onClickNext()}
        >
          Next
        </button>
      </div>
    );
  }
}

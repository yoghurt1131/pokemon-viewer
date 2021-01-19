import React from 'react';

type PokeSelectProps = {
  onClickPrev: () => void;
  onClickNext: () => void;
};

export class PokeSelect extends React.Component<PokeSelectProps, {}> {
  render() {
    return (
      <div className='horizontal-btn-group'>
        <button
          className='horizontal-btn btn btn-light'
          onClick={() => this.props.onClickPrev()}
        >
          Previous
        </button>
        <button
          className='horizontal-btn btn btn-light'
          onClick={() => this.props.onClickNext()}
        >
          Next
        </button>
      </div>
    );
  }
}

import React from 'react';
import { Pokemon } from '../domain/Pokemon';
import { PokemonRepository } from '../repository/PokemonRepository';

export type PokeViewerProps = {
  id: number;
  pokemon: Pokemon;
};

export type PokeViewerState = {
  id: number;
  pokemon: Pokemon;
  front: boolean;
  shiny: boolean;
};

export class PokeViewer extends React.Component<
  PokeViewerProps,
  PokeViewerState
> {
  private readonly repository: PokemonRepository;

  constructor(props: PokeViewerProps) {
    super(props);
    this.repository = new PokemonRepository();
    this.state = {
      id: props.id,
      pokemon: props.pokemon,
      front: true,
      shiny: false,
    };
  }

  render() {
    return (
      <div className='mainframe'>
        <header className='pure-u-1' id='pokemon-header'>
          <h2 id='pokemon-name'>
            No.{this.props.pokemon.id}: {this.props.pokemon.name}
          </h2>
        </header>
        <div>
          <div className='pure-u-4-5'>
            <img
              alt={this.props.pokemon.name}
              src={this.props.pokemon.getImageUrl(
                this.state.front,
                this.state.shiny
              )}
              className='pure-u-4-5'
              id='pokemon-visual'
            />
          </div>
          <div className='pure-u-1-5' id='switch-button'>
            <button
              className='pure-button'
              onClick={() => this.switchShinyImg()}
            >
              {this.state.shiny ? 'Default' : 'Shiny'}
            </button>
            <button
              className='pure-button'
              onClick={() => this.switchBackImg()}
            >
              {this.state.front ? 'Back' : 'Front'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  switchBackImg() {
    this.setState({ front: !this.state.front });
  }

  switchShinyImg() {
    this.setState({ shiny: !this.state.shiny });
  }
}

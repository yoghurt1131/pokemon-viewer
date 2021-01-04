import React from 'react';
import { PokeBook } from './component/PokeBook';
import { PokeSelect } from './component/PokeSelect';
import { PokeViewer } from './component/PokeViewer';
import { Pokemon } from './data/Pokemon';
import { Generation } from './mytypes';
import { PokemonRepository } from './repository/PokemonRepository';

type AppState = {
  id: number;
  pokemon: Pokemon;
  generation?: Generation;
};
export class App extends React.Component<{}, AppState> {
  private readonly repository: PokemonRepository;
  private readonly startNo = 1;
  private readonly lastNo = 893;

  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,
      pokemon: new Pokemon(1, '', {}, []),
    };
    this.repository = new PokemonRepository();
  }

  render() {
    return (
      <div className='layout'>
        <PokeBook
          id={this.state.id}
          onSelectId={(id) => this.onPokemonId(id)}
          onSelectGen={(gen) => this.onGenerationImage(gen)}
        />
        <div className='content'>
          <PokeViewer
            id={this.state.id}
            pokemon={this.state.pokemon}
            generation={this.state.generation}
          />
          <PokeSelect
            onClickPrev={() => this.onPrevPokemon()}
            onClickNext={() => this.onNextPokemon()}
          />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const pokemon: Pokemon = await this.repository.get(this.state.id);
    this.setState({
      pokemon: pokemon,
    });
  }

  async onPrevPokemon() {
    const prevId = this.state.id === 1 ? 893 : this.state.id - 1;
    const pokemon: Pokemon = await this.repository.get(prevId);
    this.setState({ id: prevId });
    this.setState({
      pokemon: pokemon,
    });
  }

  async onNextPokemon() {
    const nextId = this.state.id === 893 ? 1 : this.state.id + 1;
    const pokemon: Pokemon = await this.repository.get(nextId);
    this.setState({ id: nextId });
    this.setState({
      pokemon: pokemon,
    });
  }

  async onPokemonId(id: number) {
    const pokemon: Pokemon = await this.repository.get(id);
    this.setState({ id: id });
    this.setState({
      pokemon: pokemon,
    });
  }

  onGenerationImage(gen: Generation | 'default') {
    if (gen === 'default') {
      this.setState({
        generation: undefined,
      });
    } else {
      this.setState({
        generation: gen,
      });
    }
  }
}

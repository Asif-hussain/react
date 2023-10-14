export interface Pokemon {
    name: string;
    order: number;
    abilities: [
        ability: {
            ability: {
                name: string,
                url: string
            }
        }
    ];
    moves: [
        move: {
            move: {
                name: string,
                url: string
            }
        }
    ];
    species: {
        name: string,
        url: string
    };
    sprites: {
        back_default: string
    }
    types: [
        type: {
            type: {
                name: string,
                url: string
            }
        }
    ];
  }
import { Pokemon } from "./types";

export const getPokemons = (): Promise<Pokemon[]> => {
    return new Promise<Pokemon[]>(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "Bulbasaur",
                    latitude: 16.7915509,
                    longitude: 96.1686981,
                    // image_url: require('./assets/1.png'),
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png"
                },
                {
                    id: 2,
                    name: "Ivysaur",
                    latitude: 16.77145925809642,
                    longitude: 96.17248581064354,
                    // image_url: require('./assets/1.png'),
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png"
                },
                {
                    id: 3,
                    name: "Venusaur",
                    latitude: 16.77318502474616,
                    longitude: 96.1698572459965,
                    // image_url: require('./assets/1.png'),
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png"
                },
                {
                    id: 4,
                    name: "Charmander",
                    latitude: 16.78002800516439,
                    longitude: 96.14152294825124,
                    // image_url: require('./assets/1.png'),
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/4.png"
                },
                {
                    id: 5,
                    name: "Charmeleon",
                    latitude: 16.78002800516439,
                    longitude: 96.14152294825124,
                    // image_url: require('./assets/1.png'),
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/5.png"
                },
                {
                    id: 6,
                    name: "Charizard",
                    latitude: 16.803789458204772,
                    longitude: 96.13739222794081,
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png"
                },
                {
                    id: 7,
                    name: "Squirtle",
                    latitude: 16.8074756484478,
                    longitude: 96.15415326768138,
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/7.png"
                },
                {
                    id: 8,
                    name: "Wartortle",
                    latitude: 16.79468926747931,
                    longitude: 96.16029903554853,
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/8.png"
                },
                {
                    id: 9,
                    name: "Blastoise",
                    latitude: 16.833119374205502,
                    longitude: 96.12073299508295,
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/9.png"
                },
                {
                    id: 10,
                    name: "Caterpie",
                    latitude: 16.7509252753363,
                    longitude: 96.26112266841847,
                    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/10.png"
                },

            ]);
        }, 100);
    });
}
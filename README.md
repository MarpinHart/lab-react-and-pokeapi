![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# PokeReact

Hello there! Welcome to the world of Pokémon. This world is inhabited by creatures called Pokemon! 

Your goal as a PokéDeveloper is to create a website that list all of them. You will find below few of them.

![](https://pokemon-fight.surge.sh/images/pokemons/1.png)
![](https://pokemon-fight.surge.sh/images/pokemons/2.png)
![](https://pokemon-fight.surge.sh/images/pokemons/3.png)
![](https://pokemon-fight.surge.sh/images/pokemons/4.png)
![](https://pokemon-fight.surge.sh/images/pokemons/5.png)
![](https://pokemon-fight.surge.sh/images/pokemons/6.png)
![](https://pokemon-fight.surge.sh/images/pokemons/7.png)
![](https://pokemon-fight.surge.sh/images/pokemons/8.png)
![](https://pokemon-fight.surge.sh/images/pokemons/9.png)
![](https://pokemon-fight.surge.sh/images/pokemons/25.png)
![](https://pokemon-fight.surge.sh/images/pokemons/26.png)

For this lab, you will rely on:
- `create-react-app` to create your own React application
- `react-router-dom` to have a website with different pages
- https://pokeapi.co to fetch informations about Pokemons 
- `axios` to call apis

If you want to take some inspiration for the wesite, you can check https://pokedex.org


## Iteration 1 | Start the project

Create a new React application (for example with `create-react-app`) with 6 components:
- `src/components/App.js`
- `src/components/Navbar.js`
- `src/components/pages/Home.js`
- `src/components/pages/PokemonsList.js`
- `src/components/pages/PokemonDetail.js`
- `src/components/pages/CreateYourTeam.js`

For the moment, write only the content of: 
- `App.`: Put your Navbar and your `<Route>`
- `Navbar`: Put your `<NavLink>`s
- `Home`: Write a simple welcoming home page 😀


## Iteration 2 | `PokemonsList`

Now it's time to create a page '/pokemons' with the component `PokemonsList`.

Your goal is to display the list of all pokemons, with their names and pictures. For this, you will need to 1 API call to `GET https://pokeapi.co/api/v2/pokemon/`. To get the pictures, if the id of the pokemon is 25, you can display the picture with the following link: "https://pokemon-fight.surge.sh/images/pokemons/25.png"


## Iteration 3 | `PokemonsList` with search

Add a search bar to filter pokemons by name.


## Iteration 4 | `PokemonDetail`

Now, you want to display the detail of Pokemon. Your goal is to display the list of pokemons on the left and the details on the right.

You will probably have to use `componentDidUpdate`!


## Iteration 5 | `CreateYourTeam`

Ask Maxence ;)


export const getPokemonColorClass = (type: string, forText: boolean = true) => {
  switch (type) {
    case 'normal':
      return forText ? 'text-gray-500' : 'bg-gray-500';
    case 'fighting':
      return forText ? 'text-red-600' : 'bg-red-600';
    case 'flying':
      return forText ? 'text-blue-400' : 'bg-blue-400';
    case 'poison':
      return forText ? 'text-purple-600' : 'bg-purple-600';
    case 'ground':
      return forText ? 'text-yellow-700' : 'bg-yellow-700';
    case 'rock':
      return forText ? 'text-gray-800' : 'bg-gray-800';
    case 'bug':
      return forText ? 'text-green-500' : 'bg-green-500';
    case 'ghost':
      return forText ? 'text-indigo-500' : 'bg-indigo-500';
    case 'steel':
      return forText ? 'text-gray-400' : 'bg-gray-400';
    case 'fire':
      return forText ? 'text-red-500' : 'bg-red-500';
    case 'water':
      return forText ? 'text-blue-500' : 'bg-blue-500';
    case 'grass':
      return forText ? 'text-green-400' : 'bg-green-400';
    case 'electric':
      return forText ? 'text-yellow-400' : 'bg-yellow-400';
    case 'psychic':
      return forText ? 'text-purple-500' : 'bg-purple-500';
    case 'ice':
      return forText ? 'text-blue-200' : 'bg-blue-200';
    case 'dragon':
      return forText ? 'text-indigo-600' : 'bg-indigo-600';
    case 'dark':
      return forText ? 'text-gray-700' : 'bg-gray-700';
    case 'fairy':
      return forText ? 'text-pink-500' : 'bg-pink-500';
    case 'unknown':
      return forText ? 'text-gray-300' : 'bg-gray-300';
    case 'shadow':
      return forText ? 'text-black' : 'bg-black';
    default:
      return '';
  }
};

export const shortenBaseStatsName = (type: string) => {
  switch (type) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'ATK';
    case 'defense':
      return 'DEF';
    case 'special-attack':
      return 'SATK';
    case 'special-defense':
      return 'SDEF';
    case 'speed':
      return 'SPD';
    default:
      return '';
  }
};

export const calcUnits = (data: number) => {
  return (data / 10).toFixed(1);
};

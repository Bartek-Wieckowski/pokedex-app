import { CgPokemon } from 'react-icons/cg';

const HeaderApp = () => {
  return (
    <header className="flex-start gap-4 p-4">
      <CgPokemon className='text-4xl text-white font-bold' />
      <h1 className='text-2xl text-white font-bold'>Pokédex</h1>
    </header>
  );
};

export default HeaderApp;

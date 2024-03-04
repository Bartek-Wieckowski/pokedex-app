export const USER_FILTER_BY_NAME = 'byName';
export const USER_FILTER_BY_TYPE = 'byType';
export const OFFSET_GET_POKEMONS = 0;

export const MOTION_VARIANTS = {
  initial: ({ direction }: { direction: 'forward' | 'backward' }) => ({
    x: direction === 'backward' ? '-5%' : '5%',
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
    },
  }),
  in: {
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
    },
  },
  out: ({ direction }: { direction: 'forward' | 'backward' }) => ({
    x: direction === 'backward' ? '5%' : '-5%',
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
    },
  }),
};

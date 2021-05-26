import React from 'react';

export interface IPokemonProps {
  id: number | string;
}

function Pokemon({ id }: IPokemonProps) {
  return <div>This is {id} pokemon!</div>;
}

export default Pokemon;

import React from 'react';

function BarraDePesquisa() {
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Digite sua pesquisa"
        value=""
      ></input>
      <button data-testid="exec-search-btn">Pesquisar</button>
    </div>
  );
}

export default BarraDePesquisa;

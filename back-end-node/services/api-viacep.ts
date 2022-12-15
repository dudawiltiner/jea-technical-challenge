const API_VIACEP = 'https://viacep.com.br/ws/';
import fetch = require('node-fetch');

export const fetchFindCep: (value: string) => Promise<Response> = async (
  cep,
) => {
  const response = await fetch(`${API_VIACEP}${cep}/json/`);

  const data = response.json();

  return data;
};

interface Response {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

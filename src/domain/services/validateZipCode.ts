import axios from 'axios';

export type AddressInfoFromAPI_CEP = {
  logradouro: string;
  cep: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

export class ValidateZipCode {
  apiUrl = 'https://viacep.com.br/ws';

  validate = async (
    zipCode: string,
  ): Promise<AddressInfoFromAPI_CEP | null> => {
    try {
      const data = await axios.get<AddressInfoFromAPI_CEP>(
        `${this.apiUrl}/${zipCode}/json`,
      );

      if (data?.data?.erro) {
        return null;
      }

      return data.data;
    } catch (err) {
      return null;
    }
  };
}

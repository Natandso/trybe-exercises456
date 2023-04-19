import validator from 'validator';

const getCampo = document.querySelector('#value');
const getAnswer = document.querySelector('#answer');
const getOption = document.querySelector('#option');
const getButton = document.querySelector('#button');

const UUID_VERSION = 4;

getButton.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(getCampo.value, 'pt-BR'),
    email: validator.isEmail(getCampo.value),
    url: validator.isURL(getCampo.value),
    Lower: validator.isLowercase(getCampo.value),
    Boolean: validator.isBoolean(getCampo.value),
    uuid: validator.isUUID(getCampo.value, UUID_VERSION),
  };

  getAnswer.innerHTML = `a validação retornou ${campos[getOption.value]}`;
});

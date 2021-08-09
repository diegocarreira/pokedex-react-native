const {showMessage} = require('react-native-flash-message');

const flashError = message => {
  showMessage({
    message: 'Pokedex',
    icon: 'danger',
    duration: 3000,
    autoHide: true,
    floating: true,
    position: 'top',
    description: message ?? 'Erro',
    type: 'danger',
  });
};

const flashSuccess = message => {
  showMessage({
    message: 'Pokedex',
    position: 'top',
    icon: 'success',
    description: message ?? 'Sucesso!',
    type: 'success',
  });
};

export {flashError, flashSuccess};

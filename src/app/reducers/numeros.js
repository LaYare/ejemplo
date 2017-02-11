
const initialState = 1;

export default function numeros(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTO':
      return state + 1;

    default:
      return state;
  }
}

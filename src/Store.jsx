import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  colors: ['#2C3E50', '#FF5733', '#1D8348', '#6C3483', '#F5B7B1', '#87CEEB', '#B0E0E6', '#000080', '#4B0082'],
  decals: ['react', 'three2', 'pmndrs'],
  selectedColor: '#EFBD4E'
});

export { state };

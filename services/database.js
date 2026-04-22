import users from '../src/data/users.json' assert { type: 'json' };

// Simula conexão com banco
export async function connect() {
  console.log('🟡 Banco fake ativo (JSON em memória)');
  return true;
}

// Simula query SELECT
export async function getUsers() {
  return users;
}

// Simula UPDATE (validar usuário)
export async function validateUser(id) {
  const user = users.find(u => u.id === id);
  if (user) {
    user.validado = true;
  }
  return user;
}
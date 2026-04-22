import { getUsers, validateUser } from '../services/database.js';

export async function syncUsers() {
  const users = await getUsers();

  console.log(`🔄 Sincronizando ${users.length} usuários...`);

  // Exemplo: validar só os primeiros 3
  for (let i = 0; i < 3; i++) {
    const user = users[i];

    const updated = await validateUser(user.id);

    console.log(`✔ Usuário validado: ${updated.nome}`);
  }

  console.log('✅ Sync finalizado com banco fake');
}
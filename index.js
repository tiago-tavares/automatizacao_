import { connect } from './services/database.js';
import { syncUsers } from './jobs/syncUsers.js';

async function start() {
  await connect();      // agora é fake
  await syncUsers();    // roda automação
}

start();
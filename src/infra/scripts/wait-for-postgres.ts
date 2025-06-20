import { exec } from 'node:child_process';

function checkPostgres() {
  exec(
    'docker exec postgres_dev pg_isready --host localhost',
    (error, stdout) => {
      if (stdout.search('accepting connections') === -1) {
        process.stdout.write('.');
        checkPostgres();
        return;
      }

      console.log('\n🟢 Postgres está aceitando conexões!\n');
    },
  );
}

process.stdout.write('\n\n🔴 Aguardando aceitar conexões');
checkPostgres();

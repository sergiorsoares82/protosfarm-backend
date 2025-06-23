import retry from 'async-retry';

const waitForAllServices = async () => {
  console.log('waitForAllServices called');
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function fetchStatusPage() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/status');
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        await response.json();
      } catch (err) {
        console.log('Waiting for web server...');
        throw err; // para o retry tentar novamente
      }
    }
  }
};

export default {
  waitForAllServices,
};

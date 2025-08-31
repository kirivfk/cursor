export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node');
    const sdk = new NodeSDK({
      // Configuration details for the SDK can be added here
      // For example, exporters, instrumentations, etc.
    });

    try {
      await sdk.start();
      console.log('OpenTelemetry SDK started successfully.');
    } catch (error) {
      console.error('Error starting OpenTelemetry SDK:', error);
    }

    // Gracefully shut down the SDK on process exit
    process.on('SIGTERM', () => {
      sdk.shutdown().then(
        () => console.log('OpenTelemetry SDK shut down successfully.'),
        (err) => console.error('Error shutting down OpenTelemetry SDK:', err)
      );
    });
  }
}

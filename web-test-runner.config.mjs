import {esbuildPlugin} from '@web/dev-server-esbuild';
import {playwrightLauncher} from '@web/test-runner-playwright';

const chromium = playwrightLauncher({product: 'chromium'});

export default {
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'esnext',
      define: {
        'process.env.NODE_ENV': '"development"'
      },
    }),
  ],
  staticLogging: !!process.env.CI,
  testFramework: {
    config: {
      ui: 'tdd',
      reporter: 'html',
      timeout: 30000,
      retries: 0, 
    },
  },
  groups: [
    {
      name: 'Main',
      files: [
        'src/*.test.ts',
      ],
      browsers: [chromium],
    },
  ],
};


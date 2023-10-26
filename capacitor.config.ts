import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'www.vagochmiljo.se',
  appName: 'offline-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

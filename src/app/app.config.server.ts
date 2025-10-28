
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config'; // Import the new provider
import Aura from '@primeuix/themes/aura';
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura, 
      },
    }),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

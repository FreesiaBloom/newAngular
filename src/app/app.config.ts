import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxsModule } from '@ngxs/store';
import { NodeState } from './store/node.state';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(NgxsModule.forRoot([NodeState])),
    // importProvidersFrom(NgxsLoggerPluginModule.forRoot()),
    // importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot())
  ],
};

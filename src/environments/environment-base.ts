// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare var require: any;

export const environmentBase = {
    production: false,
    VERSION: require('../../package.json').version,
    build: require('../../package.json').build,
    apiEndpoints: {
        reportMeeting: '/meet',
        createUser: '/createUser',
        userScore: '/getNetworkSize',
        ping: '/api/ping'
    },

    pauseBetweenScanCyclesSec: 10,

    scanWindowWidthSec: 6,

    scanCycleConfig: {

        pauseAfterCycleForegroundSec: 10,

        pauseAfterCycleBackgroundSec: 60,
    },

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

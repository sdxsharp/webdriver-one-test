import viteConfig from './vite.config.js'

const debug = process.env.DEBUG

export const config = {
    runner: ['browser', { viteConfig }],
    specs: ['./test/component/**/*.spec.js'],
    exclude: [ ],
    maxInstances: 1,
    capabilities: [
        { browserName: 'firefox', 'moz:firefoxOptions': debug ? { } : { args: ['-headless'] } },
        //{ browserName: 'chrome','goog:chromeOptions': debug ? { } : { args: ['headless', 'disable-gpu'] } },
        //{ browserName: 'msedge', 'ms:edgeOptions': debug ? { } : { args: ['headless', 'disable-gpu'] } },
    ],
    logLevel: debug?'warn':'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    execArgv: debug ? ['--inspect'] : [],
    framework: 'mocha',
    mochaOpts: { ui: 'bdd', timeout: 60000 * (debug ? 1000 : 1) },
    reporters: [['spec', { realtimeReporting: true, showPreface: false, }]],
}

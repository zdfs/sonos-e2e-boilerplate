/* =====================================================================================================================
 * The master file for our e2e tests. We import our e2e configuration file and initialize a browser() instance
 * which is needed by the individual tests.
 *
 * We also have our test list. We can comment out tests that we don't want to run (if we want to make things faster).
 * In the future, we might look in to concurrent runs, but that will take a large account from SauceLabs. Until then,
 * this list just concatenates our tests in to one testing instance.
 *
 * SONOS DRIVE
 *
 * This is an NPM module that is maintained here: https://github.com/zdfs/sonos-drive.
 *
 * You can submit bugs and requests here: https://github.com/zdfs/sonos-drive.
 * =====================================================================================================================
 */

var drive = require('sonos-drive');

/* =====================================================================================================================
 * This variable forces all tests to run. No matter if the environment supports the test or not. USE ONLY IN DEV
 * AND ONLY IF THE TEST SUITES SUPPORT IT
 * =====================================================================================================================
 */

var forceRun = false;

/* =====================================================================================================================
 * Configure your Project settings
 *
 * @param SauceLabs Username
 * @param SauceLabs Access Key
 * @param Test Suite Name
 * =====================================================================================================================
 */

drive.config('', '', '');

/* =====================================================================================================================
 * Initialize a single browser instance.
 *
 * We do this here because if we don't pass a single browser instance, multiple browser sessions will be instantiated
 * and this will cause us problems since we can only have 2 concurrent VMs on SauceLabs. Each browser instance counts
 * as 1.
 *
 * The browser object is created through the drive.browser() method.
 * =====================================================================================================================
 */

var browser = drive.browser();

/* =====================================================================================================================
 * Run your tests suites.
 *
 * We pull in the tests we want to run by using Node's require function. We initialize the test by calling the start()
 * method. We can pass in three params if we want. Two are required.
 *
 * @param drive - The sonos-drive npm module. Needed for some useful methods.
 * @param browser - Our single browser instance for running tests.
 * @param forceRun - Only use during development. Forces all tests to run whether or not the environment is supported.
 * =====================================================================================================================
 */

require('./sonos/home.spec').start(drive, browser, forceRun);

var _ = require('lodash'),
		drive = require('sonos-drive');

var gruntConfig = {

 /* ====================================================================================================================
	* @task: 'grunt env'
	* @description: No configuration. This object is interacted with dynamically.
	* ====================================================================================================================
	*/


	env: {},

 /* ====================================================================================================================
	* @task: 'grunt simplemocha'
	* @description: A Mocha test harness that we need for running our e2e tests.
	* ====================================================================================================================
	*/

	simplemocha: {

	 /* ==================================================================================================================
		* @option: timeout
		* @description: Set test-case timeout in milliseconds
		* @type: Integer
		*
		* @option: Reporter
		* @description: The reporter type for Mocha.
		* @type: String
		* ==================================================================================================================
		*/

		e2e: {
			options: {
				timeout: 60000,
				reporter: 'spec'
			},
			src: ['spec/e2e/e2e-harness.js']
		}
	}

};

module.exports = function(grunt) {

	grunt.initConfig(gruntConfig);

	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-selenium-webdriver');

	/* ====================================================================================================================
  * This sets up our e2e testing task for dev environments. It starts a local Selenium server, then a Connect server,
  * runs our tests in Firefox, and then shuts the Selenium and Connect servers down.
  *
  * Usage: grunt e2e
  * ====================================================================================================================
  */

	grunt.registerTask('e2e', ['selenium_start', 'e2e:firefox', 'selenium_stop']);

 /* ====================================================================================================================
  * This loop sets up the grunt e2e tasks for each environment.
  *
  * Usage: grunt e2e:[ie9|ie10|ie11|firefox|chrome|safari]
  * ====================================================================================================================
  */

	_(drive.environments()).forEach(function(environment, key) {
		grunt.registerTask('e2e:' + key, ['env:' + key, 'simplemocha:e2e']);
	});

 /* ====================================================================================================================
  * This loop maps through the environments and stores a reference to the one we chose in the process.env object
  * ====================================================================================================================
  */

	_(drive.environments()).forEach(function(environment, key) {
    gruntConfig.env[key] = {
			DESIRED: JSON.stringify(environment),
			BROWSERKEY: key
    };
	});

};
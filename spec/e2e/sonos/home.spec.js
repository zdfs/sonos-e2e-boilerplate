'use strict';

module.exports = {

	// start() is our main testing method for this suite of tests
	// @param drive - Our sonos-drive npm module
	// @param browser - Our browser object
	// @priam forceRun - We can use this to omit tests we don't want to run under certain conditions.

	start: function(drive, browser, forceRun) {

		// The describe() function creates a logical grouping of tests. There
		// isn't a limit to how much we can nest describe() functions. It helps
		// keep our tests maintainable.

		describe('Sonos Home Page', function() {

			// The before() function gets executed before any of our tests. We
			// take this opportunity to set up the conditions that we want the
			// browser object to have before any tests are executed.

			before(function (done) {

				var viewport = drive.getViewport('large');

				browser
					.get(drive.getBaseUrl().baseUrl)
					.setWindowSize(viewport.w, viewport.h)
					.nodeify(done);

			});

			// Our end-to-end test. All it does is verify that a headline of text
			// is correct. The 'done' parameter is due to the asynchronous nature
			// of JavaScript. It tells Node when the promise is fulfilled
			// and that it's safe to move on to another task.

			it('The headline is correct', function(done) {
				browser
					.elementByCssSelector('.product-section.content h1.headline')
						.text()
						.should.eventually.become('HiFi SOUND MEETS ROCK-SOLID WIRELESS')
					.nodeify(done);
			});

		});

	}

};
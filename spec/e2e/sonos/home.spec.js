'use strict';

module.exports = {

	start: function(drive, browser, forceRun) {

		describe('Large: Sonos Home Page', function() {

			before(function (done) {

				var viewport = drive.getViewport('large');

				browser
					.get(drive.getBaseUrl().baseUrl)
					.setWindowSize(viewport.w, viewport.h)
					.nodeify(done);

			});

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
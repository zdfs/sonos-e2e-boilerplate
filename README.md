# Sonos End-to-End Testing Boilerplate

A starter project for getting started with end-to-end testing using node.js,
grunt, and sonos-drive. This example isn't meant to cover every possible
use case, but it should get you started. If you have any questions, please
[reach out](mailto:suit@sonos.com).

## How to run this example

This project contains a single test meant to verify a piece of text on
[sonos.com](http://www.sonos.com). After you download the example, and
unzip the file, navigate to the `sonos-e2e-boilerplate` directory and run:

```javascript
npm install
```

In order to use [sonos-drive](https://github.com/zdfs/sonos-drive), which is
a simple NPM module that's been installed for this project and provides all
the necessary dependencies you need for you to easily install tests, you'll
need to fill out your SauceLabs credentials in `spec/e2e/e2e-harness.js`.

```javascript
drive.config(sauce_username, sauce_accesskey, test_suite_name);
```

The SauceLabs credentials come from your SauceLabs account. The
`test_suite_name` is a `string` that can be anything, like 'Suit'.

Now you're ready to execute the test. To run the test locally, type the
following command from the Terminal program (Mac) or cmd (Windows):

```javascript
grunt e2e --url=http://www.sonos.com
```

This will start an instance of Firefox, navigate to the `sonos.com` url
and run the test.

## Run the test against SauceLabs

Running your test against SauceLabs is not much different. Right now,
`sonos-drive` supports 6 environments. In your `grunt` command, just pass
the environment you want to use and make sure you pass an `--env=saucelabs`
flag so that `sonos-drive` doesn't try to run the test locally.

**Examples**

Run your test in Linux Firefox on SauceLabs

```javascript
grunt e2e:firefox --url=http://www.sonos.com --env=saucelabs
```

Run your test in Mac Chrome on SauceLabs

```javascript
grunt e2e:chrome --url=http://www.sonos.com --env=saucelabs
```

Run your test in Mac Safari on SauceLabs

```javascript
grunt e2e:safari --url=http://www.sonos.com --env=saucelabs
```

Run your test in Internet Explorer 11 on SauceLabs

```javascript
grunt e2e:ie11 --url=http://www.sonos.com --env=saucelabs
```

Run your test in Internet Explorer 10 on SauceLabs

```javascript
grunt e2e:ie10 --url=http://www.sonos.com --env=saucelabs
```

Run your test in Internet Explorer 9 on SauceLabs

```javascript
grunt e2e:ie9 --url=http://www.sonos.com --env=saucelabs
```

Environments are maintained through the `sonos-drive` module. We can add
whatever environment is supported by SauceLabs.
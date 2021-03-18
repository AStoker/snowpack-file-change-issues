# Testing Snowpack's `onFileChange` event

There appears to be an issue using the `onFileChange` event provided by the javascript api (see [documentaiton](https://www.snowpack.dev/reference/javascript-interface#snowpackbuildresult.onfilechange)).  

This is a simple repro using PnP Yarn 2, so after downloading, you should only need to run the command `yarn run build`.

Expected behavior is that after the build starts watching for file changes, if a file gets changed, our `onFileChange` event would be fired, printing out to the console. However, that is not the current behavior, and the default `onFileChange` event is fired, not the one provided by the configuration.
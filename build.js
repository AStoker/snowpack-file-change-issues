const snowpack = require('snowpack');

async function build() {
    
    let config = await snowpack.loadConfiguration({}, './snowpack.config.js');
    config.buildOptions.watch = true;

    const result = await snowpack.build({config});

    result.onFileChange = function(fileChange) {
        console.log('This should be called on file change'); 
        console.log(fileChange);
    }

}

build();

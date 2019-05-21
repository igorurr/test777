const fse = require('fs-extra');

const isDev = !!process.argv.find( arg => arg === '--dev' );
process.env.__DEV__ = isDev;

const defaultBuildFolder = isDev ? 'dev' : 'last';

fse.remove(`../build/${defaultBuildFolder}`)
  .then( 
    () => fse.copy('./src/public/', `./build/${defaultBuildFolder}/`),
    () => fse.copy('./src/public/', `./build/${defaultBuildFolder}/`)
  )
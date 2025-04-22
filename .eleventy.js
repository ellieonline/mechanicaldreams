// 11ty configuration
module.exports = config => {

    /* --- PLUGINS --- */

    // navigation
    config.addPlugin( require('@11ty/eleventy-navigation') );

    // 11ty defaults
    return {
  
      dir: {
        input: 'src',
        output: 'build'
      }
  
    };
  };
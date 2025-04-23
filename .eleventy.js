// 11ty configuration
module.exports = config => {

    /* --- PLUGINS --- */

    // navigation
    config.addPlugin( require('@11ty/eleventy-navigation') );

     /* --- SHORTCODES --- */

    // page navigation
    config.addShortcode('navlist', require('./src/_includes/navlist.js'));


    // 11ty defaults
    return {
  
      dir: {
        input: 'src',
        output: 'build'
      }
  
    };
  };
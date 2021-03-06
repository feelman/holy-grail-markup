module.exports = function(grunt) {
  grunt.initConfig({
    csscount: {
      dev: {
        src: [
          'atomic/style.css',
          'bem-css/style.css',
          'bem-flexboxgrid/style.css',
          'bem-flexboxgrid/style_clear.css',
          'css-modules/build/style.css',
          'oocss/style.css',
          'organic/style.css',
          'raw/style.css',
          'smacss/basic.css',
          'smacss/layouts.css',
          'smacss/modules.css',
          'smacss/states.css',
          'smacss/themes.css'
        ],
      }
    }
  });
   
  grunt.loadNpmTasks('grunt-css-count');
   
  grunt.registerTask('default', ['csscount']);
}

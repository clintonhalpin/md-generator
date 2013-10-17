module.exports = function(grunt) {
    grunt.initConfig({
            markdown: {
                all: {
                    files: [
                        {
                            expand: true,
                            flatten: true,
                            src:  'public/**/*.md',
                            dest: 'public/docs',
                            ext:  '.html'
                        }
                    ]
                }
            }
    });
    grunt.loadNpmTasks('grunt-markdown');
    grunt.registerTask('default', [ 'markdown' ]);
};

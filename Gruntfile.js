module.exports = function(grunt) {
	
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		typescript: {
            base: {
                src: ['app.ts', 'lib/*.ts'],
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            }
        },
        watch: {
            files: ['app.ts', 'lib/*.ts'],
            tasks: ['typescript'],
            options: {
                spawn: true,
                interrupt: true,
                interval: 500
            }
        }
	});
	
	
    grunt.registerTask('default', ['watch']);
}

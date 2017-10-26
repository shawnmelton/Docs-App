module.exports = ((grunt) => {
    'use strict'

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                minified: true,
                presets: ['env', 'react', 'stage-2']
            },
            dist: {
                files: [{
                    cwd: 'src',
                    expand: true,
                    src: [
                        'app.js',
                        '**/*.js',
                        '**/**/*.js'
                    ],
                    dest: 'tmp/js',
                    ext: '.js'
                }]
            }
        },
        browserify: {
            dist: {
                src: ['tmp/js/app.js'],
                dest: 'dist/js/compiled.js',
                options: {
                    browserifyOptions: { debug: false },
                    plugin: [
                       ['minifyify', { map: false }]
                    ]
                }
            }
        },
        clean: {
            prep: 'dist',
            post: 'tmp'
        },
        copy: {
            files: {
                expand: true,
                cwd: 'src',
                src: ['.htaccess', 'index.html'],
                dest: 'dist'
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/compiled.css': 'src/css/styles.scss'
                },
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-sass')

    grunt.registerTask('default', [
        'clean:prep', 'sass', 'copy', 'babel', 'browserify', 'clean:post'
    ])
})
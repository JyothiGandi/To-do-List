/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

import gulp from "gulp";
import browserify from "browserify";
import gutil from "gulp-util";
import tap from "gulp-tap";
import buffer from "gulp-buffer";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import ngAnnotate from "gulp-ng-annotate";

gulp.task("default", ["transpile"]);

gulp.task("transpile", () => {

    return gulp.src('src/**/*.js', {read: false}) // no need of reading file because browserify does.

        // transform file objects using gulp-tap plugin
        .pipe(tap(function (file) {

            gutil.log('bundling ' + file.path);

            // replace file contents with browserify's bundle stream
            file.contents = browserify(file.path, {debug: true}).transform("babelify").bundle().on("error", function(error){
                console.error( "\nError: ", error.message, "\n");
                this.emit("end");
            });

        }))

        // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
        .pipe(buffer())

        // load and init sourcemaps
        //.pipe(sourcemaps.init({loadMaps: true}))

        //.pipe(ngAnnotate())
        .pipe(uglify({ mangle: false }))

        // write sourcemaps
        //.pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('dist'));

});



gulp.task("watch", ["transpile"], () => {
    gulp.watch("src/**/*", ["transpile"]);
});

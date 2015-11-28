var Metalsmith = require('metalsmith'),
    gulp = require('gulp'),
    collections = require('metalsmith-collections'),
    layouts = require('metalsmith-layouts'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    drafts = require('metalsmith-drafts'),
    ignore = require('metalsmith-ignore'),
    assets = require('metalsmith-assets'),
    fs = require('fs'),
    path = require('path'),
    main_dir = process.cwd(),
    partials = require('./../plugins/partials.js'),
    metadata = require(main_dir+'content/metadata.json'),
    url = process.env.URL || '/';

metadata.url = metadata.url || url;

// Build
gulp.task('build-static', function (cb) {
  console.time('[metalsmith] build finished');
  var metalsmith = Metalsmith(__dirname+'/../../');
      metalsmith
      .metadata(metadata)
      .source(main_dir+'/content/posts')
      .use(assets({
        source: main_dir+'/content/assets', // relative to the working directory
        destination: 'assets' // relative to the build directory
      }))
      .use(collections({
         articles: {
            pattern: '*.md',
            sortBy: 'date',
            reverse: true
          }
      }))
      .use(markdown({}))
      .use(require('./../plugins/setFilePath.js'))
      .use(drafts({}))
      .use(ignore([
          main_dir+'/content/_drafts/*',
          main_dir+'/content/posts/index.md'
      ]))
      .use(permalinks({'pattern': ':title', 'relative': false}))
      .use(layouts({
        engine: 'handlebars',
        partials: partials(metalsmith, main_dir+'/content/layouts', 'partials'),
        relative_path: require('./../plugins/getPath.js'),
        directory: main_dir+'/content/layouts'
      }))
      .clean(false)
      .destination(process.env.WWW);

      metalsmith.build(function (err) {
          if (err) { throw err; }
          console.timeEnd('[metalsmith] build finished');
          cb();
      });
});

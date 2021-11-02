The Power of Webpack:
- It bundles JavaScript applications (both EcmaScript Modules and CommonJS)
- When working with plugins and loaders, it can be used for taking care of dependencies and assets (i.e. images, fonts, CSS, etc)
- Webpack goes through your project and builds a dependency graph based on what is imported and exported.

Read more about Webpack here: https://www.section.io/engineering-education/webpack/

1. npm install --save-dev webpack webpack-cli
2. You can either use the default config for webpack or create your own by creating a file named webpack.config.js.
3. add the two scripts to package.json
4. add correct script tag to html

Cool way to visualize dependencies inside bundle.js:
1. Run webpack --profile --json > webpack-stats.json
2. Drop file in https://chrisbateman.github.io/webpack-visualizer/


const port = process.env.PORT || 8080;

const server = require('./dist/server');

const path = require('path');

const SitemapGenerator = require('sitemap-generator');

server.app.listen(port, () => {
      // create generator
  const generator = SitemapGenerator(`http://localhost:${port}`, {     
    filepath: path.resolve('dist' , 'sitemap.xml') ,
    //filepath: './dist/sitemap.xml' ,
    maxEntriesPerFile: 50000,
    stripQuerystring: true
  });
  
  // register event listeners
  generator.on('done', () => {
    console.log("Sitemap Generated");
  });
  
  generator.on('add', (url) => {
    console.log("URL "+url+" Added to Sitemap");
  });

  generator.on('ignore', (url) => {
    console.log("URL "+url+" Ignored By Sitemap");
  });

  generator.on('error', (error) => {
    console.log("Sitemap Error:",error);    
  });

  // start the crawler
  generator.start();

    console.log("Listening on: http://localhost:"+port);
});

const ghpages = require('gh-pages');
 
ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://oanacristeac.github.io/'
  }, callback);
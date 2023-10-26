const CopyWebpackPlugin = require('copy-webpack-plugin');

// ... (other code)

module.exports = {
  // ... (other code)
  
  plugins: [
    // ... (other plugins)
    
    new CopyWebpackPlugin([
      { from: 'src/serviceWorker.js', to: '' },
    ]),
  ],
  // ... (other code)
};

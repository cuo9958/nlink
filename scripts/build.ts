import webpack from 'webpack';
import WebpackConfig from './webpack.config';

//'production'
const buildConfig = new WebpackConfig();

webpack(buildConfig).run((err: Error) => {
    if (err) {
        console.log(err);
    }
});

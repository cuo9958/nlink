import * as path from 'path';
import webpack, { Configuration, ExternalsElement } from 'webpack';

class WebpackConfig implements Configuration {
    target: Configuration['target'] = 'node';
    mode: Configuration['mode'] = 'production';
    entry = [path.resolve(__dirname, '../server/app.ts')];
    output = {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    };
    externals: ExternalsElement[] = [];
    module = {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname, '../tsconfig.json')
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    };
    resolve = {
        extensions: ['.ts', '.js', '.json']
    };
    plugins = [new webpack.NoEmitOnErrorsPlugin()];

    constructor() {}
}

export default WebpackConfig;

/* global config */

import corser from 'corser';
import proxy from 'express-http-proxy';

export default (app) => {
    app.use(corser.create());
    app.use('/oxford-api', proxy(config.oxford.api, {
        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
            // you can update headers
            proxyReqOpts.headers['Content-Type'] = 'application/json';
            // application id for oxford
            proxyReqOpts.headers['app_id'] = config.oxford.app_id;
            // application key for oxford
            proxyReqOpts.headers['app_key'] = config.oxford.app_key;
            return proxyReqOpts;
        }
    }));
};

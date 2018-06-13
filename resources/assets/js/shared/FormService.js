import _ from 'lodash';
import axios from 'axios';

class FormService {
    constructor (data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }
    }

    data () {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    onSuccess () {
        this.reset();
    }

    onFail (response) {
        console.log('onFail', response.data.message);
    }

    get (url, config) {
        return this.submit('get', url, config);
    }

    delete (url, config) {
        return this.submit('delete', url, config);
    }

    patch (url, config) {
        return this.submit('patch', url, config);
    }

    post (url, config) {
        return this.submit('post', url, config);
    }

    put (url, config) {
        return this.submit('put', url, config);
    }

    reset () {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    submit (requestType, url, config = {}) {
        return new Promise((resolve, reject) => {
            let requestConfig = {
                url,
                method: requestType,
                ...config
            };

            if (_.size(this.data()) > 0) {
                requestConfig.data = this.data();
            }

            axios.request(requestConfig)
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response);
                    reject(error.response);
                });
        });
    }
}

export default FormService;

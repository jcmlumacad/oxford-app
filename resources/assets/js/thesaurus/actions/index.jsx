import { ADD_SYNONYM } from './../types';
import config from '#/config';
import FormService from '#/shared/FormService';

export function getEntriesSynonyms (payload) {
    let form = new FormService();

    let lang = config.source_lang;
    let word = payload.word;

    let attrs = {
        // baseURL: config.oxford_api,
        headers: {
            'Content-Type': 'application/json',
            'app_key': config.app_key,
            'app_id': config.app_id
        }
    };

    return (dispatch) => {
        return form.get(`/oxford-api/api/v1/entries/${lang}/${word}`, attrs);
    };
}

export function addSynonym (text) {
    return {
        type: ADD_SYNONYM,
        text
    };
}

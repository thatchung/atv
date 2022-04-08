'use strict';

/**
 * Upload.js controller
 *
 */

const _ = require('lodash');
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async uploadByCkeditor(ctx) {
        const {
            request: { files: { upload } = {} },
        } = ctx;

        if (_.isEmpty(upload) || upload.size === 0) {
            throw strapi.errors.badRequest(null, {
                errors: [{ id: 'Upload.status.empty', message: 'Files are empty' }],
            });
        }
        const uploadedFiles = await strapi.plugins.upload.services.upload.upload({
            data: {},
            files : upload,
        });
        if (uploadedFiles.length > 0) {
            // return {
            //     urls: {
            //         'default': uploadedFiles[0].url,
            //         '800': uploadedFiles[0].formats.small && uploadedFiles[0].formats.small.url,
            //         '1024': uploadedFiles[0].formats.medium && uploadedFiles[0].formats.medium.url,
            //         '1920': uploadedFiles[0].formats.large && uploadedFiles[0].formats.large.url,
            //     }
            // }
            let rs = {
                urls: {
                    'default': uploadedFiles[0].url
                }
            }
            if(uploadedFiles[0].formats && uploadedFiles[0].formats.small && uploadedFiles[0].formats.small.url)
            rs.urls['800'] = uploadedFiles[0].formats.small.url
            if(uploadedFiles[0].formats && uploadedFiles[0].formats.medium && uploadedFiles[0].formats.medium.url)
            rs.urls['1024'] = uploadedFiles[0].formats.medium.url
            if(uploadedFiles[0].formats && uploadedFiles[0].formats.large && uploadedFiles[0].formats.large.url)
            rs.urls['1920'] = uploadedFiles[0].formats.large.url
            return rs
        } else {
            throw strapi.errors.badRequest(null, {
                errors: [{ message: 'upload fails' }],
            });
        }
    },
};

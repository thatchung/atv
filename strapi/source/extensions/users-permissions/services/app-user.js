'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */
const { isDraft } = require('strapi-utils').contentTypes;

module.exports = {
    /**
    * Reports
    *
    * @return {Promise}
    */
    async reportSummary({ ids, created_at_gte, created_at_lte, author_id, status }) {
        const knex = strapi.connections.default;
        const query = knex('articles')
        if (ids) query.whereIn('id', ids)
        if (created_at_gte) query.where('created_at', '>=', created_at_gte)
        if (created_at_lte) query.where('created_at', '<=', created_at_lte)
        if (author_id) query.where('author', '=', author_id)
        if (status) query.where('status', '=', status)
        query.groupBy(`status`)
        query.select(
            knex.raw(`status`),
            knex.raw(`COUNT(id) as count`),
            knex.raw(`SUM(views) as views`),
            knex.raw(`SUM(views_today) as views_today`),
        )
        return await query
    },
};

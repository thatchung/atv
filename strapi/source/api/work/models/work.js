'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
var tvkd = require('tieng-viet-khong-dau');

async function clearCacheData(data) {
    let cache = {};
    if(strapi.middleware){
        if(strapi.middleware.cache){
            cache = strapi.middleware.cache
        }
    }

    if (cache && typeof cache.clearCache === "function") {
        const articleCache = cache.getCacheConfig("works");
        if (articleCache && typeof data.url === "string") {
            await cache.clearCache(articleCache, { id: data.url });
            return;
        }
    }
}
module.exports = {
    lifecycles: {
        async afterUpdate(result, params, data) {
            await clearCacheData(result);
        },
        async afterCreate(result, params, data) {
            result.url = tvkd.cFriendlyURI(result.title.trim())
            await strapi.services.work.update({ id : result.id }, result);
            await clearCacheData(result);
        },
        async afterDestroy(result, params, data) {
            await clearCacheData(result);
        }
    }
};

'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

async function clearCacheData(data) {
    let cache = {};
    if(strapi.middleware){
        if(strapi.middleware.cache){
            cache = strapi.middleware.cache
        }
    }

    if (cache && typeof cache.clearCache === "function") {
        const articleCache = cache.getCacheConfig("works");
        if (articleCache && typeof data.slug === "string") {
            await cache.clearCache(articleCache, { id: data.slug });
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
            await clearCacheData(data);
        },
    }
};

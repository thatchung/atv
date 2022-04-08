'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

const _ = require('lodash');
const moment = require('moment')
const { convert } = require('html-to-text');
const { getAbsoluteServerUrl } = require("strapi-utils");
const { extend } = require('umi-request');
const { google } = require('googleapis')

const { SERVICE_ACCOUNT_EMAIL, SERVICE_ACCOUNT_KEY_FILE, SERVICE_VIEW_ID } = process.env
const jwt = new google.auth.JWT(SERVICE_ACCOUNT_EMAIL, SERVICE_ACCOUNT_KEY_FILE, null, 'https://www.googleapis.com/auth/analytics.readonly')
// let processing = false
module.exports = {

  /**
  * Facebook get Long Lived User Access Token //fb_exchange_token
  * Every 10'.
  */
  // '*/10 * * * *': async () => {
  //   const facebook = await strapi.services.facebook.find();
  //   let oauth, user_access_token_long_lived;
  //   if (facebook && !facebook.user_access_token_long_lived) {
  //       oauth = await strapi.services['facebook-graph'].oauthAccessToken({
  //           client_id: facebook.client_id,
  //           client_secret: facebook.client_secret,
  //           grant_type: 'fb_exchange_token',
  //           fb_exchange_token: facebook.user_access_token
  //       })
  //       await strapi.services.facebook.createOrUpdate({ user_access_token_long_lived: oauth.access_token });
  //   }
  // },
  
  // Generate the sitemap every 12 hours
  '0 */12 * * *': () => {
    console.log('============== CRON : SITEMAP UPDATE =================')
    strapi.plugins.sitemap.services.sitemap.createSitemap();
    console.log('============== CRON : SITEMAP UPDATE =================')
  },
};

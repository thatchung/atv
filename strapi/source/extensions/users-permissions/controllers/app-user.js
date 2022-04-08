'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */

const _ = require('lodash');
const { sanitizeEntity } = require('strapi-utils');

const sanitizeUser = user =>
  sanitizeEntity({
    ..._.pick(user, ['id', 'slug', 'name', 'description', 'avatar', 'summary', 'created_at'])
  }, {
    model: strapi.query('user', 'users-permissions').model,
  });


module.exports = {
  async find(ctx, next, { populate } = {}) {
    let users;

    if (_.has(ctx.query, '_q')) {
      // use core strapi query to search for users
      users = await strapi.query('user', 'users-permissions').search(ctx.query, populate);
    } else {
      users = await strapi.plugins['users-permissions'].services.user.fetchAll(ctx.query, populate);
    }

    ctx.body = users.map(sanitizeUser);
  },

  /**
   * Retrieve a user record.
   * @return {Object}
   */
  async findOne(ctx) {
    const { id } = ctx.params;
    let query = {}
    if (_.isNumber(id)) {
      query.id = id
    } else {
      query.slug = id
    }

    let data = await strapi.plugins['users-permissions'].services.user.fetch(query);

    const summary = await strapi.plugins['users-permissions'].services['app-user'].reportSummary({ author_id: data.id })

    if (data) {
      data = sanitizeUser({ ...data, summary });
    }

    // Send 200 `ok`
    ctx.body = data;
  },

  /**
   * Retrieve user count.
   * @return {Number}
   */
  async count(ctx) {
    if (_.has(ctx.query, '_q')) {
      return await strapi.plugins['users-permissions'].services.user.countSearch(ctx.query);
    }
    ctx.body = await strapi.plugins['users-permissions'].services.user.count(ctx.query);
  },

  /**
   * Update a/an user record.
   * @return {Object}
   */

  async update(ctx) {
    const advancedConfigs = await strapi
      .store({
        environment: '',
        type: 'plugin',
        name: 'users-permissions',
        key: 'advanced',
      })
      .get();

    const { id } = ctx.params;
    const { email, username, password } = ctx.request.body;

    const user = await strapi.plugins['users-permissions'].services.user.fetch({
      id,
    });
    if (_.has(ctx.request.body, 'password') && !password && user.provider === 'local') {
      return ctx.badRequest('password.notNull');
    }
    let updateData = {
      ..._.pick(ctx.request.body, ['description', 'phone_number', 'name', 'email', 'password', 'avatar']),
    };

    if (_.has(ctx.request.body, 'password') && password === user.password) {
      delete updateData.password;
    }

    const data = await strapi.plugins['users-permissions'].services.user.edit({ id }, updateData);

    ctx.send(sanitizeUser(data));
  },

};

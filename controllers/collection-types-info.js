'use strict';

module.exports = {
  /**
   * @return {Object}
   */
  index: async (ctx) => {
    ctx.send(
      Object.keys(strapi.api).map(key => {
        return {
          name: key,
          alias: strapi.api[key].config.alias,
          isRoot: strapi.api[key].config.isRoot,
        }
      })
    );
  }
};

module.exports = ({ env }) => ({
    settings: {
      cache: {
        enabled: true,
        maxAge: 3600000,
        withStrapiMiddleware: true,
        clearRelatedCache: true,
        logs:true,
        models: [
          {
            model: 'works',
            injectDefaultRoutes: false,
            maxAge: 3600000,
            hitpass: false,
            routes: [
              '/works',
              '/works/count',
              '/works/:id'
            ]
          },
          {
            model: 'innovations',
            injectDefaultRoutes: false,
            maxAge: 3600000,
            hitpass: false,
            routes: [
              '/innovations',
              '/innovations/count',
              '/innovations/:id'
            ]
          },
        ]
      }
    },
  });
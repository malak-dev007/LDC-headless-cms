import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::page.page',
  ({ strapi }) => ({
    async find(ctx) {
      const pages = await strapi.documents('api::page.page').findMany({
        populate: {
          Content: {
            on: {
              'shared.footer-column': {
                populate: {
                  columns: {
                    populate: {
                      link: true,
                    },
                  },
                  social: {
                    populate: {
                      icon: true,
                    },
                  },
                  badges: true,
                },
              },

              'shared.hero': {
                populate: '*',
              },

              'shared.partners': {
                populate: '*',
              },

              'shared.rich-text': {
                populate: '*',
              },
               'shared.benefits': {
                populate: '*',
              },
               'shared.contact': {
                populate: '*',
              },
              'shared.faq': {
                populate: '*',
              },
              'shared.everything-app': {
                populate: '*',
              },
             'shared.plug': {
                populate: '*',
              },
               'shared.puplic-cloud': {
                populate: '*',
              },
               'shared.specialists-hold': {
                populate: '*',
              },
            },
          },
        },
      });

      return {
        data: pages,
      };
    },
  })
);
// import pluginPkg from '../../package.json';
// import pluginId from './pluginId';
// import App from './containers/App';
// import Initializer from './containers/Initializer';
// import lifecycles from './lifecycles';
// import trads from './translations';

// export default strapi => {
//   const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
//   const icon = pluginPkg.strapi.icon;
//   const name = pluginPkg.strapi.name;

//   const plugin = {
//     blockerComponent: null,
//     blockerComponentProps: {},
//     description: pluginDescription,
//     icon,
//     id: pluginId,
//     initializer: Initializer,
//     injectedComponents: [],
//     isReady: false,
//     isRequired: pluginPkg.strapi.required || false,
//     layout: null,
//     lifecycles,
//     mainComponent: App,
//     name,
//     preventComponentRendering: false,
//     trads,
//     menu: {
//       pluginsSectionLinks: [
//         {
//           destination: `/plugins/${pluginId}`,
//           icon,
//           label: {
//             id: `${pluginId}.plugin.name`,
//             defaultMessage: name,
//           },
//           name,
//           permissions: [
//             // Uncomment to set the permissions of the plugin here
//             // {
//             //   action: '', // the action name should be plugins::plugin-name.actionType
//             //   subject: null,
//             // },
//           ],
//         },
//       ],
//     },
//   };

//   return strapi.registerPlugin(plugin);
// };

import pluginPkg from '../../package.json';
import Wysiwyg from './components/Wysiwyg';
import pluginId from './pluginId';

export default strapi => {
  const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon: pluginPkg.strapi.icon,
    id: pluginId,
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: pluginPkg.strapi.required || false,
    mainComponent: null,
    name: pluginPkg.strapi.name,
    preventComponentRendering: false,
    settings: null,
    trads: {},
  };

  strapi.registerField({ type: 'wysiwyg', Component: Wysiwyg });

  return strapi.registerPlugin(plugin);
};

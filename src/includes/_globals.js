import _ from 'lodash';

export default {
  install(app) {
    const baseComponents = require.context('../components/base/', false, /[A-Za-z0-9_,\s]+\.vue$/i);

    baseComponents.keys().forEach((fileName) => {
      const componentsConfig = baseComponents(fileName);
      const componentName = _.upperFirst(
        _.camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
      );

      app.component(`Base${componentName}`, componentsConfig.default || componentsConfig);
    });
  },
};

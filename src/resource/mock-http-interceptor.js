import Vue from 'vue';
import VueResource from 'vue-resource';
import _ from 'lodash';
import routes from '../../test/unit/mock/routes';

Vue.use(VueResource);

Vue.http.interceptors.unshift((request, next) => {
  const route = _.find(routes, (item) => {
    if (_.has(item, 'params') && _.has(request, 'params')) {
      return (request.method === item.method
        && request.url === item.url
        && _.isEqual(request.params, item.params));
    }
    return (request.method === item.method && request.url === item.url);
  });
  if (!route) {
    next(request.respondWith({ status: 404, statusText: 'API route not found' }));
  } else {
    next(
      request.respondWith(
        route.response,
        { status: 200 },
      ),
    );
  }
});


import Vue from 'vue';
import Resource from 'vue-resource';
import store from '@/store';
import { Notification } from 'element-ui';
import i18n from '@/i18n';
// import './mock-http-interceptor'

Vue.use(Resource);

export default {
  set(path, params) {
    this.resource = Vue.resource(`http://localhost:8080/todo-web/todo/${path}`, params);
  },
  handleStatus(error) {
    let errorMessage = '';
    switch (error.status) {
      case 401:
        store.dispatch('logout', error.body.errorLabel);
        break;
      case 400:
        Notification.error({
          title: i18n.t('Error!'),
          message: i18n.t((error.body.ccapiError) ?
            error.body.ccapiError.errorLabel : error.body.errorLabel),
        });
        break;
      default:
        if (error.body.ccapiError) {
          errorMessage = error.body.ccapiError.errorLabel;
        } else if (error.body.errorLabel) {
          errorMessage = error.body.errorLabel;
        } else {
          errorMessage = error.body.message;
        }
        Notification.error({
          title: i18n.t('Error!'),
          message: errorMessage,
        });
        break;
    }
  },
  get(params) {
    const vm = this;
    return new Promise((resolve, reject) => {
      function success(response) {
        resolve(response);
      }

      function failure(err) {
        reject(err);
        vm.handleStatus(err);
      }

      this.resource.get(params)
        .then(success)
        .catch(failure);
    });
  },
  save(params, data) {
    const vm = this;
    return new Promise((resolve, reject) => {
      function success(response) {
        resolve(response);
      }

      function failure(err) {
        reject(err);
        vm.handleStatus(err);
      }

      this.resource.save(params, data)
        .then(success)
        .catch(failure);
    });
  },
  query(params) {
    const vm = this;
    return new Promise((resolve, reject) => {
      function success(response) {
        resolve(response);
      }

      function failure(err) {
        reject(err);
        vm.handleStatus(err);
      }

      this.resource.query(params)
        .then(success)
        .catch(failure);
    });
  },
  update(params, data) {
    const vm = this;
    return new Promise((resolve, reject) => {
      function success(response) {
        resolve(response);
      }

      function failure(err) {
        reject(err);
        vm.handleStatus(err);
      }

      this.resource.update(params, data)
        .then(success)
        .catch(failure);
    });
  },
  delete(params) {
    const vm = this;
    return new Promise((resolve, reject) => {
      function success(response) {
        resolve(response);
      }

      function failure(err) {
        reject(err);
        vm.handleStatus(err);
      }

      this.resource.delete(params)
        .then(success)
        .catch(failure);
    });
  },
  patch(params, data) {
    const vm = this;

    return new Promise((resolve, reject) => {
      function success(response) {
        resolve(response);
      }

      function failure(err) {
        reject(err);
        vm.handleStatus(err);
      }

      this.resource.patch(params, data)
        .then(success)
        .catch(failure);
    });
  },
};

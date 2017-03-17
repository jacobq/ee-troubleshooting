import Ember from 'ember';
const packageJSON = JSON.stringify(require('../package.json'), null, '  ');

export default Ember.Controller.extend({
  packageJSON
});

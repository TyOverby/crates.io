import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.find('crate', params.crate_id).catch(e => {
            if (e.errors.any(e => e.detail === 'Not Found')) {
                return this.controllerFor('application').set('flashError', `Crate '${params.crate_id}' does not exist`);
            }
        });
    }
});

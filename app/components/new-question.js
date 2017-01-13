import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clear() {
      this.set('author', "");
      this.set('text', "");
      this.set('notes', "");
    },
    save() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        notes: this.get('notes')
      };
      this.sendAction('save', params);
      this.set('author', "");
      this.set('text', "");
      this.set('notes', "");
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionForm() {
      this.set('newQuestionForm', true);
    },
    save() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        notes: this.get('notes')
      };
      this.set('newQuestionForm', false);
      this.sendAction('save', params);
    }
  }
});

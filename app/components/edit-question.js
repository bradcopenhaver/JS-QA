import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    cancel() {
      this.set('editQuestionForm', false);
      this.set('author', "");
      this.set('text', "");
      this.set('notes', "");
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        sources: this.get('notes')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});

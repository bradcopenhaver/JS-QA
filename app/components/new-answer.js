import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    newAnswerForm() {
      this.set('newAnswerForm', true);
    },
    saveAnswer(question) {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        sources: this.get('sources'),
        question: this.get('question')
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});

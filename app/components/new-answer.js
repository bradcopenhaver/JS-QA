import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clear() {
      this.set('author', "");
      this.set('text', "");
      this.set('sources', "");
    },
    saveAnswer(question) {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        sources: this.get('sources'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('author', "");
      this.set('text', "");
      this.set('sources', "");
    }
  }
});

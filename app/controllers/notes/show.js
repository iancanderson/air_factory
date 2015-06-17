import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      const note = this.get("model");
      note.destroyRecord().then(() => {
        this.transitionToRoute("notes");
      });
    }
  }
});

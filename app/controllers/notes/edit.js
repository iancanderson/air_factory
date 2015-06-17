import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    update: function() {
      const note = this.get("model");
      note.save().then(() => {
        this.transitionToRoute("notes.show", note);
      });
    }
  }
});

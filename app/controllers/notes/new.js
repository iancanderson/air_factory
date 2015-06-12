import Ember from "ember";

export default Ember.Controller.extend({
  body: "",
  title: "",

  actions: {
    create: function() {
      const note = this.get("store").createRecord(
        "note",
        this.getProperties("body", "title")
      );
      note.save().then(() => {
        this.setProperties({ body: "", title: "" });
        this.transitionToRoute("notes.show", note);
      });
    }
  }
});

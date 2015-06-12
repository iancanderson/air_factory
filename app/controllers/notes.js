import Ember from "ember";

export default Ember.Controller.extend({
  count: function() {
    return this.get("model.length");
  }.property("model.[]"),
});

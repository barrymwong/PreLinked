/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function(){
  },

  render: function() {

    this.$el.html(this.template(
      {jobCount: this.collection.length}
    ));
    this.$el.find('.jobResults').empty();
    this.$el.find('.jobResults').html(
      this.collection.map(function(item){
        return new PreLinked.Views.SearchResultsItemView({
          model: item
        }).render().el;
      })
    );
    return this;
  }
});

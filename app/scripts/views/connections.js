/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  initialize: function(){
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    console.log('connection.js -render-');
    this.$el.html(this.template(
      {number_of_connections: this.collection.length}
    ));

    this.$el.find('#connection-results').empty();
    this.$el.find('#connection-results').append(
      this.collection.map(function(item) {
        return new PreLinked.Views.ConnectionsitemView({
          model: item
        }).render().el;
      })
    );
    return this;
  }

});
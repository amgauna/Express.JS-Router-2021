define(["util"], function (util) {
          return {
          date: function(){
                      var date = new Date();
          return util.format(date);
            }
      };
});

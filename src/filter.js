export default  {
    methods : {
      toLowerCase : function(text) {
        return text.toLowerCase()
      },
      toUpperCase : function(text) {
        return text.toUpperCase()
      },
      codify: function(text){
        const chars = { "a" : "u", "e" : "o", "o" : "e","u" : "a"  } 
        return text.replace(/[aeou]/g,function(c) { return chars[c]; });     
      }
    }
}

const myApp = new Vue({
  el: "#root",
  data: {

    dischi: [],
    selected: "",
  },

  computed:{
    filteredByGenre: function() {
      searchInput = this.selected;
      return this.dischi.filter(function(element){
        return element.genre.toLowerCase().includes(searchInput.toLowerCase())
      });

    },
  },

  mounted: function(){

    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((result)=> {

       console.log(result.data.response)
       this.dischi = result.data.response

        });
  },
})

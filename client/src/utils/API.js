import axios from "axios";

export default {
    searchBooks: function(query) {
      return axios.get("/api/search/" + query);
    },

    getSaved: function() {
      return axios.get("/api/books");
    },

    saveBook: function(data) {
      return axios.post("api/books", data);
    },

    removeBook: function(id) {
      return axios.delete("/api/books/" + id);
    }
  };
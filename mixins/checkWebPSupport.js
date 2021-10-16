export default {
  data() {
    return {
      supportsWebP: true
    };
  },

  mounted() {
    this.checkWebPSupport();
  },
  methods: {
    checkWebPSupport() {
      return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function() {
          console.log("SUPPORTS WEBP");
        };
        img.onerror = function() {
          this.supportsWebP = false;
          console.log("Your browser doesn't support WebP images.");
        };
        img.src = "http://www.gstatic.com/webp/gallery/1.webp";
      });
    }
  }
};

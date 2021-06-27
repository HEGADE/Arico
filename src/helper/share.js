export const share = async (e) => {
 
    if (navigator.canShare) {
      navigator
        .share({
          files: [],
          text: "Article",
          title: e.currentTarget.title,
          url: e.currentTarget.id,
        })
        .then(() => {
          console.log("pass");
        })
        .catch((e) => {
          alert("sharing capability  is not supported by this browser");
        });
    }
    else alert("Sorry sharing capability  is not supported by this browser!")
  
};

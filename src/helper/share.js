export const share = async (e) => {
   if (navigator.canShare) {
      navigator
         .share({
            files: [],
            text: 'Article',
            title: e.currentTarget.title,
            url: e.currentTarget.id,
         })
         .then(() => {
            console.log('pass');
         })
         .catch((e) => {
            alert('sharing capability  is not supported by this browser');
         });
   } else alert('Sorry sharing capability  is not supported by this browser!');
};

export const readMoreShare = (...args) => {
   const [heading, id] = args;

   if (navigator.canShare) {
      navigator
         .share({
            files: [],
            text: 'Read the coolest articles on the earth',
            title: heading,
            url: id,
         })
         .then(() => {
            console.log('pass');
         })
         .catch((e) => {
            alert('sharing capability  is not supported by this browser');
         });
   } else alert('Sorry sharing capability  is not supported by this browser!');
};

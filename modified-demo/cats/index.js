module.exports = async function (context, req) {
    // Write a message to the log
    context.log('Returning a list of cats');
  
    context.res = {
      // status: 200, /* Defaults to 200 */
      // body is the payload of what we return
      body: {
        // add a property called dogs with our array
        cats: [
          'Toby',
          'Sadie',
          'Pixel'
        ]
      },
      // flag the content type as JSON
      header: {
        'Content-Type': 'application/json'
      }
    };
  }
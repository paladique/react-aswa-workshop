// parameters:
//   context - access our function, including logging messages
//             and the response (res)
//   req - the request object (we won't use it here)
module.exports = async function (context, req) {
  // Write a message to the log
  context.log('Returning a list of Cats');

  context.res = {
    // status: 200, /* Defaults to 200 */
    // body is the payload of what we return
    body: {
      // add a property called Cats with our array
      cats: [
        'Toby',
        'Simba',
        'Spooky',
        'Mac',
        'Whiskers'
      ]
    },
    // flag the content type as JSON
    header: {
      'Content-Type': 'application/json'
    }
  };
}
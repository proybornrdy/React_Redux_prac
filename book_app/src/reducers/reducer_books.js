//reducer is a function that returns a piece of the application state
/*
{
books: [{title:'harrypotter'},{title:'javascript'}],  //books reducer
activeBook: {title:'javascript:theGood parts'}        //ActiveBook Reducer
}
*/

export default function (){
  return[
    {title: 'Javascript: The Good Parts', pages: 101},
    {title: 'Harry Potter', pages: 39},
    {title: 'The Dark Tower', pages: 85},
    {title: 'Eloquent Ruby',pages: 1}
  ]
}

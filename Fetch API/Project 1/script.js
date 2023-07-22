fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    // console.log(data)
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;
    let data1 = "";
    completedata.map((values)=>{
        data1+= `<table>
        <tr>
          <th>Title : ${values.title} </th>
        </tr>
        <tr>
          <th>Status : ${values.completed} </th>
        </tr>
      </table>`
    });
    document.getElementById("cards").innerHTML = data1;

}).catch((err)=>{
    console.log(err)
})
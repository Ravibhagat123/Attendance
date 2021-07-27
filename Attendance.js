var table=document.getElementById("myTable");
var students =[
    {
        name:"Ravi",
        id:1
    },
    {
        name:"Abhijeet",
        id:2
    },
    {
        name:"Parnav",
        id:3
    },
    {
        name:"Nakul",
        id:4
    },
    {
        name:"Deepak",
        id:5
    },
    {
        name:"Shubham",
        id:6
    },
    {
        name:"Preet",
        id:7
    },
    {
        name:"Ajay",
        id:8
    },
    {
        name:"Sarang",
        id:9
    }
]
let trTag=`<tr>
<th>Students Name</th>
<th>Start of the day</th>
<th>End of the day</th>
</tr>
`
for(var i=0;i<students.length;i++)
{
   trTag+=`<tr>
         <td>${students[i].name} </td>
         <td> <input type="checkbox" class="start" onclick="check()"> </td>
         <td>  <input type="checkbox" class="end" onclick="check()"></td>
         
     </tr>`       
}
table.innerHTML=trTag;
// var str=null;
function check()
{
    let body="";
    let s ="";
    for(var i=0;i<students.length;i++)
    {
       var str=document.getElementsByClassName("start")[i];
       var end=document.getElementsByClassName("end")[i];
       if(str.checked && end.checked)
       {
           s+=i+1+":"+ students[i].name+" ";
       }
       else{
           body+= i+1+":"+ students[i].name+" ";
       }
    }
   console.log(s);
    //  var di=document.getElementById("d")
    //  di.innerHTML=s;
     let mail=document.getElementById("mail");
     body="These guys not attended today class "+body;
     mail.href=`mailto:ravib5294@gmail.com?subject=React-jsTrainingAttendance ${s}&body=${body}`;
    
}


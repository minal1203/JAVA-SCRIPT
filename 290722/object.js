var student =[
    
    {
        name : 'Minal Dongare',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '23',
         date:'22/07/2022'
    },
    {
        name : 'Shubham Kambale',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '29',
         date:'22/07/2022'
    },
    {
        name : 'preeti kamkhe',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '25',
         date:'22/07/2022'
    },
    {
        name : 'Sonam Shende',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '23',
         date:'20/07/2022'
    },
    {
        name: 'Sakshi Shende',
        Institute :'Full Stack Training',
        'fees':'paid',
         age: '29',
         date:'19/07/2022'
    },
    {
        name : 'Sonam Shende',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '23',
         date:'22/07/2022'
    },
    {
        name : 'kirti kamble',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '29',
         date:'22/07/2022'
    },
    {
        name : 'Rupali Shende',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '26',
         date:'20/07/2022'
    },
    {
        name: 'Samita kale',
        Institute :'Full Stack Training',
        fees:'paid',
         age: '21',
         date:'22/07/2022'
    }
]
var eachstudent='';
for( var i=0; i<student.length;i++){
    eachstudent+='<tr><td>'+student[i].name+'</td><td>'+student[i].Institute+'</td><td>'+student[i].fees+'</td><td>'+student[i].age+'</td><td>'+student[i].date+'</td><tr>'
}
document.getElementById('tdata').innerHTML =eachstudent;
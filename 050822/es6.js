
$(document).ready(function(){
    $('#filterval').focus(function(){
        $(this).css({'width':'350px'})
    }
    )
    $('#filterval').blur(function(){
        $(this).css({'width':'auto'})
    }
    )
})
let username=[
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
        Institute :'MBBS',
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
        Institute :'MBBS',
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
        Institute :'MBBS',
        fees:'paid',
         age: '21',
         date:'22/07/2022'
    },
    {
        name: 'Diksha puri',
        Institute :'GANM',
        fees:'paid',
         age: '25',
         date:'22/07/2022'
    },
    {
        name: 'Rani kale',
        Institute :'GANM',
        fees:'paid',
         age: '34',
         date:'22/07/2022'
    }
];
let user ='';
 username.map((value)=>{
    user +='<tr><td>'+value.name+'</td><td>'+value. Institute+'</td><td>'+value.fees+'</td><td>'+value.age+'</td></tr>'

 })
 document.getElementById('user888').innerHTML=user;

const filter = ()=> {
    
    let filterval =document.getElementById('filterval').value;
    let user='';
    username.map((value)=>{

        if( value.age> filterval){
            user +='<tr><td>'+value.name+'</td><td>'+value. Institute+'</td><td>'+value.fees+'</td><td>'+value.age+'</td></tr>'


        }

        document.getElementById('user888').innerHTML=user;


        if ( value.Institute == filterval){
            user +='<tr><td>'+value.name+'</td><td>'+value. Institute+'</td><td>'+value.fees+'</td><td>'+value.age+'</td></tr>'


        }

        document.getElementById('user888').innerHTML=user;
    })

       
    
}
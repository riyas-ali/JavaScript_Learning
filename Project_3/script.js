let data = [
    {
        name: 'Shareef',
        age: '30' 
    },
    {
        name: 'Faisal',
        age: '40' 
    },
    {
        name: 'Uwais',
        age: '25' 
    },
    {
        name: 'Ashique',
        age: '28' 
    },
    {
        name: 'Shameem',
        age: '26' 
    },
    {
        name: 'Mansoor',
        age: '32' 
    },
]

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
})
info.innerHTML = details.join('\n')
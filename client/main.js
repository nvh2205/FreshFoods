

var users="http://localhost:8000/api/v1/users"

function get(){
    fetch(users)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data)
    })

}

get();

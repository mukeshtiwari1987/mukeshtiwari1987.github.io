let users = [
  'Goku Nath',
  'Naruto Lop',
  'Ichigo POl',
  'Flash Barney',
  'Batman Bruce',
  'Sherlock Holmes',
  'Khaleesi Targereyn',
  'Steve Fox',
  'Goku Pal',
  'Naruto Pol',
  'Ichigo Iuy',
  'Flash Allen',
  'Batman Wayne',
  'Sherlock Holmes',
  'Khaleesi Daenrys',
  'Steve Fox Bud'
];

ul = document.getElementById("users-list");

let render_lists = function(lists){
  let li = "";
  for(index in lists){
    li += "<li>" + lists[index] + "</li>";
  }
  ul.innerHTML = li;
}

render_lists(users);

// lets filters it
input = document.getElementById('filter_users');

let filterUsers = function(event){
  keyword = input.value.toLowerCase();
  filtered_users = users.filter(function(user){
        user = user.toLowerCase();
       return user.indexOf(keyword) > -1; 
  });
  
  render_lists(filtered_users);
}

input.addEventListener('keyup', filterUsers);


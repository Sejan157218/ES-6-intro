const friends = document.getElementById('friends');
const friendd = document.getElementsByClassName('friend');
function addBackground(){
    for (let friend of friendd){
        friend.style.backgroundColor = 'green';
    }
}

document.getElementById('add-border').addEventListener('click',function(){
    friends.style.border = '2px solid blue';
})
document.getElementById('add-friend').addEventListener('click',function(){
    const createFriend = document.createElement('div');
    createFriend.classList.add('friend');
    createFriend.innerHTML = `<h1>new-friend</h1>
    <p>Temporibus, fugiat. Quaerat, maiores nobis.</p>`;
    friends.appendChild(createFriend);
})
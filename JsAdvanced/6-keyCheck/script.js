const div = document.querySelector('#keyCheck');
window.addEventListener("keydown",(event)=>{
    div.innerHTML=
    `<table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${event.key ===" "? "Space" : event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
    </table>`
})
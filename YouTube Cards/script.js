var counter = 0
function createcard(cname, views, duration, age, thumbnail, title) {
    counter++;
    {
        if (views < 1000) {
             views=views
        } else if (views >= 1000 && views < 10000) {
            views=(views / 1000).toFixed(1) + 'K';
        } else if (views >= 10000 && views < 1000000) {
             views=Math.floor(views / 1000) + 'K';
        } else if (views >= 1000000 && views < 10000000) {
             views=(views / 1000000).toFixed(1) + 'M';
        } else if (views >= 10000000 && views < 1000000000) {
             Math.floor(views / 1000000) + 'M';
        } else {
             views=(views / 1000000000).toFixed(1) + 'B';
        }
    }
    document.querySelector(".container").innerHTML +=`
    <div class="card">
            <div class="x number">${counter}</div>
            <div class="x thumbnail">
                <img src=${thumbnail} alt="" width="160px" style="border-radius: 10px;">
                <div class="duration">
                    ${duration}
                </div>
            </div>
            <div class="videoinfo">
                <div class="title">${title}</div>
                <div class="extra">
                    <p class="channel">${cname} •</p>
                    <p class="views">${views}</p>
                    <p class="age">• ${age} months ago</p>
                </div>
            </div>
        </div> `;

}
createcard("Ryan Holiday","3789","30:00",11,"https://i.ytimg.com/vi/Xg65f5qp6oQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRx6yACt2dxpCtKP7-Aw3oKS0ClA","What is Marcus Aurelius' \"Meditations\" ? | Ryan Holiday| Stoic Thoughts #3 ")



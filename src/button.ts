console.log('Hello world!v2')
const redirectBtnClass = 'ShowAsYTVideo';

// register script

// const actionsMenu = document.getElementById('actions') as HTMLDivElement;
// let openAsVideoBtn = document.createElement('div');
// openAsVideoBtn.textContent = "OpenONyoutube";

// menus[0].parentNode.querySelector('#thumbnail-container').href
// 'https://www.youtube.com/source/2hyzCsFwl6Y/shorts?bp=8gU1CikSJwoLMmh5ekNzRndsNlkSCzJoeXpDc0Z3bDZZGgsyaHl6Q3NGd2w2WSjxhPaX8ISXwgU%253D'

// actionsMenu.insertBefore(openAsVideoBtn, actionsMenu.firstChild)

const getMenus = () => {
    const actionMenus = document.querySelectorAll('actions') as NodeList;
    if (!document.querySelector(`.${redirectBtnClass}`)) {
        return null;
    }
    return actionMenus;
}

const createRedirectBtn = (e) => {
    let url = e?.detail?.url;

    if (!url) {
        console.log("No videoID found: url");
        return;
    }
    console.log(url);
    return url;

    // console.log(e);
}



document.addEventListener('yt-navigate-start', createRedirectBtn);
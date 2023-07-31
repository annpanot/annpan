windows.onload = function() {
    guess();
    document.getElementById("bar").getElementsByTagName("button")[0].onclick = function() {
        guess();
    };

    function guess() {
        let chooses = ['shitou', 'jiandao', 'bu'];

        let you = parseInt(Math.random() * 3);
        let me = parseInt(Math.random() * 3);
   
        let choosesElements = document.getElementsByClassName("choose");
        choosesElements[0].getElementsByClassName("img")[0].src = "../img/" + chooses[you] + ".jpg";
        choosesElements[1].getElementsByClassName("img")[0].src = "../img/" + chooses[me] + ".jpg";

        let winner;
        if (chooses[you] == 'shitou') {
            if (chooses[me] == 'shitou') {
                winner = 'both';
            } else if (chooses[me] == 'jiandao') {
                winner = 'you';
            } else {
                winner = 'me';
            }
        } else if (chooses[you] == 'jiandao') {
            if (chooses[me] == 'shitou') {
                winner = 'me';
            } else if (chooses[me] == 'jiandao') {
                winner = 'both';
            } else {
                winner = 'you';
            }
        } else {
            if (chooses[me] == 'shitou') {
                winner = 'you';
            } else if (chooses[me] == 'jiandao') {
                winner = 'me';
            } else {
                winner = 'both';
            }
        }
        let winElements = document.getElementsByClassName("win");

        if (winner == 'you') {
           winElements[0].getElementsByClassName("img")[0].style.display = "inline";
           winElements[1].getElementsByClassName("img")[0].style.display = "none";
        } else if (winner == 'me') {
           winElements[1].getElementsByClassName("img")[0].style.display = "inline";
           winElements[0].getElementsByClassName("img")[0].style.display = "none";
        } else {
            guess();
        }
            console.log('you:' + chooses[you] +", me:" + chooses[me] + ", winner:" + winner);

    }
}
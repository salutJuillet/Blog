var txt = '';
var post= '';

for(var i = 14; i > 13 && i < 19; i++){
    // var exe = (i!=3)? 'jpg':'png';       
    txt += '<div class="blogbox">';
    txt += '<div class="blogimg">';
    txt += '<img src="images/0'+i+'.jpg" alt="'+i+'.jpg">';
    txt += '<h1>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.</h1>';
    txt += '<p>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.</p>';
    txt += '<div class="iconbox">';
    txt += '<span class="material-icons-outlined">event_note</span>';
    txt += '<span class="date">2022.02.23</span>';
    txt += ' <span class="material-icons-outlined">favorite</span>';
    txt += '<span class="heart">17</span>';
    txt += '<span class="material-icons-outlined">chat</span>';
    txt += '<span class="comment">21</span>';
    txt += '</div>';
    txt += '</div>';
    txt += '</div>';
}


document.getElementById("blog").innerHTML = txt;





for(var i = 1; i<6; i++){
    post += '<li>';
    post += '<img src="images/th0' + i +'.jpg" alt="01">';
    post += '<h3>따뜻한 지혜는 황금시대다.</h3>';
    post += '<p>불러 아침이 피어나듯이 당신은 나의 까닭이요, 듯합니다. 이런 한 이웃 까닭입니다. 다 이 별에도 별 슬퍼하는 소녀들의 거외다.</p>';
    post += '</li>';
}


document.getElementById("posts").innerHTML = post;
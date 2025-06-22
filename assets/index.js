console.log(`%c %c\nKivotos Network`,
    ` padding: 35px 200px;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAO4ElEQVR4nO2df4wdVRXHPzNsNk3TrJt1raQptWnQYF/lx85SSSmGIPgDRBBFQUUYaikpAqIQ0hjSNA2iImBBIIgy/kSCiIhYTAP+IPh7p8Gys2JjammQbEhtmtpsmmZ9zz/OfdvX7dvd986deTOzez/JS7a7vXfum/nO/XHOueeCw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+GYi3h5N6BIDEYvU8PvArqAbvPpMn/2gar5uWo+h81n3KM6PhS+q8MtLi5zUlhBtAM4rg9YASwFlgAnAIuB44FeYAEwjyPiahTWOCKoMfPZC7wBvAa8CuwxnxGP6r65KLhZL6wgSnxEKKcCq4B3A8sRAc3P8NJVRHSjwCvAn4EXgR3A/jisVKcpW3pmpbCCKFmACOlCYLX5OUsRtcNB4CVEZL8EXorDysF8m5Q+s0JYQTQMeAuA9wGXAucA/cjwVWSqyDD6a+AnwDaoHYzDFfm2KgVKLawgSuYhPdIaRFR9+bbImn3ANuA7wItxWDmUc3vUlFJYQZQsAq4CrgDeQfF7pnapAjuBHwDfjcPK6zm3p21KI6zBKPFrsoq7EfgY0JNzkzrFAeAJYAswXJZJf+GFNRiNUKN2BrAB+ACy/J+LjANbga96eH8YCpfn3Z5pKaywgigBGAS+BJzP3BXUZA4jArsdGIrDSs7NaU7hhDUYDVPDWwJsBD7DEcu342jGge8Dmzxqe4YKtpIslLCCKOkGPg/cgpgLHDOzF7jTg28MhZXDeTemTiGENRCN4FFbDdwPnJx3e0rKMHBdDV7YXoDhMfdlehAlPR61e4DncaKyYQXwvAdbgijpzbsxufVYA1GCByuBh3GCSpthYG0N/pRX75WLsBrmUhvJ34dXRSzeexGH8S4kQmGf+RzkSDQDHAmpmY9Y+vuAtwHLEMf2QvO7vEeDMWAzcHecw9yr48IKoqQPcVl8mHxu/iFgCPgT8DfEIfwacBBq41o/nVnNdiHhNouAAeAUpFdeiYTgdJoq8AwQxmFlXycv3DFhmQn6IPAjxA3TKQ4DI4gP7llEVAd94K8ZDxMm7gtEbAPABYhP8yQ6K7SdwBU1vL9s75BhtSPCMqK6GIiQ2KisqSJxTz9GjIkjRXGFDESJ70k82PnAJ5D5ZSdsdfuBNTV4shPzrsyFZQLt1gN3kv1bOgo8BTyE+NXG06o4iJL5cVgZS6s+U2cXIrJ1wMXIEJolhxDX2L1Zv2iZCsvcuNuBL5DdW1mPBLgPeCyruUQQJcuRni+L6jEmgsuA65GhMqv5ZxW4G9iQ5os3mcyEZUR1D/C5rK6BhPxuAp7KOnYpiJKza7B9e1g5kPF15iELm41Ib5YVDwA3ZiWuTN4KY054mOxEtROJxTolDiuPdSggbpHXATdTHFYOxWHlcWRFeTny8mTBeiAyQk6d1IVleqr7kUC8tDmARDucHoeVH3bYPtNPByNU47AyHoeVx5DNHxuQ7542nwYeNM8sVVIVlmngFuCzadaLzAueRt7iL8cZD0dT8GbEANpR5Lt6XwHeBTzJkS1oaXEVcH/a4kpNWGb1txnpYtPkDWTY+0gcVnbnGH/US/artqbE4XLisLIH2ShyObL6TZNrgNuDaDg1PaRSkQnKuxa4OY36GtiGDAWPFsAO1UvOoTxyD2qPI/dkK+n2XjeDt948S2ushWUa8mHgLtIzKYwh84oLcu6lGulDhsNcicMVxGFljwcXAbci9yoNfMTWeEka4kqjx1qBWNTTWl2MAh8F7ytZ2lkU9FKg7WVDcm++jggsrV088xA/rnW0iZWwgijpR9wmad3wHcBZPvwqLt5mgdyHwsnEYQUfngPOBLanVG0v8OMgShbaVKI2kJpVxI+Aj9s0oIFtwBVxWHkjpfpSI4iGu8D7F7AnDitn5t2eZpiX/HuIDzINngQ+oR01VD2WGYPXk56ongAuKqKoBK8HE391avRy3o1pShxW9gIfBR5LqcpLgBsGoxFVYe1QOICYFtLgu0hPVeTt5PWURj3H4ecRV9US5h6GwLdSqnJTTUKd2qZtYZlMLg+Rzk7kHwLrCi4qkN5qHiKw3OPJp8Pcy+uBR1KobgHwcBAlbT9rTY91G7KR1JbHgTV5hM0q6EHuVV1chcbc03XAoylUdyri6G+LtoQVRMkAEqtuy68pj6jgSC/VTQmEBeJrBNYCv0qhuvVBlLTVmbQsLOMFvx/7re4jyGqjTMnG+qb4udCYwMRPIWYcG7oRf2LL88uWhCWJzbgaOEPXrglGgUvNCqZMNM6rSiMsABP4eCmyYcSGlcA1rVrlW+yxvH4k8MyGw8Ba+J9u/ZovjcIqlJG0FeKwshNJTmc79biNFr//jMIKxI6xEdkvZ8OmOKw8E4el3Jv6loafS9Vj1YnDyjZEGDb0A5ta6bVa6LFqy5Fh0IbfInHWZaUxDuutubXCnnsRD4cNVyH+4WmZVlgmxmoDdruV9wJrS2CrasqAzC8bu//FpxXU+j4T5hmsQ2LctMwHNhhtTMlMPdYKJC2jDbfGYeWflnXkhodXzxNfp8/Hz3v7vJo4rOwGvmhZzSXMEAEx5Q0y4+gt2IXDbEOSg5UZn6O9DL3kn5fBlkeRQEEt84Bbp/MjTneDlmHnZD5AhtuLOkgXs0xYJhr3JmR3tJZLatROnOqP092g67Azhj5AdluXOonP0db2XmZH+sqdwDctyncjPsmmNBWWCfL6tMVFXwPuKEhIsS2T/YM9zIJEu+bZ3AHstqjmkybn/jFM9eZ9DDu71e05bdFSYzbZPsuxBsBujn4BfeD3QZRMHuL3Ae8vkf+TOKyMBVGyGQlH1tCPTOSP6fmO6bHMMnKt8kIA/0TCYcrGicjxKSdP+pzU5P8ub/L/VtHZ9Exp8Tjiv9WytpnpodlQOIg+mL6KDIFlcjDXOQO7Ia4be19qxzHP6qvot5KdjPgRj6KZsK6c4vet8DryBpQKY1o5L4WqzhtQhvLmzBPIwZ1arpz8i6MEZKJDbYLx7ytpb9VNOsGLAx61woYuT4UJr9liUcX5RjsTTO6ZViLH2GrYT3mNocvQf+9Glpq6ysijyAJEw2ImTQMmhHV69HeQuB3tMLiV9HMKdIrVpGNC6DJ1lY6a+A+fVhb3gUtPa5gGTIioSrUbOFdZcRV4qMR2q/cWtK6OYfKSPoykHtdwrt8wDWjsnU5EunINu4C/KMvmQn2SbZbK70mx6tUD0YjfeI0SMYRY5DUspcHc0iis89G7Kp4oW1iMR+09QZTciXxv2yDGRhZ61M4JouRmj9o1KdabOca4+6SyuI+cJznxjzpnWbTpZxZl86IXSbv0M9L1/XUBv0Ayt7w9xXo7xU/R27QmNOTDxA6cVcrK9njShZaVLBzKpTM51PHwd6D3H66q7+Sp91jvQL/Dd9tQ/knRHCkxFL6zin4vYg/GBVYX1ir0b+6zynKO4qJ9phPmlrqwTldWVD/wyDG7eAl9psAAwJeDhJp68Fthp5deNrnZSFmnCKPoIx5OOj1K8OG4BejtV9uHyh96nCWlFJYJJ9dmCFxahZ4uJMW0Nn95OfdBdQ4/iBLNWYWvFCAJnfbZLgQWdSHOV41/sIqbX83EPMQutLjNcleSv0N/CHnG7WrDB5b46L36h5FoUcfsZBeyONOwxKf9t6nOQWSXs2N2sg/9+T0n+MAJysKjZdo44GgPM4HXhkEt9tGfD7NLWc5RHrRTnUU+es++bSKvuUDZTTFaG+XCLvT5njI5Irddgig5CTlTpl2cqWRm/qMs1zc5L0EnLpo2x6M7dPNrKbdjNqLtPBbUU0xrSPVEd0ch0Zob5vvoNxGUff7gmBmtsLp89LtynKlh9qPtPMqbmc5RbHz0qix9Kp8OUMrohgbUYds++iGttHHdjpbRPuPDPvoJWinOlHFYoX3Gh3zEmazhTcpyjvKgtXEe8NEbwdLc5OkoJtrDEvb76JPJL1WWc5QHbazeXh/95sQlrZ4ENYcp7aowkNM3liqL7/aBfysLL8TuKJS5QGmFhZx9rQ2pet1HH/4yH/0mDEfxsek4XvXR557sppxZgh2tsQy9HWtPfY6ltb6nkbfTUUyOyYTcIuPArvqqUBspeIqynKP4nKYsNwqM+uCNoY9fP7mdA6gd5cCc0qHN9b8bamN+HC4HGFZWsozyZgnuBGVdFS5BUodqGI7DFROxWH9UVtKFfiyeC5RVWCvRR6/8GY4E+Q2hn8BfqCznKC4XKMuNY9Iu1IW1C/3mxLPNmOyYBQRR0oU+LfteTNZlHyZ2vf5WWVkf8D5lWUfxOBt9gMEL9d3xjaHJv7NozEUWZR3F4iMWZSc01Cis59BHk34oiBJtclxHQQiipAe4WFl8HDlcHjhaWK+hTw94PG44bEbZVoXnoHc8j9AQKTMhLDPPesaiUWGzkzbnOP/LuwGtYp7dGosqtsYNaUMnC+Hn6M0O56BPkuvInxPRrwbHEe1MMFlYO9APh93YnSXtyJc16KMZdiIpvCc4SlhmqfiUsnKAq4IocbHwJSOIkj7gaosqnp58SFezOdH30A+HvcD1Z0f/UhZ35MS1QL+y7Djwncm/bCas3cALyosAXPtfxlxkaUkIoqQfuN6iij/QJDrmGGHFcuDSg+iXyv3ATcqys40ymBtuxC7E/MG4ySFdU5kHtmKXant9ECVLLcrPFgotrCBKFgM3WFSxC9HKMTQVVhxWxpDzgbUsADYPOrtWYTF2q83odzsDRHFYaZqye7oH/wh2eUYvq4lty1FMVgOftCi/H/jWVH+cUlhxWNkHfNviwl3APS50uXgE0XA3sAW7VFSPTHfez0xD1T3YnT6xAhkSLapwpEkQjQDeRuBUi2r2AXdN9x9mSqw1CnwKuzwNh2pi0S3VKfezl1o38A9gnUUlezy8aXd2TSusOKxAQyiEo20Ktyo03pXMTxZzq7ZsKZywOoUTliMTnLAcmeCE5cgEJyxHJjhhOTLBCStb3KrQkQlOWA5HmjhhOTLBCcuRCU5YjkxwwnJkgvo8ugKxA/igotwu4Dcpt2UyrwDbaX8j6I4M2uJwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOByZ8390rbkIUMU4+wAAAABJRU5ErkJggg==");
      background-size: contain;
      background-repeat: no-repeat;
      color: transparent;`, 
    'color: #1f90fa; font-size: 16px;margin-bottom: 10px;'
  );
  
console.log(`%c Kivotos.Net %c Version: 1.0.1 `,'background: #1f90fa; padding: 4px; border-radius: 3px 0 0 3px; color: #fff', 
  'background: #fff; padding: 4px; border-radius: 0 3px 3px 0; color: #1f90fa;',)

console.log(`Copyright HoRzTeam [i@horzteam.com], All Rights Reserved.\nComputed by MZCompute GmbH.`)

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
pageParams = GetQueryString('page') * 1;

renderPagination()
var initPage = pageParams || 1
var currentPage = initPage
var slide = new slidePage({
    slidePages: '.slide-page',
    slideContainer: '#slidePage-container',
    refresh: true,
    page: initPage,
    before: function (origin, diraction, target) {
        pagepages = document.querySelectorAll('#pagination a')
        pagepages[origin - 1].classList.remove('active')
        pagepages[target - 1].classList.add('active')
        currentPage = target
    },
    after: function (origin, diraction, target) {
    },
})
window.slide = slide

// -- 由于slidePage不提供分页组件，所以以下是当前示例的分页器逻辑
pagination.querySelectorAll('a')[initPage - 1].classList.add('active')
function renderPagination() {
    var pagination = document.querySelector('#pagination');
    var len = document.querySelectorAll('.slide-page').length;
    var paginationContent = ''
    // 渲染页码
    for (var i = 1; i <= len; i++) {
        paginationContent += '<a onclick="slide.slideTo(' + i + ')"></a>';
    }
    pagination.querySelector('.pagination-page').innerHTML = paginationContent;
}
function appendpage() {
    var len = document.querySelectorAll('.slide-page').length;
    el = document.createElement('div');
    el.innerHTML = '<div class="slide-page page6"> <h2>Page' + (len + 1) + ' - 删除Page</h2> <a href="javascript:removepage()" class="remove">删除Page' + (len + 1) + '</a> </div>'
    document.querySelector('#slidePage-container').appendChild(el.children[0])
    // 增加节点后更新页码
    renderPagination()
    pagination.querySelectorAll('a')[currentPage - 1].classList.add('active')
    slide.update()
}
function removepage() {
    var len = document.querySelectorAll('.slide-page').length;
    var page6 = document.querySelectorAll('.slide-page')[len - 1];
    document.querySelector('#slidePage-container').removeChild(page6)
    // 删除节点后更新页码
    renderPagination()
    pagination.querySelectorAll('a')[currentPage === len ? 0 : currentPage - 1].classList.add('active')
    slide.update()
}


var maudio = document.getElementById("mbgm");

function togglemusic()
{if (maudio.paused) {
    maudio.play();
    document.getElementById("nl-btn1").style=`        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/ElEQVRYhc2Yz29VRRTHP+/ySghFIApFDAY1rRAQ2BiFUIUYfjySSoiJ8S9wYTBqxYUbN7hxBbpSCRIXhgUrd7SFmEBC+FFDYgkGBcOixPiDEkBQeDX9upiZ9LzLvXPvfW0N3+Tkzb1zZs537pmZd86pSaINLAJeATYDq4BngflAJ3AXuA38DFwETgDfAdcrW5FURRqSvpXUVDU0/bjtVeyVVdwoabgioTwM+/kK7dYUd+tcYD/wJlBL9f0ADAGnvQt/A5rAbOBx7+oNwDZgXdphwJfA+8A/7bh1uaSR1KrvSzooaU0V93j9g368xYi3U8mtqyRdS000KKm7Iqm09Ph5LK55e6XILZc0agY3JfVLqk2RWJCan2/c2BiV9GQRubmSLphBdyXtmCZSaenz8weMePu55L4wyvcl7ZwhYkF2qvVa+tz229PaC5w0p7If+DR2lDOwAFiMu6QXAUuALqAH6PbPR4CPzJh+YJ85xS8Bp4AWcsPA8749BDS8chaeAfq84SVelnkS8woWcAFYa55rwADuygk8XnBU3SdspNzZU+COw2ofxzLm61HrNbNNEoln+5ZZyTfA5YLVTxT0x5DljcvebsBugAR4DNhhOj4rYaDZNrV8WLsN4NEE2AJ0+JcjXmYS/+a8t7ZnA1vqwMtGYaCkgTJx1j1gFPgF+BW4hTuZ8yNjBpk8LJvqwBrTebYkuVn+9zxwycvvwJ+4uO26aVsUkTtj2qvruPsn4FJJcnP876u4r1JlTJ5b0/a7E1pX8kdJQ8GtRXeaRTrkyoK1vzDBhdYB9yoYA7dxyyLEbTGS9hborONi/kBwDnCnhKGkWAVwm/s13N4bwrk0dpjsYu/UcclIINdFfiLyHPAIcI5y7j+Ai6ADhLu8b0TGdJn2rTpwBVjqX6wEfkwNeAL4Gtjqn68S39QAH6SIgXPnrIKxK037SoL7Iw54MaXcCXxviAE8jfuDz0MCfBjpr0f61pv2xQQXJgU0UsrvMPlVs5C1uTuI32Udkb7tpn0iAY4D4/7FWlrDmY2RiWDyMrZoEt9XefvV2m4CxxNgDDhqlN417bECcqMZ7wR8HBnzSc57a3cAuFEUz62LxGVHC2K+vSn9MUlv5OhmxnNWwWb0g5rMtt6WdFPSbSPnJS0oIIdcKvm6pF2SFubo1NSaLp4LfVapV9KEUXqvhPHpkH5jc0KmVBHLvpr6f7Ivm7+2ZF9p5ay8tW+GiFXOW9GDGf+4HpKMP8hDWysJ8pRaXSy54/6V2qsyHVLFKtNU63PHcPW5n3iwPrcCV5/bSn59bg/wd671kivv1fRWNnvL2K26Z6ZaE25UsVfk1jykq+krcIFoqKb/5V09pWr6fxe8qJOuPHXyAAAAAElFTkSuQmCC) no-repeat;
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/ElEQVRYhc2Yz29VRRTHP+/ySghFIApFDAY1rRAQ2BiFUIUYfjySSoiJ8S9wYTBqxYUbN7hxBbpSCRIXhgUrd7SFmEBC+FFDYgkGBcOixPiDEkBQeDX9upiZ9LzLvXPvfW0N3+Tkzb1zZs537pmZd86pSaINLAJeATYDq4BngflAJ3AXuA38DFwETgDfAdcrW5FURRqSvpXUVDU0/bjtVeyVVdwoabgioTwM+/kK7dYUd+tcYD/wJlBL9f0ADAGnvQt/A5rAbOBx7+oNwDZgXdphwJfA+8A/7bh1uaSR1KrvSzooaU0V93j9g368xYi3U8mtqyRdS000KKm7Iqm09Ph5LK55e6XILZc0agY3JfVLqk2RWJCan2/c2BiV9GQRubmSLphBdyXtmCZSaenz8weMePu55L4wyvcl7ZwhYkF2qvVa+tz229PaC5w0p7If+DR2lDOwAFiMu6QXAUuALqAH6PbPR4CPzJh+YJ85xS8Bp4AWcsPA8749BDS8chaeAfq84SVelnkS8woWcAFYa55rwADuygk8XnBU3SdspNzZU+COw2ofxzLm61HrNbNNEoln+5ZZyTfA5YLVTxT0x5DljcvebsBugAR4DNhhOj4rYaDZNrV8WLsN4NEE2AJ0+JcjXmYS/+a8t7ZnA1vqwMtGYaCkgTJx1j1gFPgF+BW4hTuZ8yNjBpk8LJvqwBrTebYkuVn+9zxwycvvwJ+4uO26aVsUkTtj2qvruPsn4FJJcnP876u4r1JlTJ5b0/a7E1pX8kdJQ8GtRXeaRTrkyoK1vzDBhdYB9yoYA7dxyyLEbTGS9hborONi/kBwDnCnhKGkWAVwm/s13N4bwrk0dpjsYu/UcclIINdFfiLyHPAIcI5y7j+Ai6ADhLu8b0TGdJn2rTpwBVjqX6wEfkwNeAL4Gtjqn68S39QAH6SIgXPnrIKxK037SoL7Iw54MaXcCXxviAE8jfuDz0MCfBjpr0f61pv2xQQXJgU0UsrvMPlVs5C1uTuI32Udkb7tpn0iAY4D4/7FWlrDmY2RiWDyMrZoEt9XefvV2m4CxxNgDDhqlN417bECcqMZ7wR8HBnzSc57a3cAuFEUz62LxGVHC2K+vSn9MUlv5OhmxnNWwWb0g5rMtt6WdFPSbSPnJS0oIIdcKvm6pF2SFubo1NSaLp4LfVapV9KEUXqvhPHpkH5jc0KmVBHLvpr6f7Ivm7+2ZF9p5ay8tW+GiFXOW9GDGf+4HpKMP8hDWysJ8pRaXSy54/6V2qsyHVLFKtNU63PHcPW5n3iwPrcCV5/bSn59bg/wd671kivv1fRWNnvL2K26Z6ZaE25UsVfk1jykq+krcIFoqKb/5V09pWr6fxe8qJOuPHXyAAAAAElFTkSuQmCC) no-repeat;
        -webkit-mask-size: 100%;
        mask-size: 100%;
        -webkit-mask-position: 100%;
        mask-position: center;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0);`
} else {
    maudio.pause();
    document.getElementById("nl-btn1").style=`        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVRYhbXYW4xeUxQH8N98RjXqlqhxzyBTFXpBXKMUqXbq9uIeFV4I0WBIPOEBT0KRoEjwoCFIihDGEHGpS5G0OurWeqAtopegBpkR42Gdk29/Z853m9F/8iXn22fvvf5nr7XX+u/dMTQ0ZByYijNxOo7E4dgDUzCE3/Et1uJdvI0t7RrpaJNcL67F2di5jXEjeA1L8cb/Te4UPIDj2iBUD5/hJnzQrGMzcrviflyNjsK7zzGAj4QLf8YwJmE/4eqTMR+zC2NH8Rhuxl/jIdeNVzAzaRvG03gQg42+qoCZuBFXZORzDOI8fN8OuSPFqhyYtA3geqxvg1QR0/CQWM0cm7L/XxY7V0om6BZBmxMbEcvfO0FisC6b52b8k7UdmNk7uNi5uHK7YiVmZP//xIV4fYKkynAunstsEi4+KbOJsSu3JCEGj+4gYvAqLhOeIeLyvrRDunJz8J6xu/JxEcx/t2BwT+wjkvRU7IsuEWs92f/ncXsypk8sCrGLT5WlmZTcp6p5bADLRW6bjNW4WMQMHCbc0pUZ3BcHZSR2a/IBg5iV/O9Av+om+RQnpOR6Vd03LFy7DkdnXzoNv+EqvIRnhEvGg7dwVqFtGr5QTTMLMJDH3HVJx2WqK7RarOYLwmXLVV0wXoyWtK3L7Oa4nli5vfGTaq2cjTUlEyzGvdgFm0VsjQdvqs1zOWaJqkN4b/8K5iXE1tQhRiTPufhhAsSo5rciUtuTMK8TpyUd+ptMvBLHYpWSpFnA39iA7/CjiNk+Ia3q4Q3VzTK3U23tXNnEIGwV+uxKET8dojY+ImJnS/bbbKyGa0bu4+T5qIrIPzm+boEckV7gAlEbuzPDv+J9fFVCLB9Tz61F+z0VtV/yS4vk8h23FseIvLifCPbbldfsYnIvQ2p/r4qQ1jlaqQIpJgn3LcQdGYE7Rc4sbppctzUiOZw8T+kUmj8nOBl/tECquDL/4i4Rs8tEqliF23CIcPGAcGlZnsuRar0/OsVhJCfXpf5BZAZ2xyfqu39AuPlZUSOfSt6NZh+xrQG5ruT5t4pajXZEyYADMqOD+FDsyAUNDGwSiqOIDuyk8YZI7a+vqJXbJxY6TxEHkrQWHipqYT1UcGuD950N3p2UPK+tCJmUo7fQ+Qbs32CysuDeWeNc1t3gXeqRdytCJeSCb5ZaOXNKg4kINxUxrHFc9QilU/yA1PYw3qqIjJ+q3RuT561NyG0oaRsVO7cehnCRCJej69jtx7Y8JSxNXixSjalG8qhfffIPlxDchkvFbl6d2fgI12TPiwrjGyrhXrEKi3G32ty2HmeIYt4IPRmZEbwjyhuRTx/MiBHC4ICER40SZuwZok/I9B2Jy/GE0IgUzhDpaqwQh5kc9+D8HUxuu9rU8pjkDqWVc+slypPqRNH2ufXPbNDGhOyLwsWtqIpW0JHN92JCbCPOSYmVkSOE4wJRhohlXyJ2Z09J/3YwLZtniao7N2X2xqSlMnLEpcoccVzLMV/otyfUqudWMBNPZvOlh5tBkejHXOIw8fu5N0Wu+sbY+7np4n7uLPXv525RcGU75HLMyUj+XzebfSI7NEQ9txaxAscLxfuyai1uFSPZuIXZPE2J0f6FdY7ibfp0IUTz2/TtwtUTuk3/DxwWSkf1S9ZlAAAAAElFTkSuQmCC) no-repeat;
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVRYhbXYW4xeUxQH8N98RjXqlqhxzyBTFXpBXKMUqXbq9uIeFV4I0WBIPOEBT0KRoEjwoCFIihDGEHGpS5G0OurWeqAtopegBpkR42Gdk29/Z853m9F/8iXn22fvvf5nr7XX+u/dMTQ0ZByYijNxOo7E4dgDUzCE3/Et1uJdvI0t7RrpaJNcL67F2di5jXEjeA1L8cb/Te4UPIDj2iBUD5/hJnzQrGMzcrviflyNjsK7zzGAj4QLf8YwJmE/4eqTMR+zC2NH8Rhuxl/jIdeNVzAzaRvG03gQg42+qoCZuBFXZORzDOI8fN8OuSPFqhyYtA3geqxvg1QR0/CQWM0cm7L/XxY7V0om6BZBmxMbEcvfO0FisC6b52b8k7UdmNk7uNi5uHK7YiVmZP//xIV4fYKkynAunstsEi4+KbOJsSu3JCEGj+4gYvAqLhOeIeLyvrRDunJz8J6xu/JxEcx/t2BwT+wjkvRU7IsuEWs92f/ncXsypk8sCrGLT5WlmZTcp6p5bADLRW6bjNW4WMQMHCbc0pUZ3BcHZSR2a/IBg5iV/O9Av+om+RQnpOR6Vd03LFy7DkdnXzoNv+EqvIRnhEvGg7dwVqFtGr5QTTMLMJDH3HVJx2WqK7RarOYLwmXLVV0wXoyWtK3L7Oa4nli5vfGTaq2cjTUlEyzGvdgFm0VsjQdvqs1zOWaJqkN4b/8K5iXE1tQhRiTPufhhAsSo5rciUtuTMK8TpyUd+ptMvBLHYpWSpFnA39iA7/CjiNk+Ia3q4Q3VzTK3U23tXNnEIGwV+uxKET8dojY+ImJnS/bbbKyGa0bu4+T5qIrIPzm+boEckV7gAlEbuzPDv+J9fFVCLB9Tz61F+z0VtV/yS4vk8h23FseIvLifCPbbldfsYnIvQ2p/r4qQ1jlaqQIpJgn3LcQdGYE7Rc4sbppctzUiOZw8T+kUmj8nOBl/tECquDL/4i4Rs8tEqliF23CIcPGAcGlZnsuRar0/OsVhJCfXpf5BZAZ2xyfqu39AuPlZUSOfSt6NZh+xrQG5ruT5t4pajXZEyYADMqOD+FDsyAUNDGwSiqOIDuyk8YZI7a+vqJXbJxY6TxEHkrQWHipqYT1UcGuD950N3p2UPK+tCJmUo7fQ+Qbs32CysuDeWeNc1t3gXeqRdytCJeSCb5ZaOXNKg4kINxUxrHFc9QilU/yA1PYw3qqIjJ+q3RuT561NyG0oaRsVO7cehnCRCJej69jtx7Y8JSxNXixSjalG8qhfffIPlxDchkvFbl6d2fgI12TPiwrjGyrhXrEKi3G32ty2HmeIYt4IPRmZEbwjyhuRTx/MiBHC4ICER40SZuwZok/I9B2Jy/GE0IgUzhDpaqwQh5kc9+D8HUxuu9rU8pjkDqWVc+slypPqRNH2ufXPbNDGhOyLwsWtqIpW0JHN92JCbCPOSYmVkSOE4wJRhohlXyJ2Z09J/3YwLZtniao7N2X2xqSlMnLEpcoccVzLMV/otyfUqudWMBNPZvOlh5tBkejHXOIw8fu5N0Wu+sbY+7np4n7uLPXv525RcGU75HLMyUj+XzebfSI7NEQ9txaxAscLxfuyai1uFSPZuIXZPE2J0f6FdY7ibfp0IUTz2/TtwtUTuk3/DxwWSkf1S9ZlAAAAAElFTkSuQmCC) no-repeat;
        -webkit-mask-size: 100%;
        mask-size: 100%;
        -webkit-mask-position: 100%;
        mask-position: center;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0); `
}}

maudio.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
});


async function fetchRSS() {
  try {
    const response = await fetch('https://7inet.deno.dev');
    const xml = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');
    
    const items = doc.querySelectorAll('item');
    const container = document.getElementById('rssFeed');

    items.forEach(item => {
      const title = item.querySelector('title').textContent;
      const link = item.querySelector('link').textContent;
      const desc = item.querySelector('description').textContent;

      const article = document.createElement('div');
      article.className = 'rss-article';
      article.innerHTML = `
        <h3><a href="${link}" target="_blank">${title}</a></h3>
        <p>${desc.substring(0, 100)}...</p>
      `;
      container.appendChild(article);
    });
  } catch (error) {
    console.error('RSS加载失败:', error);
  }
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', fetchRSS);



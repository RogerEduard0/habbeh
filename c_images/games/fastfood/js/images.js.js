/*
 * Colors:
 * Orange: Loading
 * Green: Loaded
 * Red: Error
 * Blue: Info
 * Black: Sound errors
 * Darkgreen: Packets
 */
var images = [fastFood.assetsPath + '/images/basejump_logo.png', fastFood.assetsPath + '/images/basejump_theme.png', fastFood.assetsPath + '/images/basejumpnwbeta.png', fastFood.assetsPath + '/images/fastfoodspelen.png', fastFood.assetsPath + '/images/logo.png', fastFood.assetsPath + '/images/logo_beta.png', fastFood.assetsPath + '/images/relevant.png', fastFood.assetsPath + '/images/counter/a_1.png', fastFood.assetsPath + '/images/counter/a_10.png', fastFood.assetsPath + '/images/counter/a_2.png', fastFood.assetsPath + '/images/counter/a_3.png', fastFood.assetsPath + '/images/counter/a_4.png', fastFood.assetsPath + '/images/counter/a_5.png', fastFood.assetsPath + '/images/counter/a_6.png', fastFood.assetsPath + '/images/counter/a_7.png', fastFood.assetsPath + '/images/counter/a_8.png', fastFood.assetsPath + '/images/counter/a_9.png', fastFood.assetsPath + '/images/counter/five.png', fastFood.assetsPath + '/images/counter/four.png', fastFood.assetsPath + '/images/fastfood/arrow_left_one_disabled.png', fastFood.assetsPath + '/images/fastfood/arrow_left_one_enabled.png', fastFood.assetsPath + '/images/fastfood/arrow_right_one_disabled.png', fastFood.assetsPath + '/images/fastfood/arrow_right_one_enabled.png', fastFood.assetsPath + '/images/fastfood/button-background.gif', fastFood.assetsPath + '/images/fastfood/fastfood_i.png', fastFood.assetsPath + '/images/fastfood/ff_b.png', fastFood.assetsPath + '/images/fastfood/ff_c.png', fastFood.assetsPath + '/images/fastfood/hotelSprite_1.png', fastFood.assetsPath + '/images/fastfood/hotelSprite_CloseBtn.png', fastFood.assetsPath + '/images/fastfood/load_ab.png', fastFood.assetsPath + '/images/fastfood/load_ac.png', fastFood.assetsPath + '/images/fastfood/pixel_white_trans2.png', fastFood.assetsPath + '/images/fastfood/sound_disabled.png', fastFood.assetsPath + '/images/fastfood/sound_enabled.png', fastFood.assetsPath + '/images/headgenerator/head.gif', fastFood.assetsPath + '/images/headgenerator/patch.gif', fastFood.assetsPath + '/images/headgenerator/patch_2.gif', fastFood.assetsPath + '/images/assets/alerts/confirm.png', fastFood.assetsPath + '/images/assets/alerts/connection.png', fastFood.assetsPath + '/images/assets/alerts/empty.png', fastFood.assetsPath + '/images/assets/alerts/message.png', fastFood.assetsPath + '/images/assets/alerts/shadow.png', fastFood.assetsPath + '/images/assets/explosion/0.png', fastFood.assetsPath + '/images/assets/explosion/1.png', fastFood.assetsPath + '/images/assets/explosion/10.png', fastFood.assetsPath + '/images/assets/explosion/2.png', fastFood.assetsPath + '/images/assets/explosion/3.png', fastFood.assetsPath + '/images/assets/explosion/4.png', fastFood.assetsPath + '/images/assets/explosion/5.png', fastFood.assetsPath + '/images/assets/explosion/6.png', fastFood.assetsPath + '/images/assets/explosion/7.png', fastFood.assetsPath + '/images/assets/explosion/8.png', fastFood.assetsPath + '/images/assets/explosion/9.png', fastFood.assetsPath + '/images/assets/language_board/br.png', fastFood.assetsPath + '/images/assets/language_board/com.png', fastFood.assetsPath + '/images/assets/language_board/de.png', fastFood.assetsPath + '/images/assets/language_board/dk.png', fastFood.assetsPath + '/images/assets/language_board/es.png', fastFood.assetsPath + '/images/assets/language_board/fi.png', fastFood.assetsPath + '/images/assets/language_board/fr.png', fastFood.assetsPath + '/images/assets/language_board/it.png', fastFood.assetsPath + '/images/assets/language_board/nl.png', fastFood.assetsPath + '/images/assets/language_board/no.png', fastFood.assetsPath + '/images/assets/language_board/se.png', fastFood.assetsPath + '/images/assets/language_board/tr.png', fastFood.assetsPath + '/images/assets/map/game-halloween.jpg', fastFood.assetsPath + '/images/assets/map/game.jpg', fastFood.assetsPath + '/images/assets/map/lobby-halloween.jpg', fastFood.assetsPath + '/images/assets/map/lobby.jpg', fastFood.assetsPath + '/images/assets/parachutes/big.png', fastFood.assetsPath + '/images/assets/parachutes/big_menu.png', fastFood.assetsPath + '/images/assets/shield/0.png', fastFood.assetsPath + '/images/assets/shield/1.png', fastFood.assetsPath + '/images/assets/shield/2.png', fastFood.assetsPath + '/images/assets/shield/3.png', fastFood.assetsPath + '/images/assets/spec/female.png', fastFood.assetsPath + '/images/assets/spec/male.png', fastFood.assetsPath + '/images/assets/tables/table.png', fastFood.assetsPath + '/images/assets/ui/Image 66.png', fastFood.assetsPath + '/images/assets/ui/b2_1.png', fastFood.assetsPath + '/images/assets/ui/b2_2.png', fastFood.assetsPath + '/images/assets/ui/b_1.png', fastFood.assetsPath + '/images/assets/ui/b_2.png', fastFood.assetsPath + '/images/assets/ui/b_3.png', fastFood.assetsPath + '/images/assets/ui/back4_g3d.png', fastFood.assetsPath + '/images/assets/ui/backsize_blue.png', fastFood.assetsPath + '/images/assets/ui/counter.png', fastFood.assetsPath + '/images/assets/ui/country.png', fastFood.assetsPath + '/images/assets/ui/default_avatar.png', fastFood.assetsPath + '/images/assets/ui/drop_disabled.png', fastFood.assetsPath + '/images/assets/ui/drop_enabled.png', fastFood.assetsPath + '/images/assets/ui/farbad.gif', fastFood.assetsPath + '/images/assets/ui/howitworks_1.png', fastFood.assetsPath + '/images/assets/ui/howitworks_2.png', fastFood.assetsPath + '/images/assets/ui/howitworks_3.png', fastFood.assetsPath + '/images/assets/ui/l_0.png', fastFood.assetsPath + '/images/assets/ui/l_1.png', fastFood.assetsPath + '/images/assets/ui/l_2.png', fastFood.assetsPath + '/images/assets/ui/musical-notes.png', fastFood.assetsPath + '/images/assets/ui/place.png', fastFood.assetsPath + '/images/assets/ui/ranking_container.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_0.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_1.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_2.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_3.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_4.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_5.png', fastFood.assetsPath + '/images/assets/ui/ranking_stars_6.png', fastFood.assetsPath + '/images/assets/ui/rounding_disabled.png', fastFood.assetsPath + '/images/assets/ui/rounding_enabled.png', fastFood.assetsPath + '/images/assets/ui/rounding_powers.png', fastFood.assetsPath + '/images/assets/ui/scoreboard.png', fastFood.assetsPath + '/images/assets/ui/shield_1.png', fastFood.assetsPath + '/images/assets/ui/shield_2.png', fastFood.assetsPath + '/images/assets/ui/sign_exit.png', fastFood.assetsPath + '/images/assets/ui/sign_music_off.png', fastFood.assetsPath + '/images/assets/ui/sign_music_on.png', fastFood.assetsPath + '/images/assets/ui/sign_volume_off.png', fastFood.assetsPath + '/images/assets/ui/sign_volume_on.png', fastFood.assetsPath + '/images/assets/ui/special.png', fastFood.assetsPath + '/images/assets/ui/star.png', fastFood.assetsPath + '/images/assets/ui/stretch.png', fastFood.assetsPath + '/images/assets/ui/topscore.png', fastFood.assetsPath + '/images/fastfood/loading/1.gif', fastFood.assetsPath + '/images/fastfood/loading/10.gif', fastFood.assetsPath + '/images/fastfood/loading/11.gif', fastFood.assetsPath + '/images/fastfood/loading/12.gif', fastFood.assetsPath + '/images/fastfood/loading/2.gif', fastFood.assetsPath + '/images/fastfood/loading/3.gif', fastFood.assetsPath + '/images/fastfood/loading/4.gif', fastFood.assetsPath + '/images/fastfood/loading/5.gif', fastFood.assetsPath + '/images/fastfood/loading/6.gif', fastFood.assetsPath + '/images/fastfood/loading/7.gif', fastFood.assetsPath + '/images/fastfood/loading/8.gif', fastFood.assetsPath + '/images/fastfood/loading/9.gif', fastFood.assetsPath + '/images/assets/alerts/buttons/default.png', fastFood.assetsPath + '/images/assets/alerts/buttons/default_hover.png', fastFood.assetsPath + '/images/assets/alerts/buttons/large.png', fastFood.assetsPath + '/images/assets/alerts/buttons/large_hover.png', fastFood.assetsPath + '/images/assets/alerts/frank/connection.png', fastFood.assetsPath + '/images/assets/alerts/frank/good.png', fastFood.assetsPath + '/images/assets/alerts/frank/look.png', fastFood.assetsPath + '/images/assets/alerts/frank/searching.png', fastFood.assetsPath + '/images/assets/food/a/0.png', fastFood.assetsPath + '/images/assets/food/a/1.png', fastFood.assetsPath + '/images/assets/food/a/2.png', fastFood.assetsPath + '/images/assets/food/a/3.png', fastFood.assetsPath + '/images/assets/food/a/4.png', fastFood.assetsPath + '/images/assets/food/a/5.png', fastFood.assetsPath + '/images/assets/food/a/6.png', fastFood.assetsPath + '/images/assets/food/a/7.png', fastFood.assetsPath + '/images/assets/food/a/8.png', fastFood.assetsPath + '/images/assets/food/a/9.png', fastFood.assetsPath + '/images/assets/food/b/0.png', fastFood.assetsPath + '/images/assets/food/b/1.png', fastFood.assetsPath + '/images/assets/food/b/10.png', fastFood.assetsPath + '/images/assets/food/b/2.png', fastFood.assetsPath + '/images/assets/food/b/3.png', fastFood.assetsPath + '/images/assets/food/b/4.png', fastFood.assetsPath + '/images/assets/food/b/5.png', fastFood.assetsPath + '/images/assets/food/b/6.png', fastFood.assetsPath + '/images/assets/food/b/7.png', fastFood.assetsPath + '/images/assets/food/b/8.png', fastFood.assetsPath + '/images/assets/food/b/9.png', fastFood.assetsPath + '/images/assets/food/c/0.png', fastFood.assetsPath + '/images/assets/food/c/1.png', fastFood.assetsPath + '/images/assets/food/c/2.png', fastFood.assetsPath + '/images/assets/food/c/3.png', fastFood.assetsPath + '/images/assets/food/c/4.png', fastFood.assetsPath + '/images/assets/food/c/5.png', fastFood.assetsPath + '/images/assets/food/c/6.png', fastFood.assetsPath + '/images/assets/food/c/7.png', fastFood.assetsPath + '/images/assets/food/c/8.png', fastFood.assetsPath + '/images/assets/food/c/9.png', fastFood.assetsPath + '/images/assets/food/d/0.png', fastFood.assetsPath + '/images/assets/food/d/1.png', fastFood.assetsPath + '/images/assets/food/d/10.png', fastFood.assetsPath + '/images/assets/food/d/11.png', fastFood.assetsPath + '/images/assets/food/d/12.png', fastFood.assetsPath + '/images/assets/food/d/13.png', fastFood.assetsPath + '/images/assets/food/d/2.png', fastFood.assetsPath + '/images/assets/food/d/3.png', fastFood.assetsPath + '/images/assets/food/d/4.png', fastFood.assetsPath + '/images/assets/food/d/5.png', fastFood.assetsPath + '/images/assets/food/d/6.png', fastFood.assetsPath + '/images/assets/food/d/7.png', fastFood.assetsPath + '/images/assets/food/d/8.png', fastFood.assetsPath + '/images/assets/food/d/9.png', fastFood.assetsPath + '/images/assets/food/e/0.png', fastFood.assetsPath + '/images/assets/food/e/1.png', fastFood.assetsPath + '/images/assets/food/e/10.png', fastFood.assetsPath + '/images/assets/food/e/2.png', fastFood.assetsPath + '/images/assets/food/e/3.png', fastFood.assetsPath + '/images/assets/food/e/4.png', fastFood.assetsPath + '/images/assets/food/e/5.png', fastFood.assetsPath + '/images/assets/food/e/6.png', fastFood.assetsPath + '/images/assets/food/e/7.png', fastFood.assetsPath + '/images/assets/food/e/8.png', fastFood.assetsPath + '/images/assets/food/e/9.png', fastFood.assetsPath + '/images/assets/parachutes/black/0.png', fastFood.assetsPath + '/images/assets/parachutes/black/1.png', fastFood.assetsPath + '/images/assets/parachutes/black/2.png', fastFood.assetsPath + '/images/assets/parachutes/black/3.png', fastFood.assetsPath + '/images/assets/parachutes/black/4.png', fastFood.assetsPath + '/images/assets/parachutes/black/5.png', fastFood.assetsPath + '/images/assets/parachutes/green/Image 150.png', fastFood.assetsPath + '/images/assets/parachutes/green/Image 158.png', fastFood.assetsPath + '/images/assets/parachutes/green/Image 38.png', fastFood.assetsPath + '/images/assets/parachutes/green/Image 49.png', fastFood.assetsPath + '/images/assets/parachutes/green/Image 55.png', fastFood.assetsPath + '/images/assets/parachutes/green/Image 74.png', fastFood.assetsPath + '/images/assets/parachutes/red/0.png', fastFood.assetsPath + '/images/assets/parachutes/red/1.png', fastFood.assetsPath + '/images/assets/parachutes/red/2.png', fastFood.assetsPath + '/images/assets/parachutes/red/3.png', fastFood.assetsPath + '/images/assets/parachutes/red/4.png', fastFood.assetsPath + '/images/assets/parachutes/red/5.png', fastFood.assetsPath + '/images/assets/parachutes/red/6.png', fastFood.assetsPath + '/images/assets/parachutes/yellow/Image 107.png', fastFood.assetsPath + '/images/assets/parachutes/yellow/Image 108.png', fastFood.assetsPath + '/images/assets/parachutes/yellow/Image 165.png', fastFood.assetsPath + '/images/assets/parachutes/yellow/Image 224.png', fastFood.assetsPath + '/images/assets/parachutes/yellow/Image 23.png', fastFood.assetsPath + '/images/assets/parachutes/yellow/Image 82.png', fastFood.assetsPath + '/images/assets/rockets/red/0.png', fastFood.assetsPath + '/images/assets/rockets/red/1.png', fastFood.assetsPath + '/images/assets/rockets/red/2.png', fastFood.assetsPath + '/images/assets/tables/back/p1_1.png', fastFood.assetsPath + '/images/assets/tables/back/p1_2.png', fastFood.assetsPath + '/images/assets/tables/back/p2_1.png', fastFood.assetsPath + '/images/assets/tables/back/p2_2.png', fastFood.assetsPath + '/images/assets/tables/back/p3_1.png', fastFood.assetsPath + '/images/assets/tables/back/p3_2.png', fastFood.assetsPath + '/images/assets/tables/front/p1_1.png', fastFood.assetsPath + '/images/assets/tables/front/p1_2.png', fastFood.assetsPath + '/images/assets/tables/front/p1_3.png', fastFood.assetsPath + '/images/assets/tables/front/p1_4.png', fastFood.assetsPath + '/images/assets/tables/front/p2_1.png', fastFood.assetsPath + '/images/assets/tables/front/p2_2.png', fastFood.assetsPath + '/images/assets/tables/front/p2_3.png', fastFood.assetsPath + '/images/assets/tables/front/p2_4.png', fastFood.assetsPath + '/images/assets/tables/front/p3_1.png', fastFood.assetsPath + '/images/assets/tables/front/p3_2.png', fastFood.assetsPath + '/images/assets/tables/front/p3_3.png', fastFood.assetsPath + '/images/assets/tables/front/p3_4.png', fastFood.assetsPath + '/images/assets/map/game-halloween.jpg', fastFood.assetsPath + '/images/assets/map/game.jpg', fastFood.assetsPath + '/images/assets/map/lobby-halloween.jpg', fastFood.assetsPath + '/images/assets/map/lobby.jpg', fastFood.assetsPath + '/images/logo.png'];

var importantImages = [
    fastFood.assetsPath + '/images/assets/ui/sign_volume_off.png',
    fastFood.assetsPath + '/images/assets/ui/place.png',
    fastFood.assetsPath + '/images/logo.png',
    fastFood.assetsPath + '/images/assets/food/b/2.png',
    fastFood.assetsPath + '/images/assets/parachutes/red/4.png',
    fastFood.assetsPath + '/images/assets/parachutes/red/6.png',
    fastFood.assetsPath + '/images/assets/ui/rounding_disabled.png',
    fastFood.assetsPath + '/images/assets/ui/l_1.png',
    fastFood.assetsPath + '/images/basejump_logo.png'
];

gameLoadingStatus.gameImages = images.length;
gameLoadingStatus.importantImages = importantImages.length;

var startLoadingImages = {
    loadedCount: 0,
    importantLoaded: 0,
    init: function() {
        if(debugGame == true) {
            log.new("Loading all images", "blue");
        }

        if(startLoadingImages.importantLoaded !== gameLoadingStatus.importantImages) {
            this.firstLoadImportantImages();
            return;
        }

        var tempImage = new Image();
        tempImage.onload = (function () {
            for (var tempImageCounter = 0; tempImageCounter < gameLoadingStatus.gameImages; ++tempImageCounter) {
                document.getElementById("images_loading").innerHTML += '<img src="' + images[tempImageCounter] + '" />';
            }

            if (debugGame == true) {
                log.new("Is loading " + gameLoadingStatus.gameImages + " images", "green");
            }
        })(tempImage);

        var imgdata = document.querySelectorAll('img');

        for (var i = 0; i < imgdata.length; i++) {
            imgdata[i].addEventListener('load', startLoadingImages.loaded);
        }
    },

    firstLoadImportantImages: function() {
        gameLoadingStatus.doingNow = 'Please wait...';
        gameLoadingStatus.doingNowUnderText = '...';

        var tempImage = new Image();
        tempImage.onload = (function () {
            for (var tempImageCounter = 0; tempImageCounter < gameLoadingStatus.importantImages; ++tempImageCounter) {
                document.getElementById("images_loading").innerHTML += '<img src="' + images[tempImageCounter] + '" />';
            }

            if (debugGame == true) {
                log.new("Is loading " + gameLoadingStatus.importantImages + " important images", "green");
            }
        })(tempImage);

        var imgdata = document.querySelectorAll('img');

        for (var i = 0; i < imgdata.length; i++) {
            imgdata[i].addEventListener('load', startLoadingImages.loadedImportant);
        }
    },

    loadedImportant: function() {
        startLoadingImages.importantLoaded++;
        if (startLoadingImages.importantLoaded === gameLoadingStatus.importantImages) {
            startLoadingImages.init();
            return;
        }

        var imgdata = document.querySelectorAll('img');

        for (var i = 0; i < imgdata.length; i++) {
            imgdata[i].remove();
        }
    },

    loaded: function() {
        startLoadingImages.loadedCount++;

        gameLoadingStatus.doingNow = "Loading image:";
        gameLoadingStatus.doingNowUnderText = startLoadingImages.loadedCount + " of " + gameLoadingStatus.gameImages;

        var status = startLoadingImages.loadedCount*(85/gameLoadingStatus.gameImages)+'%';

        gameLoadingStatus.gamePercent = Math.round(startLoadingImages.loadedCount*(85/gameLoadingStatus.gameImages));

        if (startLoadingImages.loadedCount === gameLoadingStatus.gameImages) {
            if(debugGame == true) {
                log.new("Start connecting to server", "blue");
            }

            gameLoadingStatus.doingNow = fastFoodLanguage[fastFood.language].loading.connecting;
            gameLoadingStatus.doingNowUnderText = "...";
            connection.start();

            var localDots = 1;
            gameLoadingStatus.dotsLoading = setInterval(function() {
                if(localDots == 1) {
                    gameLoadingStatus.doingNowUnderText = '.';
                }else if(localDots == 2) {
                    gameLoadingStatus.doingNowUnderText = '..';
                }if(localDots == 3) {
                    gameLoadingStatus.doingNowUnderText = '...';
                    localDots = 0;
                }

                localDots++;
            }, 700);
        }
    }
};


var log = {
    new: function(text, color) {
        console.log("%c" + text, "color: " + color);
    }
}

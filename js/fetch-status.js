let progressText = document.getElementById('progresstext');
let md = new Remarkable({
    html: false, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />)
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: false, // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    typographer: false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’'
});

// Function by Peri

function prettifyBytes ( bytes ) {
    const units = [ 'B', 'kiB', 'MiB', 'GiB', 'TiB', 'PiB' ];

    const unit = bytes <= 0
        ? 0
        : Math.min( units.length - 1, Math.floor( Math.log( bytes ) / Math.log( 1024 ) ) );

    return `${Math.round( bytes / 1024 ** unit * 100 ) / 100} ${units[ unit ]}`;
}

function formatDate ( date ) {
    let now = new Date();
    const hourLocale = ( time ) => {
        return time.toLocaleTimeString( undefined, { hour: 'numeric', minute: 'numeric' } )
    };

    const day = 1000 * 60 * 60 * 24;
    var nowAtMorning = Date.UTC( now.getFullYear(), now.getMonth(), now.getDate() );
    var dateAtMorning = Date.UTC( date.getFullYear(), date.getMonth(), date.getDate() );
    var daysDifference = Math.floor( ( nowAtMorning - dateAtMorning ) / day );

    if ( daysDifference == 0 ) {
        return `today at ${hourLocale(date)}`;
    }
    else if ( daysDifference > 0 ) {
        if ( daysDifference == 1 ) {
            return `yesterday at ${hourLocale(date)}`;
        }
        if ( daysDifference < 14 ) {
            return `${daysDifference} days ago`;
        }
        return `at ${date.toLocaleDateString()}`;
    }
    else {
        daysDifference *= -1;
        if ( daysDifference == 1 ) {
            return `tomorrow at ${hourLocale(date)}`;
        }
        if ( daysDifference < 14 ) {
            return `in ${daysDifference} days`;
        }
        return `at ${date.toLocaleDateString()}`;
    }
}

// Touhosu
async function callTouhosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("touhosu Complete")
        let latestRelease = Data;
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("touhosu-button").innerHTML = "detail & download";
        document.getElementById("touhosu-button").disabled = false;
        document.getElementById("touhosu-version").innerHTML = latestRelease.name;
        document.getElementById("touhosu-title").innerHTML = latestRelease.name + " changelog & file detail";
        document.getElementById("touhosu-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("touhosu-download").href = assets.browser_download_url;
        document.getElementById("touhosu-download-button").innerHTML = "Download";
        // document.getElementById("touhosu-count").innerHTML = "Download Count : " + assets.download_count;
        document.getElementById("touhosu-size").innerHTML = "Size : " + prettifyBytes(assets.size);
        document.getElementById("touhosu-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
    }
}



// mvis
async function callMvis(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("Mvis Complete")
        let latestRelease = Data;
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("mvis-button").innerHTML = "detail & download";
        document.getElementById("mvis-button").disabled = false;
        document.getElementById("mvis-version").innerHTML = latestRelease.name;
        document.getElementById("mvis-title").innerHTML = latestRelease.name + " changelog & file detail";
        document.getElementById("mvis-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("mvis-download").href = assets.browser_download_url
        document.getElementById("mvis-download-button").innerHTML = "Download";
        // document.getElementById("mvis-count").innerHTML = "Download Count : " + assets.download_count;
        document.getElementById("mvis-size").innerHTML = "Size : " + prettifyBytes(assets.size);
        document.getElementById("mvis-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
    }
    
}

// Bosu
async function callBosu(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("Bosu Complete")
        let latestRelease = Data;
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("bosu-button").innerHTML = "detail & download";
        document.getElementById("bosu-button").disabled = false;
        document.getElementById("bosu-version").innerHTML = latestRelease.name;
        document.getElementById("bosu-title").innerHTML = latestRelease.name + " changelog & file detail";
        document.getElementById("bosu-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("bosu-download").href = assets.browser_download_url
        document.getElementById("bosu-download-button").innerHTML = "Download";
        // document.getElementById("bosu-count").innerHTML = "Download Count : " + assets.download_count;
        document.getElementById("bosu-size").innerHTML = "Size : " + prettifyBytes(assets.size);
        document.getElementById("bosu-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
    }
}

// Sentakki
async function callSentakki(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("sentakki Complete")
        let latestRelease = Data;
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("sentakki-button").innerHTML = "detail & download";
        document.getElementById("sentakki-button").disabled = false;
        document.getElementById("sentakki-version").innerHTML = latestRelease.name;
        document.getElementById("sentakki-title").innerHTML = latestRelease.name + " changelog & file detail";
        document.getElementById("sentakki-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("sentakki-download").href = assets.browser_download_url
        document.getElementById("sentakki-download-button").innerHTML = "Download";
        // document.getElementById("sentakki-count").innerHTML = "Download Count : " + assets.download_count;
        document.getElementById("sentakki-size").innerHTML = "Size : " + prettifyBytes(assets.size);
        document.getElementById("sentakki-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
    }
}

// Swing
async function callSwing(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("swing Complete")
        let latestRelease = Data;
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("swing-button").innerHTML = "detail & download";
        document.getElementById("swing-button").disabled = false;
        document.getElementById("swing-version").innerHTML = latestRelease.name;
        document.getElementById("swing-title").innerHTML = latestRelease.name + " changelog & file detail";
        document.getElementById("swing-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("swing-download").href = assets.browser_download_url
        document.getElementById("swing-download-button").innerHTML = "Download";
        // document.getElementById("swing-count").innerHTML = "Download Count : " + assets.download_count;
        document.getElementById("swing-size").innerHTML = "Size : " + prettifyBytes(assets.size);
        document.getElementById("swing-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
    }
}

// Tau
async function callTau(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("tau Complete")
        let latestRelease = Data;
        let assets = Data['assets'][0]
        let updateDate = new Date( Date.parse(assets.updated_at) )
        document.getElementById("tau-button").innerHTML = "detail & download";
        document.getElementById("tau-button").disabled = false;
        document.getElementById("tau-version").innerHTML = latestRelease.name;
        document.getElementById("tau-title").innerHTML = latestRelease.name + " changelog & file detail";
        document.getElementById("tau-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("tau-download").href = assets.browser_download_url
        document.getElementById("tau-download-button").innerHTML = "Download";
        // document.getElementById("tau-count").innerHTML = "Download Count : " + assets.download_count;
        document.getElementById("tau-size").innerHTML = "Size : " + prettifyBytes(assets.size);
        document.getElementById("tau-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
    }
}


// Hitokori
        async function callHitokori(url) {

            // Storing response
            const response = await fetch(url);

            // Storing data in form of JSON
            let Data = await response.json();
            // console.log(Data);
            if (response) {
                console.log("hitokori Complete")
                let latestRelease = Data;
                let assets = Data['assets'][0]
                let updateDate = new Date( Date.parse(assets.updated_at) )
                document.getElementById("hitokori-button").innerHTML = "detail & download";
                document.getElementById("hitokori-button").disabled = false;
                document.getElementById("hitokori-version").innerHTML = latestRelease.name;
                document.getElementById("hitokori-title").innerHTML = latestRelease.name + " changelog & file detail";
                document.getElementById("hitokori-changelog").innerHTML = md.render(latestRelease.body);
                document.getElementById("hitokori-download").href = assets.browser_download_url
                document.getElementById("hitokori-download-button").innerHTML = "Download";
                // document.getElementById("hitokori-count").innerHTML = "Download Count : " + assets.download_count;
                document.getElementById("hitokori-size").innerHTML = "Size : " + prettifyBytes(assets.size);
                document.getElementById("hitokori-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
            }
        }

// Soyokaze
        async function callSoyokaze(url) {

            // Storing response
            const response = await fetch(url);

            // Storing data in form of JSON
            let Data = await response.json();
            // console.log(Data);
            if (response) {
                console.log("soyokaze Complete")
                let latestRelease = Data;
                let assets = Data['assets'][0]
                let updateDate = new Date( Date.parse(assets.updated_at) )
                document.getElementById("soyokaze-button").innerHTML = "detail & download";
                document.getElementById("soyokaze-button").disabled = false;
                document.getElementById("soyokaze-version").innerHTML = latestRelease.name;
                document.getElementById("soyokaze-title").innerHTML = latestRelease.name + " changelog & file detail";
                document.getElementById("soyokaze-changelog").innerHTML = md.render(latestRelease.body);
                document.getElementById("soyokaze-download").href = assets.browser_download_url
                document.getElementById("soyokaze-download-button").innerHTML = "Download";
                // document.getElementById("soyokaze-count").innerHTML = "Download Count : " + assets.download_count;
                document.getElementById("soyokaze-size").innerHTML = "Size : " + prettifyBytes(assets.size);
                document.getElementById("soyokaze-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
            }
        }

// Cytosu
        async function callCytosu(url) {

            // Storing response
            const response = await fetch(url);

            // Storing data in form of JSON
            let Data = await response.json();
            // console.log(Data);
            if (response) {
                console.log("cytosu Complete")
                let latestRelease = Data[0];
                let assets = latestRelease['assets'][0]
                let updateDate = new Date( Date.parse(assets.updated_at) )
                document.getElementById("cytosu-button").innerHTML = "detail & download";
                document.getElementById("cytosu-button").disabled = false;
                document.getElementById("cytosu-version").innerHTML = latestRelease.name;
                document.getElementById("cytosu-title").innerHTML = latestRelease.name + " changelog & file detail";
                document.getElementById("cytosu-changelog").innerHTML = md.render(latestRelease.body);
                document.getElementById("cytosu-download").href = assets.browser_download_url
                document.getElementById("cytosu-download-button").innerHTML = "Download";
                // document.getElementById("cytosu-count").innerHTML = "Download Count : " + assets.download_count;
                document.getElementById("cytosu-size").innerHTML = "Size : " + prettifyBytes(assets.size);
                document.getElementById("cytosu-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
            }
        }

// Rush
        async function callRush(url) {

            // Storing response
            const response = await fetch(url);

            // Storing data in form of JSON
            let Data = await response.json();
            // console.log(Data);
            if (response) {
                console.log("rush Complete")
                let latestRelease = Data[0];
                let assets = latestRelease['assets'][0]
                let updateDate = new Date( Date.parse(assets.updated_at) )
                document.getElementById("rush-button").innerHTML = "detail & download";
                document.getElementById("rush-button").disabled = false;
                document.getElementById("rush-version").innerHTML = latestRelease.name;
                document.getElementById("rush-title").innerHTML = latestRelease.name + " changelog & file detail";
                document.getElementById("rush-changelog").innerHTML = md.render(latestRelease.body);
                document.getElementById("rush-download").href = assets.browser_download_url
                document.getElementById("rush-download-button").innerHTML = "Download";
                // document.getElementById("rush-count").innerHTML = "Download Count : " + assets.download_count;
                document.getElementById("rush-size").innerHTML = "Size : " + prettifyBytes(assets.size);
                document.getElementById("rush-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
            }
        }

// osu!DIVA
        async function callDiva(url) {

            // Storing response
            const response = await fetch(url);

            // Storing data in form of JSON
            let Data = await response.json();
            // console.log(Data);
            if (response) {
                console.log("diva Complete")
                let latestRelease = Data;
                let assets = Data['assets'][0]
                let updateDate = new Date( Date.parse(assets.updated_at) )
                document.getElementById("diva-button").innerHTML = "detail & download";
                document.getElementById("diva-button").disabled = false;
                document.getElementById("diva-version").innerHTML = latestRelease.name;
                document.getElementById("diva-title").innerHTML = latestRelease.name + " changelog & file detail";
                document.getElementById("diva-changelog").innerHTML = md.render(latestRelease.body);
                document.getElementById("diva-download").href = assets.browser_download_url
                document.getElementById("diva-download-button").innerHTML = "Download";
                // document.getElementById("diva-count").innerHTML = "Download Count : " + assets.download_count;
                document.getElementById("diva-size").innerHTML = "Size : " + prettifyBytes(assets.size);
                document.getElementById("diva-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
            }
        }

// Hishigata
        async function callHishigata(url) {

            // Storing response
            const response = await fetch(url);

            // Storing data in form of JSON
            let Data = await response.json();
            // console.log(Data);
            if (response) {
                console.log("hishigata Complete")
                let latestRelease = Data;
                let assets = Data['assets'][0]
                let updateDate = new Date( Date.parse(assets.updated_at) )
                document.getElementById("hishigata-button").innerHTML = "detail & download";
                document.getElementById("hishigata-button").disabled = false;
                document.getElementById("hishigata-version").innerHTML = latestRelease.name;
                document.getElementById("hishigata-title").innerHTML = latestRelease.name + " changelog & file detail";
                document.getElementById("hishigata-changelog").innerHTML = md.render(latestRelease.body);
                document.getElementById("hishigata-download").href = assets.browser_download_url
                document.getElementById("hishigata-download-button").innerHTML = "Download";
                // document.getElementById("hishigata-count").innerHTML = "Download Count : " + assets.download_count;
                document.getElementById("hishigata-size").innerHTML = "Size : " + prettifyBytes(assets.size);
                document.getElementById("hishigata-time").innerHTML = "Latest update : " + formatDate(updateDate) ;
            }
        }

// osu!lazer
async function callLazer(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let Data = await response.json();
    // console.log(Data);
    if (response) {
        console.log("lazer Complete")
        let latestRelease = Data;
        let assetsWindows = Data['assets'][0]
        let assetsMac = Data['assets'][1]
        let updateDate = new Date( Date.parse(latestRelease.published_at) )
        document.getElementById("lazer-button").innerHTML = "download osu!lazer";
        document.getElementById("lazer-button").disabled = false;
        document.getElementById("lazer-status").innerHTML = "osu!lazer latest version : " + latestRelease.name + " (" + formatDate(updateDate) + ")";
        document.getElementById("lazer-title").innerHTML = "osu!lazer " + latestRelease.name + " changelog & file detail";
        document.getElementById("lazer-changelog").innerHTML = md.render(latestRelease.body);
        document.getElementById("lazer-download-windows").href = assetsWindows.browser_download_url
        document.getElementById("lazer-download-mac").href = assetsMac.browser_download_url
        document.getElementById("lazer-download-windows-button").innerHTML = "Download on Windows";
        document.getElementById("lazer-download-mac-button").innerHTML = "Download on MacOS";
        document.getElementById("lazer-size-windows").innerHTML = "Size : " + prettifyBytes(assetsWindows.size);
        document.getElementById("lazer-size-mac").innerHTML = "Size : " + prettifyBytes(assetsMac.size);
    }
}


// Set rulesets number to get a progress bar work
const rulesetNumber = 12;
const progressBarUp = 100/rulesetNumber;

function changeProgressBar(percent){
    $(".progress-bar").css("width", percent + "%").text(percent + " %");
}

function changeProgressText (text) {
    progressText.innerHTML = text;
}

function deleteProgressBar () {
    document.getElementById("fetch-progress").innerHTML = "";
}

let percentNow = 0;

console.log("Start fetching...")

changeProgressText("Fetch Touhosu releases...");
callTouhosu("https://api.github.com/repos/EVAST9919/touhosu/releases/latest")
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch mvis releases...");
callMvis("https://api.github.com/repos/EVAST9919/lazer-m-vis/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch bosu releases...");
callBosu("https://api.github.com/repos/EVAST9919/bosu/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch sentakki releases...");
callSentakki("https://api.github.com/repos/LumpBloom7/sentakki/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch swing releases...");
callSwing("https://api.github.com/repos/EVAST9919/lazer-swing/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch tau releases...");
callTau("https://api.github.com/repos/Altenhh/tau/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch hitokori releases...");
callHitokori("https://api.github.com/repos/Flutterish/Hitokori/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch soyokaze releases...");
callSoyokaze("https://api.github.com/repos/goodtrailer/soyokaze/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch cytosu releases...");
callCytosu("https://api.github.com/repos/GSculerlor/Cytosu/releases");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch rush releases...");
callRush("https://api.github.com/repos/Beamographic/rush/releases");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch osu!DIVA releases...");
callDiva("https://api.github.com/repos/Thesola10/osu-DIVA/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

changeProgressText("Fetch hishigata releases...");
callHishigata("https://api.github.com/repos/LumpBloom7/hishigata/releases/latest");
changeProgressBar(percentNow);
percentNow += progressBarUp;

callLazer("https://api.github.com/repos/ppy/osu/releases/latest");

document.getElementById("yoso-size").innerHTML = "Size : " + prettifyBytes(176640)
document.getElementById("solosu-size").innerHTML = "Size : " + prettifyBytes(87040)
let solosuDate = new Date(Date.parse('2021-04-28T23:00:50Z'))
let yosoDate = new Date(Date.parse('2021-05-13T16:48:00Z'))
document.getElementById("solosu-time").innerHTML = "Latest update : " + formatDate(solosuDate) ;
document.getElementById("yoso-time").innerHTML = "Latest update : " + formatDate(yosoDate) ;

changeProgressBar(100);
changeProgressText("Complete!");
window.setTimeout("deleteProgressBar();", 2000);

let date = new Date();
// document.getElementById('last-update').innerHTML = "Last Update : " + date;
document.getElementById('last-update').innerHTML = "Last Update : " + formatDate(date);

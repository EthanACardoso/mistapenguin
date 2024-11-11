var delay = 3000; //set delay between message change (in miliseconds)
var maxsteps=30; // number of steps to take to change from start color to endcolor
var stepdelay=40; // time in miliseconds of a single step
//**Note: maxsteps*stepdelay will be total time in miliseconds of fading effect
var startcolor= new Array(255,255,255); // start color (red, green, blue)
var endcolor=new Array(106,124,152); // end color (red, green, blue)

var fcontent=new Array();
begintag='<div style="padding: 38px 5px;">'; //set opening tag, such as font declarations


fcontent[0]="Ayo what's with this track, mang? We about to rap about pachinko?";
fcontent[1]="Tonikaku DemonDICE to moshimasu. Satte, hajimemashou!";
fcontent[2]="Na-nana-na-na- Nan the fuck?";
fcontent[3]="I'm the Satan-flow demon on the set, what's up?";
fcontent[4]="Originality? Yo I got that shit on tap";
fcontent[5]="'Cause I've been drowning in the melodies of Japanese net rap";
fcontent[6]="Jesus Jesus Japanesus";
fcontent[7]="The far-east vibes are my goddamn steez but";
fcontent[8]="Probably a little strange lookin to some";
fcontent[9]="Probably a little strange lookin to some";
fcontent[10]="They say America's the land of milk and honey";
fcontent[11]="More like the land of crime, drugs, guns, hoes, and money";
fcontent[12]="At least according to the SoundCloud rappers today";
fcontent[13]="You're gonna make it in the game, every time you press play";
fcontent[14]="The demon started screamin' that the music wasn't good enough";
fcontent[15]="Satan said I wasn't black, male, or hood enough";
fcontent[16]="But the demons in the East never cease to inspire";
fcontent[17]="Ham-Kyou 'hyaku Pa sento' Rapanese fire!";
fcontent[18]="Ya know my parents didn't even see me comin' and goin'";
fcontent[19]="Cause I've been running off to other worlds without 'em knowin', y'know?";
fcontent[20]="I guess I got a little bit tired of wishing";
fcontent[21]="Went ahead and hung a sign up on my door 'gone fishing'";
fcontent[22]="Like, sayonara, peace out, see ya later!";
fcontent[23]="I'm the number one champion master baiter!";
fcontent[24]="You'd be doin' me a favor if you came along to savor the flavor";
fcontent[25]="Born in every hemi-demi-semi-quaver";
fcontent[26]="Been here for a little while, biding my time";
fcontent[27]="All the other demons thinkin I've been drinkin' to spit rhymes";
fcontent[28]="Nah, but that's fine, takes time to find";
fcontent[29]="The confidence to rap, spit, speak your mind";
fcontent[30]="So if you wanna make small talk, beatin' your gums";
fcontent[31]="And rubbin' your thumbs together cause you think that you're better";
fcontent[32]="Well that's a sorry display of different shit, same day";
fcontent[33]="Next time, it's sayonara no ja mata ne";
fcontent[34]="Ya know I'm fixin' to dip out, So just to recap:";
fcontent[35]="If you ain't from the hood, then don't rap about it";
fcontent[36]="See, because here in Hell, we don't factor in social roles";
fcontent[37]="Me and all my demonkin rap to buy back our souls";
fcontent[38]="Every single prime-time crime show multiplied";
fcontent[39]="By 66 times comes alive here";
fcontent[40]="I'll be here awhile, that's a healthy assumption";
fcontent[41]="Day 666 down in Satan's rap dungeon";
fcontent[42]="Satan-sama, onegai";
fcontent[43]="Turn that bass up hella high!";
fcontent[44]="Devils, demons";
fcontent[45]="Oni, yokai";
fcontent[46]="Everybody got a soul to buy back!";
fcontent[47]="Rappin' apparitions with, well, mental conditions";
fcontent[48]="Cause we're all a little crazy here, sincerely mobbin' so severely!";
fcontent[49]="Satan-sama, onegai";
fcontent[50]="Turn that bass up hella high!";
fcontent[51]="Devils, demons";
fcontent[52]="Oni, yokai";
fcontent[53]="Everybody got a soul to buy back!";
fcontent[54]="Rappin' apparitions, when we get up in our stance";
fcontent[55]="You know that kamisama doesn't stand a chance";
fcontent[56]="Put your hands up!";
fcontent[57]="When first started rapping thought I'd hit it and quit it";
fcontent[58]="Now I'm out to prove you don't gotta be ghetto to spit it";
fcontent[59]="Though I salute to the ones who have had it rough";
fcontent[60]="World full of imitators and I've heard enough";
fcontent[61]="Besides, why you gotta curse in every verse that you rap in?";
fcontent[62]="Excessive use of motherfucker just to fill all the gaps in";
fcontent[63]="We've heard a million times about your hoes and swagger";
fcontent[64]="Are you gonna live and die another SoundCloud rapper?";
fcontent[65]="Gotta realize that it's not the rhymes compelling you";
fcontent[66]="The back of your mind, you know society is telling you";
fcontent[67]="Rebelling's the only way to have any fun";
fcontent[68]="In the Land of the Free know that all that you need is a problem?";
fcontent[69]="Got one, lemme grab my shotgun";
fcontent[70]="Fire off a couple shotties just to see the pricks run";
fcontent[71]="Guns for all Americans! Wow what a place!";
fcontent[72]="Soundin' such a good idea 'til I point mine in your face";
fcontent[73]="I'll take my words and I'll use 'em as a weapon";
fcontent[74]="Inspiring anxiety in every room I step in";
fcontent[75]="I already do that, I'm mobbin' on the other side of the world";
fcontent[76]="The homies turn around they see a fuckin' white girl (gaijindesu ka?)";
fcontent[77]="So ragtime rustlers, Honky-Tonk Hustlers";
fcontent[78]="Stand the the hell up if you vibe with this, sir";
fcontent[79]="Mister? Get to ditchin' with your generation of riches";
fcontent[80]="Or somebody here is gonna end up in stitches";
fcontent[81]="So a toast to the homies who have been where I've been:";
fcontent[82]="Watashi wa kowai na amerikahito";
fcontent[83]="Yo, how you gonna make those foreign lyrics stick?";
fcontent[84]="LOL smiley-face, suck my dick";
fcontent[85]="Think I'm here to spit the same shit? Man, please";
fcontent[86]="And well no, I'm not tryin' to be a Japanese";
fcontent[87]="But code-switching sounds bitching, if you can hack it";
fcontent[88]="Though I'd like to take a minute here and try to back-track it to...";
fcontent[89]="Satan-sama, onegai";
fcontent[90]="Turn that bass up hella high!";
fcontent[91]="Devils, demons";
fcontent[92]="Oni, yokai";
fcontent[93]="Everybody got a soul to buy back!";
fcontent[94]="Rappin' apparitions with, well, mental conditions";
fcontent[95]="Cause we're all a little crazy here, sincerely mobbin' so severely!";
fcontent[96]="Satan-sama, onegai";
fcontent[97]="Turn that bass up hella high!";
fcontent[98]="Devils, demons";
fcontent[99]="Oni, yokai";
fcontent[100]="Everybody got a soul to buy back!";
fcontent[101]="Rappin' apparitions, when we get up in our stance";
fcontent[102]="You know that kamisama doesn't stand a chance";
fcontent[103]="Put your hands up!";
fcontent[104]="Na-nana-na-na, nan the fuck? Alright!";
fcontent[105]="We're all a little crazy here, sincerely mobbin' so severely";
fcontent[106]="Na-nana-na-na, nan the fuck? Alright!";
fcontent[107]="You know that kamisama doesn't stand a chance";
fcontent[108]="Put your hands up!";
fcontent[109]="Na-nana-na-na, nan the fuck? Alright!";
fcontent[110]="Alrighty... Like I said, six to dip out. So um...";
fcontent[111]="Na-nana-na-na, nan the fuck? Alright!";
fcontent[112]="1 kara 2 kara 3 kara owari";
fcontent[113]="Ayo, no offense to SoundCloud";
fcontent[114]="I'm up in that bitch too";
fcontent[115]="Hehe...</a>";


closetag='</div>';

var fwidth='156px'; //set scroller width
var fheight='126px'; //set scroller height

var fadelinks=1;  //should links inside scroller content also fade like text? 0 for no, 1 for yes.

///No need to edit below this line/////////////////


var ie4=document.all&&!document.getElementById;
var DOM2=document.getElementById;
var faderdelay=0;
var index=0;


/*Rafael Raposo edited function*/
//function to change content
function changecontent(){
  if (index>=fcontent.length)
    index=0
  if (DOM2){
    document.getElementById("fscroller").style.color="rgb("+startcolor[0]+", "+startcolor[1]+", "+startcolor[2]+")"
    document.getElementById("fscroller").innerHTML=begintag+fcontent[index]+closetag
    if (fadelinks)
      linkcolorchange(1);
    colorfade(1, 15);
  }
  else if (ie4)
    document.all.fscroller.innerHTML=begintag+fcontent[index]+closetag;
  index++
}

// colorfade() partially by Marcio Galli for Netscape Communications.  ////////////
// Modified by Dynamicdrive.com

function linkcolorchange(step){
  var obj=document.getElementById("fscroller").getElementsByTagName("A");
  if (obj.length>0){
    for (i=0;i<obj.length;i++)
      obj[i].style.color=getstepcolor(step);
  }
}

/*Rafael Raposo edited function*/
var fadecounter;
function colorfade(step) {
  if(step<=maxsteps) {	
    document.getElementById("fscroller").style.color=getstepcolor(step);
    if (fadelinks)
      linkcolorchange(step);
    step++;
    fadecounter=setTimeout("colorfade("+step+")",stepdelay);
  }else{
    clearTimeout(fadecounter);
    document.getElementById("fscroller").style.color="rgb("+endcolor[0]+", "+endcolor[1]+", "+endcolor[2]+")";
    setTimeout("changecontent()", delay);
	
  }   
}

/*Rafael Raposo's new function*/
function getstepcolor(step) {
  var diff
  var newcolor=new Array(3);
  for(var i=0;i<3;i++) {
    diff = (startcolor[i]-endcolor[i]);
    if(diff > 0) {
      newcolor[i] = startcolor[i]-(Math.round((diff/maxsteps))*step);
    } else {
      newcolor[i] = startcolor[i]+(Math.round((Math.abs(diff)/maxsteps))*step);
    }
  }
  return ("rgb(" + newcolor[0] + ", " + newcolor[1] + ", " + newcolor[2] + ")");
}

if (ie4||DOM2)
  document.write('<div id="fscroller" style="border:1px solid black;width:'+fwidth+';height:'+fheight+'"></div>');

if (window.addEventListener)
window.addEventListener("load", changecontent, false)
else if (window.attachEvent)
window.attachEvent("onload", changecontent)
else if (document.getElementById)
window.onload=changecontent

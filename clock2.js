var myvar = setInterval(start_clock,1);

function start_clock(){
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
mstime = d.getMilliseconds();

hrotation = (30 * htime) + (mtime / 2) + (stime * 0.00833333333) + (mstime * 0.00000833333333);
mrotation = (6 * mtime) + (stime/10) + (mstime/10000);
srotation = (6 * stime) + (mstime * 0.006);

hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
second.style.transform = `rotate(${srotation}deg)`;

}

// this thing really works the clock runs so so smooth..
// it is so satisfying to finish this one...


// and i think i should make a program to mimick the rotation of planets....it will be so dope...
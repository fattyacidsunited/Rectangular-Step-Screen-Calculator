const calculate = () => {   //fat arrow function
    //importing the inputs >>
    //flowCal
    const u = parseFloat(document.getElementById('u').value);
    const pf = parseFloat(document.getElementById('pf').value);
    //const x = document.getElementById('x').value;
    const e = parseFloat(document.getElementById('e').value);
    const h = parseFloat(document.getElementById('h').value);
    const i = parseFloat(document.getElementById('i').value);
    const j = parseFloat(document.getElementById('j').value);
    const n = parseFloat(document.getElementById('n').value);
    const f = parseFloat(document.getElementById('f').value);
    const k = parseFloat(document.getElementById('k').value);
    const p = parseFloat(document.getElementById('p').value);



    //formulas

    conversion = u*0.0115740; // converts MLD to m3/s input val in MLD
    xconv = u*pf; // original MLD input multiplied by the peak factor 
    outputFlow = conversion*pf; //multiplies the converted value with the peak factor entered
    area = e*f; //area
    approachVel = outputFlow/area; // approach velocity
    spacingW = (j/2) + (j/2) + h ; // l in the notes.txt
    spacingNo = k/spacingW ; // m in the notes.txt spacing number
    barsNo =  spacingNo + 1; // m1 in notes.txt
    screenW = k - (barsNo*h); // effective width of the screen
    inclinedH = Math.round(f/Math.sin(n)); // inclined height (change : rounded)
    totHScreen = 1 + f + p; // total height of the screen (change: f + p)
    effectiveSA = inclinedH*screenW; // effective screen area
    velocityScreen = outputFlow / (screenW*inclinedH);  //velocity through the screen
    lenOccIncli = totHScreen / Math.tan(n); //length of the screen occupied by inclination in radians
    upstreamL = 1.1*e;
    downstreamL = 0.7*e;
    totLChamber = lenOccIncli + upstreamL + downstreamL; //total length of the chamber
    // totLChamberR = Math.round(totLChamber); //total length of the chamber rounded 
    headerCleanS = [(velocityScreen*velocityScreen) - (approachVel*approachVel)]/[2*9.81*0.7]; //head loss through the  clean screen
    velCloggedScr = velocityScreen/0.5; //velocity through clogged screen
    screenClogC = [(velCloggedScr*velCloggedScr) - (approachVel*approachVel)]/[2*9.81*0.6]  //screen at clogging condition 
    volScreening = (67*xconv*1000000)/1000000; //volume of screening in L
    totVolScr = volScreening/1000; //total volume of screen


    //HTML editing part
    
    // document.getElementById('conversion').innerHTML = `Value in ${conversion} cubic meter per second`;
    document.getElementById('outputFlow').innerHTML = `Flow = ${outputFlow} cubic meter per second`;
    document.getElementById('area').innerHTML = `The area = ${area} sq. meter`;
    document.getElementById('approachVel').innerHTML = `Approach Velocity = ${approachVel} m/s`;
    document.getElementById('spacingW').innerHTML = `Effective one spacing width = ${spacingW} m`;
    document.getElementById('spacingNo').innerHTML = `Number of spacing = ${spacingNo} `;
    document.getElementById('barsNo').innerHTML = `Number of bars = ${barsNo} `;
    document.getElementById('screenW').innerHTML = `Effective width of the screen = ${screenW} m `;
    document.getElementById('inclinedH').innerHTML = `Inclined height = ${inclinedH} m `;
    document.getElementById('totHScreen').innerHTML = `Total height of the screen = ${totHScreen} m `;
    document.getElementById('effectiveSA').innerHTML = `Effective screen area = ${effectiveSA} sq. m`;
    document.getElementById('velocityScreen').innerHTML = `Velocity through the screen = ${velocityScreen} m/s `;
    document.getElementById('lenOccIncli').innerHTML = `Length of the screen occupied by inclination = ${lenOccIncli} m `;
    document.getElementById('upstreamL').innerHTML = `Upstream length = ${upstreamL} m `;
    document.getElementById('downstreamL').innerHTML = `Downstream length = ${downstreamL} m `;
    document.getElementById('totLChamber').innerHTML = `Total length of the chamber = ${totLChamber} m `;
    // document.getElementById('totLChamberR').innerHTML = `total length of the chamber (rounded) ${totLChamberR} `;
    document.getElementById('headerCleanS').innerHTML = `Head loss through clean screen = ${headerCleanS} m `;
    document.getElementById('velCloggedScr').innerHTML = `Velocity through clogged condition = ${velCloggedScr} m/s `;
    document.getElementById('screenClogC').innerHTML = `Headloss at clogged condition = ${screenClogC} m `;
    document.getElementById('volScreening').innerHTML = `Volume of screening = ${volScreening} cubic metre `;
    document.getElementById('totVolScr').innerHTML = `total volume of screen = ${totVolScr} cubic metre `;



}

document.getElementById('calFlow').addEventListener('click', calculate);
document.getElementById('calDim').addEventListener('click', calculate);

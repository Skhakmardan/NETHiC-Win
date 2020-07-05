var enhancerss={};
var prometerss={};

var pcolor= "#fcff69";
var ancolor= "#00FF00";


// prometer part
function readprometer(x) {


    //console.log(f)
    $.mobile.loading().show();
    if (x) {
        if(x.match(".csv") || x.match(".txt")){

            getprometer(x);
        }
        else{alert("input format error")}

    } else {
        alert("Failed to load file");
    }

}


function getprometer(file){

    Papa.parse(file,{
        header: false,
        download: true,
        dynamicTyping: true,
        complete: function(results) {


            useprom(results);


        }});
}

function useprom(prometer){
    var rawdata = prometer;

    var rawdata1= [],
        rawdata2= [],
        rawdata3= [],
        rawdata4= [],
        rawdata5= [],
        rawdata6= [],
        rawdata7= [],
        rawdata8= [],
        rawdata9= [],
        rawdata10= [],
        rawdata11= [],
        rawdata12= [],
        rawdata13= [],
        rawdata14= [],
        rawdata15= [],
        rawdata16= [],
        rawdata17= [],
        rawdata18= [],
        rawdata19= [],
        rawdata20= [],
        rawdata21= [],
        rawdata22= [],
        rawdatax= [],
        rawdatay= [];

    var c1= 0,
        c2= 0,
        c3= 0,
        c4= 0,
        c5= 0,
        c6= 0,
        c7= 0,
        c8= 0,
        c9= 0,
        c10= 0,
        c11= 0,
        c12= 0,
        c13= 0,
        c14= 0,
        c15= 0,
        c16= 0,
        c17= 0,
        c18= 0,
        c19= 0,
        c20= 0,
        c21= 0,
        c22= 0,
        cx= 0,
        cy= 0;

    for(i=0 ; i<rawdata.data.length;i++){


        if(rawdata.data[i][1] == "chr1"){
            rawdata1[c1]=rawdata.data[i]
            c1++;
        }
        if(rawdata.data[i][1] == "chr2"){
            rawdata2[c2]=rawdata.data[i]
            c2++;
        }
        if(rawdata.data[i][1] == "chr3"){
            rawdata3[c3]=rawdata.data[i]
            c3++;
        }
        if(rawdata.data[i][1]== "chr4"){
            rawdata4[c4]=rawdata.data[i]
            c4++;
        }



        if(rawdata.data[i][1] == "chr5"){
            rawdata5[c5]=rawdata.data[i]
            c5++;
        }
        if(rawdata.data[i][1] == "chr6"){
            rawdata6[c6]=rawdata.data[i]
            c6++;
        }
        if(rawdata.data[i][1] == "chr7"){
            rawdata7[c7]=rawdata.data[i]
            c7++;
        }
        if(rawdata.data[i][1] == "chr8"){
            rawdata8[c8]=rawdata.data[i]
            c8++;
        }




        if(rawdata.data[i][1] == "chr9"){
            rawdata9[c9]=rawdata.data[i]
            c9++;
        }
        if(rawdata.data[i][1] == "chr10"){
            rawdata10[c10]=rawdata.data[i]
            c10++;
        }
        if(rawdata.data[i][1] == "chr11"){
            rawdata11[c11]=rawdata.data[i]
            c11++;
        }
        if(rawdata.data[i][1] == "chr12"){
            rawdata12[c12]=rawdata.data[i]
            c12++;
        }


        if(rawdata.data[i][1] == "chr13"){
            rawdata13[c13]=rawdata.data[i]
            c13++;
        }
        if(rawdata.data[i][1] == "chr14"){
            rawdata14[c14]=rawdata.data[i]
            c14++;
        }
        if(rawdata.data[i][1]== "chr15"){
            rawdata15[c15]=rawdata.data[i]
            c15++;
        }
        if(rawdata.data[i][1] == "chr16"){
            rawdata16[c16]=rawdata.data[i]
            c16++;
        }

        if(rawdata.data[i][1] == "chr17"){
            rawdata17[c17]=rawdata.data[i]
            c17++;
        }
        if(rawdata.data[i][1] == "chr18"){
            rawdata18[c18]=rawdata.data[i]
            c18++;
        }
        if(rawdata.data[i][1] == "chr19"){
            rawdata19[c19]=rawdata.data[i]
            c19++;
        }
        if(rawdata.data[i][1] == "chr20"){
            rawdata20[c20]=rawdata.data[i]
            c20++;
        }


        if(rawdata.data[i][1] == "chr21"){
            rawdata21[c21]=rawdata.data[i]
            c21++;
        }
        if(rawdata.data[i][1] == "chr22"){
            rawdata22[c22]=rawdata.data[i]
            c22++;
        }



        if(rawdata.data[i][1] == "chrx" || rawdata.data[i][1] == "chrX"){
            rawdatax[cx]=rawdata.data[i]
            cx++;
        }
        if(rawdata.data[i][1] == "chry"|| rawdata.data[i][1] == "chrY"){
            rawdatay[cy]=rawdata.data[i]
            cy++;
        }
    }

    if($("#chrr1").length != 0) {
        var d={};
        d.data=rawdata1;
        buildprom(d,1);
    }
    if($("#chrr2").length != 0) {
        var d2={};
        d2.data=rawdata2;
        //console.log(d2);
        buildprom(d2,2);
    }
    if($("#chrr3").length != 0) {
        var d3={};
        d3.data=rawdata3;
        buildprom(d3,3);
    }
    if($("#chrr4").length != 0) {
        var d4={};
        d4.data=rawdata4;
        buildprom(d4,4);
    }
    if($("#chrr5").length != 0) {
        var d5={};
        d5.data=rawdata5;
        buildprom(d5,5);
    }
    if($("#chrr6").length != 0) {
        var d6={};
        d6.data=rawdata6;
        buildprom(d6,6);
    }
    if($("#chrr7").length != 0) {
        var d7={};
        d7.data=rawdata7;
        buildprom(d7,7);
    }
    if($("#chrr8").length != 0) {
        var d8={};
        d8.data=rawdata8;
        buildprom(d8,8);
    }if($("#chrr9").length != 0) {
        var d9={};
        d9.data=rawdata9;
        buildprom(d9,9);
    }if($("#chrr10").length != 0) {
        var d10={};
        d10.data=rawdata10;
        buildprom(d10,10);
    }if($("#chrr11").length != 0) {
        var d11={};
        d11.data=rawdata11;
        buildprom(d11,11);
    }
    if($("#chrr12").length != 0) {
        var d12={};
        d12.data=rawdata12;
        buildprom(d12,12);
    }if($("#chrr13").length != 0) {
        var d13={};
        d13.data=rawdata13;
        buildprom(d13,13);
    }if($("#chrr14").length != 0) {
        var d14={};
        d14.data=rawdata14;
        buildprom(d14,14);
    }if($("#chrr15").length != 0) {
        var d15={};
        d15.data=rawdata15;
        buildprom(d15,15);
    }if($("#chrr16").length != 0) {
        var d16={};
        d16.data=rawdata16;
        buildprom(d16,16);
    }if($("#chrr17").length != 0) {
        var d17={};
        d17.data=rawdata17;
        buildprom(d17,17);
    }if($("#chrr18").length != 0) {
        var d18={};
        d18.data=rawdata18;
        buildprom(d18,18);
    }if($("#chrr19").length != 0) {
        var d19={};
        d19.data=rawdata19;
        buildprom(d19,19);
    }if($("#chrr20").length != 0) {
        var d20={};
        d20.data=rawdata20;
        buildprom(d20,20);
    }if($("#chrr21").length != 0) {
        var d21={};
        d21.data=rawdata21;
        buildprom(d21,21);
    }if($("#chrr22").length != 0) {
        var d22={};
        d22.data=rawdata22;
        buildprom(d22,22);
    }if($("#chrrx").length != 0) {
        var dx={};
        dx.data=rawdatax;
        buildprom(dx,23);
    }if($("#chrry").length != 0) {
        var dy={};
        dy.data=rawdatay;
        buildprom(dy,24);
    }
}


function buildprom(prometer,id){

    var datas=[];
    var prometers={};
    //console.log(prometer);
    for(i=0;i<prometer.data.length;i++) {
        if(prometer.data[i][0]!= undefined && prometer.data[i][1] != undefined && prometer.data[i][2] != undefined
            && prometer.data[i][3] != undefined && prometer.data[i][4] != undefined && prometer.data[i][5] != undefined){
            datas[i] = {
                "class": prometer.data[i][0],
                "chr": prometer.data[i][1],
                "position1": prometer.data[i][2],
                "position2": prometer.data[i][3],
                "sign":prometer.data[i][4],
                "name":prometer.data[i][5]
            };}
    }
    prometers.data=datas;

    prometerss[id]=prometers;
    prometerss[id].id=id;

    var idb =$("#select-chr").val();
    if(idb == id){
        promdiag(prometerss);

    }
}
function promdiag(prometers){
    var id =$("#select-chr").val();
    //console.log( id);
    prometer=prometers[id]
    var ind = d3.select("#plot").selectAll(".node");
    var ind=ind.nodes()
    var poss1=[]
    for (i=0;i<ind.length;i++){
        poss1[i]=Number(ind[i].id)
    }


    //show range on each prometer


    var x = d3.scaleLinear()
        .range([ 0, 1920 ])
        .domain([0,Math.max(...poss1)]);


    d3.select("#plot")
        .append("rect")
        .attr("x", 0)
        .attr("y", -30)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr('class', 'prect1')
        .attr("width", 1950)
        .style("fill", "gray")
        .attr("height",40  );
    d3.select("#plot").selectAll(".prect")
        .data(prometer.data)
        .enter()
        .append("rect")
        .attr("x",  function(d, i) {return  x(Number(d.position1)) })
        .attr("y", -30)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("name", function(d, i){return d.name } )
        .attr('class', 'prect')
        .attr("width", 0.5)
        .style("fill", pcolor)
        .attr("height",40 );
    //console.log( id);

    d3.select("#plot").append("text")
        .attr("x", -270)
        .attr("y", 5)
        .style("font-size", "50px")
        .text("Promoter")






    $.mobile.loading().hide();
    // console.log(  d3.select("#plot").selectAll(".prometer"));

}

// enhancer part
// part for use enhancer Hi-C data

function readenhancer1() {

    var x = document.getElementById('enhancer').files[0];
    //console.log(f)
    $.mobile.loading().show();
    if (x) {
        if(x.name.match(".csv") || x.name.match(".txt")){

            getenh(x);
        }
        else{alert("input format error")}

    } else {
        alert("Failed to load file");
    }

}
function getenh(file){

    Papa.parse(file,{
        header: false,
        download: true,
        dynamicTyping: true,
        complete: function(results) {


            useenh(results);


        }});
}
function useenh(enhancer){

    var rawdata = enhancer;

    var rawdata1= [],
        rawdata2= [],
        rawdata3= [],
        rawdata4= [],
        rawdata5= [],
        rawdata6= [],
        rawdata7= [],
        rawdata8= [],
        rawdata9= [],
        rawdata10= [],
        rawdata11= [],
        rawdata12= [],
        rawdata13= [],
        rawdata14= [],
        rawdata15= [],
        rawdata16= [],
        rawdata17= [],
        rawdata18= [],
        rawdata19= [],
        rawdata20= [],
        rawdata21= [],
        rawdata22= [],
        rawdatax= [],
        rawdatay= [];

    var c1= 0,
        c2= 0,
        c3= 0,
        c4= 0,
        c5= 0,
        c6= 0,
        c7= 0,
        c8= 0,
        c9= 0,
        c10= 0,
        c11= 0,
        c12= 0,
        c13= 0,
        c14= 0,
        c15= 0,
        c16= 0,
        c17= 0,
        c18= 0,
        c19= 0,
        c20= 0,
        c21= 0,
        c22= 0,
        cx= 0,
        cy= 0;

    for(i=0 ; i<rawdata.data.length;i++){


        if(rawdata.data[i][0] == "chr1"){
            rawdata1[c1]=rawdata.data[i]
            c1++;
        }
        if(rawdata.data[i][0] == "chr2"){
            rawdata2[c2]=rawdata.data[i]
            c2++;
        }
        if(rawdata.data[i][0] == "chr3"){
            rawdata3[c3]=rawdata.data[i]
            c3++;
        }
        if(rawdata.data[i][0]== "chr4"){
            rawdata4[c4]=rawdata.data[i]
            c4++;
        }



        if(rawdata.data[i][0] == "chr5"){
            rawdata5[c5]=rawdata.data[i]
            c5++;
        }
        if(rawdata.data[i][0] == "chr6"){
            rawdata6[c6]=rawdata.data[i]
            c6++;
        }
        if(rawdata.data[i][0] == "chr7"){
            rawdata7[c7]=rawdata.data[i]
            c7++;
        }
        if(rawdata.data[i][0] == "chr8"){
            rawdata8[c8]=rawdata.data[i]
            c8++;
        }




        if(rawdata.data[i][0] == "chr9"){
            rawdata9[c9]=rawdata.data[i]
            c9++;
        }
        if(rawdata.data[i][0] == "chr10"){
            rawdata10[c10]=rawdata.data[i]
            c10++;
        }
        if(rawdata.data[i][0] == "chr11"){
            rawdata11[c11]=rawdata.data[i]
            c11++;
        }
        if(rawdata.data[i][0] == "chr12"){
            rawdata12[c12]=rawdata.data[i]
            c12++;
        }


        if(rawdata.data[i][0] == "chr13"){
            rawdata13[c13]=rawdata.data[i]
            c13++;
        }
        if(rawdata.data[i][0] == "chr14"){
            rawdata14[c14]=rawdata.data[i]
            c14++;
        }
        if(rawdata.data[i][0]== "chr15"){
            rawdata15[c15]=rawdata.data[i]
            c15++;
        }
        if(rawdata.data[i][0] == "chr16"){
            rawdata16[c16]=rawdata.data[i]
            c16++;
        }

        if(rawdata.data[i][0] == "chr17"){
            rawdata17[c17]=rawdata.data[i]
            c17++;
        }
        if(rawdata.data[i][0] == "chr18"){
            rawdata18[c18]=rawdata.data[i]
            c18++;
        }
        if(rawdata.data[i][0] == "chr19"){
            rawdata19[c19]=rawdata.data[i]
            c19++;
        }
        if(rawdata.data[i][0] == "chr20"){
            rawdata20[c20]=rawdata.data[i]
            c20++;
        }


        if(rawdata.data[i][0] == "chr21"){
            rawdata21[c21]=rawdata.data[i]
            c21++;
        }
        if(rawdata.data[i][0] == "chr22"){
            rawdata22[c22]=rawdata.data[i]
            c22++;
        }



        if(rawdata.data[i][0] == "chrx" || rawdata.data[i][1] == "chrX"){
            rawdatax[cx]=rawdata.data[i]
            cx++;
        }
        if(rawdata.data[i][0] == "chry"|| rawdata.data[i][1] == "chrY"){
            rawdatay[cy]=rawdata.data[i]
            cy++;
        }
    }


    if($("#chr1").length != 0) {
        var d={};
        d.data=rawdata1;
        buildenh(d,1);
    }
    if($("#chr2").length != 0) {
        var d2={};
        d2.data=rawdata2;
        //console.log(d2);
        buildenh(d2,2);
    }
    if($("#chr3").length != 0) {
        var d3={};
        d3.data=rawdata3;
        buildenh(d3,3);
    }
    if($("#chr4").length != 0) {
        var d4={};
        d4.data=rawdata4;
        buildenh(d4,4);
    }
    if($("#chr5").length != 0) {
        var d5={};
        d5.data=rawdata5;
        buildenh(d5,5);
    }
    if($("#chr6").length != 0) {
        var d6={};
        d6.data=rawdata6;
        buildenh(d6,6);
    }
    if($("#chr7").length != 0) {
        var d7={};
        d7.data=rawdata7;
        buildenh(d7,7);
    }
    if($("#chr8").length != 0) {
        var d8={};
        d8.data=rawdata8;
        buildenh(d8,8);
    }if($("#chr9").length != 0) {
        var d9={};
        d9.data=rawdata9;
        buildenh(d9,9);
    }if($("#chr10").length != 0) {
        var d10={};
        d10.data=rawdata10;
        buildenh(d10,10);
    }if($("#chr11").length != 0) {
        var d11={};
        d11.data=rawdata11;
        buildenh(d11,11);
    }
    if($("#chr12").length != 0) {
        var d12={};
        d12.data=rawdata12;
        buildenh(d12,12);
    }if($("#chr13").length != 0) {
        var d13={};
        d13.data=rawdata13;
        buildenh(d13,13);
    }if($("#chr14").length != 0) {
        var d14={};
        d14.data=rawdata14;
        buildenh(d14,14);
    }if($("#chr15").length != 0) {
        var d15={};
        d15.data=rawdata15;
        buildenh(d15,15);
    }if($("#chr16").length != 0) {
        var d16={};
        d16.data=rawdata16;
        buildenh(d16,16);
    }if($("#chr17").length != 0) {
        var d17={};
        d17.data=rawdata17;
        buildenh(d17,17);
    }if($("#chr18").length != 0) {
        var d18={};
        d18.data=rawdata18;
        buildenh(d18,18);
    }if($("#chr19").length != 0) {
        var d19={};
        d19.data=rawdata19;
        buildenh(d19,19);
    }if($("#chr20").length != 0) {
        var d20={};
        d20.data=rawdata20;
        buildenh(d20,20);
    }if($("#chr21").length != 0) {
        var d21={};
        d21.data=rawdata21;
        buildenh(d21,21);
    }if($("#chr22").length != 0) {
        var d22={};
        d22.data=rawdata22;
        buildenh(d22,22);
    }if($("#chrx").length != 0) {
        var dx={};
        dx.data=rawdatax;
        buildenh(dx,23);
    }if($("#chry").length != 0) {
        var dy={};
        dy.data=rawdatay;

        buildenh(dy,24);
    }
}
function buildenh(enhancer,id){

    var datas=[];
    var enhancers={};

    for(i=0;i<enhancer.data.length;i++) {
        if(enhancer.data[i][0]!= undefined && enhancer.data[i][1] != undefined && enhancer.data[i][2] != undefined
            && enhancer.data[i][3] != undefined ){
            datas[i] = {
                "chr": enhancer.data[i][0],
                "class":enhancer.data[i][1],
                "position1": enhancer.data[i][2],
                "position2": enhancer.data[i][3]
            };}
    }
    enhancers.data=datas;

    enhancerss[id]=enhancers;
    enhancerss[id].id=id;

    var idb =$("#select-chr").val();
    if(idb == id){
        enhdiag(enhancerss);
    }
}
function enhdiag(enhancers){

    var id =$("#select-chr").val();

    var enhancer=enhancers[id]
    var ind = d3.select("#plot").selectAll(".rect");
    var ind1 = d3.select("#plot").selectAll(".rect1");


    var y = d3.scaleLinear()
        .range([ 50, 1950 ])
        .domain([0,Math.max(...poss1)]);


    d3.select("#plot")
        .append("rect")
        .attr("x", 2300)
        .attr("y", 50)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr('class', 'erect1')
        .attr("width", 100)
        .style("fill", "gray")
        .attr("height",1900  );
    d3.select("#plot").selectAll(".erect")
        .data(enhancer.data)
        .enter()
        .append("rect")
        .attr("x", 2300)
        .attr("y", function(d, i) {return  y(Number(d.position1)) })
        .attr("rx", 5)
        .attr("ry", 5)
        .attr('class', 'erect')
        .attr("width", 100)
        .style("fill", ecolor)
        .attr("height",0.5 );
    //console.log( id);

    d3.select("#plot").append("text")
        .attr("x", 2225)
        .attr("y", 0)
        .style("font-size", "60px")
        .text("Enhancer")




    $.mobile.loading().hide();
    // console.log(  d3.select("#plot").selectAll(".prometer"));

}
var width ,
    height ;
var margin =40,
    pad = margin / 2,
    radius=6,
    yfixed = 150 ;

var groups=[]
var groups1=[]
var glinks=[]
var lflag=0
var size
var simulation

var selectcolor ="#FF0000";
var intercolor = "#000000";
var ancolor="#228B22";

var canvas
var znodes

var externallinks
var chromosome
var resolutions
let flinks
var select=[]
var select1=-1
var select2=-1
var groupsz =[]
var glinkz =[]
var znodes1=[]
var locallinks1=[]
var simulation1
var paths
var groupss
var constlink
var color = [];
while (color.length < 1000) {
    do {
        var colors = Math.floor((Math.random()*1000000));
    } while (color.indexOf(colors) >= 0);
    color.push("#" + ("000000" + colors.toString(16)).slice(-6));
}
//console.log(color);
var nodess=[]
var nodes=[]
var cluster=[]
var info=[]
var maxl
var flag
var link
var lev=0
function resets(){
    flagg=0
    glinkz=[];
    groupsz=[];

    lev==0
    d3.selectAll("path").remove()
    d3.selectAll("line").remove()
    d3.selectAll(".label1").remove()
    d3.selectAll(".labels").remove()
    d3.selectAll("circle").remove()
    d3.selectAll("text").remove()
    d3.selectAll("rect").remove()
    d3.selectAll(".linksz").remove()
    d3.selectAll(".label").remove()
    d3.selectAll(".locusevalue").remove()
    d3.selectAll(".locusevalue1").remove()
    drawnetwork(flinks)
}


$(document).ready(function () {
    width = $("#diagram").width();
    height = $("#diagram").height();

     canvas = d3.select("#diagram").append('svg')
        .attr("id", "net")
        .attr("width", width)
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", ' '+ -(width) +' -200 ' + (height*3+300) + ' ' + (height*3+300))
        .attr("height", height)
         .on("dblclick",function (d,i) {

             if (lev==2) {
                 flagg=1
                 d3.selectAll("circle").remove()
                 d3.selectAll(".linksz").remove()
                 d3.selectAll("line").remove()
                 d3.selectAll(".label1").remove()
                 d3.selectAll(".labels").remove()
                 d3.selectAll("circle").remove()
                 d3.selectAll("text").remove()
                 d3.selectAll("rect").remove()
                 d3.selectAll(".linksz").remove()
                 d3.selectAll(".label").remove()
                 d3.selectAll(".locusevalue").remove()
                 d3.selectAll(".locusevalue1").remove()
                 d3.selectAll("path").remove()

                 var h=znodes1
                 var h1=locallinks1
                 znodes1.length=0
                 locallinks1.length=0
                 glinkz.length=0
                 groupsz.length=0


                 drawnetwork(flinks)
             }
             if (lev>2) {
                 circular=0
                 d3.selectAll(".linksz").remove()
                 d3.selectAll(".label").remove()
                 d3.selectAll(".labels").remove()
                 d3.selectAll("circle").remove()
                 d3.selectAll(".locusevalue").remove()
                 d3.selectAll(".locusevalue1").remove()
                 d3.selectAll(".d"+(select[0]-1))
                     .attr("height", function () {
                         return (1300/nodes.length)
                     })
                     .style("fill", color[select[0]-1])
                 flag=0
                 flagg=0
                 drawzoomnetwork(select,flinks)
             }
         })
        .append("g");
})
var allnodes
var maxr
var minr
function network(graph){
    //console.log(graph)
    resolutions=graph.fragmentR
    chromosome=graph.chr
    console.log(graph)
    glinks=graph.nlinks[0]
     nodes=graph.znodes
    info=graph.outputs
    minr=graph.min
    maxr=graph.max
    allnodes=graph.maxl.sort(function(a, b){return a - b})
    maxll=Math.max(...graph.maxl.sort(function(a, b){return a - b}))

    minll=Math.min(...graph.maxl.sort(function(a, b){return a - b}))


    for(i=0 ; i< nodes.length; i++){
        nodess[i]=Number(nodes[i].node)
    }

    var n = graph.znodes
    //console.log(n)
    var l = graph.nlinks
    znodes=n
    let locallinks=l
    var vv=0
    var vv1=0
    var vv2=0
    var count=0
    for (j=0;j<n.length;j++){

            groups[vv]={
                id:vv+1,
                interactions: n[vv].length
            }
            count=count+n[j].length
            vv++

    }
    //console.log(groups1)
    console.log(groups)
    size = d3.scaleLinear()
        .domain([1, count])
        .range([0,  250]);
    flinks=locallinks.map((x) => x);

    drawnetwork(locallinks)

}

Array.prototype.unique = function() {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}
function sortNumber(a, b) {
    return a - b;
}
Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});
var label1
var node
var flagg=0
function drawnetwork(locall){
    select=[]
    flagg=0
    var locallinks = locall.concat([])
    //console.log(locallinks)
    lev=1
    link = canvas
        .selectAll("line")
        .data(glinks)
        .enter()
        .append("line")
        .style("stroke-width",Math.max(1,50/glinks.length))
        .attr("class","links")
        .style("stroke", "transparent")
    //console.log(groups)


     node = canvas
        .selectAll("circle")
        .data(groups)
        .enter()
        .append("circle")
        .attr("id",function (d,i) {
            return  i
        })
        .attr("r", function (d,i) {
            return Math.max(size(d.interactions), 40)
        })
        .style("fill", function (d,i) {
            return color[i]
        })
         .on("mouseover",function (d,i) {

             d3.selectAll("rect").style("fill", "transparent")
                 d3.selectAll(".d"+(d.id-1))
                     .attr("height", 10)
                     .style("fill", selectcolor)
             



         })
         .on("mouseout",function (d,i) {

             for(i=0;i<znodes.length;i++){
                 d3.selectAll(".d"+(i))
                     .attr("height", function () {
                         return (1300/allnodes.length)
                     })
                     .style("fill", function () {
                        return color[i]
                     })
             }

                 //d3.selectAll(".locusevalue").remove()




         })
         .on("click",function (d,i) {
             //console.log(d.id)
             if(info[0]==null){info[0]={community_ID:-1}
             }
             var t=info.filter(function (value){
                 if (value.community_ID==d.id){
                     return value
                 }
             })
             for (i=0;i<t[0].fragments.length;i++){
                 groupsz[i]={
                     id:t[0].fragments[i]
                 }
             }
             if (t[0].fragment=="F"){
             for (i=0;i<t[0].Links.length;i++){
                 glinkz[i]={
                     "source":t[0].Links[i].split("-")[0],
                     "target":t[0].Links[i].split("-")[1]
                 }
             }
             }
             else {
                 flagg=1
                 for (i=0;i<t[0].Links.length;i++){
                     glinkz[i]={
                         "source":t[0].Links[i].source,
                         "target":t[0].Links[i].target
                     }
                 }
             }
             d3.selectAll("circle").remove()
             d3.selectAll(".links").remove()
             //console.log(groupsz)
             //console.log(glinkz)
             select.push(d.id)
             //console.log(select)
             drawzoomnetwork(d.id,glinkz)
         })



    label1 = label1 = canvas.selectAll(null)
        .data(groups)
        .enter()
        .append("text")
        .attr("class","label1")
        .text(function (d) { return d.id; })
        .style("text-anchor", "middle")
        .style("fill", "#ffffff")
        .style("font-family", "sans-serif")
        .style("font-size", "40px");

    var tsh=0
    var tsl
    if (Number(resolutions)>=1000000){
        tsh=Number(resolutions)/1000000
        tsl="M"
    }
    else if (Number(resolutions)<1000000){
        tsh=Number(resolutions)/1000
        tsl="K"
    }


    canvas.append("text")
        .attr("x", 2150)
        .attr("y", -10)
        .text("Regions given in "+tsh+tsl+" resolution")
        .style("text-anchor", "middle")
        .style("fill", "#000000")
        .style("font-family", "sans-serif")
        .style("font-size", "45px");



    simulation = d3.forceSimulation(groups)

        .force("charge", d3.forceManyBody().strength(-2500))
        .force("x", d3.forceX(width / 2).strength(0.3))
        .force("y", d3.forceY(height+200 ).strength(0.4))
        .force("link", d3.forceLink()
            .id(function(d) { return d.id; })
            .links(glinks).strength(0).distance(700)

        )
        .velocityDecay(.9)
        .on("tick", ticked);

    simulation.alpha(1).restart();


    drawlegend(-1)


}
var minll
var minl
var maxll
var y
var v12
function drawlegend(id) {


    var maax=maxll
    var miin=minll
    maxl=Math.floor(maxr)
    minl=minr
    d3.selectAll("rect").remove()
    d3.selectAll(".llocations").remove()
    d3.selectAll(".pindex").remove()
    d3.selectAll(".chrlocations").remove()

    canvas.append("rect")
        .attr("x", 2200)
        .attr("y", 40)
        .attr("width", 80)
        .attr("height", 1300)
        .style("fill", "#ffffff")
        .style("stroke", "#000000")
        .attr("class","chrlocations")

         v12 = d3.scaleLinear()
        .range([ minl, maxl ])
        .domain([miin,maax]);


         y = d3.scaleLinear()
        .range([ 40, 1340 ])
        .domain([minl*100000,maxl*100000]);

    if (id==-1 ){
        for (a=0;a<znodes.length;a++){
        canvas.selectAll(null)
            .data(nodes[a])
            .enter()
            .append("rect")
            .attr("class",function (d,i) {

                if (a>=groups.length){

                    return "d"+(groups.length-1)
                }
                else{
                    return "d"+a
                }
            })
            .attr("id",function (d,i) {
                return "s"+d.name
            })
            .style("fill", function (d,i) {
                return color[a]
            })
            .attr("x",2200)
            .attr("y", function (d,i) {
                return y(v12(Number(d.name))*100000)-(1300/allnodes.length)/2
            })
            .attr("width", 80)
            .attr("height", function () {
                return (1300/allnodes.length)
            })
    }
    }
    else {

            canvas.selectAll(null)
                .data(nodes[id])
                .enter()
                .append("rect")
                .attr("class",function (d,i) {
                    return "d"+id
                })
                .attr("id",function (d,i) {
                    return "s"+d.name
                })
                .style("fill", function (d,i) {
                    return color[id]
                })
                .attr("x",2200)
                .attr("y", function (d,i) {
                    return y(v12(Number(d.name))*100000)-(1300/(nodes[id].length+10))/2
                })
                .attr("width", 80)
                .attr("height", function () {
                    return (1300/(nodes[id].length+10))
                })

    }

    canvas.append("line")
        .attr("x1", 2150)
        .attr("y1", 40)
        .attr("x2", 2150)
        .attr("y2", 1340)
        .attr("stroke-width", 10)
        .style("stroke", "#000000")
        .attr("class","llocations")




    var levels= Math.floor((maxl-minl)/10)

    for (l=minl;l<=maxl;l=l+levels){
        if (l<(maxl-(levels/3))){
        canvas.append("text")
            .text(Math.floor(l))
            .attr("class", "pindex")
            .style("font-size", "40px")
            .attr("x",2120)
            .attr("y",  y(l*100000))
            .attr("text-anchor", "end");
            canvas.append("line")
                .attr("x1", 2130)
                .attr("y1", y(l*100000))
                .attr("x2", 2170)
                .attr("y2", y(l*100000))
                .attr("stroke-width", 10)
                .style("stroke", "#000000")
                .attr("class","chrlocations")



         if (l+levels>maxl ){
                canvas.append("text")
                    .text(maxl)
                    .attr("class", "pindex")
                    .style("font-size", "40px")
                    .attr("x",2120)
                    .attr("y",  y(maxl*100000))
                    .attr("text-anchor", "end");
             canvas.append("line")
                 .attr("x1", 2130)
                 .attr("y1", y(maxl*100000))
                 .attr("x2", 2170)
                 .attr("y2", y(maxl*100000))
                 .attr("stroke-width", 10)
                 .style("stroke", "#000000")
                 .attr("class","chrlocations")
            }
        }
        else if ((l)<(maxl) && l>=(maxl-(levels/3)) ){

            canvas.append("text")
                .text(maxl)
                .attr("class", "pindex")
                .style("font-size", "40px")
                .attr("x",2120)
                .attr("y",  y(maxl*100000))
                .attr("text-anchor", "end");
            canvas.append("line")
                .attr("x1", 2130)
                .attr("y1", y(maxl*100000))
                .attr("x2", 2170)
                .attr("y2", y(maxl*100000))
                .attr("stroke-width", 10)
                .style("stroke", "#000000")
                .attr("class","chrlocations")
        }
        else if (l==maxl ){
            canvas.append("text")
                .text(maxl)
                .attr("class", "pindex")
                .style("font-size", "40px")
                .attr("x",2120)
                .attr("y",  y(maxl*100000))
                .attr("text-anchor", "end");
            canvas.append("line")
                .attr("x1", 2130)
                .attr("y1", y(maxl*100000))
                .attr("x2", 2170)
                .attr("y2", y(maxl*100000))
                .attr("stroke-width", 10)
                .style("stroke", "#000000")
                .attr("class","chrlocations")
        }



    }




    canvas.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .style("font-size", "60px")
        .attr("transform", "translate(1950,750) rotate(270)")
        .text("Chromosome" + chromosome)
        .attr("class","chrindex")
        .attr("text-anchor", "middle");

}
function ticked() {
    label1
        .attr("x",function (d) { return d.x; })
        .attr("y", function (d) { return d.y; })

    drawLink()
    drawNode()
}


function drawLink() {


    link
        .style("stroke", "#555555")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
}

function drawNode() {

    node
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
}



function drawzoomnetwork(i,locallinks){


    d3.selectAll(".label").remove()
    d3.selectAll(".label1").remove()
    let links1
    let locuses
    //console.log(i)
    //console.log(groups.length)
    var x

    links1 =glinkz
    locuses=groupsz;

    console.log(i)
    console.log(locuses)
    console.log(links1)



    drawLinz(i,locallinks)



    //console.log(paths)
    drawNodez(i,locallinks)



     label = canvas.selectAll(null)
        .data(locuses)
        .enter()
        .append("text")
         .attr("class","label")
         .attr("id",function (d) {return "label"+d.id; })
        .text(function (d) {
            if (flagg==1){ return Math.floor(v12(Number(d.id)));}
            else {return d.id;}
            })
        .style("text-anchor", "middle")
        .style("fill", "#ffffff")
        .style("font-family", "sans-serif")
        .style("font-size", "35px");



     simulation1 = d3.forceSimulation(locuses)
        .force("link", d3.forceLink()
            .id(function(d) { return d.id; })
            .links(links1).strength(0))
        .force("charge", d3.forceManyBody().strength(-4000))
         .force("x", d3.forceX(width / 2).strength(0.3))
         .force("y", d3.forceY(height+200 ).strength(0.4))
         .velocityDecay(.9)
        .on("tick", ticked1);
    simulation1.alpha(1).restart();




}

var label
function ticked1() {
     label
         .attr("x",function (d) { return d.x; })
         .attr("y", function (d) { return d.y; })
    paths
        .attr("x1", function(d) {return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    groupss
        .attr("cx", function (d,i){
            return d.x; })
        .attr("cy", function(d,i) {return d.y; });



}

function drawLinz(f,locallinks) {
    var w
    var  links2
    links2 =glinkz



    /*if ($('#Arc').is(":checked")){
    canvas.selectAll('path')
        .data(links2)
        .enter()
        .append('path')
        .attr('d', function (d) {
            start = y(znodes[select-1][d.source-1].name*100000)
            end = y(znodes[select-1][d.target-1].name*100000)

            return ['M', 2200, start,
                'A',
                (start - end)/2*1, ',',
                (start - end)/2, 0, 0, ',',
                start < end ? 1 : 0, 2200, ',', end]
                .join(' ');
        })
        .attr('stroke-width', 1)
        .style("fill", "none")
        .attr("stroke", "black")
        .attr('class',"arlinks")
        .attr('id', function (d) { return d.source-1+","+d.target-1})
        .lower()
    }*/
    paths = canvas
        .selectAll(null)
        .data(links2)
        .enter()
        .append("line")
        .attr("class","linksz")
        .style("stroke-width",function(d,i){return w}
            )
        .style("stroke", "black")
        .on("mouseover",function (d,i) {

            if (flag==0){

                for (j=0;j<znodes1[d.source.id].length;j++){
                    d3.select("#s"+znodes1[d.source.id][j].name)
                        .attr("height", 10)
                        .style("fill", selectcolor)
                }

                for (j=0;j<znodes1[d.target.id].length;j++){
                    d3.select("#s"+znodes1[d.target.id][j].name)
                        .attr("height", 10)
                        .style("fill", selectcolor)
                }

                canvas.append("text")
                    .attr("x",2270)
                    .attr("y", 1450)
                    .style("font-size", "40px")
                    .text(znodes1[d.source.id][0].name*100000)
                    .attr("class","locusevalue")
                    .attr("text-anchor", "end");
                canvas.append("text")
                    .attr("x",2300)
                    .attr("y", 1450)
                    .style("font-size", "40px")
                    .text("-")
                    .attr("class","locusevalue")
                    .attr("text-anchor", "middle");
                canvas.append("text")
                    .attr("x",2330)
                    .attr("y", 1450)
                    .style("font-size", "40px")
                    .text(znodes1[d.source.id][znodes1[d.source.id].length-1].name*100000)
                    .attr("class","locusevalue")
                    .attr("text-anchor", "start");

                canvas.append("text")
                    .attr("x",2270)
                    .attr("y", 1400)
                    .style("font-size", "40px")
                    .text(znodes1[d.target.id][0].name*100000)
                    .attr("class","locusevalue")
                    .attr("text-anchor", "end");
                canvas.append("text")
                    .attr("x",2300)
                    .attr("y", 1400)
                    .style("font-size", "40px")
                    .text("-")
                    .attr("class","locusevalue")
                    .attr("text-anchor", "middle");
                canvas.append("text")
                    .attr("x",2330)
                    .attr("y", 1400)
                    .style("font-size", "40px")
                    .text(znodes1[d.target.id][znodes1[d.target.id].length-1].name*100000)
                    .attr("class","locusevalue")
                    .attr("text-anchor", "start");
            }
        })
        .on("mouseout",function (d,i) {
            if (flag==0){
                d3.selectAll(".locusevalue").remove()
                d3.selectAll(".d"+(select[0]-1))
                    .attr("height", function () {
                        return (1300/allnodes.length)
                    })
                    .style("fill", color[select[0]-1])
            }
        })
        .on("click",function (d,i) {
            if (flag==0){
                d3.selectAll(".locusevalue").remove()
                d3.selectAll("circle").remove()
                d3.selectAll(".linksz").remove()

                flag=1
                select1=d.source.id
                select2=d.target.id
                intergroupsnetwork(d.source.id,d.target.id)
            }
        })


}
var circular=0;
var colorz = [];
function drawNodez(f,locallinks) {


    var colorz=d3.scaleLinear()
        .domain([groupsz[0].id, groupsz[groupsz.length-1].id])
        .range([color[select[0]-1], invertColor(color[select[0]-1])])
        .interpolate(d3.interpolateRgb.gamma(2.2))


    var r=50
    if (circular==1){

        r=15
    }
    var locuses=groupsz
    console.log(locuses)
    groupss = canvas.selectAll(null)
        .data(locuses)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("id", function (d,i) {
            return "z"+d.id
        })
        .style("fill", function (d) {return colorz(d.id)})
        .on("mouseover",function (d,i) {
            d3.selectAll(".locusevalue").remove()
            d3.selectAll(".locusevalue1").style("opacity", 0)
            if (flag==0){
                for (j=0;j<znodes1[d.id].length;j++){
                d3.select("#s"+znodes1[d.id][j].name)
                    .attr("height", 10)
                    .style("fill", selectcolor)
                }
                canvas.append("text")
                    .attr("x",2270)
                    .attr("y", 1430)
                    .style("font-size", "60px")
                    .text(znodes1[d.id][0].name*100000)
                    .attr("class","locusevalue")
                    .attr("text-anchor", "end");
                canvas.append("text")
                    .attr("x",2300)
                    .attr("y", 1430)
                    .style("font-size", "60px")
                    .text("-")
                    .attr("class","locusevalue")
                    .attr("text-anchor", "middle");
                canvas.append("text")
                    .attr("x",2330)
                    .attr("y", 1430)
                    .style("font-size", "60px")
                    .text(znodes1[d.id][znodes1[d.id].length-1].name*100000)
                    .attr("class","locusevalue")
                    .attr("text-anchor", "start");


            }
            if (flag==1){
                canvas.append("text")
                    .attr("x",2300)
                    .attr("y", 1400)
                    .style("font-size", "60px")
                    .text(d.name*100000)
                    .attr("id","locusevalue")
                    .attr("text-anchor", "middle");


                d3.selectAll(".d"+(select[0]-1)).style("fill", "transparent")
                d3.select("#s"+d.name)
                    .style("fill", selectcolor)


                if ($('#Arc').is(":checked")) {
                    canvas.selectAll(".arlinks")
                        .attr("stroke", "none")
                    canvas.selectAll(".arlinks")
                        .filter(function (f) {
                            return f.source.id == d.id || f.target.id == d.id
                        })
                        .attr("stroke", selectcolor)
                }
            }
        })
        .on("mouseout",function (d,i) {
            d3.selectAll(".locusevalue1").style("opacity", 1)
            if (flag==0){
                d3.selectAll(".locusevalue").remove()
                d3.selectAll(".d"+(select[0]-1))
                    .attr("height", function () {
                        return (1300/allnodes.length)
                    })
                    .style("fill", color[select[0]-1])

            }
            if (flag==1){
                if ($('#Arc').is(":checked")) {
                    canvas.selectAll(".arlinks")
                        .attr("stroke", "black")
                }
                d3.select("#locusevalue").remove()
                d3.selectAll(".d"+(select[0]-1)).style("fill", color[select[0]-1])
                    .attr("height", function () {
                        return (1300/(nodes[select[0]-1].length+10))
                    })
            }
        })
        .on("click",function (d,i) {
            groupsz=[]
            glinkz=[]
            if ($('#remove').is(":checked")){
                d3.select(this).style("fill", "transparent")
                canvas.selectAll(".linksz")
                    .filter(function(f) {
                        return f.source.id == d.id || f.target.id == d.id;
                    })
                    .style("stroke", "transparent")

                canvas.selectAll(".label")
                    .filter(function(f) {
                        //console.log( d.id )
                        return this.id == "label"+d.id || this.id == "label"+d.id;
                    })
                    .style("stroke", "transparent")
                    .style("fill", "transparent")
            }
            else {

                    if (flagg==0){
                        d3.selectAll("circle").remove()
                        d3.selectAll(".linksz").remove()
                    var t=info.filter(function (value){
                        if (String(value.community_ID).includes(String(f)+":"+d.id) && !value.community_ID.includes(":"+f+":"+d.id)  ){
                            return value
                        }
                    })

                    for (i=0;i<t[0].fragments.length;i++){
                        groupsz[i]={
                            id:Number(t[0].fragments[i])
                        }
                    }
                        for (i=0;i<t[0].Links.length;i++){
                            glinkz[i]={
                                "source":Number(t[0].Links[i].split("-")[0]),
                                "target":Number(t[0].Links[i].split("-")[1])
                            }
                        }
                     if (t[0].fragment=="T"){
                        flagg=1
                    }

                     select.push(f+":"+d.id)
                    drawzoomnetwork(f+":"+d.id,glinkz)

                }
            }

        })
        .on("dblclick",function (d,i) {
            if (flag==1){
                canvas.selectAll(".label")
                    .filter(function(f) {
                        //console.log( d.id )
                        return this.id == "label"+d.id || this.id == "label"+d.id;
                    })
                    .attr("stroke", "white")
                    .style("fill", "white")


            d3.event.stopPropagation();

            d3.selectAll("circle").style("fill", color[select[0]-1])
            d3.select(this).style("fill", selectcolor)
            canvas.selectAll(".linksz")
                .filter(function(f) {
                    return f.source.id != d.id || f.target.id != d.id;
                })
                .style("stroke", "transparent")
            canvas.selectAll(".linksz")
                .filter(function(f) {
                    return f.source.id == d.id || f.target.id == d.id;
                })
                .style("stroke", intercolor)}
        })
}


function dofilter(li,no) {

    return li.filter(({ source: id1 }) => no.some(({ id: id2 }) => Number(id2) === Number(id1)));
}
function dofilter1(li,no) {
    return li.filter(({ target: id1 }) => no.some(({ id: id2 }) => Number(id2) === Number(id1)));
}
var simulation2
var labels
var labels1
var li=0
var interlink
function intergroupsnetwork(i,j) {
    li=1
    lev=3
    var kp=znodes1.length-1
    var nodesg1=znodes1[i]
    var nodesg2=znodes1[j]
    var linkks=interlink[i*kp+(Math.floor(j/kp))]
    circular=1
    length1=nodesg1.length
    length2=nodesg2.length


    drawLiniz(i*kp+(Math.floor(j/kp)))
    drawNodez(i)
    storen=groupss
    drawNodez(j)
    storen1=groupss


    changelegends(i,j)

    labels = canvas.selectAll(null)
        .data(nodesg2)
        .enter()
        .append("text")
        .attr("class","labels")
        .text(function (d) { return d.name; })
        .style("text-anchor", "middle")
        .style("fill", function (d,i) {
            if (i%5==0){
                return "#000000";
            }
            else {return "transparent"}
        })
        .style("opacity", function (d,i) {
            if (i%5==0){
                return 1;
            }
            else {return 0}
        })
        .style("font-family", "sans-serif")
        .style("font-size", "35px");
    labels1 = canvas.selectAll(null)
        .data(nodesg1)
        .enter()
        .append("text")
        .attr("class","labels")
        .text(function (d) { return d.name; })
        .style("text-anchor", "middle")
        .style("fill", function (d,i) {
            if (i%5==0){
                return "#000000";
            }
            else {return "transparent"}
        })
        .style("font-family", "sans-serif")
        .style("font-size", "35px");


interl=0
    simulation2 = d3.forceSimulation(nodesg1)
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height+height/3))
        .on("tick", ticked2);




interl=1
    simulation3 = d3.forceSimulation(nodesg2)
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height+height/3))
        .on("tick", ticked3);
    linkks.forEach(function (d,i) {
        d.source= nodesg1.filter(({ id: id1 }) => id1=== d.source)[0]
        d.target= nodesg2.filter(({ id: id1 }) => id1=== d.target)[0]
    })



    paths
        .attr("x1", function(d) {return d.source.x})
        .attr("y1", function(d) {return d.source.y })
        .attr("x2", function(d) { return d.target.x})
        .attr("y2", function(d) { return d.target.y})




}
var storen
var storel
var storen1
var storel1
var simulation3
var interl=0
var length1
var length2
function ticked2() {
    var r =700
    var angle1=(Math.PI)/length1
    var angle
        angle=angle1
        labels1
            .attr("x",function (d,i) {   return (width / 2)+Math.cos(i*angle) * (r+70 ); })
            .attr("y", function (d,i) {  return (height+height/3)+Math.sin(i*angle) * (r+70 ) ; })
        storen
            .style("fill", "green")
            .attr("cx",function (d,i) {
                d.x=(width / 2)+Math.cos(i*angle) * r
                return d.x ;
            })
            .attr("cy",function (d,i) {
                d.y=(height+height/3)+Math.sin(i*angle) * r
                return d.y ;
            });





}
function ticked3() {
    var r =700
    var angle2=((Math.PI)/length2)
    var angle
        angle=angle2
        labels
            .attr("x",function (d,i) {   return (width / 2)-Math.cos(i*angle) * (r+70 ); })
            .attr("y", function (d,i) {  return (height+height/3)-Math.sin(i*(angle)) * (r+70 ) ; })
        storen1
            .style("fill", "yellow")
            .attr("cx",function (d,i) {
                d.x=(width / 2)-Math.cos(i*angle) * r
                return d.x ;
            })
            .attr("cy",function (d,i) {
                d.y=(height+height/3)-Math.sin(i*(angle)) * r
                return d.y ;
            });



}



function changelegends(m,n) {

for (j=0;j<znodes1[m].length;j++){
    d3.select("#s"+znodes1[m][j].name)
        .attr("height", 10)
        .style("fill", "green")
}

for (j=0;j<znodes1[n].length;j++){
    d3.select("#s"+znodes1[n][j].name)
        .attr("height", 10)
        .style("fill", "yellow")
}

canvas.append("text")
    .attr("x",2270)
    .attr("y", 1450)
    .style("font-size", "40px")
    .text(znodes1[m][0].name*100000)
    .attr("class","locusevalue1")
    .attr("text-anchor", "end");
canvas.append("text")
    .attr("x",2300)
    .attr("y", 1450)
    .style("font-size", "40px")
    .text("-")
    .attr("class","locusevalue1")
    .attr("text-anchor", "middle");
canvas.append("text")
    .attr("x",2330)
    .attr("y", 1450)
    .style("font-size", "40px")
    .text(znodes1[m][znodes1[m].length-1].name*100000)
    .attr("class","locusevalue1")
    .attr("text-anchor", "start");

canvas.append("text")
    .attr("x",2270)
    .attr("y", 1400)
    .style("font-size", "40px")
    .text(znodes1[n][0].name*100000)
    .attr("class","locusevalue1")
    .attr("text-anchor", "end");
canvas.append("text")
    .attr("x",2300)
    .attr("y", 1400)
    .style("font-size", "40px")
    .text("-")
    .attr("class","locusevalue1")
    .attr("text-anchor", "middle");
canvas.append("text")
    .attr("x",2330)
    .attr("y", 1400)
    .style("font-size", "40px")
    .text(znodes1[n][znodes1[n].length-1].name*100000)
    .attr("class","locusevalue1")
    .attr("text-anchor", "start");

}
function interactcolor() {
    intercolor= document.getElementById("interactioncolor").value;
}
function selectcolors() {
    selectcolor= document.getElementById("selectcolor").value;
    console.log(selectcolor)
}
function annotationcolor() {
    ancolor= document.getElementById("annotationcolor").value;
}

function saves() {


        html2canvas(document.getElementById("diagram"),{
            scale:4
        }).then(function(canvas) {

            var base64image = canvas.toDataURL("image/png");

            // Open the image in a new window
            window.open(base64image , "_blank");
        });




}
function drawLiniz(f) {
    var w=1
    var  links2=interlink[f]


    paths = canvas
        .selectAll(null)
        .data(links2)
        .enter()
        .append("line")
        .attr("class","linksz")
        .style("stroke-width",function(d,i){return w}
        )
        .style("stroke", "black")


}
//**************************************************************************************
//*****************************************************
// Options
//*****************************************************
//**************************************************************************************
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
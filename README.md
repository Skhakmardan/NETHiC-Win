<h1> NETHiC-Win </h1>
<p>NETHiC is an integrated tool for modeling Hi-C data and detecting Hi-C data communities</p>
<h2> 1.	Overview </h2>
<p>
NETHiC is an integrated tool to model Hi-C data (HiC-Pro output) by implementing GOTHiC method and identify Hi-C data clusters based on Infomap (a network clustering algorithm) method. Also, this tool has web-based user interface and visualization section for Infomap outputs.
</p>
<br />
<img align="center"  src="https://github.com/Skhakmardan/NETHiC-Win/blob/master/Figures/1.jpg">
</p>
<br />
<p align="center">Figure 1 NETHiC UI</p>
<br />
<h2> 2.	Description</h2>
<h3> 1.	Preprocessing section</h3>
<p>
NETHiC identifies the significant interactions from Hi-C data, which is normalized by HiC-Pro. The HiC-Pro outputs are an Interactions file with three columns: Locus1 id, Locus2 id and Interaction counts (number of interacting read between two regions), and a fragments file with four columns: chromosome ID, fragment start position, fragment end position, and fragment ID.
</p>
<br />
<p align="center">
<img align="center"  src="https://github.com/Skhakmardan/NETHiC-Win/blob/master/Figures/2.jpg">
  </p>
</p>
<br />
<p align="center">
  Figure 2 HiC-Pro outputs. Interactions file (matrix) on the left and bed file on the right
</p>
<br />
<p>
NETHiC gets HiC-Pro outputs and use GOTHiC algorithm to create a background model. To run GOTHiC, first, users need to transfer input files to the NETHiC input folder and set the significance level value and read counts value. Setting read counts value cause interactions, that have less read counts value, remove from the procedure. By setting the significance level, users can select interactions that have less q-value than the threshold.
</p>
<br />
<p align="center">
<img align="center"  src="https://github.com/Skhakmardan/NETHiC-Win/blob/master/Figures/3.jpg">
  </p>
<br />
<p align="center">
  Figure 3 NETHiC created file to run infomap
</p>
<br />
<p>
Our tool saves results in three TSV files (located in mapequation inputs folder). The first two files are built to run infomap (named “link_list”) which has three columns, two columns for locus positions, and one column as interaction weight (we used log Observed read counts Over Expected read counts or read counts value). The second file (named “processed”) includes background model information.
 </p>
<br />
<p align="center">
<img align="center"  src="https://github.com/Skhakmardan/NETHiC-Win/blob/master/Figures/4.jpg">
 </p>
<br />
<p align="center">
  Figure 4 NETHiC Preprocessing section
</p>
<br />
<h3> 2.	Community detection section</h3>
<p>
In the community detection section, NETHiC runs multi-level Infomap community detection algorithm with Linux's command lines and identifies structural clusters for each locus position. To run infomap, users need to type the file name in the interaction file box and set the number of iteration for running infomap and click on the Process button. NETHiC creates three files as infomap outputs in the mapequation folder output. The first file is a raw output of infomap with the same name as the input file. This file saves as a "ftree" format file and covers information about all communities and interactions between these communities. 
</p>
<br />
<p align="center">
<img align="center"  src="https://github.com/Skhakmardan/NETHiC-Win/blob/master/Figures/5.jpg">
 </p>
<br />
<p align="center">
  Figure 5 NETHiC community detection section and network digram that created from this sectuon output.
</p>
<br />
<p>
The other files are generated to have meaningful data structures than the raw output. These files are named "Infomap_Result". The first  "Infomap_Result" file gives information about each interaction to users. This information includes interacting locus positions, interactions weight (read counts), and locus communities. The second file with the same name covers all information about detected communities and subcommunities. In this file, each row defines a community or subcommunity's fragments and links.
</p>
<br />
<p align="center">
<img align="center"  src="https://github.com/Skhakmardan/NETHiC-Win/blob/master/Figures/6.jpg">
 </p> 
<br />
<p align="center">
  Figure 6 Infomap_Result1 data structure
</p>
<br />
<h3> 3.	Visualization section</h3>
<p>
After the structural clustering of Hi-C data, NETHiC create an interactable graph from communities’ files. This diagram shows each community as a circular node with different colors (showing their position on the chromosome). By click on each community, if they have subcommunities, NETHiC shows that community’s fragments and links. If they do not have subcommunities, NETHiC visualizes that community’s graph.</p>
<h2> 3.	User Guide</h2>
<h3> 3.1.	Requirements</h3>
Full functionality requires R and installed Linux core on Windows 10. It works on Ubuntu, macOS, and Windows (tested on Windows 10). 
<h3> 3.2.	Installation</h3>
<ul>
<li><p>first download NETHiC file from Github and unzip it</p></li>
<li><p>Run NETHiC server</p></li>
<li><p>Open http://localhost:58081/ on web browser</p></li>
<li><p>Click on Install button to execute infomap file automatically</p></li>
</ul>

# NETHiC-Win
NETHiC is an integrated tool for modeling Hi-C data and detecting Hi-C data communities
## 1.	Overview
NETHiC is an integrated tool to model Hi-C data (HiC-Pro output) by implementing GOTHiC method and identify Hi-C data clusters based on Infomap (a network clustering algorithm) method. Also, this tool has web-based user interface and visualization section for Infomap outputs.
<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">
## 2.	Description
### 1.	Preprocessing section
NETHiC identifies the significant interactions from Hi-C data, which is normalized by HiC-Pro. The HiC-Pro outputs are an Interactions file with three columns: Locus1 id, Locus2 id and Interaction counts (number of interacting read between two regions), and a fragments file with four columns: chromosome ID, fragment start position, fragment end position, and fragment ID.
<br />
NETHiC gets HiC-Pro outputs and use GOTHiC algorithm to create a background model. To run GOTHiC, first, users need to transfer input files to the NETHiC input folder and set the significance level value and read counts value. Setting read counts value cause interactions, that have less read counts value, remove from the procedure. By setting the significance level, users can select interactions that have less q-value than the threshold.
<br />
Our tool saves results in three TSV files (located in mapequation inputs folder). The first two files are built to run infomap (named “link_list”) which has three columns, two columns for locus positions, and one column as interaction weight (we used log Observed read counts Over Expected read counts or read counts value). The second file (named “processed”) includes background model information.
### 2.	Community detection section
In the community detection section, NETHiC runs multi-level Infomap community detection algorithm with Linux's command lines and identifies structural clusters for each locus position. To run infomap, users need to type the file name in the interaction file box and set the number of iteration for running infomap and click on the Process button. NETHiC creates three files as infomap outputs in the mapequation folder output. The first file is a raw output of infomap with the same name as the input file. This file saves as a "ftree" format file and covers information about all communities and interactions between these communities. 
<br />
The other files are generated to have meaningful data structures than the raw output. These files are named "Infomap_Result". The first  "Infomap_Result" file gives information about each interaction to users. This information includes interacting locus positions, interactions weight (read counts), and locus communities. The second file with the same name covers all information about detected communities and subcommunities. In this file, each row defines a community or subcommunity's fragments and links.
### 3.	Visualization section
After the structural clustering of Hi-C data, NETHiC create an interactable graph from communities’ files. This diagram shows each community as a circular node with different colors (showing their position on the chromosome). By click on each community, if they have subcommunities, NETHiC shows that community’s fragments and links. If they do not have subcommunities, NETHiC visualizes that community’s graph.
## 3.	User Guide
### 3.1.	Requirements
Full functionality requires R and installed Linux core on Windows 10. It works on Ubuntu, macOS, and Windows (tested on Windows 10). 
### 3.2.	Installation
-	1. first download NETHiC file from Github and unzip it
- 2.	Run NETHiC server
- 3.	Click on Install button to execute infomap file automatically

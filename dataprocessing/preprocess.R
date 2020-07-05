# preprocess.R

needs(data.table)
needs(magrittr)
set.seed(512)
#Get files Pat





path<-input


  ###########################################################################################
  ######################################                #####################################
  ####################################   do preprocess   ####################################
  ######################################                ######################################
  ###########################################################################################
  ###########################################################################################
  bed_file1<- fread(as.character(path[2]),sep = '\t',header = F)
  bed_file <- fread(as.character(path[2]),sep = '\t',header = F)
  resolution<-bed_file[1,3]-bed_file[1,2]
  bin_size <- as.numeric(bed_file[1,3] - bed_file[1,2])
  matrix_file <- fread(as.character(path[1]),sep = '\t',header = F)
  preprocessed_folder<-as.character(path[6])
  ###########################################################################################
  # {chromosome 1, ..., chromosome 25} := {chr1, ..., chr22, chrX, chrY, chrM}
  chromosome <- paste0('chr',as.character(path[3]))
  bed_file<-bed_file[which(bed_file[,1]==chromosome),]
  min<-min(bed_file[,4])
  max<-max(bed_file[,4])
  matrix_file<-matrix_file[which(matrix_file[,1]>=min),]
  matrix_file<-matrix_file[which(matrix_file[,2]<=max),]
  ###########################################################################################
  # extract the matrix consisting of the contacts between chromosome i and chromosome j
  extract_contacts_matrix_i_j <- function(i,j)
  {

    fragments_i <- bed_file[,4]
    fragments_j <- bed_file[,4]
    first_fragment_i <- min(fragments_i)
    last_fragment_i <- max(fragments_i)
    first_fragment_j <- min(fragments_j)
    last_fragment_j <- max(fragments_j)

    M <- matrix_file[which((matrix_file[,1]>=first_fragment_i & matrix_file[,1]<=last_fragment_i &
                              matrix_file[,2]>=first_fragment_j & matrix_file[,2]<=last_fragment_j) |
                             (matrix_file[,1]>=first_fragment_j & matrix_file[,1]<=last_fragment_j &
                                matrix_file[,2]>=first_fragment_i & matrix_file[,2]<=last_fragment_i)),]


    ret <- list()
    ret[[1]] <- first_fragment_i
    ret[[2]] <- last_fragment_i
    ret[[3]] <- first_fragment_j
    ret[[4]] <- last_fragment_j
    ret[[5]] <- M
    return(ret)
  }
  ###########################################################################################
  # get the selected chromosome
  chr <- as.numeric((path[3]))
  # extract relevant interactions

  ret <- extract_contacts_matrix_i_j(chr,chr)
  first_fragment_i <- ret[[1]]
  last_fragment_i <- ret[[2]]
  first_fragment_j <- ret[[3]]
  last_fragment_j <- ret[[4]]


  m <- ret[[5]]
  colnames(m) <- c('locus1','locus2','readCount')



  ###########################################################################################
  if(as.numeric(path[4]) > 0){
    pre_remove_threshold <- as.numeric(path[4])

    m <- m[which(m[,3]>= pre_remove_threshold),]
  }
  ###########################################################################################

    # ------------------------------------------------------------------------
    significance_level <- as.numeric(as.numeric(path[5]))
    # ------------------------------------------------------------------------


    reads_total <- sum(m$readCount)
    l1 <- m[,c('locus1','readCount')]
    colnames(l1) <- c('locus','readCount')
    l2 <- m[,c('locus2','readCount')]
    colnames(l2) <- c('locus','readCount')
    l <- rbind(l1,l2)
    coverage_of_locus <- aggregate(readCount ~ locus, l, sum)
    m$relCoverage1 <- coverage_of_locus$readCount[match(m$locus1, coverage_of_locus$locus)] / reads_total
    m$relCoverage2 <- coverage_of_locus$readCount[match(m$locus2, coverage_of_locus$locus)] / reads_total
    #=========================================================
    m$probability <- 2*m$relCoverage1*m$relCoverage2
    m$expected <- reads_total * m$probability
    reads <- m$readCount
    reads[which(reads==0)] <- 1
    m$logObservedOverExpected <- log2(reads/m$expected)


    # ------------------------------------------------------------------------


    m$logPvalue <- pbinom(m$readCount-1,reads_total,m$probability,lower.tail=F,log.p=T)
    m$Pvalue <- exp(m$logPvalue)
    L <- length(unique(c(m$locus1,m$locus2)))   # L is the number of loci investigated
    n_tests <- L*(L-1)/2     # number of tests for Benjamini-Hochberg multiple-testing
    mult <- c(c(n_tests:1)[1:min(n_tests,dim(m)[1])],rep(1,max(n_tests,dim(m)[1])-n_tests))
    add_log <- log(mult)
    m$logQvalue <- m$logPvalue + add_log
    m$logQvalue[which(m$logQvalue > 0)] <- 0
    m$Qvalue <- exp(m$logQvalue)
    m$fragment1_start <- bed_file1[m$locus1,2]
    m$fragment1_end <- bed_file1[m$locus1,3]
    m$fragment2_start <- bed_file1[m$locus2,2]
    m$fragment2_end <- bed_file1[m$locus2,3]
    # ------------------------------------------------------------------------


    non_sig_rows <- which(m$Qvalue > significance_level)
    if(length(non_sig_rows)!=0){
      m_significant <- m[-non_sig_rows,]    # exclude the non-significant rows of m for which Q_value > significance_level
    } else {
      m_significant <- m
    }
    link_list <- m_significant[,c('locus1','locus2','logObservedOverExpected')]   # take the normalized frequency as the interaction weight
    
    link_list1 <- m_significant[,c('locus1','locus2','readCount')]



    # ------------------------------------------------------------------------
    processed <- m_significant
    processed$chromosome<-chromosome
    processed$resolution<-resolution
    link_list <- m_significant[,c(1,2,8)]
    colnames(link_list)[1] <- paste0('#',colnames(link_list)[1])
    colnames(link_list1)[1] <- paste0('#',colnames(link_list1)[1])
    fwrite(processed,paste0(preprocessed_folder,'processed.txt'),sep = '\t',row.names = F,quote = F)
    fwrite(link_list1,paste0(preprocessed_folder,'link_list1.txt'),sep = '\t',row.names = F,quote = F)
    fwrite(link_list,paste0(preprocessed_folder,'link_list.txt'),sep = '\t',row.names = F,quote = F)

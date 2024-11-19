+++
widget = ""
layout = "projects"
title = "Model assessment of constitutive laws in traffic conservation laws"
date = "2021-10-01"
type = "report"
imageURL = "/img/fyr_photo.png"
PdfURL = "/files/first_year_report.pdf"
+++

The proliferation of traffic sensing devices on motorways has spurred interest in data assimilation in macroscopic traffic flow partial differential equations, such as the Lighthill Whitham Richards (LWR) model. The empirical constitutive laws (fundamental diagrams) embedded within these PDEs are uncertain and misspecified. We leverage a Bayesian model assessment framework to robustly identify the most plausible FDs accounting for the trade-off between model fit and complexity. This is achieved by computing unbiased estimates of the marginal likelihood for each FD based on ideas from thermodynamic integration while sampling from the resulting power posteriors using a Metropolis Hastings Markov Chain Monte Carlo algorithm. In recognition of the ML's sensitivity to prior diffusivity we also perform a sensitivity analysis of our ML estimates. We compare ten constitutive laws and apply our methodology to synthetic data to identify their structural differences. Finally, we validate the choice of FD by applying our methodology to loop detector data from the M25 motorway.

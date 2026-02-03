+++
widget = ""
layout = "projects"
title = "Stochastic modelling of urban travel demand"
subtitle = "Bayesian inversion of spatial interaction models"
date = "2020-08-14"
type = "report"
imageURL = "/img/london_map_edges.jpg"
PdfURL = "/files/mres_project.pdf"
CodeURL = "https://github.com/YannisZa/stochastic-travel-demand-modelling"
+++

Modelling of evolution of urban travel demand is fundamental for urban planners and policy makers to assess the spatial demand for transportation capacity and decide on appropriate interventions. We follow the approach of (Ellam et al., 2018) and introduce a novel application of spatial interaction models and a mathematical evolution of their dynamics to urban travel demand. We exploit economic structure characteristics (e.g. employment) to inform travel demand between a set of origin and destination locations. The economic structural variables are described by a potential function defined in terms of utility and cost functions. We also use a system of stochastic differential equations to model temporal travel demand evolution. We calibrate our model using a Bayesian framework that formally incorporates uncertainty involved in the process due to random noise or unexplained events and propagates it into parameter inference. We apply our model to London’s 2001 commuter flow data and find that we can adequately reconstruct the flow matrix only through the use of employment data as a latent force driving travel demand. We compute a Euclidean distance-based and transportation network-based cost matrices and find that the latter is marginally better at explaining travel demand. Finally, we overcome computational challenges arising from a doubly intractable posterior by applying appropriate Markov Chain Monte Carlo schemes for various noise regimes.
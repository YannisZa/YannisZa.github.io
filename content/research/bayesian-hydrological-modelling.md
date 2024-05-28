+++
layout = "research"
title = "Bayesian hydrological modelling of road rainfall run-off"
date = "2020-01-15"
description = "Introduction to Bayesian hydrological modelling"
imageURL = "/img/3d_raw_road_view.png"
pdfURL = "/files/mini_project_censored.pdf"
CodeURL = "https://github.com/YannisZa/bayesian-hydrological-modeling"
+++

{{< figure src="/img/3d_raw_road_view.png" width="800" >}}

National Highway's objective to improve the health and safety of its customers is tightly linked to better monitoring of on-road water discharge. The increasing climate volatility can impede accurate hydrological modelling and therefore a probabilistic approach is adopted to modelling on-road rainfall-runoff. This report illustrates the potential of using a hybrid of statistical and hydrological models to better understand on-road water conditions. The study area is a major A-road in north-west of England. Three models are employed; a lumped linear reservoir (LR), a non-linear storage (NLS) and a spatially-distributed HYMOD model. These models are then used to simulate and discharge data using rainfall and potential evapotranspiration data from the Climate hydrology and ecology research support system (CHESS). The same models are treated in a Bayesian manner to make inference by assigning priors over their tuning parameters. Parameter posteriors and marginal likelihoods are computed using a Sequential Monte Carlo (SMC) sampler. Data fits and Bayes factors are examined to assess goodness of fit and identify the best model(s), which according to the data are the linear reservoir and non-linear storage models.

<!-- What does a hydrologist do when they want to estimate the rate of water volume generation and cannot calibrate their parametric model? Well, there are many answers to that question. A particularly robust one involves treating the model parameters as random variables, also known as a *Bayesian* treatment of the model.

In my first 8-week mini-project in Cambridge I attempted to do just that; introduce an approach in hydrology that incorporates domain expertise from hydrological models and data into a unified (hybrid) modelling framework. The *Bayesian* nature of the framework meant that one can quantify the uncertainty in model parameters and propagate it all the way to model predictions of water discharge. -->

You can **read my full report [here](https://yannisza.github.io/files/mini_project_censored.pdf)** and **look at my codebase [here.](https://github.com/YannisZa/bayesian-hydrological-modeling)**

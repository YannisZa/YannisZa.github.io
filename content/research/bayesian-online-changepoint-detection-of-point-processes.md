+++
layout = "research"

title = "Bayesian online changepoint detection of point processes"
subtitle = "Change; how much of it is happening?"
date = "2018-06-28"
imageURL = "/img/PG_crypto.png"
+++

{{< figure src="/img/PG_crypto.png" width="800" >}}

This thesis details an approach known as change-point detection (CPD) that aims to detect changes in the mean, variance and covariance of a time series. The scope of CPD is limited to an on-line (real-time) Bayesian spatio-temporal setting. In this setting, the goal of CPD is to provide step-ahead predictions and partition the time series into disjoint segments every time a new datum is received using Bayesian inference. This is achieved by modelling each datum as a sample from a data-generating process which we are imitating using a probability distribution as a model. At each time step the most likely model is chosen among a universe of potential models. This leads to the development of the Bayesian on-line change-point detection and model selection (BOCDMS) algorithm which has a linear computational and storage complexity in the number of observations.

Model selection is narrowed by employing two conjugate point process models: the Poisson Gamma (PG) and Multinomial Dirichlet (MD) models. We study the properties of these models and assess their sensitivity and performance on four synthetic and three real-world datasets, the latter of which are related to crime in Chicago, property transactions in the UK and cryptocurrency transactions.

<!-- If the information age has taught us anything, it is that things change, and they change fast. Some changes are more obvious than others, which begs the question: how can we be sure that something is really changing and it is not just another trick that noise is playing on us?

Well, there is an obvious philosophical take on that question, which however interesting is way beyond my reach. In the world of Statistics and Probability, things are a bit simpler.

I decided to take on the task of answering that question as part of my final year undergraduate thesis, which was supervised by [Dr. Theodoros Damoulas.](https://warwick.ac.uk/fac/sci/statistics/staff/academic-research/damoulas/) My focus was on developing an Bayesian online changepoint detection framework for discrete data generating processes (point processes).
 -->
You can **read my entire thesis [here.](./files/dissertation.pdf)**

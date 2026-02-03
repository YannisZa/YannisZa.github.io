+++
widget = ""
layout = "projects"
title = "Table inference for combinatorial origin-destination choices in agent-based population synthesis"
date = "2023-07-14"
type = "paper"
imageURL = "/img/table_inference_paper.png"
PdfURL = "https://onlinelibrary.wiley.com/doi/10.1002/sta4.656"
CodeURL = "https://github.com/YannisZa/ticodm"
BibID = "zachos2024"
+++

A key challenge in agent-based mobility simulations is the synthesis of individual agent socioeconomic profiles. Such profiles include locations of agent activities, which dictate the quality of the simulated travel patterns. These locations are typically represented in origin-destination matrices that are sampled using coarse travel surveys. This is because fine-grained trip profiles are scarce and fragmented due to privacy and cost reasons. The discrepancy between data and sampling resolutions renders agent traits non-identifiable due to the combinatorial space of data-consistent individual attributes. This problem is pertinent to any agent-based inference setting where the latent state is discrete. Existing approaches have used continuous relaxations of the underlying location assignments and subsequent ad-hoc discretisation thereof. We propose a framework to efficiently navigate this space offering improved reconstruction and coverage as well as linear-time sampling of the ground truth origin-destination table. This allows us to avoid factorially growing rejection rates and poor summary statistic consistency inherent in discrete choice modelling. We achieve this by introducing joint sampling schemes for the continuous intensity and discrete table of agent trips, as well as Markov bases that can efficiently traverse this combinatorial space subject to summary statistic constraints. Our framework's benefits are demonstrated in multiple controlled experiments and a large-scale application to agent work trip reconstruction in Cambridge, UK.
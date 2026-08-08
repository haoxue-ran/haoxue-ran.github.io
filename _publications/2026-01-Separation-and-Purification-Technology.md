---
title: "Effects of feature selection on predictive performance and interpretability in data-driven modeling: A case study of membrane flux prediction after Fenton pretreatment"
collection: publications
category: manuscripts
permalink: /publication/2026-01-SPT
teaser_img: '/images/spt_2026_ga.png'
excerpt_text: 'This study systematically investigates the impacts of feature selection strategies on both predictive accuracy and model interpretability in data-driven flux prediction for Fenton-pretreated membrane filtration systems.'
date: 2026-01-19
venue: 'Separation and Purification Technology'
paperurl: 'https://doi.org/10.1016/j.seppur.2026.137304' 
citation: 'Ran, H., Miao, R.*, Zhao, J.*, & Wang, L. (2026). "Effects of feature selection on predictive performance and interpretability in data-driven modeling: A case study of membrane flux prediction after Fenton pretreatment." <i>Separation and Purification Technology</i>.'
---

<h3 style="color: #0f172a; font-size: 1.25em; font-weight: 700; margin-top: 20px; margin-bottom: 12px;">
  <i class="fas fa-image" style="color: #2563eb; margin-right: 6px;"></i> Graphical Abstract
</h3>

<div style="text-align: center; margin: 15px 0 25px 0;">
  <img src="/images/spt_2026_ga.png" alt="Graphical Abstract" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
</div>

<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">

<h3 style="color: #0f172a; font-size: 1.25em; font-weight: 700; margin-top: 20px; margin-bottom: 12px;">
  <i class="fas fa-star" style="color: #2563eb; margin-right: 6px;"></i> Highlights
</h3>

<ul style="padding-left: 20px; margin: 0 0 25px 0; line-height: 1.85; color: #334155; font-size: 1.02rem;">
  <li style="margin-bottom: 8px;">FS is a domain-informed modeling decision, not merely a routine preprocessing step.</li>
  <li style="margin-bottom: 8px;">FS methods yield markedly distinct outcomes in data-driven membrane process modeling.</li>
  <li style="margin-bottom: 8px;">Spearman, L1, and RFECV present distinct accuracy–interpretability–cost trade-offs.</li>
  <li style="margin-bottom: 8px;">No FS method is ideal; selection should be based on data traits and modeling goals.</li>
</ul>

<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">

<h3 style="color: #0f172a; font-size: 1.25em; font-weight: 700; margin-top: 20px; margin-bottom: 12px;">
  <i class="fas fa-file-alt" style="color: #2563eb; margin-right: 6px;"></i> Abstract
</h3>

<p style="text-align: justify; font-size: 1.02rem; line-height: 1.7; color: #334155; margin-bottom: 35px;">
Data-driven modeling has been increasingly applied to complex membrane separation problems. However, the influence of feature selection (FS), a crucial step in the modeling process, on predictive performance and interpretability remains underappreciated. Using a membrane filtration dataset involving Fenton-pretreated organic foulants, this study compared three representative FS methods—Spearman correlation, L1 regularization, and RFECV—in terms of their effects on predictive performance and interpretability by training CatBoost models on the resulting feature subsets. The results indicate that FS methods led to markedly different trade-offs among accuracy, interpretability, and computational cost. Spearman correlation incurred the lowest computational cost but yielded the poorest predictive performance (R<sup>2</sup><sub>adj</sub> = 0.772). L1 regularization offered a practical balance between feature reduction and predictive performance but tended to discard locally salient features while inflating the apparent importance of weakly predictive features. RFECV achieved the highest R<sup>2</sup><sub>adj</sub> (0.904) and the most domain-consistent importance attribution but incurred substantially higher computational cost than the other two FS methods did. Overall, no single FS strategy is universally optimal; the choice of FS strategy should be guided by dataset characteristics and modeling objectives. These findings position FS not only as a routine preprocessing step but also as a domain-informed modeling decision that can materially reshape both predictive accuracy and interpretability.
</p>

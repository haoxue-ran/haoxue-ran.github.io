---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
  /* 隐藏顶部冗余的 About Me 标题并扩展内容宽度 */
  .page__title {
    display: none !important;
  }
  .page {
    padding-right: 0 !important;
  }
  .page__content {
    max-width: 100% !important;
    width: 100% !important;
  }
  .archive {
    width: 100% !important;
  }

  /* 基础排版 */
  .hr-home {
    font-size: 1.02rem;
    line-height: 1.7;
    color: #334155;
    text-align: justify;
  }

  /* Hero 卡片 */
  .hr-hero {
    background-color: #0f172a;
    color: #ffffff;
    border-radius: 12px;
    padding: 38px 34px;
    margin-top: 10px;
    margin-bottom: 35px;
    box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.12);
  }
  .hr-eyebrow {
    color: #fbbf24;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 14px 0;
    line-height: 1.6;
  }
  .hr-title {
    color: #ffffff;
    font-size: 1.8em;
    font-weight: 800;
    line-height: 1.35;
    margin: 0 0 18px 0;
    border: none;
    padding: 0;
  }
  .hr-sub {
    color: #cbd5e1;
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 0 0 20px 0;
  }
  .hr-hero-note {
    background: rgba(251, 191, 36, 0.1);
    border-left: 3.5px solid #fbbf24;
    padding: 12px 16px;
    border-radius: 0 6px 6px 0;
    margin: 0 0 24px 0;
    color: #fef08a;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* Hero 按钮组 */
  .hr-hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .hr-btn-primary {
    display: inline-flex;
    align-items: center;
    background-color: #2563eb;
    color: #ffffff !important;
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
  }
  .hr-btn-secondary {
    display: inline-flex;
    align-items: center;
    background-color: rgba(255,255,255,0.12);
    color: #ffffff !important;
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.25);
  }

  /* 通用板块标题 */
  .hr-section {
    margin-bottom: 35px;
  }
  .hr-section h2 {
    font-size: 1.35em;
    font-weight: 700;
    color: #0f172a;
    border-bottom: 2.5px solid #2563eb;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 16px;
  }
  .hr-kicker {
    display: inline-block;
    color: #2563eb;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 4px;
  }
  .hr-statement-title {
    font-size: 1.15em;
    font-weight: 700;
    color: #0f172a;
    margin-top: 4px;
    margin-bottom: 12px;
    line-height: 1.45;
  }

  /* News 列表 */
  .hr-news-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .hr-news-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    line-height: 1.6;
  }
  .hr-news-list time {
    flex-shrink: 0;
    background-color: #eff6ff;
    color: #1d4ed8;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.82rem;
    margin-top: 2px;
  }
  .hr-news-list div strong {
    display: block;
    color: #0f172a;
    font-size: 0.98rem;
    margin-bottom: 2px;
  }
  .hr-news-list div span {
    color: #475569;
    font-size: 0.92rem;
  }

  /* Selected Publications 卡片 */
  .hr-pubs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
  }
  .hr-pub {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #2563eb;
    border-radius: 6px;
    padding: 16px 20px;
  }
  .hr-pub-venue {
    display: inline-block;
    color: #2563eb;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }
  .hr-pub h3 {
    margin: 0 0 6px 0;
    font-size: 1.05em;
    color: #0f172a;
    font-weight: 700;
    line-height: 1.4;
  }
  .hr-pub p {
    margin: 0;
    color: #64748b;
    font-size: 0.9em;
  }
  .hr-text-link {
    display: inline-block;
    color: #2563eb;
    font-weight: 600;
    font-size: 0.95em;
    text-decoration: none;
  }
</style>

<div class="hr-home">

  <!-- Hero Section -->
  <section class="hr-hero">
    <p class="hr-eyebrow">ADVANCED WATER TREATMENT · MEMBRANE PROCESSES · INTERFACIAL INTERACTIONS · INTERPRETABLE MACHINE LEARNING · CAUSAL INFERENCE · MOLECULAR SIMULATIONS · RESOURCE RECOVERY</p>
    <h1 class="hr-title">From Molecular Mechanisms to Predictive Control: Advancing Sustainable Membrane-Based Water Treatment</h1>
    <p class="hr-sub">I am Haoxue Ran, a Ph.D. candidate in Environmental Science and Engineering at the School of Environmental and Municipal Engineering, <strong style="color: #ffffff;">Xi'an University of Architecture and Technology (XAUAT)</strong>. I conduct doctoral research under the supervision of <strong style="color: #ffffff;">Prof. Rui Miao</strong> and collaborate with <strong style="color: #ffffff;">Dr. Jin Zhao</strong> from the School of Mathematics and Statistics at Xi'an Jiaotong University.</p>
    
    <div class="hr-hero-note">
      <i class="fas fa-bullseye" style="color: #fbbf24; margin-right: 6px;"></i>
      Expected Graduation: <strong>June 2027</strong>. Actively seeking international <strong>Postdoctoral Positions (starting Fall 2027)</strong> in membrane separation, advanced water treatment, and mechanistic data-driven process modeling.
    </div>

    <div class="hr-hero-actions">
      <a class="hr-btn-primary" href="/publications/"><i class="fas fa-book-open" style="margin-right: 6px;"></i> Selected Publications</a>
      <a class="hr-btn-secondary" href="/cv/"><i class="fas fa-file-alt" style="margin-right: 6px;"></i> View CV</a>
    </div>
  </section>

  <!-- Research Statement Section -->
  <section class="hr-section">
    <span class="hr-kicker">Research Statement</span>
    <h3 class="hr-statement-title">Bridging molecular-level interfacial interactions and data-driven intelligence for sustainable membrane-based water treatment.</h3>
    <p class="hr-body">My research integrates trace-dose Fenton pretreatment, molecular dynamics (MD) simulations, and interpretable machine learning and causal inference to quantify how organic foulants, divalent cations (Ca<sup>2+</sup>, Mg<sup>2+</sup>), and co-solutes govern membrane fouling and its mitigation. My goal is to move membrane fouling control from empirical optimization toward mechanistic, predictive, and precision engineering for advanced water treatment, selective separation, and resource recovery.</p>
  </section>

  <!-- News & Highlights Section -->
  <section class="hr-section hr-news-section">
    <h2><i class="fas fa-newspaper" style="color: #2563eb; margin-right: 8px;"></i> News &amp; Highlights</h2>
    <ul class="hr-news-list">
      <li>
        <time>2026-08</time>
        <div>
          <strong>Upcoming Oral Presentation</strong>
          <span>Delivering an oral presentation at the <i>8th IWA Regional Membrane Technology Conference</i>, Shanghai, China.</span>
        </div>
      </li>
      <li>
        <time>2026-06</time>
        <div>
          <strong>Paper Accepted in Water Research</strong>
          <span>Our paper <i>"Quantitative decoupling of the key factors and mechanisms of Fenton-pretreated membrane fouling mitigation via machine learning-assisted causal inference"</i> has been officially accepted by <b>Water Research</b>.</span>
        </div>
      </li>
      <li>
        <time>2026-01</time>
        <div>
          <strong>Paper Accepted in Separation and Purification Technology</strong>
          <span>Our paper <i>"Effects of feature selection on predictive performance and interpretability in data-driven modeling: A case study of membrane flux prediction after Fenton pretreatment"</i> has been accepted by <b>Separation and Purification Technology</b>.</span>
        </div>
      </li>
      <li>
        <time>2025-05</time>
        <div>
          <strong>Best Presentation Award</strong>
          <span>Awarded the <b>Best Oral Presentation Award</b> at the 20th National Graduate Environmental Forum (Tongji University).</span>
        </div>
      </li>
    </ul>
  </section>

  <!-- Selected Publications Section -->
  <section class="hr-section hr-pub-section">
    <h2><i class="fas fa-star" style="color: #2563eb; margin-right: 8px;"></i> Selected Publications</h2>
    <div class="hr-pubs">
      <article class="hr-pub">
        <span class="hr-pub-venue">Water Research</span>
        <h3>Quantitative decoupling of the key factors and mechanisms of Fenton-pretreated membrane fouling mitigation via machine learning-assisted causal inference</h3>
        <p><strong>Ran, H.</strong>, Miao, R.*, Zhao, J.*, &amp; Wang, L. (2026)</p>
      </article>
      <article class="hr-pub">
        <span class="hr-pub-venue">Separation and Purification Technology</span>
        <h3>Effects of feature selection on predictive performance and interpretability in data-driven modeling: A case study of membrane flux prediction after Fenton pretreatment</h3>
        <p><strong>Ran, H.</strong>, Miao, R.*, Zhao, J.*, &amp; Wang, L. (2026)</p>
      </article>
    </div>
    <a class="hr-text-link" href="/publications/">View all publications &rarr;</a>
  </section>

</div>

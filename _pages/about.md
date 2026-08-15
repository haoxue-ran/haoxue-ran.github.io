---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
  /* 页面宽度自适应与默认标题重置 */
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

  /* 基础容器 */
  .hr-home {
    font-size: 1.02rem;
    line-height: 1.7;
    color: #334155;
    text-align: justify;
  }

  /* Hero 核心深色卡片 */
  .hr-hero {
    background-color: #0d1b2a;
    color: #ffffff;
    border-radius: 8px;
    padding: 38px 34px;
    margin-top: 5px;
    margin-bottom: 35px;
    box-shadow: 0 10px 25px -5px rgba(13, 27, 42, 0.2);
  }
  .hr-eyebrow {
    color: #d4af37;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 14px 0;
    line-height: 1.6;
  }
  .hr-title {
    color: #ffffff;
    font-size: 1.75em;
    font-weight: 800;
    line-height: 1.35;
    margin: 0 0 16px 0;
    border: none;
    padding: 0;
  }
  .hr-sub {
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.75;
    margin: 0 0 18px 0;
  }
  .hr-hero-note {
    background: rgba(212, 175, 55, 0.12);
    border: 1px solid rgba(212, 175, 55, 0.35);
    border-left: 3.5px solid #d4af37;
    padding: 12px 16px;
    border-radius: 4px;
    margin: 0 0 22px 0;
    color: #fef08a;
    font-size: 0.94rem;
    line-height: 1.6;
  }

  /* Hero 交互按钮 (金色轮廓与填充风格) */
  .hr-hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .hr-btn-gold {
    display: inline-flex;
    align-items: center;
    background-color: #d4af37;
    color: #0d1b2a !important;
    padding: 7px 16px;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: 0.2s;
  }
  .hr-btn-gold:hover {
    background-color: #c59b27;
  }
  .hr-btn-outline {
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    color: #e2e8f0 !important;
    padding: 7px 16px;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border: 1px solid rgba(255,255,255,0.3);
    transition: 0.2s;
  }
  .hr-btn-outline:hover {
    border-color: #d4af37;
    color: #d4af37 !important;
  }

  /* 通用 Section 样式 */
  .hr-section {
    margin-bottom: 38px;
  }
  .hr-kicker {
    display: block;
    color: #b45309;
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }
  .hr-section-title {
    font-size: 1.35em;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.35;
    margin-top: 0;
    margin-bottom: 14px;
  }

  /* 三列研究方向网格 (图1布局) */
  .hr-directions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 18px;
  }
  .hr-dir-card {
    background-color: #fafaf9;
    border: 1px solid #e7e5e4;
    border-radius: 6px;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
  }
  .hr-dir-num {
    color: #d4af37;
    font-size: 0.82rem;
    font-weight: 800;
    margin-bottom: 6px;
  }
  .hr-dir-title {
    color: #0f172a;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 8px 0;
    line-height: 1.35;
  }
  .hr-dir-desc {
    color: #475569;
    font-size: 0.88rem;
    line-height: 1.55;
    margin: 0;
  }

  /* News 列表 (金色时间标签) */
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
    background-color: #fef3c7;
    color: #92400e;
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

  /* Selected Publications 卡片 (金色标头 + 边框) */
  .hr-pubs {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
  }
  .hr-pub {
    background-color: #fafaf9;
    border: 1px solid #e7e5e4;
    border-left: 3.5px solid #d4af37;
    border-radius: 6px;
    padding: 16px 20px;
  }
  .hr-pub-venue {
    display: inline-block;
    color: #b45309;
    font-size: 0.76rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 6px;
  }
  .hr-pub h3 {
    margin: 0 0 6px 0;
    font-size: 1.02em;
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
    color: #b45309;
    font-weight: 700;
    font-size: 0.92em;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .hr-text-link:hover {
    color: #d4af37;
  }
</style>

<div class="hr-home">

  <!-- 1. Hero Section -->
  <section class="hr-hero">
    <p class="hr-eyebrow">ADVANCED WATER TREATMENT · MEMBRANE PROCESSES · INTERFACIAL INTERACTIONS · INTERPRETABLE MACHINE LEARNING · CAUSAL INFERENCE · MOLECULAR SIMULATIONS · RESOURCE RECOVERY</p>
    <h1 class="hr-title">From Molecular Mechanisms to Predictive Control: Advancing Sustainable Membrane-Based Water Treatment</h1>
    <p class="hr-sub">I am Haoxue Ran, a Ph.D. candidate in Environmental Science and Engineering at the School of Environmental and Municipal Engineering, <strong style="color: #ffffff;">Xi'an University of Architecture and Technology (XAUAT)</strong>. I conduct doctoral research under the supervision of <strong style="color: #ffffff;">Prof. Rui Miao</strong> and collaborate with <strong style="color: #ffffff;">Dr. Jin Zhao</strong> from the School of Mathematics and Statistics at Xi'an Jiaotong University.</p>
    
    <div class="hr-hero-note">
      Expected Graduation: <strong>June 2027</strong>. Actively seeking international <strong>Postdoctoral Positions (starting Fall 2027)</strong> in membrane separation, advanced water treatment, and mechanistic data-driven process modeling.
    </div>

    <div class="hr-hero-actions">
      <a class="hr-btn-gold" href="/publications/">Publications</a>
      <a class="hr-btn-outline" href="/research/">Research</a>
      <a class="hr-btn-outline" href="/cv/">CV</a>
    </div>
  </section>

  <!-- 2. Research Statement Section -->
  <section class="hr-section">
    <span class="hr-kicker">Research Statement</span>
    <h2 class="hr-section-title">Bridging molecular-level interfacial interactions and data-driven intelligence for sustainable membrane-based water treatment.</h2>
    <p class="hr-body">My research integrates trace-dose Fenton pretreatment, molecular dynamics (MD) simulations, and interpretable machine learning and causal inference to quantify how organic foulants, divalent cations (Ca<sup>2+</sup>, Mg<sup>2+</sup>), and co-solutes govern membrane fouling and its mitigation. My goal is to move membrane fouling control from empirical optimization toward mechanistic, predictive, and precision engineering for advanced water treatment, selective separation, and resource recovery.</p>
  </section>

  <!-- 3. Research Directions (Three-Column Pillars) -->
  <section class="hr-section">
    <span class="hr-kicker">Research Directions</span>
    <h2 class="hr-section-title">Core Research Pillars &amp; Methodologies</h2>
    <div class="hr-directions-grid">
      
      <!-- Direction 01 -->
      <div class="hr-dir-card">
        <span class="hr-dir-num">01</span>
        <h3 class="hr-dir-title">Fenton Pretreatment &amp; Fouling Control</h3>
        <p class="hr-dir-desc">Developing neutral-pH, trace-dose Fenton pretreatment strategies to mitigate organic membrane fouling, elucidating the roles of divalent cations (Ca<sup>2+</sup>, Mg<sup>2+</sup>) and interfacial transformation mechanisms.</p>
      </div>

      <!-- Direction 02 -->
      <div class="hr-dir-card">
        <span class="hr-dir-num">02</span>
        <h3 class="hr-dir-title">Machine Learning &amp; Causal Inference</h3>
        <p class="hr-dir-desc">Building interpretable predictive models and causal frameworks that decouple key factors governing membrane flux decline and quantitatively evaluate fouling mitigation pathways.</p>
      </div>

      <!-- Direction 03 -->
      <div class="hr-dir-card">
        <span class="hr-dir-num">03</span>
        <h3 class="hr-dir-title">Molecular Simulation &amp; Interfacial Science</h3>
        <p class="hr-dir-desc">Using molecular dynamics (MD) simulations to reveal nanoscale interfacial behavior, ion-bridging dynamics, and atomic-level causal mechanisms of co-solutes during membrane filtration.</p>
      </div>

    </div>
  </section>

  <!-- 4. News & Highlights Section -->
  <section class="hr-section hr-news-section">
    <span class="hr-kicker">Updates</span>
    <h2 class="hr-section-title">News &amp; Highlights</h2>
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

  <!-- 5. Selected Publications Section -->
  <section class="hr-section hr-pub-section">
    <span class="hr-kicker">Selected Works</span>
    <h2 class="hr-section-title">Featured Publications</h2>
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
    <a class="hr-text-link" href="/publications/">All Publications &rarr;</a>
  </section>

</div>

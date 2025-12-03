import{j as a,m as e,S as i}from"./constants.mxCLB6py.js";import"./index.Cd_vQiNd.js";function m(){const l=[{id:"languages",label:"Programming Languages",skills:i.languages,icon:"💻"},{id:"frameworks",label:"Frameworks & Libraries",skills:i.frameworks,icon:"⚡"},{id:"cloud",label:"Cloud & DevOps",skills:i.cloud,icon:"☁️"},{id:"ai",label:"AI & Machine Learning",skills:i.ai,icon:"🤖"},{id:"tools",label:"Development Tools",skills:i.tools,icon:"🛠️"}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return a.jsxs("section",{className:"skills section",id:"skills",children:[a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title text-center",children:"Wizarding Proficiency"}),a.jsx("p",{className:"section-subtitle text-center",children:"Magical abilities and enchantments I've mastered"}),a.jsx(e.div,{className:"skills-cards",variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:l.map(s=>a.jsxs(e.div,{className:"skill-category-card glass",variants:n,whileHover:{y:-8,scale:1.02},transition:{duration:.3},children:[a.jsxs("div",{className:"card-header",children:[a.jsx("span",{className:"category-icon",children:s.icon}),a.jsx("h3",{className:"category-title",children:s.label})]}),a.jsx("ul",{className:"skills-list",children:s.skills.map((t,c)=>a.jsxs("li",{className:"skill-item",children:[a.jsx("span",{className:"skill-bullet",children:"✦"}),a.jsx("span",{className:"skill-name",children:t.name})]},c))})]},s.id))})]}),a.jsx("style",{children:`
                .skills-cards {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: var(--space-4);
                    margin-top: var(--space-12);
                }

                @media (max-width: 1200px) {
                    .skills-cards {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .skills-cards {
                        grid-template-columns: 1fr;
                    }
                }

                .skill-category-card {
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: var(--radius-xl);
                    padding: var(--space-4);
                    transition: all var(--transition-base);
                    border: 1px solid rgba(116, 0, 1, 0.1);
                }

                .card-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-2);
                    margin-bottom: var(--space-4);
                    padding-bottom: var(--space-3);
                    border-bottom: 2px solid var(--accent-gold);
                }

                .category-icon {
                    font-size: var(--text-2xl);
                }

                .category-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-sm);
                    color: var(--primary-navy);
                    margin: 0;
                    text-align: center;
                    line-height: 1.2;
                }

                .skills-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-1);
                }

                .skill-item {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    padding: var(--space-1);
                    border-radius: var(--radius-md);
                    transition: background var(--transition-base);
                }

                .skill-item:hover {
                    background: rgba(116, 0, 1, 0.05);
                }

                .skill-bullet {
                    color: var(--accent-purple);
                    font-size: var(--text-sm);
                    flex-shrink: 0;
                }

                .skill-name {
                    font-weight: var(--font-medium);
                    color: var(--gray-800);
                    font-size: var(--text-sm);
                    line-height: 1.3;
                }
            `})]})}export{m as default};

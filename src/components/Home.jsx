import background from '../assets/background.svg';
import alexProfessionalPic from '../assets/alexxu_profile.jpeg'
import alexMitPic from '../assets/alexxu-mit-profile.jpg'
import personalCover from '../assets/personal-cover.png'
import smokeAppPic from '../assets/smoke-app-cover.png'
import btpHubLogo from '../assets/BTPHub_Logo.svg'
import btpHubPic from '../assets/btphub-cover-photo.png'
import bntPic from '../assets/bnt-website-cover.png'
import researchPic from '../assets/math-research-cover.png'
import wornOut from '../assets/worn-out.jpg'
import rodeoHorse from '../assets/rodeo-horse.jpg'
import deepInThought from '../assets/deep-in-thought.jpg'
import Cady from '../assets/cady_3.jpg'
import React from 'react';
import DOMPurify from 'dompurify'
import './home.css'


function Home() {
	// const menuButton = document.getElementById('menuButton');
	// const menuContainer = document.getElementById('menuContainer');
	// const it = 0
	// menuButton?.addEventListener("click", () => {
	// 	menuContainer.classNameList.toggle("hidden")
	// 	menuContainer.classNameList.toggle("flex")
	// })

	const [showCreative, setShowCreative] = React.useState(false)
	
	const [currContent, setCurrContent] = React.useState("")
	const [currType, setCurrType] = React.useState("art")

	const [pieces, setPieces] = React.useState([
		{
			type: 'art',
			title: 'Carrying My Steps',
			src: wornOut.src
		},
		{
			type: 'writing',
			title: "Corporate Greenwashing and Climate Inaction",
			subtitle: 'The Threat to Our Planet',
			text: `<p><strong>Corporate Greenwashing and Climate Inaction: The Threat to Our Planet</strong></p>
<p>In today&rsquo;s day and age, many corporations and companies have been pressured to make their own climate goals. We see the &ldquo;promises&rdquo; these companies have made. Google claims they&rsquo;ve been carbon neutral since 2007. Amazon promises to reach net-zero emissions by 2040. Yet, company efforts are still lackluster. The New Climate Institute finds &ldquo;net-zero&rdquo; targets made by companies only reduce emissions by 40% on average, much less than the 100% promised (New Climate Institute). Indeed, many companies are using misleading &ldquo;climate goals&rdquo; towards their own gain, at the expense of the planet.</p>
<p><strong>Vagueness and Overpromising</strong></p>
<p>For starters, &ldquo;net-zero&rdquo; plans are often vague. As already found, the climate goals presented by these companies often heavily overpromise. As research shows, so-called &ldquo;net-zero&rdquo; goals that promise to reduce emissions by 100% will fall short of their promises by over 60%. At the same time, many of these goals are filled with issues. For starters, the report by the NCI found that 24 of the 25 companies relied too heavily on carbon offsets, instead of directly decreasing their own emissions (New Climate Institute). Additionally, an analysis found that only 17% of the largest corporate polluters have appropriate medium-term targets (Climate Action 100+). Indeed, most of the companies had vague information on the impacts of their climate measures.</p>
<p>Furthermore, &ldquo;climate goals&rdquo; made by these companies often ignore key parts of their emissions.&nbsp;</p>
<p>For starters, climate goals often ignore their supply chains. Supply chains often make up the bulk of a company&rsquo;s emissions, but it&rsquo;s rarely being measured. Walmart stated that about 95 percent of the carbon emissions related to its business comes from its supply chain. Yet, with how big of a part supply chains play in carbon emissions, a study found that only 210 of 2000 companies that have pledged to become net zero actually reported emissions from supply chains (Creswell). And the fact is, very few companies are willing to decrease carbon emissions in their supply chains, despite the huge impact. Indeed, only three of 25 companies analyzed in a study clearly committed to removing over 90% of carbon emissions from their production and supply chain in their &ldquo;net-zero&rdquo; goals (New Climate Institute).&nbsp;</p>
<p>Additionally, climate goals often ignore the impacts of their products. In order to accurately measure the true impact of a company&rsquo;s emissions, they need to disclose full details on all so-called Scope 3 emissions - pollution caused by suppliers and consumers. But, as the report by the NCI finds, only 7 of the 25 companies analyzed disclose full details on scope 3 emission sources. They further, stating that &ldquo;companies are selective in what they present.&rdquo; Indeed, when the NCI took a look at the climate plans of 25 international companies, they gave most of them very low marks.&nbsp;</p>
<p><strong>Falsehoods</strong></p>
<p>Many companies also have misleading climate goals. Oil and gas giants are key examples of misleading and downright false information. Many claim to commit to net zero goals in public, but they are unwilling to change their business practices. In fact, none of the oil giants have committed to cut its oil and gas output over the next decade. Private emails reveal that climate goals are not urgent. Oil giant Shell promises to achieve net-zero emissions by 2050. Yet, in a leaked email, Shell stated that it had &ldquo;no immediate plans to move to a net zero emissions portfolio&rdquo; in the next &ldquo;10-20 years.&rdquo; Other giants have similar goals, but without clear plans. For instance, Chevron aspires to reduce the carbon intensity of their energy products by 5% by 2028, but doesn&rsquo;t have a detailed plan.&nbsp;</p>
<p>In fact, many of these companies have spent billions on advertising, while not changing their business practices. BP claimed they were focused on low-carbon energy products, yet more than 96% of its annual spending is still on oil and gas. But &ldquo;green-washing&rdquo; as it's called, is found in all sectors. As companies from all sectors have flooded in to provide their own &ldquo;green-conscious products&rdquo;, exaggeration and downright false information have only been on the rise. Volkswagen is just one example. In their marketing, the company persistently touted their &ldquo;eco-friendly&rdquo; products. However, Volkswagen turned out to be faking their emissions reports. In fact, the Environmental Protection Agency found that the cars produced up to 40 times more emissions than advertised (EPA). It was a similar story at H&amp;M, where an investigation found that much of their data portrayed products as more eco-friendly than they actually were (Quartz). A report by Terrachoice confirms, more than 95% of products marketed as eco-friendly had committed at least one of the &ldquo;seven sins&rdquo; of greenwashing (TerraChoice).&nbsp;</p>
<p>The true impact of greenwashing and under delivering is that it allows corporations and companies to make lackluster efforts toward climate change. For starters, it's clear that green-washing has a negative effect on consumers. A survey found that 83% of consumers feel misled by green and sustainable buzzwords in advertising (Wright). The result is that these companies can continually make claims about their products, while consumers are more likely to buy. The fact is, the majority of companies have policies in place that undermine any opportunity to achieve net-zero operations. As already found, companies like BP and other large emitters continue to advertise their eco-friendly plans, while the vast majority of its annual spending is still spent on oil and gas. Greenwashing in fast-fashion, plastics, oil, and many other sectors dangerously understate the impact corporations have toward climate change.</p>
<p><strong>What Has to Be Done</strong></p>
<p>Action is needed now, yet many companies continue to be inactive. There are too many instances of companies using greenwashing and &ldquo;climate goals&rdquo; for their own benefit. Fighting back starts with the consumer. Many are already becoming aware of the greenwashing of companies, but more is necessary. We can stop the trend of greenwashing by pushing for action and being aware of false advertising. But nothing can change the fact that inaction is only making climate change - the threat to our livelihoods - worse. The clock is ticking, but it's not too late to take action.</p>
<p><br /><br /><br /></p>
<p><strong>Works Cited</strong></p>
<p>ClientEarth. &ldquo;BP greenwashing complaint sets precedent for action on misleading ad campaigns.&rdquo; <em>ClientEarth</em>, 17 June 2020, https://www.clientearth.org/latest/latest-updates/news/bp-greenwashing-complaint-sets-precedent-for-action-on-misleading-ad-campaigns/</p>
<p>Climate Action 100+. &ldquo;Climate Action 100+ Net Zero Company Benchmark shows an increase in company net zero commitments, but much more urgent action is needed to align with a 1.5&deg;C future.&rdquo; <em>Climate Action 100+</em>, 30 March 2022, https://www.climateaction100.org/news/climate-action-100-net-zero-company-benchmark-shows-an-increase-in-company-net-zero-commitments-but-much-more-urgent-action-is-needed-to-align-with-a-1-5c-future/</p>
<p>Creswell, Julie. &ldquo;Corporate Climate Pledges Often Ignore a Key Component: Supply Chains (Published 2021).&rdquo; <em>The New York Times</em>, 3 November 2021, https://www.nytimes.com/2021/11/02/business/corporate-climate-pledge-supply-chain.html</p>
<p>EPA. &ldquo;Learn About Volkswagen Violations | US EPA.&rdquo; <em>EPA</em>, https://www.epa.gov/vw/learn-about-volkswagen-violations</p>
<p>New Climate Institute. <em>Corporate Climate Responsibility Monitor 2022</em>. 2022, https://newclimate.org/sites/default/files/2022/02/CorporateClimateResponsibilityMonitor2022.pdf.</p>
<p>Quartz. &ldquo;Quartz investigation: H&amp;M showed bogus environmental scores for its clothing.&rdquo; <em>Quartz</em>, 29 June 2022, https://qz.com/2180075/hm-showed-bogus-environmental-higg-index-scores-for-its-clothing</p>
<p>TerraChoice. &ldquo;TERRACHOICE 2010 SINS OF GREENWASHING STUDY FINDS MISLEADING GREEN CLAIMS ON 95 PER CENT OF HOME AND FAMILY PRODUCTS.&rdquo; <em>PR Newswire</em>, 26 October 2010, https://www.prnewswire.com/news-releases/terrachoice-2010-sins-of-greenwashing-study-finds-misleading-green-claims-on-95-per-cent-of-home-and-family-products-105757733.html</p>
<p>Wright, Georgia. &ldquo;83% of shoppers mislead by green &amp; sustainable advertising.&rdquo; <em>Retail Gazette</em>, 29 January 2020, https://www.retailgazette.co.uk/blog/2020/01/83-of-shoppers-mislead-by-green-sustainable-advertising/</p>`,
			background: '#01A8B4',

		},
		{
			type: 'art',
			title: 'Deep in Thought',
			src: deepInThought.src
		},
		{
			type: 'writing',
			title: 'April 29, 1992: Not For Us',
			subtitle: 'A Short Story',
			text: `<p><strong>April 29, 1992: Not For Us</strong></p>
<p><span style="font-weight: 400;">I sat at the counter, listening to the noises outside. Los Angeles played its regular symphony, the ever present sounds of zipping cars, distant police sirens, and air conditioning units. Earlier in the morning I had restocked all the shelves and put new drinks in the vending machines, but we weren&rsquo;t getting many customers today. I watched the lucky cat on my desk endlessly wave at the unopening glass door, the pendulum arm that went up and down.&nbsp;</span></p>
<p><span style="font-weight: 400;">My husband and I opened the shop in 1981. When we initially found this plot of land in the middle of the emerging Koreatown, it felt like fate had led us here. We were both born in Korea, though my family moved to America when I was 5. I always said that we were a perfect match. Besides everything we had gone through together, we both wanted this store. We had our overlapping reasons. For me, it was freedom and being able to care for children. For him, it was the family and having his own job.&nbsp;</span></p>
<p><span style="font-weight: 400;">In the midst of my reminiscing, I heard footsteps walking out of the store&rsquo;s back room, and my husband appeared. Looking at his lean figure, you could tell that he&rsquo;d been shaped by years of hard work carrying boxes of goods, organizing the back room, and managing the business. Usually, he was always smiling, no doubt proud of his work and our store. Except now, the smile was missing. I looked at his face, and his concerned look worried me.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Hey babe, turn on the TV&rdquo;, he told me. We had a small television in the corner of the counter, which I flicked on.&nbsp;</span></p>
<p><span style="font-weight: 400;">The television whirred for a bit before images started appearing. We were tuned to Los Angeles&rsquo;s ABC channel. We first saw what we always expected from the news: some anchor talking about some random situation going on in the city. Except the news then cut to a video from a news helicopter, and we saw scenes from above of crowds of people pushing through streets and clashing with police. The video zoomed out a bit, and flames became visible. There were burning tires on the street. Some of the buildings seemed severely damaged.</span></p>
<p><span style="font-weight: 400;">I looked over at my husband and asked, &ldquo;what&rsquo;s happening?&rdquo; &ldquo;Something terrible must have happened, something that angered the public&rdquo;, he responded.&nbsp;</span></p>
<p><span style="font-weight: 400;">The news then flipped to a new video, one that didn&rsquo;t seem live. In it there were six people in police uniform, a white vehicle in the backdrop, and a man laying on the ground. They were beating the man on the ground. I watched horrified as one officer swung his baton into the man&rsquo;s leg. Another near his neck. Each swing slowed down time, and the swings kept on coming. It felt like the assault was never ending, another swing of the officer&rsquo;s baton coming after the last, like the cat on my desk. Other officers just circled the man, like vultures do around their prey.&nbsp;</span></p>
<p><span style="font-weight: 400;">The news described how all the officers in the video were acquitted, the cause of the scenes we saw. Still, the riots that were occurring felt like a thousand miles away. Still, I wanted to feel safe.&nbsp;</span></p>
<p><span style="font-weight: 400;">After more helicopter scenes of the rioting, the news anchor returned, and a map was shown. I heard choppy segments of what was being said, &ldquo;</span><em><span style="font-weight: 400;">rioting</span></em><span style="font-weight: 400;"> impacting Watts and Crenshaw&hellip;&rdquo;, &ldquo;quickly moving up north&rdquo;, &ldquo;will move into </span><em><span style="font-weight: 400;">Koreatown </span></em><span style="font-weight: 400;">and Bever&hellip;&rdquo; I looked at my husband, and I didn&rsquo;t hide my fear. He looked wide eyed too. &ldquo;What do we do?&rdquo; I asked. At that moment, the phone rang.&nbsp;</span></p>
<p><span style="font-weight: 400;">My husband picked up the phone, and I watched as he listened to whoever was on the other side and nodded his head. Eventually, he slammed the phone back down, scaring me. &ldquo;Our neighbors just called. The police have blocked off all the northbound roads into the rich neighborhoods. Babe, they&rsquo;ve blocked us in here.&rdquo;</span></p>
<p><span style="font-weight: 400;">Koreatown was supposed to be our bubble, where we were &ldquo;protected&rdquo;. On that day, when it was quiet in the store and my husband and I were watching the news together, that bubble burst.&nbsp;</span></p>
<p><span style="font-weight: 400;">I turned off the TV, staring at my husband. I don&rsquo;t know if it was just my imagination, but the sirens outside &ndash; which usually fade into the background &ndash; suddenly seemed louder. I stood up, grabbed the keys that sat on the desk, and locked the store&rsquo;s glass door. In swift motion I clicked off the OPEN sign and turned some lights off. The store </span><em><span style="font-weight: 400;">was </span></em><span style="font-weight: 400;">our home. While the first floor was our life support, the actual store, the second was our livelihood, where we lived and slept and so did </span><em><span style="font-weight: 400;">the kids</span></em><span style="font-weight: 400;">.</span></p>
<p><span style="font-weight: 400;">&ldquo;I&rsquo;m going to make sure the kids are asleep,&rdquo; I announced loudly. I sped into the backroom and up a flight of stairs that led to the second floor. I peered into the twins&rsquo; bedroom. They were both asleep for now. I came back down to the first floor in the back room. I saw my husband rummaging through some boxes until he pulled out a container I&rsquo;d never seen before.</span></p>
<p><span style="font-weight: 400;">I walked by him and watched the world from the storefront. The sun was setting and smoke lingered in the air. We had only a bit of wood that barely boarded up a single window. Somewhere close, rioters were setting things on fire and destroying businesses. I thought of the kids. They could be hurt, if not physically, then in a harsher life without the store. And through it all, where were the police? No sirens blared. It was quiet. If our neighbors were correct earlier, then the police were gone defending the rich neighborhoods, leaving us to fend for ourselves.</span></p>
<p><span style="font-weight: 400;">My husband emerged from the back again, holding something wrapped in a worn, faded towel. He didn&rsquo;t speak as he set it on the counter and gently unwrapped it. I watched, silent, as the object took shape: a rifle. Not flashy, not new. It was old, but well cared for. He inspected it with steady hands, checked the magazine, then laid it down carefully.</span></p>
<p><span style="font-weight: 400;">&ldquo;You had that this whole time?&rdquo; I asked.</span></p>
<p><span style="font-weight: 400;">He nodded. &ldquo;I bought it when we first opened the shop,&rdquo; he said. &ldquo;Just in case. I prayed I&rsquo;d never need it.&rdquo;</span></p>
<p><span style="font-weight: 400;">There was no heat or pride in his voice. Just the weight of a man who had always known, deep down, that when the world stopped paying attention, he might have to be enough.</span></p>
<p><span style="font-weight: 400;">I looked at the rifle, then back at him. &ldquo;You&rsquo;re not going to use it?&rdquo;</span></p>
<p><span style="font-weight: 400;">&ldquo;Only if someone tries to hurt you. Or the kids,&rdquo; he said, eyes meeting mine. &ldquo;But no. I don&rsquo;t want to ever need it. I just want them to know we&rsquo;re here. That we&rsquo;re not invisible.&rdquo;</span></p>
<p><span style="font-weight: 400;">He packed a small duffel with the essentials: flashlight, batteries, the radio, a bottle of water. The rifle was slung over his shoulder, but it hung there more like a warning than a weapon. A reluctant symbol of a choice he never wanted to make.</span></p>
<p><span style="font-weight: 400;">Then he looked at me. Not with fear. Not even with anger. But with something quiet, solid.</span></p>
<p><span style="font-weight: 400;">&ldquo;I&rsquo;m going to the roof. The others are already up.&rdquo;</span></p>
<p><span style="font-weight: 400;">I didn&rsquo;t say anything at first. Just followed him through the back hallway, past the dim lightbulb swaying from the ceiling, and up the narrow staircase. I stopped at the doorway leading to the roof, watching as he stepped out into the night. There were a few others already on the surrounding rooftops. I recognized Mr. Choi from the corner market, a man who had often picked up our kids from school when we were too busy with the store. He gave my husband a nod, then looked away. No words were needed.</span></p>
<p><span style="font-weight: 400;">I stepped outside too, arms crossed, as a soft wind blew over the rooftops. My husband set down his things, unrolled an old mat to sit on, and positioned a flashlight beside him. The rifle was placed carefully at his side, untouched. He scanned the street with quiet eyes.</span></p>
<p><span style="font-weight: 400;">Below, the city cracked, a gradual chaos unraveling. A scream rose in the distance. We heard a crunch of glass. Fires burned two blocks away.&nbsp; A car alarm started wailing and didn&rsquo;t stop. But there were no sirens.&nbsp;</span></p>
<p><span style="font-weight: 400;">The police weren&rsquo;t coming. Not for us.</span></p>
<p><span style="font-weight: 400;">Not for the store owners. Not for the families tucked above shops. Not for the children sleeping upstairs. Not for the immigrants who scraped their lives together brick by brick. We had been left out of the circle of concern, like someone had drawn a line around the neighborhoods that mattered, and we weren&rsquo;t inside it.</span></p>
<p><span style="font-weight: 400;">&ldquo;They&rsquo;re not coming, are they?&rdquo; I asked, voice barely above a whisper.</span></p>
<p><span style="font-weight: 400;">He shook his head. &ldquo;They&rsquo;re guarding Beverly Hills. Westwood. Downtown. Not here.&rdquo;</span></p>
<p><span style="font-weight: 400;">I felt something sink deep in my stomach. A slow, cold realization. The kind that doesn&rsquo;t shock, but confirms what you&rsquo;ve tried not to believe.</span></p>
<p><span style="font-weight: 400;">And yet, through it all, he stayed. My husband. The quiet man who never raised his voice, who always worked late without complaint, who gave the delivery drivers free soda in summer. Sitting there with a rifle he didn&rsquo;t want to use, watching over the store he built with his hands, over the family we made together.</span></p>
<p><span style="font-weight: 400;">I sat beside him. &ldquo;We&rsquo;ll stay awake together,&rdquo; I said. &ldquo;Until morning.&rdquo;</span></p>
<p><span style="font-weight: 400;">He nodded, eyes still on the street.</span></p>
<p><span style="font-weight: 400;">That night passed like smoke, thick, slow, choking. From time to time we heard things: running, shouting, breaking. But no one came for us. Maybe it was luck. Maybe it was because they saw the shadows on the rooftops and thought twice.</span></p>
<p><span style="font-weight: 400;">But deep down, I knew: it wasn&rsquo;t because we were protected.</span></p>
<p><span style="font-weight: 400;">It was because we protected ourselves.</span></p>
<p><span style="font-weight: 400;">As the first light broke the horizon, revealing the hazy, soot-stained skyline of Koreatown, I looked over at my husband again. The rifle still lay untouched beside him. His back was straight. His eyes, tired but unflinching.</span></p>
<p><span style="font-weight: 400;">And in that silence between us, I saw him clearer than ever.</span></p>
<p><span style="font-weight: 400;">Someone left to fill the space where protection should&rsquo;ve been.</span></p>
<p><span style="font-weight: 400;">And for that, I loved him more than I ever had before.</span></p>`,
			background: '#CC5500'
		},
		{
			type: 'art',
			title: 'Rodeo Horse',
			src: rodeoHorse.src
		},
		{
			type: 'writing',
			title: 'Fulton County Schools Resolution Proposal',
			subtitle: 'Reviewed & Discussed with District',
			text: `<p><strong>Fulton County Schools Resolution Proposal</strong></p>
			<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> the people of Fulton County, the United States, and the world are progressively experiencing the impacts of climate change through rising temperatures, frequent wildfires, and natural disasters such as hurricanes; and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> scientific research has shown clear evidence that recent disasters, like Hurricane Helene and Hurricane Milton, were directly exacerbated by climate change; and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> Georgia was ranked the 5th most vulnerable to climate change across all the US states by the US Climate Vulnerability Index (</span><a href="https://map.climatevulnerabilityindex.org/"><span style="font-weight: 400;">Source</span></a><span style="font-weight: 400;">) and 8th most at risk to extreme precipitation and heat by Climate Check (</span><a href="https://climatecheck.com/georgia"><span style="font-weight: 400;">Source</span></a><span style="font-weight: 400;">); and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> climate change is fundamentally driven by human action, particularly through the increased emission of greenhouse gasses; and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> in the US, schools are one of the largest public sector consumers of energy, producing the equivalent of 18 coal-fired power plants or 15 million cars each year in emissions (K-12 Climate Action); and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> transportation and buildings are among the top sources of greenhouse gas emissions; every month, transportation and commercial buildings account for 42.23% and 27.56% of emissions, respectively in Fulton County (</span><a href="https://www.drawdownga.org/climate-solutions-trackers-and-tools/ghg-emissions-tracker/"><span style="font-weight: 400;">Source</span></a><span style="font-weight: 400;">); and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> the use of renewable electricity reduces greenhouse gas emissions relative to the use of fossil fuels; and&nbsp;</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> there is an international scientific consensus to keep global warming to no more than 1.5&deg;C by 2050 to protect the health of our students, the nation, and the world; and&nbsp;</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> there is unprecedented funding through numerous grant programs in the Inflation Reduction Act of 2022 and the Infrastructure Investment and Jobs Act of 2021 to financially support the electrification of transportation and buildings; and&nbsp;</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> Fulton County School District students and staff will experience the effects of climate change in the forms of poor air quality, increased temperatures, natural disasters, frequent wildfires; and</span></p>
<p><br /></p>
<p><strong>WHEREAS,</strong><span style="font-weight: 400;"> Fulton County Schools is already committed to taking actions to mitigate the threat of climate change by being the first in the state of Georgia to invest in electric school buses, being an Energy Star &ldquo;Top Performer,&rdquo; and committing to replacing diesel schools buses to propane school buses; and</span></p>
<p><br /></p>
<p><strong>WHEREAS, </strong><span style="font-weight: 400;">electric vehicles, electric appliances, and battery-powered or electric plug-in landscape equipment generally can be operated and maintained at a lower cost than their fossil-fuel powered counterparts; and&nbsp;</span></p>
<p><br /></p>
<p><strong>WHEREAS, </strong><span style="font-weight: 400;">the use of electric vehicles, electric appliances, and battery-powered or electric plug-in landscape equipment leads to better air quality and respiratory health outcomes than their fossil-fuel powered equivalents; and</span></p>
<p><br /></p>
<p><strong>NOW, THEREFORE, BE IT RESOLVED,</strong><span style="font-weight: 400;"> that the Board directs the Utilities Services to create a Sustainability Task Force by January 1st, 2026, that will include community members, students, energy experts, partners, and district staff serving as chairs, and will be headed by a environmentally knowledgeable executive director. The mission of the committee will be to develop a long-term plan of energy sustainability, clean energy, and environmental awareness to be presented to the Board</span></p>
<p><br /></p>
<p><strong>BE IT FURTHER RESOLVED,</strong><span style="font-weight: 400;"> that the Sustainability Task Force will formulate a long-term plan including:</span></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">(1) creating a plan to replace all gas-based HVAC systems by adding and improving electric systems,</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(2) installing solar panels and batteries on buildings and/or parking structures,&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(3) electrifying transportation to and from schools in the School District, including electrifying buses,</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(4) increasing transparency on environmental impact by reporting on emissions and ESG</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(5) expanding the district&rsquo;s recycling and compost programs,</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(6) adding mandatory environmental education and awareness in learning curriculum especially for K-8 schools</span></li>
</ul>
<p><br /></p>
<p><strong>BE IT FURTHER RESOLVED,</strong><span style="font-weight: 400;"> that the formed Sustainability Task Force will create this long-term plan including all that is listed above by May 31st, 2026.</span></p>
<p><br /></p>
<p><strong>BE IT FURTHER RESOLVED,</strong><span style="font-weight: 400;"> that as the Board will seek to create healthier, more environmentally sustainable schools, and the Board hereby pledges itself to the following goals:&nbsp;</span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">to use 100% clean, renewable energy in its electricity sector by 2035; and</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">to meet 100% of all district operations energy needs with carbon neutral energy by 2050.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">to track progress on carbon neutral energy goals with publicly disclosed benchmarking every two years. Tracking will pertain to: identifying all emission sources, collecting relevant data on activities like energy usage, transportation, and waste disposal, and finding out the county&rsquo;s total greenhouse gas emissions.</span></li>
</ol>
<p><br /></p>
<p><strong>BE IT FURTHER RESOLVED, </strong><span style="font-weight: 400;">the Task Force will consider the following:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">(1) To identify Federal, State of Georgia, and other grant, subsidy, rebate, and similar programs that provide financial support for the electrification of transportation and buildings in the School District (&ldquo;Grants&rdquo;).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(2) To commit that any new purchases of school buses and other vehicles used by the School District will be electric.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(3) To commit that in any new construction or major remodel of a building in the School District, only electric appliances will be installed.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(4) To create a Building Electrification Readiness Plan that addresses all aspects of preparation necessary to replace fossil-fuel powered appliances used by schools in the School District (&ldquo;Gas Appliances&rdquo;) with all-electric appliances (&ldquo;Electric Appliances&rdquo;), including electrical service and panel capacity, wiring and duct requirements, prospective equipment locations, and structural requirements such as footings.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">(5) To commit that any new purchases of appliances used by the School District will be Electric Appliances.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(6) To apply for Grants to replace Gas Appliances with Electric Appliances, including the replacement of fossil-fuel powered water heaters and furnaces with electric heat-pump water heaters and furnaces, and replacing natural-gas or propane-gas cooking equipment with all-electric equipment, including induction stoves and cooktops.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(7) To consider cases of any Gas Appliances that are not replaced with funds received from Grants, the School District hereby commits to replacing such Gas Appliances with Electric Appliances at the time of burn-out or replacement.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">(8) To commit that any fossil-fuel powered generator used by the School District will be replaced no later than 2027 with a battery-powered alternative for backup power.&nbsp;</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">The foregoing resolution is hereby approved and adopted by the Board of Education of the Fulton County School District at its regular public meeting on this ________________.&nbsp;</span></p>
<p><br /></p>
<p><strong>PASSED AND ADOPTED </strong><span style="font-weight: 400;">this ________________ by the following vote:&nbsp;</span></p>
<p><span style="font-weight: 400;">AYES:&nbsp;</span></p>
<p><span style="font-weight: 400;">NOES:</span></p>`,
			background: '#CC5500'
		}
	])
	
	return (
		<div className="portfolio" id="creative">
			<div className="portfolio-title">
				<div>
					My Creative Work
				</div>
				<div className="fancy-underline">
				</div>
			</div>
			<div className="project-portfolio-container">
				<div className="creative-grid">
					{pieces.map((el, id) => {
						return (
							<div className="creative-item" key={id} onClick={() => {setShowCreative(true); setCurrType(el.type); if (el.type == 'writing') {setCurrContent(el.text)} else{ setCurrContent(el.src)}}} style={{position: 'relative', background: el.type == 'writing' ? el.background : 'none'}}>
								{el.type == 'art' && <img src={el.src} className="creative-item-image" style={{position: 'absolute'}}/>}
								<div className="creative-description-container">
									<div className="creative-item-title">{el?.title}</div>
									{el.type == 'writing' && <div className="creative-item-subtitle">{el?.subtitle}</div>}
								</div>
							</div>
						)
					})}
					
				</div>
			</div>
			{
				showCreative &&
				<div className="creative-open-pane">
					<div className="creative-piece">
						<div className="hideCreative" onClick={() => {setShowCreative(false)}}>
							<i class="fa-solid fa-xmark" style={{fontSize: '24px'}}></i>
						</div>
						<div className="creative-content">
							{
								currType == 'art' ? 
								<img src={currContent} className="source-image"/>
								:
								<div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currContent)}} className="source-text">
								</div>
							}

						</div>
					</div>
					
				</div>
			}
		</div>
	)
}

export default Home;


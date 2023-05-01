-- CREATE DATABASE "Care_From_The_Hart"

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR(100) NOT NULL,
	"isAdmin" BOOLEAN NOT NULL DEFAULT 'false'
);

CREATE TABLE "articles" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(500) NOT NULL,
"content" VARCHAR(5000) NOT NULL,
	"date" DATE NOT NULL,
	"link" TEXT NOT NULL
);

CREATE TABLE "comments" (
	"id" SERIAL PRIMARY KEY,
	"articles_id" INT REFERENCES "articles" NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"comment" VARCHAR(5000) NOT NULL,
	"likes" INTEGER 
);

CREATE TABLE "booking" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"date" DATE NOT NULL,
	"email" VARCHAR (100) NOT NULL,
	"request" VARCHAR(5000) NOT NULL,
	"isApproved" BOOLEAN NOT NULL DEFAULT 'false'	
);





--ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("articles_id") REFERENCES "articles"("id");
--ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("users_id") REFERENCES "users"("id");
--ALTER TABLE "booking" ADD CONSTRAINT "booking_fk0" FOREIGN KEY ("users_id") REFERENCES "users"("id");

--starter users
INSERT INTO "user" ("username","password","isAdmin")
VALUES ('sean','greece','yes');


-- starter comments 
INSERT INTO "comments" ("articles_id", "user_id", "comment")
VALUES (2,1, 'I loved this artile it was very insightful');


-- starter articles 
INSERT INTO "articles" ("title","content","date", "link")
VALUES ('Psychiatrist Dr. Dionne Hart speaks out about huge gaps in mental health services among communities of color', 'When Dr. Dionne Hart was considering medical school her high school adviser suggested she choose something more "suitable." Fortunately she ignored the advice. Hart who was "always curious about brain disorders," is among a tiny group of Black women psychiatrists. An adjunct assistant professor at the Mayo Clinic School of Medicine and Science, she is also the first and only Black woman to be elected to the Minnesota Medical Associations board of trustees. Hart spoke recently on a panel of women psychiatrists sponsored by NAMI Minnesota. She expands below on mental health challenges for a Black community reeling from COVID-19 and the killing of George Floyd.Q: Even when you had a medical school acceptance letter, people tried to discourage you. Why was that?

A: I had my first child at 17 and welcomed my other two children during my second and third years of college. I married at 18 and I left an abusive relationship at 20. I think some people were genuinely scared and worried that I would be disappointed. When I think of my experience in medical school, it was as if I was standing inside a tornado. Everything was still. From my viewpoint, I could not fully appreciate all of the changes and chaos happening around me because I was so focused on my goals. My denial protected me from being overwhelmed by the challenges I faced.

Q: You must have channeled your deeply proud father, too. You have a lovely story about him.

A: My father was born in 1920. He never spoke about medical school dreams as his own, but rather dreams he had for me. After his older brother died in World War II, he was expected to help the family financially. After he passed away at 79, I found a dissection kit that he kept in a drawer. Its now in my home office.' ,'04,16,2021','https://www.startribune.com/inspired-s-race-and-equity-series-explores-mental-health-disparities-with-psychiatrist-dr-dionne-ha/600046918/'),('It’s Not Our Grandfathers’ AMA: Two Physicians Share Psychiaty’s Important Role in AMA’s Evolution','Dionne Hart, M.D., is an APA delegate to the AMA House of Delegates, a member of the Minnesota Medical Association Board of Trustees, president of the Minnesota Association of African American Physicians, chair of the National Medical Association’s Region IV, and the AMA liaison to the National Commission on Correctional Health Care Board of Representatives.','04/04/2023','https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2023.04.4.28') ,('People in mental health crisis need healthcare pros, not cops','Before 911 was implemented, people needing help dialed local 10-digit phone numbers to reach police, fire or emergency services. Emergency medical responses were not widespread or commonly available. 

In many communities of color, transportation for emergency services was provided by funeral home staff. Following a report calling for action to reduce the number of deaths and injuries nationwide to request an ambulance, 911 was implemented. The first call to 911 was placed in February 1968. 

In 1973, a new law, the Emergency Medical Services (EMS) Act of 1973, strengthened emergency services. The Act was part of the Public Health Services Act providing federal guidelines and over $300 million in funding to develop regional EMS systems across the United States. 

This law included a newly designed, single, nationwide telephone number to summon an ambulance—911. Its implementation and nationwide use occurred over many decades. In fact, it would be a rare individual who did not know to call 911 when a person is experiencing a medical emergency, including a mental health crisis, to activate emergency medical services.','11,10,2022','https://spokesman-recorder.com/2022/11/10/people-in-mental-health-crisis-need-healthcare-pros-not-cops/'), ('This is an uprising to save our lives','As people of color, we have experienced similar losses over 400 years. Through social media, we have repeatedly, collectively grieved for so many people of color, those familiar to us and those unknown to us personally. As a psychiatrist, I listen each day to people sharing their stories, often involving trauma. My training prepared me to function and to offer appropriate treatment to these patients. But as a mother, I was never prepared to worry about my child’s life being threatened or their life lost by performing mundane acts like driving to work, playing in the park, having a broken tail light, birdwatching, or exercising. My fears are shared by every mother and
father of color and each individual of color. We worry that we or someone we love will be thenext person memorialized in a hashtag','08/03/2020','https://www.mnpsychsoc.org/uploads/1/3/7/0/13709464/ior_2020-4_web.pdf'), ('Cultural Issues in the Emergency Setting
','The setting of a fast-paced emergency department or psychiatric emergency service makes it especially difficult to sensitively elicit and address an individual patients needs and concerns. When considering the myriad differences in culture that come into play between a patient and a psychiatrist or other mental health care clinician, optimal diagnosis and treatment can be even more challenging, as the cases described here illustrate. The important influence of culture cannot be stressed enough. Taking the time to understand "where the patient is coming from" can prevent an already stressful, highly emotionally charged situation from becoming even more convoluted.','11/01/2006','https://www.psychiatrictimes.com/view/cultural-issues-emergency-setting'),('Institutional racism in medicine','Institutional or systemic racism is defined as “the distribution of resources, power, and opportunity in our society to benefit white people and the exclusion of people of color.” Present-day racism is built on a long history of racially distributed resources. It’s a system that comes with a broad range of policies that keep it in place and is present in every element of society, including health care.','07/15/2020','http://www.mppub.com/mp-c1-0720.html'),('‘Socially Invisible’: Panel Raises Awareness for Missing Women of Color','In 2020, about 40% of the 250,000 women and girls who were reported as missing in the United States were people of color, even though they made up just 16% of the overall population.','08/27/2022','https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2022.10.10.22'),('Decisional capacity and advance care planning in older people who are incarcerated','Abstract:
There is a growing number of older people incarcerated across the United States. With a
population of greater than 300 million, the US has 5% of the world’s population, yet incarcerates 25% of
the world’s prisoners. From 2000 to 2005, the percentage of prisoners in federal and state correctional
institutions who were 55 and older increased by 33%. According to the American Civil Liberties Union
older prison population has climbed 1300% since the 1980s, with 125,000 inmates aged 55 or older
incarcerated.','08/11/2021','https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C70A429AB032AC308ACFF5FC993612E8/S104161022100137Xa.pdf/div-class-title-203-decisional-capacity-and-advance-care-planning-in-older-people-who-are-incarcerated-div.pdf');

-- starter booking
INSERT INTO "booking" ("user_id","date","request","isApproved")
VALUES (1, '04/17/2023', 'I would love to have you come do a presentation in Las Vegas', 'yes');


UPDATE "comments" SET "comment" = 'THIS WORKS' WHERE "id" = 4 AND "user_id" = 3 AND "articles_id" = 1; 
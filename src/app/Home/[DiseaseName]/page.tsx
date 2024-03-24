"use client"

type DiseaseInfo = {
    name: string;
    img_src: string;
    description: string;
    symptoms: string;
    cause: string;
    precautions: string;
    cure: string;
};

export default function Disease({ params }: {
    params: { DiseaseName: string }
}) {
    const diseaseName = params.DiseaseName;
    console.log(diseaseName)

    let Diseases: { [key: string]: DiseaseInfo } = {
        'mastitis': {
            name: "Mastitis",
            img_src: "/Mastitis.png",
            description: "An inflammation of the mammary gland (udder) in cattle. This highly prevalent condition is the most significant cause of economic loss in the dairy industry.",
            symptoms: `Visible changes in milk: May appear watery, discolored, or contain flakes, clots, or pus
            Udder abnormalities: Swelling, hardness, redness, heat, or pain in the affected quarter(s) of the udder
            Systemic symptoms in severe cases: Fever, reduced appetite, weakness, shock`,
            cause: `Bacterial infection: Most commonly caused by bacteria like Staphylococcus aureus, Streptococcus agalactiae, Escherichia coli,
            and others. These bacteria can enter the udder through the teat canal.
            Less commonly: Fungal infections, yeast infections, viruses, or physical trauma to the udder.`,
            precautions: `Excellent hygiene: Clean milking environment, regular cleaning and disinfection of milking equipment, pre- and
            post-milking teat disinfection.
            Proper milking technique: Avoid overmilking, ensure complete milk-out, and proper machine function.
            Early detection and treatment: Regular monitoring of milk and udder health, and prompt treatment of any suspected cases.
            Cow comfort: Provide clean, dry bedding and minimize stress for the cows.
            Segregation of infected cows: Isolate cows with mastitis to reduce the spread of infection.`,
            cure: `Antibiotics: Treatment often involves the use of antibiotics, selected based on identifying the specific bacteria involved. Intramammary (udder) infusions are common.
            Systemic support: In severe cases, additional treatments to address fever, dehydration, or shock may be needed.
            Culling: In chronic or unresponsive mastitis cases, culling (removing the cow from the herd) may be necessary.`
        },
        'blackleg': {
            name: "Blackleg",
            img_src: "http://www.flockandherd.net.au/cattle/images/blacklegmyocarditis01.jpg",
            description: `Blackleg is a severe, often fatal bacterial disease that primarily affects cattle and occasionally other ruminants. It is characterized by muscle inflammation, gas formation, and lameness.`,
            symptoms: `Sudden onset of high fever.
            Depression and loss of appetite.
            Swelling and lameness of a limb or other muscle groups.
            Gas buildup under the skin, causing a crackling sound upon touch.
            Rapid disease progression and death often within 12-48 hours of symptom onset.`,
            cause: `Caused by the bacteria Clostridium chauvoei, which produces long-lasting spores.
            Cattle ingest spores found in contaminated soil or pasture.
            Spores remain dormant in muscle tissue until a triggering event (like injury or exertion) creates conditions for them to 
            germinate and multiply.
            The bacteria release toxins that cause severe tissue damage and gas formation.`,
            precautions: `Vaccination: The best preventative measure. Annual vaccination programs are recommended, especially in high-risk areas.
            Proper Pasture Management: Avoid overgrazing and rotate pastures to reduce spore concentration in the soil.
            Safe Wound Care: Promptly clean and disinfect any wounds on cattle.`,
            cure: `Treatment is difficult due to the rapid progression of the disease.
            High doses of penicillin antibiotics may be attempted in very early stages.
            Supportive care may be provided, but the prognosis is often poor.`
        },
        'rift_valley_fever': {
            name: "Rift Valley Fever (RVF)",
            img_src: "https://www.fao.org/3/Y4611E/y4611e0a.jpg",
            description: `A viral disease primarily affecting livestock (cattle, sheep, goats, camels) but capable of infecting humans. RVF outbreaks are often associated with periods of heavy rainfall and flooding.`,
            symptoms: `High fever 40-41°C
            Loss of appetite
            Jaundice Jaundice
            Weakness
            Bloody diarrhea
            Nasal discharge
            High rates of abortion in pregnant animals
            Very high mortality rates in young calves`,
            cause: `Primarily: Bites from infected mosquitoes. There are multiple mosquito species that can carry the virus.
            Direct Contact: Contact with blood, body fluids, or tissues of infected animals (during birthing, slaughter, veterinary procedures).
            Consumption: Drinking raw milk or eating undercooked meat from an infected animal (less common).`,
            precautions: `Mosquito Control: Eliminate standing water, use insecticides, employ mosquito nets and protective clothing.
            Animal Vaccination: In endemic areas, livestock vaccination is critical.
            Handle with Care: Wear gloves and protective gear when working with potentially infected animals, especially during birthing or slaughter.
            Cook Thoroughly: Cook meat properly and avoid consuming raw milk from areas where RVF is present.`,
            cure: `No Specific Cure: There's no specific antiviral treatment for RVF.
            Supportive Care: Veterinarians focus on managing symptoms and preventing secondary infections in animals.
            Human Treatment: For humans, treatment is primarily focused on supportive care like fluid management and addressing complications.`
        },
        'bloat': {
            name: "Bloat in Cattle",
            img_src: "/bloat.png",
            description: `Bloat is a serious condition in cattle characterized by an overdistention of the rumen (the first stomach compartment). This distention is caused by a buildup of gas that the animal is unable to expel. Bloat can be fatal if not treated quickly and effectively.`,
            symptoms: `Marked distension of the left abdomen. This is the most prominent sign. The abdomen may be drum-like 
            and feel hard to the touch.
            Discomfort and restlessness. The animal may kick at its belly, grunt, or bellow.
            Difficulty breathing.
            Rapid heart rate.
            Collapse and death in severe cases.`,
            cause: `Bloat has two main types, each with different causes:
            Frothy Bloat: Occurs when gas becomes trapped in a stable foam within the rumen. This often stems from diets high in legumes 
            like alfalfa or clover. These plants have components that promote the formation of this gas-trapping foam.
            Free-Gas Bloat: Occurs when there's a physical obstruction preventing gas release, such as choking, an enlarged lymph node, 
            or issues with the nerves controlling the esophagus.`,
            precautions: `Gradual dietary changes. If introducing high-risk forages like legumes, do so slowly, allowing the rumen to adjust.
            Bloat preventatives. Poloxalene is a common additive in feed or mineral blocks to help prevent frothy bloat.
            Ionophores (for feedlot cattle). Ionophores like monensin help regulate rumen fermentation and can decrease bloat risk.
            Avoid grazing lush, wet legume pastures. Risk is especially high if they are covered in dew or shortly after a frost.
            Consider bloat resistant alfalfa varieties.`,
            cure: `Urgent treatment is critical. Time is of the essence with bloat.
            Frothy Bloat: Treatment involves a stomach tube to break down the foam and allow gas to escape. Anti-foaming agents (like vegetable oil or commercial products) are often administered through the tube.
            Free-Gas Bloat: Relieving the obstruction is key. This may be possible with a stomach tube in some cases, or might require surgery for more complex obstructions.
            
            ** Veterinary attention is ALWAYS required for bloat. Do not attempt to treat this yourself.
Bloat can occur suddenly and even with preventative measures in place. Be observant of your cattle, especially when grazing high-risk forages.
            `
        },
        'coccidiosis': {
            name: "Coccidiosis",
            img_src: "/coccidiosis.png",
            description: `Coccidiosis is a parasitic disease caused by single-celled protozoans of the genus Eimeria. These parasites primarily affect the intestinal lining of cattle, leading to severe health issues.`,
            symptoms: `Profuse, watery diarrhea, often containing blood and mucus
            Straining (tenesmus)
            Loss of appetite
            Dehydration
            Weight loss
            Rough coat
            Weakness
            In severe cases, possible death`,
            cause: `Cattle become infected with coccidiosis by ingesting oocysts (the egg stage of the parasite) present in contaminated 
            feed, water, or bedding.
            Oocysts are shed in the feces of infected animals.
            Factors like overcrowding, poor sanitation, stress, and weather changes can increase the risk of infection and disease severity.`,
            precautions: `Practice good hygiene: Clean housing, feeders, and water sources regularly.
            Avoid overcrowding cattle in confined spaces.
            Isolate infected animals to prevent the spread of the disease.
            Implement stress management protocols.
            Consider prophylactic use of coccidiostats (anti-coccidial medications) in feed, especially for high-risk young cattle.`,
            cure: `Sulfa-based medications (sulfonamides) are often effective treatments.
            Supportive care is crucial, including rehydration with fluids and electrolytes.
            Veterinary consultation is essential for diagnosis and appropriate treatment plans. In some cases, more than one anti-coccidial medication may be needed.`
        },
        'cryptosporidiosis': {
            name: "Cryptosporidiosis",
            img_src: "/cryptosporidiosis.png",
            description: `A parasitic disease affecting the intestinal tract of calves and other mammals. It causes diarrhea and can be severe, especially in young or immunocompromised animals.`,
            symptoms: `Watery diarrhea, sometimes profuse
            Yellowish or pale feces
            Mucus in stool
            Blood in stool (in some cases)
            Dehydration
            Weakness
            Lethargy
            Weight loss
            Abdominal cramping`,
            cause: `Ingestion of oocysts: Cattle become infected by swallowing Cryptosporidium parvum oocysts (the parasite's egg-like stage).
            Fecal-oral transmission: Oocysts are shed in huge numbers in the feces of infected animals. Contaminated feed, water,
             or surfaces can spread the infection.
            Zoonotic potential: Cryptosporidium can also infect humans, causing similar diarrheal illness.`,
            precautions: `Hygiene: Strict hygiene practices are crucial, including cleaning and disinfecting calving areas, equipment, and boots.
            Isolation: Isolate infected calves to prevent disease spread.
            Colostrum management: Ensure calves receive adequate, high-quality colostrum to boost their immunity.
            Water sanitation: Provide clean drinking water sources.
            Reduce stress: Minimize overcrowding and other stressors which can weaken the immune system.`,
            cure: `Supportive care: The focus is on supportive care:
            Electrolyte solutions to combat dehydration
            Nutritional support
            Treating secondary infections if they arise
            Halofuginone lactate: This medication may have some benefit in preventing or reducing oocyst shedding, but its effectiveness is variable.
            
            ** Cryptosporidium oocysts are very hardy and can survive in the environment for long periods.
            Young calves (usually 1-4 weeks old) are most susceptible.
            While there is no specific cure, many calves recover with supportive care. However, prevention is far more effective than treatment.
            `
        },
        'displaced_abomasum': {
            name: "Displaced Abomasum (DA)",
            img_src: "/displaced_abomasum.png",
            description: `A digestive disorder in cattle where the abomasum (the true stomach) becomes abnormally positioned. Instead of resting on the abdominal floor, it fills with gas and shifts to the left (Left Displaced Abomasum – LDA) or, less commonly, the right side (Right Displaced Abomasum – RDA). In severe cases, the abomasum can twist on itself (Abomasal Volvulus), causing a life-threatening obstruction.`,
            symptoms: `Reduced appetite and milk production
            Depression or lethargy
            Mild to moderate drop in body temperature
            Decreased manure production
            Sometimes a distinctive "ping" sound in the left flank (LDA)
            Signs similar to ketosis (ketones detected in urine, milk, breath)
            In more severe right-sided cases, possible colic symptoms, rapid heart rate, and scant, diarrhea-like feces`,
            cause: `Reduced Abomasal Motility: Decreased contractions of abomasum muscles can lead to gas accumulation and displacement.
            Dietary Factors: Sudden changes in feed, high concentrate diets with low fiber, insufficient feed intake.
            Post-calving: The uterus displaces the abomasum during pregnancy. After calving, the abomasum may not return to its
             normal position correctly.

            Concurrent Illnesses: Diseases like metritis, milk fever, mastitis, etc., that reduce appetite and overall cow health can increase the risk of DA.`,
            precautions: `Transition Period Management: Maintain consistent, high-quality forage intake before and after calving. Minimize sudden dietary changes.
            Optimize Dry Matter Intake: Ensure adequate feed intake in early lactation.
            Reduce Stress: Provide a comfortable environment, minimize overcrowding.
            Prevent Other Health Issues: Promptly treat any illnesses that might affect feed intake.`,
            cure: `Non-surgical:
            Rolling: Veterinarians may physically roll the cow to reposition the abomasum.
            Toggling: Inserting a toggle suture to help anchor the abomasum in the correct position (reduces recurrence risk).
            Surgical:
            Right Flank Abomasopexy: Fixing the abomasum to the abdominal wall.
            Omentopexy: Fixing the abomasum to the omentum (a fatty membrane within the abdomen).
            Pyloropexy: Fixing the abomasum near the pylorus.
            Supportive Care: Fluid therapy, addressing any metabolic imbalances.    
            
            **Displaced abomasum is primarily a concern in high-producing dairy cattle, especially in the weeks following calving.
            Early diagnosis and treatment are crucial, especially in severe cases with abomasal twisting.
            Work closely with your veterinarian to develop a prevention and management plan tailored to your herd.
            `
        },
        'gut_worms': {
            name: "Parasitic Gastroenteritis (PGE), Gut Worms",
            img_src: "https://www.cattleparasites.org.uk/app/uploads/2018/04/Female-Cooperia-MRI-199x300.jpg",
            description: `Parasitic Gastroenteritis (PGE) is an infection of the gastrointestinal tract in cattle caused by various species of parasitic worms. These worms disrupt nutrient absorption, irritate the gut lining, and can cause significant health problems in affected animals.`,
            symptoms: `Reduced weight gain or weight loss
            Diarrhea (may be dark or contain blood)
            Rough, dull hair coat
            Weakness
            Bottle jaw (fluid accumulation under the jaw)
            Anemia (pale gums and inner eyelids)
            Death in severe cases.`,
            cause: `Cattle ingest worm larvae while grazing on contaminated pastures.
            Worm eggs are passed in the feces of infected cattle.
            These eggs hatch into larvae on the pasture under favorable conditions (warmth and moisture).
            Susceptible cattle become infected when grazing on pastures containing the infective larvae.`,
            precautions: `Rotational grazing: Move cattle to fresh pastures frequently to break the parasite's life cycle.
            Avoid overgrazing: Overgrazing leaves cattle closer to the ground where worm larvae are concentrated.
            Deworming program: Consult a veterinarian to develop an appropriate strategic deworming program for your herd.
            Pasture management: Harrowing pastures can help disrupt the worm life cycle.
            Monitor fecal egg counts: This can help assess the level of worm burden in your cattle.`,
            cure: `Anthelmintic medications (wormers): A veterinarian will prescribe the appropriate wormer and dosage based on the type of worms present and potential resistance patterns in your area.
            Supportive care: Severely affected animals may need fluids, electrolytes, and nutritional supplements.
            
            ** Gut worms are highly prevalent in cattle herds.
            Subclinical infections are common and can significantly impact cattle growth rates and productivity without obvious symptoms.
            Anthelmintic resistance is a growing concern, making strategic parasite management crucial.
            `
        },
        'listeriosis': {
            name: "Listeriosis",
            img_src: "/listeriosis.png",
            description: `Listeriosis is a bacterial infection caused by Listeria monocytogenes. It primarily affects the brain and spinal cord of ruminants (like cattle) but can also cause abortion and septicemia.`,
            symptoms: `Neurological form:
            Depression
            Loss of appetite
            Circling
            Head tilt
            Drooping ears or eyelids
            Paralysis of facial muscles
            Incoordination
            Recumbency (inability to stand)
            Death
            Other forms:
            Abortions
            Septicemia
            Mastitis (inflammation of the udder)
            Conjunctivitis (pink eye)`,
            cause: `Ingestion: Cattle primarily contract listeriosis by eating contaminated feed, particularly poorly fermented silage.
            Environmental exposure: Listeria monocytogenes is widespread in the environment (soil, decaying vegetation). Cattle can potentially be exposed through inhalation or contact with contaminated materials.`,
            precautions: `Proper silage management: Ensuring good silage fermentation practices is crucial. This includes proper packing, sealing, and maintaining the appropriate pH level in silage.
            Feed hygiene: Avoid feeding moldy or spoiled feed. Minimize feed contamination by soil and animal waste.
            Reduce environmental exposure: Maintain good sanitation in cattle housing and feeding areas.
            Vaccination: While not universally available or recommended, vaccination can be considered in high-risk herds.`,
            cure: `Antibiotics: Early and aggressive antibiotic treatment with drugs like penicillin or tetracycline is critical.
            Supportive Care: This includes providing fluids, reducing inflammation, and ensuring the animal has a comfortable resting area.
            
            **Listeriosis is a zoonotic disease, meaning it can be transferred to humans. Always take precautions when handling potentially infected animals or their tissues.
            Prevention is critical as mortality rates are high for listeriosis.
            It often presents suddenly. If you see any concerning symptoms in your cattle, consult a veterinarian immediately.
            `
        },
        'liver_fluke': {
            name: "Liver Fluke (also known as Fasciolosis)",
            img_src: "",
            description: `Liver fluke is a parasitic disease caused by the flatworm Fasciola hepatica. It primarily infects the liver of cattle, sheep, and other ruminants, leading to significant health problems and economic losses.`,
            symptoms: `Reduced weight gain: One of the most noticeable signs in cattle that may indicate a liver fluke infection.
            Reduced milk yield
            Poor fertility
            Anemia: Pale mucous membranes (eyes, mouth) indicative of blood loss.
            Bottle jaw: A fluid swelling under the jaw. This may resemble other conditions.
            Diarrhea
            Death (in severe cases)
            Complication with secondary infections: Liver damage can make cattle susceptible to
             Black Disease (caused by Clostridium novyi bacteria).`,
            cause: `Fluke eggs in feces: Infected cattle shed fluke eggs in their feces.
            Snail intermediate host: The eggs hatch into larvae (miracidia), which must find and infect a specific species of mud snail.
            Development in the snail: Inside the snail, the parasite undergoes further development, eventually emerging as cercariae.
            Metacercariae on grass: Cercariae attach to grasses and other vegetation, forming infective cysts called metacercariae.
            Cattle ingest metacercariae: When cattle graze on contaminated pasture, they ingest the metacercariae.
            Migration to the liver: The metacercariae travel from the intestine, through the abdominal cavity, and penetrate the liver, where they develop into adult flukes.`,
            precautions: `Strategic anthelmintic treatment: Treat cattle with targeted flukicides at the right time of year, focusing on high-risk periods (consult your veterinarian).
            Pasture management: Avoid grazing livestock on wet, boggy areas where snails (the intermediate host) are likely present.
            Fencing: Consider fencing off swampy areas to limit cattle access.
            Drainage: Improve drainage on pastures to reduce snail habitats.
            Monitoring and forecasting: Use fluke forecasts (if available in your region) to assess disease risk.`,
            cure: `Anthelmintics (flukicides): Specific drugs can kill liver flukes. Your veterinarian will recommend the most appropriate treatment and timing based on the infection stage and other factors.
            
            ** Chronic liver fluke disease is more common in cattle than the acute form seen in sheep.
            Milk and meat withdrawal periods must be strictly observed after treatment.
            Developing resistance to flukicides is a concern, so treatment strategy is crucial.`
        },
        'necrotic_enteritis': {
            name: "Necrotic Enteritis",
            img_src: "",
            description: `Necrotic enteritis is a bacterial disease of cattle, primarily affecting young, suckling calves. It causes severe inflammation and tissue death (necrosis) of the small intestine.`,
            symptoms: `Diarrhea, often containing blood and mucus
            Loss of appetite
            Lethargy
            Rapid loss of condition
            Dehydration
            Ulcers may develop on the lips, gums, or tongue
            Death occurs in a very high percentage of cases`,
            cause: `The exact cause of necrotic enteritis is not fully understood. However, it's believed to be associated with a specific
             strain of the bacteria Clostridium perfringens (specifically type C).
            Risk factors include stress, changes in diet, and high starch intake.`,
            precautions: `Vaccination: Consider vaccinating calves against Clostridium perfringens type C, especially in areas with a history of the disease.
            Reduce stress: Minimize stressful events like weaning, transportation, and abrupt feed changes.
            Gradual diet changes: Introduce new feed sources slowly into the diet.
            Good hygiene: Maintain clean feed and water sources.`,
            cure: `Early treatment is critical: Treatment success is greatly reduced once severe symptoms appear.
            Antibiotics: Antibiotics are prescribed to combat the bacterial infection.
            Supportive care: This includes fluids to address dehydration and electrolytes to correct imbalances.
            Severe cases may have a poor prognosis even with treatment.
            
            ** Necrotic enteritis has a high mortality rate.
            Seek veterinary attention immediately if you suspect necrotic enteritis in your cattle.
            Your veterinarian is the best source for diagnosis and appropriate treatment options.
            `
        },
        'peri_weaning_diarrhoea': {
            name: "Peri-Weaning Diarrhea (PWD)",
            img_src: "https://www.pashudhanpraharee.com/wp-content/uploads/2020/11/FB_IMG_1605147849832.jpg",
            description: `PWD is a digestive disorder in calves occurring around the time of weaning.  It often follows changes in management like grouping calves together. It's characterized by profuse, watery diarrhea, but calves typically remain active despite the illness.`,
            symptoms: `Profuse, watery, grey diarrhea
            Calves usually remain bright and alert
            Moderate dehydration is possible
            Pot-bellied appearance in recovered calves
            Reduced growth rate and uneven weight gain within groups`,
            cause: `The exact cause of PWD is unknown. Several factors are suspected to contribute:
            Viruses: Rotavirus, coronavirus, and others
            Bacteria: E. coli, Clostridium, Salmonella
            Protozoa Cryptosporidium, Coccidia
            Nutritional Changes: Abrupt shifts in diet, especially to highly fermentable feeds
            Stress: Weaning, changes in housing, grouping`,
            precautions: `Gradual weaning: Reduce dietary changes around weaning to minimize stress
            Colostrum management: Ensure calves get enough high-quality colostrum early in life.
            Proper nutrition: Provide a balanced calf diet with slower fermenting feedstuffs.
            Hygiene: Maintain clean housing, proper sanitation of feeding equipment.
            Vaccination: Consult your veterinarian about vaccination protocols that might help minimize disease risk in your herd.`,
            cure: `No specific cure exists: Treatment focuses on supportive care and management changes.
            Electrolyte therapy: Correct dehydration and electrolyte imbalances.
            Dietary adjustments: Alter feed if nutritional factors are involved.
            Antibiotics: May be used in severe cases or if secondary bacterial infections are suspected, but should be used judiciously under veterinary guidance.
            
            ** Peri-weaning diarrhea can cause significant economic losses due to reduced growth and occasional mortality.
            It's essential to work with your veterinarian to establish a diagnostic plan to rule out other causes of diarrhea and to tailor prevention and treatment strategies to your farm.`
        },
        'rumen_acidosis': {
            name: "Rumen Acidosis (also known as SARA - Subacute Ruminal Acidosis)",
            img_src: "https://www.dsm.com/anh/challenges/supporting-animal-health/rumen-acidosis/_jcr_content/root/responsivegrid/container/content/tabs/item_1637744313181/content/item_1637744305701_c/content/container_1595446728/content/image_1685539746.coreimg.82.1024.jpeg/1639656370173/cow-grazing.jpeg",
            description: `A metabolic disorder in cattle where the rumen (first stomach chamber) becomes overly acidic. This disrupts normal digestion and can have severe consequences for the animal's health.`,
            symptoms: `Acute Acidosis:
            Reduced feed intake or complete lack of appetite
            Depression
            Lethargy
            Elevated heart rate
            Diarrhea
            In severe cases, shock and death.

            Subacute Acidosis (SARA):
            Fluctuating feed intake
            Decreased milk production (in dairy cattle)
            Reduced butterfat content in milk
            Poor body condition and weight loss
            Laminitis (hoof problems)
            Unexplained diarrhea
            Liver abscesses`,
            cause: `High-grain diets: Cattle are built to digest fibrous forages. When they consume too much grain or other rapidly fermentable carbohydrates, the rumen microbes produce excessive amounts of acid.
            Sudden dietary changes: Abruptly introducing high grain levels without rumen adaptation can trigger acidosis.
            Insufficient fiber: Fiber stimulates chewing and saliva production (which has natural buffering properties). Lack of fiber lowers rumen pH.
            Management factors: Feeding schedules that lead to inconsistent intake patterns ("slug feeding") or allowing cattle to sort their feed and avoid fiber increase risks.`,
            precautions: `Gradual dietary changes: Transition cattle to higher grain proportions slowly over several weeks to allow their rumen to adapt.
            Adequate fiber: Ensure the diet includes sufficient amounts of effective fiber (from forages) to promote rumination and healthy rumen function.
            Feed additives: Buffering agents can help stabilize rumen pH.
            Consistent feeding: Maintain regular feeding schedules to minimize fluctuations in rumen conditions.
            Avoid feed sorting: Manage feed to prevent cattle from avoiding the less desirable but necessary long fiber portions.`,
            cure: `Acute Acidosis:

            Emergency veterinary treatment is crucial.
            May involve oral administration of alkaline solutions to neutralize acidity.
            Intravenous fluids to address dehydration and shock.
            Removal of rumen contents may be necessary in extreme cases.
            Subacute Acidosis (SARA):
            
            Focus is on dietary changes and management adjustments.
            Increase fiber in the diet.
            Consider feed additives/buffers.
            Identify and correct any management issues that may be contributing to the problem.
            
            Subacute Ruminal Acidosis (SARA) is a common and economically impacting issue in dairy herds. It often goes undiagnosed since symptoms are less obvious.
            Long-term consequences of acidosis can include poor performance, chronic health problems, and reduced profitability.
            Consult a veterinarian or animal nutritionist for specific guidance in the diagnosis and management of rumen acidosis.`
        },
        'traumatic_reticulitis': {
            name: "Traumatic Reticulitis (Hardware Disease)",
            img_src: "",
            description: `An inflammation of the reticulum (second stomach compartment of a cow) caused by the ingestion of sharp foreign objects like nails, wire, or other metal fragments. These objects puncture the reticulum's wall, potentially leading to infection and damage to surrounding organs.`,
            symptoms: `Early stages: May show no obvious signs
            As the condition progresses:
            Reduced appetite and decreased milk production
            General signs of pain and discomfort (grunting, arched back, reluctance to move)
            Fever
            Swelling under the jaw or brisket (bottle jaw)
            Drop in milk yield`,
            cause: `Cattle are indiscriminate eaters and may accidentally consume sharp metallic objects mixed in with their feed.
            Sources of these objects include:
            Degrading fencing
            Construction debris
            Pieces of baling wire
            Discarded metal items in the pasture`,
            precautions: `Pasture Maintenance: Regularly inspect pastures and feed areas, removing any hazardous metallic objects.
            Feed Inspection: Check feed for foreign objects, and use magnets in feed troughs or in the rumen to attract and trap metal fragments.
            Monitor Herd: Observe your cattle for any signs of illness or discomfort.`,
            cure: `Early Detection: Early diagnosis is crucial for successful treatment.
            Veterinary Intervention: A veterinarian will assess the situation and may recommend:
            Rumenotomy: Surgery to remove the foreign object and address any damage.
            Antibiotics: To combat infection.
            Supportive Care: Fluids and pain management.
            
            ** Prevention is far more effective than treatment for traumatic reticulitis.
            If you suspect traumatic reticulitis in your cattle, contact a veterinarian immediately for proper diagnosis and treatment.`
        },
        'calf_diphtheria': {
            name: "Calf Diphtheria (Necrotic Laryngitis)",
            img_src: "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/119240568_2761331504135401_1350641876657901447_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YHpZv1mOzNcAX_ixICO&_nc_ht=scontent.fhyd14-2.fna&oh=00_AfCLQLwL5uOqa1UW14Kx76FMGjqV1N2dlrM25dv3WhVhVQ&oe=66274947",
            description: `A bacterial infection that affects the mucous membranes of a calf's mouth, throat, and sometimes the lungs. It causes the formation of ulcers and dead tissue, often leading to difficulty breathing and swallowing.`,
            symptoms: `Fever
            Lethargy
            Difficulty nursing or eating
            Excessive salivation and drooling
            Bad breath (foul odor)
            Swollen cheeks
            Painful swallowing
            Loud wheezing or respiratory distress
            Ulcers in the mouth (tongue, cheeks)`,
            cause: `Primary cause: The bacterium Fusobacterium necrophorum.
            Contributing factors: Damage to the lining of the mouth or throat. This can be caused by:
            Continuous bawling (common in calves separated from their mothers)
            Rough feed
            Injury during teething`,
            precautions: `Minimize stress in calves, especially during weaning or separation.
            Ensure soft, palatable feed is available
            Vaccinate cattle against Fusobacterium necrophorum (consult your veterinarian)
            Observe calves closely for any signs of illness`,
            cure: `Early treatment is crucial. Consult your veterinarian immediately.
            Antibiotics: Typically penicillin or tetracyclines.
            Supportive care:
            Electrolyte solutions if the calf is dehydrated
            Soft, easy-to-swallow food
            Pain medication if needed
            In severe cases where breathing is severely compromised, a tracheostomy (surgical opening in the windpipe) might be necessary.
            
            ** Calf diphtheria can be fatal, especially if it leads to pneumonia.
            This disease is contagious, so isolate affected calves.
            Consult your veterinarian about prevention strategies. Vaccination schedules and management practices can significantly reduce the risk of calf diphtheria in your herd.`
        },
        'foot_rot': {
            name: "Foot Rot (also known as Interdigital Necrobacillosis)",
            img_src: "https://cdn-kbjmd.nitrocdn.com/LxUupoWdTOXguWFceztSCRpXokmsdBwR/assets/images/optimized/rev-a3bb206/www.zinpro.com/wp-content/uploads/2023/06/FootRot_1200x600-3.jpg",
            description: `A highly contagious bacterial infection affecting the space between the claws (toes) of cattle. It causes painful inflammation, swelling, and tissue damage (necrosis) in the affected foot.`,
            symptoms: `Lameness: May start as mild but progresses, with the animal reluctant to bear weight on the affected foot.
            Swelling: Between the claws and possibly extending higher up the leg.
            Separation of the claws: Due to inflammation.
            Foul odor: Characteristic of necrotic (dead) tissue
            Fever: In some cases.
            Reduced appetite and milk production: Due to pain and discomfort.`,
            cause: `Bacteria: Primarily Fusobacterium necrophorum, often in combination with other bacteria like Bacteroides melaninogenicus.
            Environmental triggers: The bacteria thrive in warm, wet, and muddy conditions, especially areas contaminated with manure.
            Skin damage: Minor cuts or abrasions on the feet create entry points for the bacteria.`,
            precautions: `Proper hygiene: Keep pens and pastures as clean and dry as possible.
            Minimize foot injuries: Avoid rough, stony ground and sharp objects in the cattle's environment.
            Hoof trimming: Regular hoof trimming helps maintain good foot health.
            Footbaths: Consider footbaths with disinfecting solutions (consult your veterinarian for recommendations).
            Quarantine: Isolate new or infected animals to prevent the spread of the disease.`,
            cure: `Early treatment is crucial.
            Antibiotics: Systemic antibiotics (prescribed by your veterinarian) are the primary treatment.
            Topical cleaning and disinfecting: Thoroughly cleaning the affected area.
            Pain management: Anti-inflammatories may be used to reduce discomfort.
            Severe cases: May require additional treatments or even hoof bandaging.
            
            ** Foot rot can become chronic and debilitating if not treated promptly and effectively.
            Always consult your veterinarian for diagnosis and a tailored treatment plan.
            Prevention is key to reducing the incidence of foot rot in your herd.`
        },
        'foot_and_mouth': {
            name: "Foot-and-Mouth Disease (FMD)",
            img_src: "https://www.wool.com/globalassets/wool/about-awi/media-resources/beyond-the-bale/june-2022/fmd/fmd-header.jpg",
            description: `A highly contagious viral disease that affects cloven-hoofed animals, primarily cattle. FMD has severe economic implications due to its impact on livestock production and trade.`,
            symptoms: `High fever that rapidly decreases after 2-3 days
            Blisters inside the mouth, on the teats, and between the hooves. These blisters can rupture, leading to drooling
             and lameness.
            Shivering
            Smacking of lips
            Reduced milk yield
            Weight loss
            Swollen testicles in mature males`,
            cause: `Contact with infected animals: Direct contact with secretions (saliva, nasal discharge, milk), excretions, or blisters
             of infected animals is the most common transmission route.
            Indirect transmission: Contaminated objects (farming equipment, vehicles, clothing, feed), the wind, and animal carriers 
            (wild predators, people) can also spread the virus.`,
            precautions: `Strict biosecurity measures: Restrict movement of animals, people, and vehicles. Disinfect equipment/vehicles thoroughly. Isolate potentially infected animals.
            Vaccination: In endemic zones or risk areas, vaccination is a crucial preventive strategy.
            Proper disposal of infected carcasses: Reduces environmental contamination.
            Import restrictions: Control the introduction of animals from regions with FMD outbreaks.`,
            cure: `No specific cure: There is no specific cure for FMD. Treatment focuses on supportive care and controlling secondary infections.
            Anti-inflammatories and pain relief: Medications to manage fever and pain.
            Antiseptic solutions: Treat wounds and blisters to prevent bacterial infection.
            Rest and nutritional support: To aid in recovery
            
            ** In most adult animals, FMD is not fatal. However, young animals are severely affected and may die.
            FMD is a reportable disease. If suspected, immediately contact your veterinarian or government animal health authorities.
            FMD does not pose a risk to human health.`
        },
        'ragwort_poisoning': {
            name: "Ragwort Poisoning (also known as Senecio Poisoning, Pyrrolizidine Alkaloidosis)",
            img_src: "http://brownmossequineclinic.co.uk/wp-content/uploads/2016/07/DSCN0255.jpg",
            description: `A chronic, often fatal liver disease caused by the consumption of ragwort plants (primarily Common Ragwort, Senecio jacobaea). Ragwort contains toxic chemicals called pyrrolizidine alkaloids.`,
            symptoms: `Symptoms may take weeks, months, or even years to develop.  They include:

            Weight loss
            Dullness, depression
            Photosensitization (sunburn, especially on non-pigmented skin)
            Jaundice (yellowing of the eyes and skin)
            Diarrhea/constipation
            Fluid buildup in the abdomen
            Neurological signs in severe cases (aimless wandering, head pressing, blindness)`,
            cause: `Cattle or other livestock eat ragwort plants in fresh pasture.
            Cattle consume ragwort preserved in hay or silage. The toxins in ragwort are highly stable and do not break down during
             drying/preservation.`,
            precautions: `Pasture management: Identify, remove, and destroy ragwort plants (hand-pulling, targeted herbicide use). Promote healthy grass growth to outcompete ragwort.
            Careful sourcing of feed: Avoid hay or silage from fields with known ragwort infestations.
            Grazing choice: If ragwort is present in small amounts, sheep are less susceptible and can graze the pasture if grass growth is strong.`,
            cure: `There is no cure for ragwort poisoning. The liver damage is irreversible.
            Supportive care may be implemented to manage symptoms, but the prognosis is usually poor.
            Immediate removal from contaminated pasture/feed may prevent the condition from worsening in unaffected animals.
            
            ** Ragwort poisoning is a serious concern for livestock owners. Prevention is much easier than treatment.
            Ragwort is toxic to several species, including horses, goats, and humans (though human poisoning is less common).
            If you suspect ragwort poisoning, consult your veterinarian immediately.`
        },
        'wooden_tongue': {
            name: "Wooden Tongue (Actinobacillosis)",
            img_src: "https://www.msdvetmanual.com/-/media/manual/veterinary/images/w/o/o/wooden-tongue-cow-smith-sized.jpg?mw=704&amp;thn=0&amp;sc_lang=en",
            description: `A bacterial infection that causes significant inflammation in the soft tissues of a cow's mouth, particularly the tongue.`,
            symptoms: `Hard, swollen, and painful tongue (hence the name "wooden tongue")
            Difficulty eating and drinking
            Excessive drooling
            Nodules or ulcers on the tongue
            Rapid weight loss`,
            cause: `The bacteria Actinobacillus lignieresii enters the body through cuts or abrasions in the mouth.
            Rough feed or injuries from erupting teeth can create these entry points.`,
            precautions: `Alter grazing management to reduce exposure to coarse or prickly feed.
            Minimize sources of mouth injury in the cattle's environment.`,
            cure: `Early treatment is crucial. Advanced cases may not respond successfully.
            Iodine therapy is the most common treatment.
            A veterinarian should administer the initial dose of sodium iodide.
            In severe cases with extensive lesions, salvage slaughter might be considered for animal welfare reasons.
            
            ** Wooden tongue is a potentially serious condition for cattle. If you observe the symptoms listed above in your cattle, immediate veterinary consultation is essential for diagnosis and treatment.`
        },
        'infectious_bovine_rhinotracheitis': {
            name: "Infectious Bovine Rhinotracheitis (IBR)",
            img_src: "https://www.dairyknowledge.in/dkp/sites/default/files/styles/medium_large/public/ibr_1.jpg?itok=nO1qlb0J",
            description: `A highly contagious viral disease of cattle that primarily affects the respiratory system, but can also impact the reproductive system.`,
            symptoms: `Fever
            Severe coughing
            Nasal discharge (may be clear or contain pus)
            Reddened nostrils and eyes (giving rise to the nickname "red nose")
            Conjunctivitis (pink eye)
            Loss of appetite
            Depression
            Abortion (in pregnant cows)
            In rare cases, encephalitis (inflammation of the brain)`,
            cause: `IBR is caused by bovine herpesvirus-1 (BHV-1). The virus spreads through direct contact with infected animals, nasal and 
            ocular discharges, and through transmission in semen when breeding.`,
            precautions: `Vaccination of cattle herds
            Quarantine of new animals before introduction to the herd
            Strict biosecurity practices, such as cleaning and disinfecting equipment, boots, and clothing.
            Separation of sick animals
            Avoiding commingling with cattle from herds of unknown disease status`,
            cure: `Treatment focuses on supportive care and controlling secondary bacterial infections.
            Supportive care can include fluids, anti-inflammatories, and antibiotics (to address secondary infections).
            In severe cases, full recovery can take weeks.
            
            ** IBR can cause significant economic losses in the cattle industry.
            The virus can establish a lifelong latent infection in cattle, meaning that even recovered animals are potential carriers. Stress can reactivate the virus, leading to shedding and potential spread.`
        },
        'acetonaemia': {
            name: "Acetonaemia (Ketosis)",
            img_src: "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2022-06/MMM_KetosisCoverPhoto.jpg?itok=gUxlVOOw",
            description: `A metabolic disorder in cattle occurring when energy demands (like milk production) surpass the energy intake, creating a negative energy balance. This leads to excessive fat breakdown, which the liver can't fully process, resulting in high ketone bodies in the blood.`,
            symptoms: `Reduced milk production
            Weight loss
            Decreased appetite
            Sweet, acetone-like smell on breath or in milk
            Dry, firm feces
            In some cases, nervous symptoms (restlessness, odd behavior)`,
            cause: `High milk production: Dairy cows in early lactation might not consume enough to meet energy needs.
            Late pregnancy in beef cattle: The cow's appetite decreases while the calf's energy needs are rising.
            Inadequate nutrition: Poor quality feed or insufficient amounts.
            Other diseases: Conditions reducing appetite (e.g., mastitis) can contribute.`,
            precautions: `Balanced feed: Provide adequate energy-dense feed, especially during early lactation and late pregnancy.
            Gradual diet transitions: Avoid sudden feed changes.
            Good body condition: Maintain ideal body condition scores before calving.
            Monitor fresh cows: Closely observe appetite and milk production after calving.`,
            cure: `Glucose precursors: Drenching with propylene glycol provides a readily available energy source.
            Injectable glucose solutions: Used in severe cases, often alongside propylene glycol.
            Corticosteroids: Can stimulate appetite but should be used with veterinary advice.
            Address underlying issues: Manage health conditions that may contribute to decreased feed intake.
            
            ** Acetonaemia can be subclinical (no obvious symptoms but compromised performance). Regular ketone testing of high-risk cows helps early detection.
            Prevention is critical. Good nutrition and management reduce the risk considerably.
            Always consult a veterinarian for diagnosis and treatment.`
        },
        'fatty_liver_syndrome': {
            name: "Fatty Liver Syndrome (Hepatic Lipidosis)",
            img_src: "https://www.dairyknowledge.in/dkp/sites/default/files/styles/medium_large/public/lipidosis.jpg?itok=KjuAvCja",
            description: `A metabolic disorder in which excessive fat builds up in the liver of dairy cattle, commonly during the early stages of lactation. This buildup impairs liver function, potentially leading to serious health complications.`,
            symptoms: `Reduced appetite
            Significant decrease in milk production
            Lethargy and weakness
            Weight loss
            Jaundice (yellowing of eyes and skin)
            Fatty, pale feces
            Neurological signs (e.g., staggering, head pressing) in severe cases`,
            cause: `Negative energy balance: When cattle experience a shortage of energy intake compared to their needs 
            (often right after giving birth), their bodies start excessively breaking down stored fat.
            Fat overload: The mobilized fat floods the liver. The liver can process some fat, but becomes overwhelmed in fatty liver syndrome.
            Fat accumulation: The excess fat gets deposited and stored in the liver as triglycerides, causing a buildup.
            Impaired function: This fatty accumulation disrupts normal liver processes like detoxification, metabolism, and energy production.`,
            precautions: `Balanced feed in the transition period: Provide carefully formulated diets to cows before and after giving birth to help them maintain a proper energy balance.
            Prevent overconditioning: Avoid having cows become overweight during their dry period, as this increases their risk.
            Gradual dietary changes: Introduce any changes to a cow's feed slowly to minimize metabolic stress.
            Monitor body condition: Regularly assess the body condition of cows, especially during the transition period.`,
            cure: `Early intervention: Treatment is most successful when started early in the disease.
            Supportive care: Focus on providing fluids, electrolytes, and nutritional support (glucose, propylene glycol) to help the cow regain energy balance.
            Lipotropic agents: These substances help the liver metabolize and export accumulated fat.
            Specific medications: Consult your veterinarian as medications targeted to liver function may be recommended.
            Address underlying conditions: Treat any concurrent health issues that may be contributing to the problem.
            
            ** Fatty liver syndrome can be life-threatening. Consult a veterinarian immediately if you suspect this condition in your cattle.
            Prevention is key – focusing on proper feeding practices and body condition management is crucial.`
        },
        'calf_pneumonia': {
            name: "Calf Pneumonia (also known as Bovine Respiratory Disease or BRD)",
            img_src: "https://d3mdtxxgfz6upn.cloudfront.net/WEBFILES/000/682/620/1793773-682620.jpg",
            description: `Calf pneumonia is a complex respiratory disease that causes inflammation and damage to the lung tissue and airways. It is a major issue in cattle herds and the most common cause of death and poor performance in calves.`,
            symptoms: `Fever
            Coughing
            Nasal discharge
            Rapid or labored breathing
            General dullness or depression
            Loss of appetite
            Increased respiratory rate
            Eye discharge`,
            cause: `Calf pneumonia is a multifactorial disease, meaning it has multiple causes that interact:

            Viruses: Bovine Respiratory Syncytial Virus (BRSV), Parainfluenza-3 (PI3), Bovine Herpesvirus 1 (BHV-1, the cause of IBR), and
             Bovine Viral Diarrhea Virus (BVDV).
            Bacteria: Mannheimia haemolytica, Pasteurella multocida, Histophilus somni, and Mycoplasma species.
            Stress factors: These increase a calf's susceptibility to infection and include:
            Weaning
            Transport
            Mixing with calves of different ages
            Poor ventilation
            Extreme temperatures
            Overcrowding`,
            precautions: `Vaccination: Vaccinate calves against the common viral and bacterial causes of pneumonia.
            Minimize stress: Reduce stressors as much as possible, especially around weaning and transport.
            Good ventilation Ensure sheds and housing have adequate airflow.
            Isolate sick animals: Prevent the spread of disease by quickly isolating calves showing pneumonia symptoms.
            Colostrum management: Ensure calves receive enough high-quality colostrum after birth to boost immunity.
            Biosecurity: Maintain good hygiene practices to limit disease spread.`,
            cure: `Antibiotics: Treatment often involves antibiotics to target the bacterial infections. Your veterinarian will choose the right antibiotic based on the likely pathogens involved.
            Supportive care: This may include:
            Anti-inflammatories to reduce fever and pain
            Rehydration therapy if the calf is dehydrated
            Nutritional support
            
            ** Early detection and treatment are vital. The earlier you catch pneumonia, the better the calf's chances for recovery.
            Work closely with your veterinarian. They will advise on the best vaccination protocols, treatment options, and prevention strategies for your specific herd.`
        },
        'schmallen_berg_virus': {
            name: "Schmallenberg Virus (SBV)",
            img_src: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2024/01/Schmallenberg-virus-affected-lambs-FWEE_00294156_C_Jonathan-Page.jpg",
            description: `SBV is an insect-transmitted viral disease that primarily affects ruminants (cattle, sheep, goats, bison). It can cause fever, reduced milk yield, and diarrhea in adult cattle. The biggest concern lies in the virus's ability to cause congenital malformations and stillbirths if pregnant animals are infected.`,
            symptoms: `Adult Cattle:
            Fever
            Reduced milk production
            Diarrhea
            Often short-lived, with recovery occurring in a few days.

            Newborn Offspring (If mother infected during pregnancy):
            Arthrogryposis (joint abnormalities or deformities)
            Hydranencephaly (abnormal brain development)
            Spinal cord damage
            Stillbirths`,
            cause: `Transmission: Primarily by biting midges (Culicoides species).
Vertical Transmission: The virus can also be passed directly from an infected mother to her offspring during pregnancy.`,
            precautions: `Insect Control: Implement strategies to minimize the presence of biting midges on farms. This includes insecticide use and eliminating potential breeding habitats.
            Livestock Movement: Control the movement of animals from areas with known SBV outbreaks to reduce the risk of spread.
            Vaccination: Vaccines for SBV are available in some regions`,
            cure: `No specific antiviral treatment for SBV.
            Supportive Care: Focus is placed on supportive care for infected animals, mainly addressing fever, dehydration, and any secondary complications.
            Prevention: Vaccination and insect control are the primary ways to manage the disease.
            
            ** SBV does not pose a threat to human health.
            The severity of the disease can vary depending on factors like the time of infection during pregnancy and the animal species affected.`
        },
        'trypanosomosis': {
            name: "Trypanosomosis (also known as Nagana in Africa, or Surra in parts of Asia)",
            img_src: "https://www.nddb.coop/sites/default/files/Weak%20and%20anaemic%20animal.jpg",
            description: `A parasitic disease affecting cattle and other livestock, caused by single-celled protozoa of the genus Trypanosoma. The disease has a major economic impact in areas where it is prevalent.`,
            symptoms: `Fever (intermittent)
            Anemia (severe and progressive)
            Weakness and loss of body condition (emaciation)
            Enlarged lymph nodes
            Edema (swelling)
            Lacrimation (excessive tears)
            In late stages: abortion, neurological complications`,
            cause: `Primarily transmitted by the bites of tsetse flies, which become infected by feeding on diseased animals. 
            In some regions, other biting flies can mechanically transmit the parasites.`,
            precautions: `
            Vector Control: Reduce tsetse fly populations through traps, insecticide spraying, and habitat alteration.
            Use of Trypanotolerant Cattle: Certain breeds of cattle (like N'Dama) exhibit natural resistance.
            Prophylactic Drug Treatments: In high-risk areas, strategic drug treatments can offer preventative protection.`,
            cure: `Anti-trypanosomal Drugs: Specific drugs exist to treat trypanosomosis, but drug resistance is a growing concern. Drugs might include:
            Diminazene aceturate
            Isometamidium chloride
            Homidium salts
            Supportive Care: Address anemia, dehydration, and nutritional deficiencies to support the animal during treatment.
           
            ** Diagnosis: Accurate diagnosis is essential and usually involves microscopic examination of blood to detect the parasites.
            Geographic Distribution: Trypanosomosis is primarily a concern in sub-Saharan Africa, though forms exist in other parts of the world.
            Economic Impact Losses due to trypanosomosis include reduced milk and meat production, infertility, and high mortality rates.`
        },
        'fog_fever': {
            name: "Fog Fever (also known as Acute Bovine Pulmonary Edema and Emphysema, or ABPEE)",
            img_src: "https://d3mdtxxgfz6upn.cloudfront.net/WEBFILES/000/319/574/1091299-319574.jpg",
            description: `A severe, often fatal, respiratory disease of adult cattle that occurs when they are suddenly moved from dry, low-protein feed to lush, rapidly growing pastures.`,
            symptoms: `Difficulty breathing (open-mouth breathing, exaggerated chest movements)
            Frothy discharge from nostrils
            Noisy breathing (crackling or wheezing sounds)
            Weakness and collapse
            Distended neck veins
            Anxiety and restlessness`,
            cause: `Diet change: The sudden shift from low-protein to high-protein feed (usually lush pasture) triggers a biochemical change in the 
            rumen (first stomach of cattle).
            Tryptophan conversion: L-tryptophan, an amino acid abundant in lush pastures, is converted by rumen bacteria into 
            3-methylindole (3-MI).
            Lung Damage: 3-MI is absorbed and damages cells lining the lungs, leading to inflammation, breathing difficulties, and 
            potentially death.`,
            precautions: `Gradual transition: When moving cattle to lush pasture, introduce them gradually over several days or weeks.
            Supplementation: Hay or other low-protein feed alongside lush pasture can help balance the diet.
            At-risk awareness: Be particularly cautious with older cows and those that have been on poor-quality feed for extended periods.`,
            cure: `Oxygen support: Veterinarians may administer oxygen to aid breathing.
            Anti-inflammatories: Medications may be used to reduce inflammation in the lungs.
            Removal from pasture: Moving affected cattle back to dry feed MAY be considered but is debated as it could worsen the stress on the animal.
            
            ** Fog fever typically strikes quickly. Cattle can seem healthy one day and be critically ill or dead the next.
            Prevention is critical. Gradual dietary changes are far more effective than treatment.
            Contact your veterinarian immediately if you suspect fog fever in your herd.`
        },
        'r': {
            name: "",
            img_src: "",
            description: ``,
            symptoms: ``,
            cause: ``,
            precautions: ``,
            cure: ``
        },
    }
    const disease = Diseases[diseaseName];
    console.log(disease)

    return (
        <div className="mx-20 my-10">
            <div>
                <h2 className="text-6xl font-bold">{disease.name}</h2>
                <p className="whitespace-pre-line">{disease.description}</p>

                <div className="flex justify-between">
                    <div>
                        <h1 className="font-semibold text-2xl mt-4 mb-1">Symptoms.</h1>
                    <p className="whitespace-pre-line text-lg">{disease.symptoms}</p>
                    </div>
                    <img className="w-96 h-96 mr-20 absolute right-10 m-4 rounded-xl" src={disease.img_src} alt={disease.name} />
                </div>
                <div className="">
                    <h1 className="font-semibold text-2xl mt-4 mb-1">How it is caused</h1>
                    <p className="whitespace-pre-line">{disease.cause}</p>
                </div>
                <div className="">
                    <h1 className="font-semibold text-2xl mt-4 mb-1">Precautions.</h1>
                    <p className="whitespace-pre-line">{disease.precautions}</p>
                </div>
                <div className="">
                    <h1 className="font-semibold text-2xl mt-4 mb-1">Supportive Care/Cure.</h1>
                    <p className="whitespace-pre-line">{disease.cure}</p>
                </div>

            </div>
        </div>
    )
}

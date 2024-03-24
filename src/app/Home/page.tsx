"use client"

import { useState } from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { LoaderCircle } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox"

import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { json } from "node:stream/consumers"



type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Home() {
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
    const [showPanel, setShowPanel] = useState<Checked>(false)

    const [loading,setLoading]=useState(false)
    const [cattleDetails, setCattleDetails] = useState('')
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const fs = require("fs");
    const genAI = new GoogleGenerativeAI("AIzaSyCSfDU3ixFHYKc_x36vc0iv-ANBhQ7Hw-g");

    const [symptomsList, setSymptomsList] = useState([])
    const [disease,setDisease]=useState('')

    let ll=[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]
            
    async function predict(symptoms: any) {
        try {
            console.log(typeof(JSON.stringify({ symptoms })))
            let ll=[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]
            const form = new FormData()
            form.append('symptoms',JSON.stringify({ symptoms }))
            const response = await fetch('http://127.0.0.1:8000/getDisease', {
                method: 'POST',
                body: form//'hi'.toString()//form//JSON.stringify({ symptoms })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch prediction');
            }

            const data = await response.json();
            console.log(data,'***************')
            if(data.success==true){

                setDisease(data.disease)
            }
            else{
                setDisease('None')
            }
            setLoading(false)
            return data; // Return the prediction data
        } catch (error) {
            console.error('Error predicting:', error);
            throw error; // Throw the error for handling in the calling code
        }
    }

    // predict(ll)

    async function findSymptoms() {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt1 = `My cattle is facing this problems:
        "USER GIVEN DATA ABOUT HIS": "${cattleDetails}"
        Give the symptoms it might with a correspoing value of "1" if it has that symptom from the below list of symptoms:
        symptoms=['anorexia','abdominal_pain','anaemia','abortions','acetone','aggression','arthrogyposis',
        'ankylosis','anxiety','bellowing','blood_loss','blood_poisoning','blisters','colic','Condemnation_of_livers',
        'coughing','depression','discomfort','dyspnea','dysentery','diarrhoea','dehydration','drooling',
        'dull','decreased_fertility','diffculty_breath','emaciation','encephalitis','fever','facial_paralysis','frothing_of_mouth',
        'frothing','gaseous_stomach','highly_diarrhoea','high_pulse_rate','high_temp','high_proportion','hyperaemia','hydrocephalus',
        'isolation_from_herd','infertility','intermittent_fever','jaundice','ketosis','loss_of_appetite','lameness',
        'lack_of-coordination','lethargy','lacrimation','milk_flakes','milk_watery','milk_clots',
        'mild_diarrhoea','moaning','mucosal_lesions','milk_fever','nausea','nasel_discharges','oedema',
        'pain','painful_tongue','pneumonia','photo_sensitization','quivering_lips','reduction_milk_vields','rapid_breathing',
        'rumenstasis','reduced_rumination','reduced_fertility','reduced_fat','reduces_feed_intake','raised_breathing','stomach_pain',
        'salivation','stillbirths','shallow_breathing','swollen_pharyngeal','swelling','saliva','swollen_tongue',
        'tachycardia','torticollis','udder_swelling','udder_heat','udder_hardeness','udder_redness','udder_pain','unwillingness_to_move',
        'ulcers','vomiting','weight_loss','weakness']

        1) Send me the reponse in the format shown below. DON'T MAKE ANY CHANGES IN THE FORMAT.
                {"symptom": value}
        Note: !!!Please <<<maintain the above formate while responding>>> and value is wheter that symptom is there in the cattle or not 1 if yes 0 if no based on the user given data about cattle. !!Please <<<The resonse should have all the symptoms mentioned in the list with there correspoing values>>
        
        `
        const prompt = `My cattle is facing this problems:
        "USER GIVEN DATA ABOUT HIS": "${cattleDetails}"
        Give the symptoms in the list it might if it has that symptom from the below list of symptoms:
        symptoms=['anorexia','abdominal_pain','anaemia','abortions','acetone','aggression','arthrogyposis',
        'ankylosis','anxiety','bellowing','blood_loss','blood_poisoning','blisters','colic','Condemnation_of_livers',
        'coughing','depression','discomfort','dyspnea','dysentery','diarrhoea','dehydration','drooling',
        'dull','decreased_fertility','diffculty_breath','emaciation','encephalitis','fever','facial_paralysis','frothing_of_mouth',
        'frothing','gaseous_stomach','highly_diarrhoea','high_pulse_rate','high_temp','high_proportion','hyperaemia','hydrocephalus',
        'isolation_from_herd','infertility','intermittent_fever','jaundice','ketosis','loss_of_appetite','lameness',
        'lack_of-coordination','lethargy','lacrimation','milk_flakes','milk_watery','milk_clots',
        'mild_diarrhoea','moaning','mucosal_lesions','milk_fever','nausea','nasel_discharges','oedema',
        'pain','painful_tongue','pneumonia','photo_sensitization','quivering_lips','reduction_milk_vields','rapid_breathing',
        'rumenstasis','reduced_rumination','reduced_fertility','reduced_fat','reduces_feed_intake','raised_breathing','stomach_pain',
        'salivation','stillbirths','shallow_breathing','swollen_pharyngeal','swelling','saliva','swollen_tongue',
        'tachycardia','torticollis','udder_swelling','udder_heat','udder_hardeness','udder_redness','udder_pain','unwillingness_to_move',
        'ulcers','vomiting','weight_loss','weakness']

        1) Send me the reponse in the format shown below. DON'T MAKE ANY CHANGES IN THE FORMAT.
                ["symptom"]
        Note: !!!Please <<<maintain the above formate while responding>>>
        
        `
        const result = await model.generateContent(prompt1);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        const jsonData = JSON.parse(text);
        const extractedValues: number[] = [];
        for (const key in jsonData) {
            extractedValues.push(jsonData[key]);
        }
        console.log(jsonData);
        console.log(extractedValues);
        predict(extractedValues)

    }

    return (
        <div className="w-auto h-full justify-center text-center mx-20 my-2">

            <div className="flex flex-col items-center justify-center">
                <textarea
                    onChange={(e) => { setCattleDetails(e.target.value) }}
                    value={cattleDetails}
                    placeholder="Describe the problems or symptoms that your cattle is facing."
                    className=" w-full lg:w-full max-h-72 min-h-40 mx-4 h-64 bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-300 focus:placeholder-gray-500  bg:border-transparent text-gray-100 focus:outline-none"
                />
                <button
                    onClick={(e) => { findSymptoms();setLoading(true) }}
                    className="w-[90%] md:w-[50%] text-white mx-auto flex justify-center lg:mx-0 lg:block px-0 py-3 my-6 text-sm bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500"
                >
                    <div className="flex text-lg items-center ml-4 mr-4">

                        Predict
                        <LoaderCircle className={`ml-4 ${loading?'animate-spin':'hidden'}`} />
                    </div>
                </button>
                {disease &&(

                <Link href={`/Home/${disease.replace(/\s+/g, '')}`} className="text-center flex flex-col justify-center">
                    <div className="flex justify-center items-center"><h1 className="font-semibold">Predicted Disease: </h1><span className="text-xl text-red-600 capitalize font-bold mx-2"> {disease}</span></div>
                    <button
                    onClick={(e) => {}}
                    className="w-[90%] md:w-[50%] text-white mx-auto flex justify-center lg:mx-0 lg:block px-5 py-3 my-6 text-sm bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500"
                >
                    Know More
                </button>
                </Link>
                )

                }
            </div>


            <div className=" items-center space-x-2 grid grid-cols-4 gap-x-2 gap-y-2">
                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFJjfVSLqUKlVG0qKY0wtoWAGjSus22ILwLe4j3RPErhK8RsaD95KkSs1dmeeJ' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Anorexia.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Loss of appetite.</p>
                </div>

                <div className="">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='/abdominal_pain.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Abdominal pain</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Pain in the abdomen.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='http://www.flockandherd.net.au/cattle/images/bovineanaemia02.jpg' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Anaemia</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">A condition in which the blood lacks enough healthy red blood cells to carry oxygen effectively throughout the body.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://www.researchgate.net/profile/David-Driemeier/publication/258038685/figure/fig1/AS:362009599201284@1463321222261/Aborted-bovine-fetus-Thickened-and-wrinkled-skin-bearing-numerous-plaques-arrows.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Abortions.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">The expulsion of a fetus from the uterus before it is fully developed enough for independent life.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://cdn2.hubspot.net/hub/5732082/hubfs/Phibro-Cow-in-grass-hero-desktop.jpg?width=2000' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Acetone.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">A colorless liquid ketone produced as a byproduct of fat metabolism.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='/aggression.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Aggression.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Unprovoked behavior that intends to inflict harm.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='/Arthrogyposis.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Arthrogyposis.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">A rare congenital joint disorder characterized by fibrous or bony ankylosis.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://www.researchgate.net/profile/Kamal-Alsaad/publication/320100751/figure/fig1/AS:543897513803776@1506686680581/Figure-1-Arthrogryposis-animal-shows-curled-toes-with-ankylosis.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Ankylosis.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Stiffening or fixation of a joint.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://www.nadis.org.uk/media/2359/cerebellar2.jpg' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Anxiety.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Feeling of unease, nervousness, or worry.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='/Bellowing.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Bellowing.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">A loud, deep cry of cattle.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='/BloodLoss.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Blood loss.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">The escape of blood from the circulatory system.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://www.uaex.uada.edu/farm-ranch/animals-forages/beef-cattle/cow%20dead%20from%20nitrate%20poisioning%20R350.jpg' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Blood poisoning.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">A serious condition that occurs when bacteria and their toxins enter the bloodstream.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://agriculture.vic.gov.au/__data/assets/image/0003/901839/Cow-teat-blisters-web.jpg' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Blisters.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Small, fluid-filled sacs that form on the surface of the skin.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://acvs.org/wp-content/uploads/2023/05/cow.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Colic.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Severe abdominal pain caused by a sudden obstruction of the intestines.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='/Condemnation.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Condemnation of livers.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">Livers that are deemed unfit for human consumption due to disease or other factors.</p>
                </div>

                <div className="border-2">
                    <img
                        className="max-w-80 min-w-80 min-h-72 max-h-72 rounded-xl mx-auto"
                        src='https://www.researchgate.net/publication/350924684/figure/fig7/AS:1019785395593219@1620147193509/Coughing-calf-with-respiratory-disease-Animal-Health-Ireland.png' />
                    <div className="flex items-center m-4 justify-center">
                        <Checkbox id="terms2" />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <h1 className="mx-2 text-md">Coughing.</h1>
                        </label>
                    </div>
                    <p className="text-sm mx-2 min-h-16">A sudden expulsion of air from the lungs, typically caused by irritation.</p>
                </div>


            </div>


        </div>
    )
}
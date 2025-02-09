// "use client"
// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { FiMessageSquare, FiX } from "react-icons/fi"
// import Image from "next/image"

// const greetings = [
//   "hello",
//   "hi",
//   "hey",
//   "greetings",
//   "good morning",
//   "good afternoon",
//   "good evening",
//   "how are you",
//   "how's it going",
//   "what's up",
//   "nice to meet you",
//   "pleasure to meet you",
//   "howdy",
//   "yo",
//   "hiya",
//   "sup",
//   "hello there",
//   "hi there",
//   "heya",
//   "hola",
//   "bonjour",
//   "ciao",
// ]

// const predefinedQuestions = [
//   "How do I make a reservation?",
//   "What documents do I need to rent a car?",
//   "Is there an age requirement for renting?",
//   "Can I modify or cancel my reservation?",
//   "What is your fuel policy?",
//   "Do you offer insurance options?",
//   "What happens if I return the car late?",
//   "Can I rent a car one-way?",
//   "Are there mileage restrictions?",
//   "How do I report a problem with the rental car?",
//   "Do you offer child seats or GPS devices?",
//   "What types of vehicles do you have available?",
//   "Can I add an additional driver to my rental?",
//   "What forms of payment do you accept?",
//   "Is roadside assistance included?",
//   "Do you have any current promotions or discounts?",
//   "What is your policy on smoking in rental cars?",
//   "Can I take the rental car across state or country borders?",
//   "How clean are your vehicles given the current health situation?",
//   "What happens if I get into an accident with the rental car?",
//   "How far in advance should I book a rental car?",
//   "Do you offer luxury or sports car rentals?",
//   "What's your policy on pets in rental cars?",
//   "Can I rent a car if I'm under 25?",
//   "Do you offer long-term car rentals?",
//   "What's included in the rental price?",
//   "How does your loyalty program work?",
//   "Can I use my own insurance for the rental?",
//   "What's your policy on toll roads?",
//   "Do you offer airport pickup and drop-off?",
//   "How do I extend my rental period?",
//   "What happens if the car breaks down?",
//   "Do you offer electric or hybrid vehicles?",
//   "Can I rent a car without a credit card?",
//   "What's your policy on returning the car outside business hours?",
//   "Do you offer chauffeur or driver services?",
//   "How do I get the best deal on a car rental?",
//   "What's your policy on unlimited mileage?",
//   "Can I rent a car for someone else?",
//   "Do you offer winter tires in snowy locations?",
//   "What's your policy on fuel prepayment?",
//   "Can I pick up a car in one country and return it in another?",
//   "Do you offer car seats for infants and toddlers?",
//   "What's your policy on additional fees?",
//   "Can I rent a specific make and model of car?",
//   "Do you offer discounts for AAA members?",
//   "What happens if I lose the car keys?",
//   "Can I add GPS navigation to my rental?",
//   "Do you offer convertible car rentals?",
//   "What's your policy on early returns?",
//   "Can I rent a car with a debit card?",
//   "Do you offer pickup services if I'm not at an airport?",
//   "What's your policy on after-hours returns?",
//   "Can I rent a car for a road trip?",
//   "Do you offer multi-car rentals for groups?",
//   "What's your policy on renting to foreign drivers?",
//   "Can I add satellite radio to my rental?",
//   "Do you offer discounts for military personnel?",
//   "What's your policy on rental car upgrades?",
//   "Can I rent a car for a month or longer?",
//   "Do you offer any eco-friendly rental options?",
//   "What's your policy on rental car cleanliness?",
//   "Can I rent a car with a trailer hitch?",
//   "Do you offer discounts for seniors?",
//   "What's your policy on rental car inspections?",
//   "Can I rent a car for a one-way trip?",
//   "Do you offer any special packages for weekend rentals?",
//   "What's your policy on rental car maintenance?",
//   "Can I rent a luxury SUV?",
//   "Do you offer discounts for corporate accounts?",
//   "What's your policy on rental car damage?",
//   "Can I rent a car with a ski rack?",
//   "Do you offer any all-inclusive rental packages?",
//   "What's your policy on rental car theft?",
//   "Can I rent a moving truck or van?",
//   "Do you offer discounts for frequent renters?",
//   "What's your policy on rental car accidents?",
//   "Can I rent a car with hand controls for disabled drivers?",
//   "Do you offer any last-minute rental deals?",
//   "What's your policy on rental car reservations?",
//   "Can I rent a car for an international trip?",
//   "Do you offer any special rates for weekly rentals?",
//   "What's your policy on rental car insurance claims?",
//   "Can I rent a car with unlimited mileage?",
//   "Do you offer any bundle deals with hotels or flights?",
//   "What's your policy on rental car fuel options?",
//   "Can I rent a car with a roof rack?",
//   "Do you offer any seasonal rental specials?",
//   "What's your policy on rental car deposits?",
//   "Can I rent a car for a music festival or sporting event?",
//   "Do you offer any discounts for students?",
//   "What's your policy on rental car tire damage?",
//   "Can I rent a car with an automatic transmission?",
//   "Do you offer any loyalty rewards for frequent renters?",
//   "What's your policy on rental car tolls?",
//   "Can I rent a car with a built-in Wi-Fi hotspot?",
//   "Do you offer any discounts for booking online?",
//   "What's your policy on rental car modifications?",
//   "Can I rent a car for a destination wedding?",
//   "Do you offer any package deals for family vacations?",
//   "What's your policy on rental car towing?",
//   "Can I rent a car with a bike rack?",
//   "Do you offer any discounts for green vehicles?",
//   "What's your policy on rental car key replacement?",
//   "Can I rent a car for a business trip?",
//   "Do you offer any special rates for government employees?",
//   "What's your policy on rental car breakdowns?",
//   "Can I rent a car with a manual transmission?",
//   "Do you offer any discounts for long-term rentals?",
//   "What's your policy on rental car drop-off locations?",
//   "Can I rent a car with a sunroof?",
//   "Do you offer any special rates for holiday rentals?",
//   "What's your policy on rental car cleaning fees?",
//   "Can I rent a car for a cross-country trip?",
//   "Do you offer any discounts for first-time renters?",
//   "What's your policy on rental car late returns?",
//   "Can I rent a car with leather seats?",
//   "Do you offer any special rates for weekend getaways?",
//   "What's your policy on rental car mileage limits?",
//   "Can I rent a car with a navigation system?",
//   "Do you offer any discounts for booking in advance?",
//   "What's your policy on rental car upgrades at pickup?",
//   "Can I rent a car with all-wheel drive?",
//   "Do you offer any special rates for airport rentals?",
//   "What's your policy on rental car prepayment?",
//   "Can I rent a car with a backup camera?",
//   "Do you offer any discounts for rental car insurance?",
//   "What's your policy on rental car cancellations?",
//   "Can I rent a car with Bluetooth connectivity?",
//   "Do you offer any special rates for one-way rentals?",
//   "What's your policy on rental car additional drivers?",
//   "Can I rent a car with a child safety seat?",
//   "Do you offer any discounts for extended rentals?",
//   "What's your policy on rental car fuel charges?",
//   "Can I rent a car with cruise control?",
//   "Do you offer any special rates for luxury car rentals?",
//   "What's your policy on rental car after-hours pickup?",
//   "Can I rent a car with a push-button start?",
//   "Do you offer any discounts for prepaid rentals?",
//   "What's your policy on rental car grace periods?",
//   "Can I rent a car with a rear-view camera?",
//   "Do you offer any special rates for SUV rentals?",
//   "What's your policy on rental car early pickup?",
//   "Can I rent a car with satellite radio?",
//   "Do you offer any discounts for rental car accessories?",
//   "What's your policy on rental car refueling?",
//   "Can I rent a car with a premium sound system?",
//   "Do you offer any special rates for minivan rentals?",
//   "What's your policy on rental car taxes and fees?",
//   "Can I rent a car with adaptive cruise control?",
//   "Do you offer any discounts for multiple car rentals?",
//   "What's your policy on rental car pickup time changes?",
//   "Can I rent a car with a panoramic sunroof?",
//   "Do you offer any special rates for convertible rentals?",
//   "What's your policy on rental car return time changes?",
//   "Can I rent a car with Apple CarPlay or Android Auto?",
//   "Do you offer any discounts for rental car upgrades?",
//   "What's your policy on rental car no-shows?",
//   "Can I rent a car with a built-in dashcam?",
//   "Do you offer any special rates for electric car rentals?",
//   "What's your policy on rental car pickup location changes?",
//   "Can I rent a car with a remote start feature?",
//   "Do you offer any discounts for rental car prepayment?",
//   "What's your policy on rental car return location changes?",
//   "Can I rent a car with a heads-up display?",
//   "Do you offer any special rates for last-minute rentals?",
//   "What's your policy on rental car reservation modifications?",
//   "Can I rent a car with a built-in vacuum cleaner?",
//   "Do you offer any discounts for rental car loyalty programs?",
//   "What's your policy on rental car overbooking?",
//   "Can I rent a car with a built-in cooler?",
//   "Do you offer any special rates for holiday season rentals?",
//   "What's your policy on rental car damage waivers?",
//   "Can I rent a car with a built-in air purifier?",
//   "Do you offer any discounts for rental car bundling?",
//   "What's your policy on rental car peak season pricing?",
//   "Can I rent a car with a built-in tire pressure monitoring system?",
//   "Do you offer any special rates for off-peak season rentals?",
//   "What's your policy on rental car off-road use?",
//   "Can I rent a car with a built-in first aid kit?",
//   "Do you offer any discounts for rental car referrals?",
//   "What's your policy on rental car vehicle swaps during rental?",
//   "Can I rent a car with a built-in emergency kit?",
//   "Do you offer any special rates for rental car insurance bundles?",
//   "What's your policy on rental car loyalty point redemption?",
//   "Can I rent a car with a built-in dash cam?",
//   "Do you offer any discounts for rental car social media check-ins?",
//   "What's your policy on rental car vehicle class guarantees?",
//   "Can I rent a car with a built-in car alarm system?",
//   "Do you offer any special rates for rental car membership programs?",
//   "What's your policy on rental car vehicle substitutions?",
//   "Can I rent a car with a built-in jump starter?",
//   "Do you offer any discounts for rental car mobile app bookings?",
//   "What's your policy on rental car vehicle recalls?",
//   "Can I rent a car with a built-in tire inflator?",
//   "Do you offer any special rates for rental car partner airlines?",
//   "What's your policy on rental car vehicle maintenance schedules?",
//   "Can I rent a car with a built-in wireless phone charger?",
//   "Do you offer any discounts for rental car partner hotels?",
//   "What's your policy on rental car vehicle cleanliness guarantees?",
//   "Can I rent a car with a built-in umbrella holder?",
//   "Do you offer any special rates for rental car partner credit cards?",
//   "What's your policy on rental car vehicle age limits?",
//   "Can I rent a car with a built-in pet barrier?",
//   "Do you offer any discounts for rental car partner ride-sharing services?",
//   "What's your policy on rental car vehicle mileage accuracy?",
//   "Can I rent a car with a built-in cargo organizer?",
//   "Do you offer any special rates for rental car partner travel agencies?",
//   "What's your policy on rental car vehicle fuel level disputes?",
//   "Can I rent a car with a built-in roof-mounted cargo box?",
//   "Do you offer any discounts for rental car partner cruise lines?",
//   "What's your policy on rental car vehicle pre-existing damage?",
//   "Can I rent a car with a built-in bike rack?",
//   "Do you offer any special rates for rental car partner tour operators?",
//   "What's your policy on rental car vehicle smoke odor?",
//   "Can I rent a car with a built-in ski/snowboard rack?",
//   "Do you offer any discounts for rental car partner travel insurance providers?",
//   "What's your policy on rental car vehicle pet hair removal?",
//   "Can I rent a car with a built-in surfboard rack?",
//   "Do you offer any special rates for rental car partner theme parks?",
//   "What's your policy on rental car vehicle key fob battery replacement?",
//   "Can I rent a car with a built-in kayak rack?",
//   "Do you offer any discounts for rental car partner attractions?",
//   "What's your policy on rental car vehicle windshield chip repair?",
// ]

// const botResponses = {
//   "How do I make a reservation?":
//     "You can make a reservation through our website or mobile app. Simply select your desired vehicle, pick-up and drop-off locations, dates, and any additional options. Follow the prompts to complete your booking.",
//   "What documents do I need to rent a car?":
//     "You'll need a valid driver's license, a credit card in the renter's name, and proof of insurance. International renters may need to provide a passport and an international driver's permit.",
//   "Is there an age requirement for renting?":
//     "The minimum age to rent a car is typically 21 years old. However, renters under 25 may be subject to a young driver surcharge. Some specialty vehicles may have higher age requirements.",
//   "Can I modify or cancel my reservation?":
//     "Yes, you can modify or cancel your reservation through your account on our website or app. Please note that changes may affect the price, and cancellation fees may apply depending on how close to the pickup date you cancel.",
//   "What is your fuel policy?":
//     "We typically provide the car with a full tank of gas and expect it to be returned with a full tank. If the car is not returned with a full tank, we will charge for refueling at a slightly higher rate than local gas stations.",
//   "Do you offer insurance options?":
//     "Yes, we offer various insurance and protection options including Collision Damage Waiver (CDW), Personal Accident Insurance (PAI), and Supplemental Liability Protection (SLP). You can add these to your reservation during the booking process.",
//   "What happens if I return the car late?":
//     "Late returns may incur additional charges. We typically allow a short grace period, after which hourly or daily late fees will apply. It's always best to contact us if you think you might be late.",
//   "Can I rent a car one-way?":
//     "Yes, one-way rentals are available between many of our locations. Additional fees may apply for one-way rentals, which will be disclosed during the booking process.",
//   "Are there mileage restrictions?":
//     "Most of our rentals come with unlimited mileage. However, some specialty vehicles or promotional rates may have mileage restrictions. Always check the terms of your specific rental agreement.",
//   "How do I report a problem with the rental car?":
//     "If you experience any issues with your rental car, please contact our 24/7 customer support line immediately. The number is provided in your rental agreement and on a sticker inside the vehicle.",
//   "Do you offer child seats or GPS devices?":
//     "Yes, we offer both child seats and GPS devices as add-ons to your rental. You can request these when making your reservation or at the rental counter.",
//   "What types of vehicles do you have available?":
//     "We offer a wide range of vehicles, from economy cars to luxury vehicles, SUVs, and vans. You can view our full selection on our website or mobile app.",
//   "Can I add an additional driver to my rental?":
//     "Yes, you can add additional drivers to your rental. There may be a fee for this service, and the additional driver must meet our age and license requirements.",
//   "What forms of payment do you accept?":
//     "We accept major credit cards including Visa, MasterCard, American Express, and Discover. Debit cards may be accepted with additional requirements. Cash is typically not accepted for reservations.",
//   "Is roadside assistance included?":
//     "Basic roadside assistance is included with all our rentals. For more comprehensive coverage, you can purchase our premium roadside assistance package.",
//   "Do you have any current promotions or discounts?":
//     "We regularly offer promotions and discounts. Check our website or sign up for our newsletter to stay informed about our latest offers. We also have special rates for AAA members and corporate accounts.",
//   "What is your policy on smoking in rental cars?":
//     "All our vehicles are non-smoking. If evidence of smoking is found in the vehicle, a cleaning fee will be charged to the renter.",
//   "Can I take the rental car across state or country borders?":
//     "Crossing state borders within the country is usually allowed. However, taking a rental car across international borders typically requires prior authorization and may incur additional fees.",
//   "How clean are your vehicles given the current health situation?":
//     "We have implemented enhanced cleaning procedures for all our vehicles. Each car is thoroughly sanitized between rentals, with special attention to high-touch areas.",
//   "What happens if I get into an accident with the rental car?":
//     "If you're in an accident, ensure everyone's safety first, then contact local authorities if necessary. Call our emergency support line to report the incident, and we'll guide you through the next steps.",
//   // ... (continuing with responses for all 250 questions)
// }

// function findClosestQuestion(input: string): string {
//   const inputLower = input.toLowerCase()

//   // Check for greetings first
//   if (greetings.some((greeting) => inputLower.includes(greeting))) {
//     return "greeting"
//   }

//   // Find the closest matching question
//   return predefinedQuestions.reduce((closest, question) => {
//     const currentSimilarity = similarity(inputLower, question.toLowerCase())
//     const closestSimilarity = similarity(inputLower, closest.toLowerCase())
//     return currentSimilarity > closestSimilarity ? question : closest
//   }, predefinedQuestions[0])
// }

// function similarity(s1: string, s2: string): number {
//   const longer = s1.length > s2.length ? s1 : s2
//   const shorter = s1.length > s2.length ? s2 : s1
//   const longerLength = longer.length
//   if (longerLength === 0) {
//     return 1.0
//   }
//   return (longerLength - editDistance(longer, shorter)) / longerLength
// }

// function editDistance(s1: string, s2: string): number {
//   s1 = s1.toLowerCase()
//   s2 = s2.toLowerCase()

//   const costs = [];
//   for (let i = 0; i <= s1.length; i++) {
//     let lastValue = i
//     for (let j = 0; j <= s2.length; j++) {
//       if (i === 0) {
//         costs[j] = j
//       } else {
//         if (j > 0) {
//           let newValue = costs[j - 1]
//           if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
//             newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
//           }
//           costs[j - 1] = lastValue
//           lastValue = newValue
//         }
//       }
//     }
//     if (i > 0) {
//       costs[s2.length] = lastValue
//     }
//   }
//   return costs[s2.length]
// }

// interface AIChatbotProps {
//   botImage?: string
// }

// export function AIChatbot({ botImage }: AIChatbotProps) {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<{ type: "user" | "bot"; content: string }[]>([])
//   const [inputValue, setInputValue] = useState("")
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
//     }
//   }, [messages])

//   const handleSendMessage = () => {
//     if (inputValue.trim() === "") return

//     setMessages([...messages, { type: "user", content: inputValue }])

//     const closestQuestion = findClosestQuestion(inputValue)
//     let botResponse = ""

//     if (closestQuestion === "greeting") {
//       botResponse = "Hello! How can I assist you with your car rental needs today?"
//     } else {
//       botResponse =
//         botResponses[closestQuestion] ||
//         "I'm sorry, I don't have an answer for that question. Please try asking something else or contact our customer support for more assistance."
//     }

//     setTimeout(() => {
//       setMessages((prev) => [...prev, { type: "bot", content: botResponse }])
//     }, 500)

//     setInputValue("")
//   }

//   return (
//     <>
//       <motion.button
//         className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
//           >
//             <div className="p-4 bg-blue-500 text-white flex items-center">
//               {botImage && (
//                 <Image 
//                     src={botImage || "/aichatbot.avif"} 
//                      alt="Chatbot" 
//                       width={32} 
//                     height={32} 
//                    className="w-8 h-8 rounded-full mr-2" 
//                       />
//               )}
//               <h2 className="text-lg font-bold">RideSwide Admin</h2>
//             </div>
//             <div className="h-80 overflow-y-auto p-4 space-y-4">
//               {messages.map((message, index) => (
//                 <div key={index} className={`${message.type === "user" ? "text-right" : "text-left"}`}>
//                   <span
//                     className={`inline-block p-2 rounded-lg ${
//                       message.type === "user"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
//                     }`}
//                   >
//                     {message.content}
//                   </span>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>
//             <div className="p-4 border-t dark:border-gray-700">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                   placeholder="Type your question..."
//                   className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 />
//                 <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                   Send
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


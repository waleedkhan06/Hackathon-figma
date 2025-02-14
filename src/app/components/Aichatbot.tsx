"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMessageSquare, FiX } from "react-icons/fi"
import Image from "next/image"

const greetings = [
  "hello",
  "hi",
  "hey",
  "greetings",
  "good morning",
  "good afternoon",
  "good evening",
  "how are you",
  "how's it going",
  "what's up",
  "nice to meet you",
  "pleasure to meet you",
  "howdy",
  "yo",
  "hiya",
  "sup",
  "hello there",
  "hi there",
  "heya",
  "hola",
  "bonjour",
  "ciao",
]

const predefinedQuestions = [
  "How do I make a reservation?",
  "What documents do I need to rent a car?",
  "Is there an age requirement for renting?",
  "Can I modify or cancel my reservation?",
  "What is your fuel policy?",
  "Do you offer insurance options?",
  "What happens if I return the car late?",
  "Can I rent a car one-way?",
  "Are there mileage restrictions?",
  "How do I report a problem with the rental car?",
  "Do you offer child seats or GPS devices?",
  "What types of vehicles do you have available?",
  "Can I add an additional driver to my rental?",
  "What forms of payment do you accept?",
  "Is roadside assistance included?",
  "Do you have any current promotions or discounts?",
  "What is your policy on smoking in rental cars?",
  "Can I take the rental car across state or country borders?",
  "How clean are your vehicles given the current health situation?",
  "What happens if I get into an accident with the rental car?",
  "How far in advance should I book a rental car?",
  "Do you offer luxury or sports car rentals?",
  "What's your policy on pets in rental cars?",
  "Can I rent a car if I'm under 25?",
  "Do you offer long-term car rentals?",
  "What's included in the rental price?",
  "How does your loyalty program work?",
  "Can I use my own insurance for the rental?",
  "What's your policy on toll roads?",
  "Do you offer airport pickup and drop-off?",
  "How do I extend my rental period?",
  "What happens if the car breaks down?",
  "Do you offer electric or hybrid vehicles?",
  "Can I rent a car without a credit card?",
  "What's your policy on returning the car outside business hours?",
  "Do you offer chauffeur or driver services?",
  "How do I get the best deal on a car rental?",
  "What's your policy on unlimited mileage?",
  "Can I rent a car for someone else?",
  "Do you offer winter tires in snowy locations?",
  "What's your policy on fuel prepayment?",
  "Can I pick up a car in one country and return it in another?",
  "Do you offer car seats for infants and toddlers?",
  "What's your policy on additional fees?",
  "Can I rent a specific make and model of car?",
  "Do you offer discounts for AAA members?",
  "What happens if I lose the car keys?",
  "Can I add GPS navigation to my rental?",
  "Do you offer convertible car rentals?",
  "What's your policy on early returns?",
  "Can I rent a car with a debit card?",
  "Do you offer pickup services if I'm not at an airport?",
  "What's your policy on after-hours returns?",
  "Can I rent a car for a road trip?",
  "Do you offer multi-car rentals for groups?",
  "What's your policy on renting to foreign drivers?",
  "Can I add satellite radio to my rental?",
  "Do you offer discounts for military personnel?",
  "What's your policy on rental car upgrades?",
  "Can I rent a car for a month or longer?",
  "Do you offer any eco-friendly rental options?",
  "What's your policy on rental car cleanliness?",
  "Can I rent a car with a trailer hitch?",
  "Do you offer discounts for seniors?",
  "What's your policy on rental car inspections?",
  "Can I rent a car for a one-way trip?",
  "Do you offer any special packages for weekend rentals?",
  "What's your policy on rental car maintenance?",
  "Can I rent a luxury SUV?",
  "Do you offer discounts for corporate accounts?",
  "What's your policy on rental car damage?",
  "Can I rent a car with a ski rack?",
  "Do you offer any all-inclusive rental packages?",
  "What's your policy on rental car theft?",
  "Can I rent a moving truck or van?",
  "Do you offer discounts for frequent renters?",
  "What's your policy on rental car accidents?",
  "Can I rent a car with hand controls for disabled drivers?",
  "Do you offer any last-minute rental deals?",
  "What's your policy on rental car reservations?",
  "Can I rent a car for an international trip?",
  "Do you offer any special rates for weekly rentals?",
  "What's your policy on rental car insurance claims?",
  "Can I rent a car with unlimited mileage?",
  "Do you offer any bundle deals with hotels or flights?",
  "What's your policy on rental car fuel options?",
  "Can I rent a car with a roof rack?",
  "Do you offer any seasonal rental specials?",
  "What's your policy on rental car deposits?",
  "Can I rent a car for a music festival or sporting event?",
  "Do you offer any discounts for students?",
  "What's your policy on rental car tire damage?",
  "Can I rent a car with an automatic transmission?",
  "Do you offer any loyalty rewards for frequent renters?",
  "What's your policy on rental car tolls?",
  "Can I rent a car with a built-in Wi-Fi hotspot?",
  "Do you offer any discounts for booking online?",
  "What's your policy on rental car modifications?",
  "Can I rent a car for a destination wedding?",
  "Do you offer any package deals for family vacations?",
  "What's your policy on rental car towing?",
  "Can I rent a car with a bike rack?",
  "Do you offer any discounts for green vehicles?",
  "What's your policy on rental car key replacement?",
  "Can I rent a car for a business trip?",
  "Do you offer any special rates for government employees?",
  "What's your policy on rental car breakdowns?",
  "Can I rent a car with a manual transmission?",
  "Do you offer any discounts for long-term rentals?",
  "What's your policy on rental car drop-off locations?",
  "Can I rent a car with a sunroof?",
  "Do you offer any special rates for holiday rentals?",
  "What's your policy on rental car cleaning fees?",
  "Can I rent a car for a cross-country trip?",
  "Do you offer any discounts for first-time renters?",
  "What's your policy on rental car late returns?",
  "Can I rent a car with leather seats?",
  "Do you offer any special rates for weekend getaways?",
  "What's your policy on rental car mileage limits?",
  "Can I rent a car with a navigation system?",
  "Do you offer any discounts for booking in advance?",
  "What's your policy on rental car upgrades at pickup?",
  "Can I rent a car with all-wheel drive?",
  "Do you offer any special rates for airport rentals?",
  "What's your policy on rental car prepayment?",
  "Can I rent a car with a backup camera?",
  "Do you offer any discounts for rental car insurance?",
  "What's your policy on rental car cancellations?",
  "Can I rent a car with Bluetooth connectivity?",
  "Do you offer any special rates for one-way rentals?",
  "What's your policy on rental car additional drivers?",
  "Can I rent a car with a child safety seat?",
  "Do you offer any discounts for extended rentals?",
  "What's your policy on rental car fuel charges?",
  "Can I rent a car with cruise control?",
  "Do you offer any special rates for luxury car rentals?",
  "What's your policy on rental car after-hours pickup?",
  "Can I rent a car with a push-button start?",
  "Do you offer any discounts for prepaid rentals?",
  "What's your policy on rental car grace periods?",
  "Can I rent a car with a rear-view camera?",
  "Do you offer any special rates for SUV rentals?",
  "What's your policy on rental car early pickup?",
  "Can I rent a car with satellite radio?",
  "Do you offer any discounts for rental car accessories?",
  "What's your policy on rental car refueling?",
  "Can I rent a car with a premium sound system?",
  "Do you offer any special rates for minivan rentals?",
  "What's your policy on rental car taxes and fees?",
  "Can I rent a car with adaptive cruise control?",
  "Do you offer any discounts for multiple car rentals?",
  "What's your policy on rental car pickup time changes?",
  "Can I rent a car with a panoramic sunroof?",
  "Do you offer any special rates for convertible rentals?",
  "What's your policy on rental car return time changes?",
  "Can I rent a car with Apple CarPlay or Android Auto?",
  "Do you offer any discounts for rental car upgrades?",
  "What's your policy on rental car no-shows?",
  "Can I rent a car with a built-in dashcam?",
  "Do you offer any special rates for electric car rentals?",
  "What's your policy on rental car pickup location changes?",
  "Can I rent a car with a remote start feature?",
  "Do you offer any discounts for rental car prepayment?",
  "What's your policy on rental car return location changes?",
  "Can I rent a car with a heads-up display?",
  "Do you offer any special rates for last-minute rentals?",
  "What's your policy on rental car reservation modifications?",
  "Can I rent a car with a built-in vacuum cleaner?",
  "Do you offer any discounts for rental car loyalty programs?",
  "What's your policy on rental car overbooking?",
  "Can I rent a car with a built-in cooler?",
  "Do you offer any special rates for holiday season rentals?",
  "What's your policy on rental car damage waivers?",
  "Can I rent a car with a built-in air purifier?",
  "Do you offer any discounts for rental car bundling?",
  "What's your policy on rental car peak season pricing?",
  "Can I rent a car with a built-in tire pressure monitoring system?",
  "Do you offer any special rates for off-peak season rentals?",
  "What's your policy on rental car off-road use?",
  "Can I rent a car with a built-in first aid kit?",
  "Do you offer any discounts for rental car referrals?",
  "What's your policy on rental car vehicle swaps during rental?",
  "Can I rent a car with a built-in emergency kit?",
  "Do you offer any special rates for rental car insurance bundles?",
  "What's your policy on rental car loyalty point redemption?",
  "Can I rent a car with a built-in dash cam?",
  "Do you offer any discounts for rental car social media check-ins?",
  "What's your policy on rental car vehicle class guarantees?",
  "Can I rent a car with a built-in car alarm system?",
  "Do you offer any special rates for rental car membership programs?",
  "What's your policy on rental car vehicle substitutions?",
  "Can I rent a car with a built-in jump starter?",
  "Do you offer any discounts for rental car mobile app bookings?",
  "What's your policy on rental car vehicle recalls?",
  "Can I rent a car with a built-in tire inflator?",
  "Do you offer any special rates for rental car partner airlines?",
  "What's your policy on rental car vehicle maintenance schedules?",
  "Can I rent a car with a built-in wireless phone charger?",
  "Do you offer any discounts for rental car partner hotels?",
  "What's your policy on rental car vehicle cleanliness guarantees?",
  "Can I rent a car with a built-in umbrella holder?",
  "Do you offer any special rates for rental car partner credit cards?",
  "What's your policy on rental car vehicle age limits?",
  "Can I rent a car with a built-in pet barrier?",
  "Do you offer any discounts for rental car partner ride-sharing services?",
  "What's your policy on rental car vehicle mileage accuracy?",
  "Can I rent a car with a built-in cargo organizer?",
  "Do you offer any special rates for rental car partner travel agencies?",
  "What's your policy on rental car vehicle fuel level disputes?",
  "Can I rent a car with a built-in roof-mounted cargo box?",
  "Do you offer any discounts for rental car partner cruise lines?",
  "What's your policy on rental car vehicle pre-existing damage?",
  "Can I rent a car with a built-in bike rack?",
  "Do you offer any special rates for rental car partner tour operators?",
  "What's your policy on rental car vehicle smoke odor?",
  "Can I rent a car with a built-in ski/snowboard rack?",
  "Do you offer any discounts for rental car partner travel insurance providers?",
  "What's your policy on rental car vehicle pet hair removal?",
  "Can I rent a car with a built-in surfboard rack?",
  "Do you offer any special rates for rental car partner theme parks?",
  "What's your policy on rental car vehicle key fob battery replacement?",
  "Can I rent a car with a built-in kayak rack?",
  "Do you offer any discounts for rental car partner attractions?",
  "What's your policy on rental car vehicle windshield chip repair?",
]

 const botResponses : Record<string, string> = {
    "How do I make a reservation?":
      "You can make a reservation through our website or mobile app. Simply select your desired vehicle, pick-up and drop-off locations, dates, and any additional options. Follow the prompts to complete your booking.",
  
    "What documents do I need to rent a car?":
      "You'll need a valid driver's license, a credit card in the renter's name, and proof of insurance. International renters may need to provide a passport and an international driver's permit.",
  
    "Is there an age requirement for renting?":
      "The minimum age to rent a car is typically 21 years old. However, renters under 25 may be subject to a young driver surcharge. Some specialty vehicles may have higher age requirements.",
  
    "Can I modify or cancel my reservation?":
      "Yes, you can modify or cancel your reservation through your account on our website or mobile app. Be sure to check our cancellation policy for any potential fees.",
  
    "What is your fuel policy?":
      "Our standard policy is 'full-to-full'. You'll receive the car with a full tank and should return it full. If not, you'll be charged for refueling at a premium rate.",
  
    "Do you offer insurance options?":
      "Yes, we offer various insurance options including collision damage waiver, liability protection, and personal accident insurance. You can add these during the booking process.",
  
    "What happens if I return the car late?":
      "Late returns may incur additional charges. It's best to contact us as soon as you know you'll be late. We may be able to extend your rental, subject to availability.",
  
    "Can I rent a car one-way?":
      "Yes, one-way rentals are available between many of our locations. Additional fees may apply. Check our website for specific route availability and pricing.",
  
    "Are there mileage restrictions?":
      "Most of our rentals come with unlimited mileage. However, some specialty vehicles or promotional rates may have mileage caps. Always check the terms of your specific rental.",
  
    "How do I report a problem with the rental car?":
      "If you experience any issues with your rental car, please contact our 24/7 roadside assistance number immediately. For non-urgent matters, you can also report problems through our app or website.",
  
    "Do you offer child seats or GPS devices?":
      "Yes, we offer both child seats and GPS devices as add-on options. You can reserve these when making your booking or request them at the rental counter.",
  
    "What types of vehicles do you have available?":
      "We offer a wide range of vehicles including economy cars, sedans, SUVs, vans, and luxury vehicles. Availability may vary by location and season.",
  
    "Can I add an additional driver to my rental?":
      "Yes, you can add additional drivers to your rental. They must meet our age and license requirements and be present at the rental counter to sign the agreement. Additional fees may apply.",
  
    "What forms of payment do you accept?":
      "We accept major credit cards including Visa, MasterCard, American Express, and Discover. Some locations may accept debit cards with additional requirements. Cash is generally not accepted.",
  
    "Is roadside assistance included?":
      "Basic roadside assistance is included in most rentals. For more comprehensive coverage, we offer premium roadside assistance as an additional option.",
  
    "Do you have any current promotions or discounts?":
      "We regularly offer promotions and discounts. Check our website or mobile app for current offers. We also have special rates for AAA members, seniors, and corporate accounts.",
  
    "What is your policy on smoking in rental cars?":
      "All our vehicles are non-smoking. If evidence of smoking is found in the vehicle, a cleaning fee will be charged.",
  
    "Can I take the rental car across state or country borders?":
      "Crossing state borders within the same country is usually allowed. For international border crossings, you must notify us in advance and obtain proper authorization. Additional fees and restrictions may apply.",
  
    "How clean are your vehicles given the current health situation?":
      "We have enhanced our cleaning protocols in light of current health concerns. All vehicles undergo thorough sanitization between rentals, with special attention to high-touch areas.",
  
    "What happens if I get into an accident with the rental car?":
      "In case of an accident, ensure everyone's safety first, then contact local authorities if necessary. Call our emergency number to report the incident. If you purchased our insurance, it will help cover damages as per the policy terms.",
  
    "How far in advance should I book a rental car?":
      "We recommend booking as early as possible, especially during peak travel seasons. However, we can often accommodate last-minute rentals based on availability.",
  
    "Do you offer luxury or sports car rentals?":
      "Yes, we offer a selection of luxury and sports cars at select locations. These may have additional requirements such as higher age limits or security deposits.",
  
    "What's your policy on pets in rental cars?":
      "Pets are allowed in most of our rental vehicles. However, you're responsible for any damage or excessive cleaning required. We recommend using a pet carrier and returning the car free of pet hair.",
  
    "Can I rent a car if I'm under 25?":
      "Yes, you can rent a car if you're under 25 but at least 21 years old. However, you may be subject to a young driver surcharge and may have limited vehicle options.",
  
    "Do you offer long-term car rentals?":
      "Yes, we offer long-term rentals. These can often provide better value for extended needs. Contact our customer service for special rates on rentals longer than a month.",
  
    "What's included in the rental price?":
      "The base rental price typically includes the vehicle, standard insurance, and unlimited mileage (for most car classes). Additional fees may apply for extras like GPS, child seats, additional drivers, or premium insurance options.",
  
    "How does your loyalty program work?":
      "Our loyalty program allows you to earn points on your rentals, which can be redeemed for free rental days, upgrades, or other perks. You'll also enjoy faster pick-up and exclusive offers.",
  
    "Can I use my own insurance for the rental?":
      "In many cases, yes. Check with your auto insurance provider to see if your policy extends to rental cars. If so, you may be able to decline our insurance options.",
  
    "What's your policy on toll roads?":
      "We offer electronic toll collection devices in many locations. If you use toll roads without our device, you're responsible for paying all tolls. Unpaid tolls may result in additional administrative fees.",
  
    "Do you offer airport pickup and drop-off?":
      "Yes, we have rental locations at many major airports. We often provide shuttle services from the terminal to our nearby rental facilities.",
  
    "How do I extend my rental period?":
      "To extend your rental, contact our customer service before your scheduled return time. Extensions are subject to vehicle availability and may result in a rate change.",
  
    "What happens if the car breaks down?":
      "If the car breaks down, call our 24/7 roadside assistance number immediately. We'll arrange for help to come to you or provide a replacement vehicle if necessary.",
  
    "Do you offer electric or hybrid vehicles?":
      "Yes, we offer electric and hybrid vehicles at select locations. Availability may vary, so it's best to book these in advance.",
  
    "Can I rent a car without a credit card?":
      "While a credit card is preferred, some locations may accept debit cards with additional requirements such as proof of return travel and a higher deposit. Cash rentals are generally not available.",
  
    "What's your policy on returning the car outside business hours?":
      "Many locations offer after-hours return. Park the car in the designated area, lock it, and drop the keys in the secure key drop box. Be aware that you're responsible for the vehicle until it's checked in during business hours.",
  
    "Do you offer chauffeur or driver services?":
      "At select locations, we offer chauffeur services. This needs to be arranged in advance and additional fees apply.",
  
    "How do I get the best deal on a car rental?":
      "Book early, check for promotional codes, join our loyalty program, and consider longer rental periods for better rates. Also, compare different pick-up locations as airport rentals often have higher fees.",
  
    "What's your policy on unlimited mileage?":
      "Most of our standard rentals come with unlimited mileage. However, some specialty vehicles or promotional rates may have mileage restrictions. Always check the terms of your specific rental.",
  
    "Can I rent a car for someone else?":
      "The primary renter must be present to sign the rental agreement and pick up the car. However, you can add other drivers to the rental, allowing them to drive the vehicle.",
  
    "Do you offer winter tires in snowy locations?":
      "In areas with heavy snowfall, we offer winter tires either as a standard feature during winter months or as an optional extra. Availability and policies may vary by location.",
  
    "What's your policy on fuel prepayment?":
      "We offer a fuel prepayment option where you pay for a full tank upfront at a competitive rate. This allows you to return the car with any amount of fuel without additional charges.",
  
    "Can I pick up a car in one country and return it in another?":
      "Cross-border one-way rentals are possible between some countries, but they often incur significant additional fees. Check with our customer service for availability and pricing.",
  
    "Do you offer car seats for infants and toddlers?":
      "Yes, we offer infant, toddler, and booster seats. These should be reserved in advance to ensure availability. Installation is the renter's responsibility.",
  
    "What's your policy on additional fees?":
      "Common additional fees include young driver surcharges, additional driver fees, GPS rental, and fees for specialty vehicles or one-way rentals. All applicable fees will be disclosed during the booking process.",
  
    "Can I rent a specific make and model of car?":
      "We guarantee a specific car class, not a specific make and model. However, some locations offer a 'choice' program where you can select your exact vehicle from available options.",
  
    "Do you offer discounts for AAA members?":
      "Yes, we offer discounts for AAA members. Make sure to provide your AAA membership number when booking to receive the discount.",
  
    "What happens if I lose the car keys?":
      "If you lose the car keys, contact us immediately. We can arrange for replacement keys, but please note that this will incur additional fees.",
  
    "Can I add GPS navigation to my rental?":
      "Yes, GPS navigation systems are available for rent. You can add this to your booking online or request it at the rental counter.",
  
    "Do you offer convertible car rentals?":
      "Yes, we offer convertible cars at select locations, typically in popular vacation destinations. These may have higher rental rates and age requirements.",
  
    "What's your policy on early returns?":
      "You can return the car early, but in most cases, you'll still be charged for the originally booked duration. Some promotional rates may have minimum rental period requirements.",
  
    "Can I rent a car with a debit card?":
      "Some locations accept debit cards, but additional requirements usually apply, such as a higher deposit or proof of return travel. Credit cards are preferred and may offer more flexibility.",
  
    "Do you offer pickup services if I'm not at an airport?":
      "Many of our non-airport locations offer local pick-up services. Contact the specific rental location to arrange this service.",
  
    "What's your policy on after-hours returns?":
      "Many locations have a secure key drop for after-hours returns. Park in the designated area, lock the car, and drop the keys in the box. The rental continues until the location reopens and checks in the vehicle.",
  
    "Can I rent a car for a road trip?":
      "Many of our rentals come with unlimited mileage, making them perfect for road trips. Just let us know if you plan to cross state lines or international borders.",
  
    "Do you offer multi-car rentals for groups?":
      "Yes, we can accommodate multi-car rentals for groups. Contact our group reservations department for the best rates and to coordinate multiple vehicle rentals.",
  
    "What's your policy on renting to foreign drivers?":
      "We rent to foreign drivers with a valid license from their home country. An International Driving Permit may be required if the license is not in English.",
  
    "Can I add satellite radio to my rental?":
      "Satellite radio is available in select vehicles. You can request this feature when booking, but availability may vary.",
  
    "Do you offer discounts for military personnel?":
      "Yes, we offer special rates for active duty and retired military personnel. Make sure to mention your military status when booking.",
  
    "What's your policy on rental car upgrades?":
      "We often offer upgrades at the rental counter for a fee. Sometimes, complimentary upgrades may be available based on inventory.",
  
    "Can I rent a car for a month or longer?":
      "Yes, we offer long-term rentals. These often come with special rates. Contact our customer service for the best deals on rentals longer than a month.",
  
    "Do you offer any eco-friendly rental options?":
      "Yes, we have a selection of hybrid and electric vehicles available at many locations. These can be requested during the booking process.",
  
    "What's your policy on rental car cleanliness?":
      "We thoroughly clean and sanitize each vehicle between rentals. If you're unsatisfied with the cleanliness of your rental, please notify us immediately.",
  
    "Can I rent a car with a trailer hitch?":
      "Some of our larger vehicles come equipped with trailer hitches. This feature needs to be specifically requested and may not be available at all locations.",
  
    "Do you offer discounts for seniors?":
      "Yes, we offer special rates for senior renters, typically for those 50 years and older. Make sure to mention this when booking to receive the discount.",
  
    "What's your policy on rental car inspections?":
      "We conduct a thorough inspection before and after each rental. We encourage renters to do their own inspection and report any damage before driving off.",
  
    "Can I rent a car for a one-way trip?":
      "Yes, one-way rentals are available between many of our locations. Additional fees may apply, and availability can vary.",
  
    "Do you offer any special packages for weekend rentals?":
      "We often have special weekend rates or packages. Check our website or app for current promotions, or ask about weekend specials when booking.",
  
    "What's your policy on rental car maintenance?":
      "We maintain all our vehicles to high standards. If you experience any issues during your rental, contact us immediately for assistance or a replacement vehicle.",
  
    "Can I rent a luxury SUV?":
      "Yes, we offer luxury SUVs at select locations. These may have higher rental rates and age requirements.",
  
    "Do you offer discounts for corporate accounts?":
      "Yes, we have special rates and programs for corporate accounts. Contact our business rentals department for more information.",
  
    "What's your policy on rental car damage?":
      "You're responsible for any damage to the rental car. We offer various insurance options to cover potential damages. Always report any damage immediately.",
  
    "Can I rent a car with a ski rack?":
      "Some of our vehicles, especially in ski resort areas, come equipped with ski racks. This feature needs to be specifically requested and may incur an additional fee.",
  
    "Do you offer any all-inclusive rental packages?":
      "We offer all-inclusive packages that typically bundle the rental cost with insurance and other popular add-ons. These can often provide better value for renters.",
  
    "What's your policy on rental car theft?":
      "In the unfortunate event of theft, contact the local police immediately and then notify us. If you've purchased our full coverage insurance, it typically covers theft.",
  
    "Can I rent a moving truck or van?":
      "Yes, we offer moving trucks and cargo vans at select locations. These may have different rental terms and requirements compared to our standard vehicle rentals.",
  
    "Do you offer discounts for frequent renters?":
      "Yes, our loyalty program offers points and perks for frequent renters, including discounts, free upgrades, and expedited service.",
  
    "What's your policy on rental car accidents?":
      "In case of an accident, ensure everyone's safety first, then contact local authorities if necessary. Call our emergency number to report the incident and follow the instructions provided.",
  
    "Can I rent a car with hand controls for disabled drivers?":
      "Yes, we offer vehicles with hand controls for disabled drivers at many locations. This needs to be arranged in advance to ensure availability.",
  
    "Do you offer any last-minute rental deals?":
      "We sometimes offer last-minute deals based on inventory. Check our website or app for current promotions, or ask about available discounts when booking.",
  
    "What's your policy on rental car reservations?":
      "We recommend making reservations in advance to ensure vehicle availability and the best rates. However, we also accommodate walk-in rentals based on availability.",
  
    "Can I rent a car for an international trip?":
      "Yes, but inform us of your plans to take the vehicle across borders. Additional fees and documentation may be required, and some countries may be restricted.",
  
    "Do you offer any special rates for weekly rentals?":
      "Yes, we typically offer reduced rates for weekly rentals compared to daily rates. Check our website or ask a representative for current weekly rental specials.",
  
    "What's your policy on rental car insurance claims?":
      "If you need to make an insurance claim, contact our claims department. They will guide you through the process and required documentation.",
  
    "Can I rent a car with unlimited mileage?":
      "Most of our standard rentals come with unlimited mileage. However, some specialty vehicles or promotional rates may have mileage restrictions.",
  
    "Do you offer any bundle deals with hotels or flights?":
      "We partner with various travel providers to offer bundle deals. Check our website or consult with a travel agent for current package offers.",
  
    "What's your policy on rental car fuel options?":
      "We typically offer two fuel options: 'full-to-full' where you return the car with a full tank, or prepaid fuel where you pay for a full tank upfront and can return it at any fuel level.",
  
    "Can I rent a car with a roof rack?":
      "Yes, many of our vehicles come equipped with roof racks. This feature should be requested at the time of booking to ensure availability.",
  
    "Do you offer any seasonal rental specials?":
      "We offer various seasonal specials throughout the year. These might include summer road trip packages or winter ski trip deals. Check our website or ask a representative for current offers.",
  
    "What's your policy on rental car deposits?":
      "We typically place a hold on your credit card for the estimated rental charges plus a security deposit. The deposit amount can vary based on the vehicle type and rental location.",
  
    "Can I rent a car for a music festival or sporting event?":
      "We often see increased demand around major events, so we recommend booking well in advance to ensure availability.",
  
    "Do you offer any discounts for students?":
      "Yes, we offer student discounts at many locations. You'll need to provide a valid student ID at the time of rental.",
  
    "What's your policy on rental car tire damage?":
      "Tire damage is typically the renter's responsibility unless you've purchased our additional protection packages. Always check tire condition before driving off.",
  
    "Can I rent a car with an automatic transmission?":
      "Yes, the majority of our fleet consists of vehicles with automatic transmission. If you prefer a manual transmission, you'll need to specifically request this, as availability may be limited.",
  
    "Do you offer any loyalty rewards for frequent renters?":
      "Yes, our loyalty program offers points for each rental, which can be redeemed for free rental days, upgrades, or other perks. Frequent renters also enjoy faster pick-up and exclusive offers.",
  
    "What's your policy on rental car tolls?":
      "We offer electronic toll collection devices in many locations. If you use toll roads without our device, you're responsible for paying all tolls. Unpaid tolls may result in additional administrative fees.",
  
    "Can I rent a car with a built-in Wi-Fi hotspot?":
      "Some of our newer models come equipped with Wi-Fi hotspots. This feature should be requested at the time of booking, as availability may be limited.",
  
    "Do you offer any discounts for booking online?":
      "Yes, we often have special online-only rates and promotions. Booking through our website or app can often result in better deals than booking over the phone or in person.",
  
    "What's your policy on rental car modifications?":
      "Any modifications to the rental vehicle are strictly prohibited. This includes both cosmetic and mechanical changes. The car should be returned in the same condition it was rented.",
  
    "Can I rent a car for a destination wedding?":
      "We can accommodate large group bookings for events like weddings. Contact our group reservations department for the best rates and to coordinate multiple vehicle rentals if needed.",
  
    "Do you offer any package deals for family vacations?":
      "Yes, we offer family packages that often include a larger vehicle, additional driver fees waived, and sometimes even car seats included. Check our website or ask a representative about current family deals.",
  
    "What's your policy on rental car towing?":
      "Towing is not permitted unless explicitly authorized by us. If you need a vehicle that can tow, mention this when booking as we have specific vehicles designed for this purpose.",
  
    "Can I rent a car with a bike rack?":
      "Yes, many of our vehicles can be equipped with bike racks. This needs to be requested in advance and may incur an additional fee.",
  
    "Do you offer any discounts for green vehicles?":
      "We often have promotions for our hybrid and electric vehicles. These may include discounted rates or additional perks to encourage eco-friendly rentals.",
  
    "What's your policy on rental car key replacement?":
      "If you lose the car keys, contact us immediately. We can arrange for replacement keys, but please note that this will incur additional fees. Key replacement can be costly, so we recommend our key protection add-on.",
  
    "Can I rent a car for a business trip?":
      "We cater to business travelers and offer corporate accounts with special rates and benefits. Even without a corporate account, you can still rent for business purposes.",
  
    "Do you offer any special rates for government employees?":
      "Yes, we offer government and military rates. You'll need to provide appropriate ID at the time of rental to qualify for these special rates.",
  
    "What's your policy on rental car breakdowns?":
      "If your rental car breaks down, call our 24/7 roadside assistance immediately. We'll arrange for repairs or a replacement vehicle. You won't be charged for any time lost due to mechanical failures that aren't your fault.",
  
    "Can I rent a car with a manual transmission?":
      "While most of our fleet is automatic, we do offer manual transmission vehicles at select locations. You'll need to specifically request this when booking.",
  
    "Do you offer any discounts for long-term rentals?":
      "Yes, we offer reduced rates for long-term rentals. The longer you rent, generally the better the daily rate becomes. Contact our customer service for special long-term rental quotes.",
  
    "What's your policy on rental car drop-off locations?":
      "We offer different drop-off locations, including one-way rentals. However, returning to a different location than your pickup may incur additional fees. Always confirm the drop-off location when booking.",
  
    "Can I rent a car with a sunroof?":
      "Many of our vehicles come equipped with sunroofs. If this feature is important to you, mention it when booking and we'll do our best to accommodate your request.",
  
    "Do you offer any special rates for holiday rentals?":
      "We often have special promotions during major holidays. However, be aware that holidays are peak rental periods, so booking well in advance is recommended.",
  
    "What's your policy on rental car cleaning fees?":
      "We expect the car to be returned in a reasonable condition. Excessive dirt, pet hair, or other messes may result in additional cleaning fees. Smoking in non-smoking vehicles will always incur a cleaning fee.",
  
    "Can I rent a car for a cross-country trip?":
      "Many of our rentals come with unlimited mileage, making them perfect for long trips. Just let us know if you plan to cross state lines or international borders.",
  
    "Do you offer any discounts for first-time renters?":
      "We occasionally run promotions for first-time renters. Check our website or ask a representative about any current first-time renter specials.",
  
    "What's your policy on rental car late returns?":
      "Late returns may incur additional charges. It's best to contact us as soon as you know you'll be late. We may be able to extend your rental, subject to availability.",
  
    "Can I rent a car with leather seats?":
      "Many of our premium and luxury vehicles come with leather seats. If this is a preference, mention it when booking and we'll do our best to accommodate.",
  
    "Do you offer any special rates for weekend getaways?":
      "Yes, we often have weekend specials that can provide great value for short trips. These may include reduced rates or free upgrades.",
  
    "What's your policy on rental car mileage limits?":
      "Most of our standard rentals come with unlimited mileage. However, some specialty vehicles or promotional rates may have mileage restrictions. Always check the terms of your specific rental.",
  
    "Can I rent a car with a navigation system?":
      "Yes, many of our vehicles come equipped with built-in navigation systems. For those that don't, we offer portable GPS units for rent.",
  
    "Do you offer any discounts for booking in advance?":
      "Yes, booking in advance often secures better rates. We sometimes offer early bird specials for bookings made well in advance of the rental date.",
  
    "What's your policy on rental car upgrades at pickup?":
      "If you're interested in an upgrade, ask at the rental counter. We often have special upgrade offers available, subject to vehicle availability.",
  
    "Can I rent a car with all-wheel drive?":
      "Yes, we offer all-wheel drive vehicles, which are especially popular in areas with challenging weather conditions. Make sure to request this feature when booking.",
  
    "Do you offer any special rates for airport rentals?":
      "While airport rentals often have additional fees due to airport taxes, we frequently offer promotions specifically for airport rentals to offset these costs.",
  
    "What's your policy on rental car prepayment?":
      "We offer prepaid rentals which often come at a discount compared to pay-later rates. However, prepaid rentals typically have stricter cancellation policies.",
  
    "Can I rent a car with a backup camera?":
      "Many of our newer model vehicles come equipped with backup cameras. If this is an important feature for you, mention it when booking.",
  
    "Do you offer any discounts for rental car insurance?":
      "We sometimes offer promotions that include insurance in the rental rate. Otherwise, if you frequently rent, consider our annual insurance option which can provide savings.",
  
    "What's your policy on rental car cancellations?":
      "Cancellation policies vary depending on the type of rate you booked. Prepaid rates typically have stricter cancellation policies than pay-later rates. Always check the terms and conditions of your specific booking.",
  
    "Can I rent a car with Bluetooth connectivity?":
      "Most of our newer vehicles come equipped with Bluetooth connectivity. If this is a must-have feature for you, be sure to mention it when booking.",
  
    "Do you offer any special rates for one-way rentals?":
      "One-way rentals often incur a one-way fee, but we occasionally offer promotions that reduce or waive this fee on specific routes.",
  
    "What's your policy on rental car additional drivers?":
      "You can add additional drivers to your rental for a fee. Some of our memberships or special rates include a free additional driver.",
  
    "Can I rent a car with a child safety seat?":
      "Yes, we offer infant, toddler, and booster seats for rent. These should be reserved in advance to ensure availability.",
  
    "Do you offer any discounts for extended rentals?":
      "Yes, our rates typically decrease for longer rental periods. For rentals extending beyond a few weeks, contact our customer service for special long-term rates.",
  
    "What's your policy on rental car fuel charges?":
      "If you don't return the car with the same amount of fuel it had at pickup (usually a full tank), you'll be charged for refueling at a premium rate. We also offer a fuel prepay option for convenience.",
  
    "Can I rent a car with cruise control?":
      "Most of our vehicles come equipped with cruise control. If this is a crucial feature for you, confirm its availability when booking.",
  
    "Do you offer any special rates for luxury car rentals?":
      "We often have promotions for our luxury car rentals, especially during off-peak seasons. Check our website or ask a representative about current luxury car specials.",
  
    "What's your policy on rental car after-hours pickup?":
      "Many of our locations offer after-hours pickup. This usually needs to be arranged in advance, and there may be an additional fee for this service.",
  
    "Can I rent a car with a push-button start?":
      "Many of our newer model vehicles come with push-button start. If this is a preference, mention it when booking.",
  
    "Do you offer any discounts for prepaid rentals?":
      "Yes, prepaying for your rental often comes with a discount compared to our pay-later rates. However, be aware that prepaid rates typically have stricter cancellation policies.",
  
    "What's your policy on rental car grace periods?":
      "We typically offer a short grace period for returns, usually around 29 minutes. After this, late fees may apply. It's always best to contact us if you think you'll be late returning the vehicle.",
  
    "Can I rent a car with a rear-view camera?":
      "Many of our newer vehicles come equipped with rear-view cameras. If this is an important safety feature for you, request it when booking.",
  
    "Do you offer any special rates for SUV rentals?":
      "We often have promotions on our SUV rentals, especially during off-peak seasons or in certain locations. Check our website or ask about current SUV specials when booking.",
  
    "What's your policy on rental car early pickup?":
      "If you wish to pick up your rental earlier than your reserved time, contact us to check availability. If we can accommodate you, your rental charges will start from the earlier pickup time.",
  
    "Can I rent a car with satellite radio?":
      "Some of our vehicles come equipped with satellite radio. This feature may incur an additional fee and should be requested at the time of booking.",
  
    "Do you offer any discounts for rental car accessories?":
      "We occasionally run promotions that include free or discounted accessories like GPS units or car seats. Check our current offers when booking.",
  
    "What's your policy on rental car refueling?":
      "You have several options: return the car with a full tank, pay for a tank of fuel upfront (often at a competitive rate), or return it not full and pay our refueling rate.",
  
    "Can I rent a car with a premium sound system?":
      "Some of our higher-end and luxury vehicles come equipped with premium sound systems. If this is important to you, mention it when booking.",
  
    "Do you offer any special rates for minivan rentals?":
      "We often have family-oriented promotions that include special rates on minivans, especially during peak family travel seasons.",
  
    "What's your policy on rental car taxes and fees?":
      "All applicable taxes and fees will be disclosed during the booking process. These can vary based on location and specific rental terms.",
  
    "Can I rent a car with adaptive cruise control?":
      "Some of our newer, higher-end vehicles come equipped with adaptive cruise control. This feature should be specifically requested when booking.",
  
    "Do you offer any discounts for multiple car rentals?":
      "For multiple car rentals, especially for events or group travel, contact our group reservations department. They can often provide better rates for multiple vehicle rentals.",
  
    "What's your policy on rental car pickup time changes?":
      "If you need to change your pickup time, contact us as soon as possible. We'll do our best to accommodate your request, subject to vehicle availability.",
  
    "Can I rent a car with a panoramic sunroof?":
      "Some of our premium vehicles come equipped with panoramic sunroofs. If this feature is important to you, request it when booking.",
  
    "Do you offer any special rates for convertible rentals?":
      "We often have seasonal promotions for convertible rentals, especially in popular vacation destinations during good weather seasons.",
  
    "What's your policy on rental car return time changes?":
      "If you need to change your return time, contact us as soon as possible. Returning later than scheduled without notifying us may result in late fees.",
  
    "Can I rent a car with Apple CarPlay or Android Auto?":
      "Many of our newer vehicles come equipped with Apple CarPlay and/or Android Auto. If this is a must-have feature, be sure to request it when booking.",
  
    "Do you offer any discounts for rental car upgrades?":
      "We often have upgrade promotions available at the counter. These can vary based on availability and location.",
  
    "What's your policy on rental car no-shows?":
      "If you don't show up for your rental and haven't cancelled, you may be charged a no-show fee. The exact policy can vary based on the type of rate you booked.",
  
    "Can I rent a car with a built-in dashcam?":
      "We don't typically offer cars with built-in dashcams, but you're usually allowed to use your own as long as it's removed before returning the vehicle.",
  
    "Do you offer any special rates for electric car rentals?":
      "We often have promotions for our electric vehicles to encourage eco-friendly rentals. These may include discounted rates or additional perks.",
  
    "What's your policy on rental car pickup location changes?":
      "If you need to change your pickup location, contact us as soon as possible. We'll do our best to accommodate your request, but changes may affect your rate.",
  
    "Can I rent a car with a remote start feature?":
      "Some of our newer, higher-end vehicles come equipped with remote start. If this feature is important to you, request it when booking.",
  
    "Do you offer any discounts for rental car prepayment?":
      "Yes, prepaying for your rental often comes with a discount. However, be aware that prepaid rates typically have stricter cancellation policies.",
  
    "What's your policy on rental car return location changes?":
      "If you need to change your return location, contact us as soon as possible. One-way rentals or changes in return location often incur additional fees.",
  
    "Can I rent a car with a heads-up display?":
      "Some of our premium and luxury vehicles come equipped with heads-up displays. If this feature is important to you, request it when booking.",
  
    "Do you offer any special rates for last-minute rentals?":
      "We sometimes offer last-minute deals based on inventory. Check our website or app for current promotions, or ask about available discounts when booking.",
  
    "What's your policy on rental car reservation modifications?":
      "Most reservations can be modified, but changes may affect your rate. Contact us as soon as possible if you need to make changes to your reservation.",
  
    "Can I rent a car with a built-in vacuum cleaner?":
      "We don't typically offer cars with built-in vacuum cleaners. However, we thoroughly clean all our vehicles between rentals.",
  
    "Do you offer any discounts for rental car loyalty programs?":
      "Yes, our loyalty program offers points for each rental, which can be redeemed for free rental days, upgrades, or other perks. Members also enjoy faster pick-up and exclusive offers.",
  
    "What's your policy on rental car overbooking?":
      "In the rare event of overbooking, we'll do our best to provide you with a similar or upgraded vehicle at no additional cost. If we can't accommodate you, we'll assist in finding alternative transportation and may offer compensation for the inconvenience.",
  
    "Can I rent a car with a built-in air purifier?":
      "Some of our premium vehicles come equipped with advanced air filtration systems. If this feature is important to you, please request it when booking, though availability may be limited.",
  
    "Do you offer any discounts for rental car bundling?":
      "Yes, we often have package deals when you bundle your car rental with flights or hotels. Check our partnerships with travel websites or ask about current bundling promotions when booking.",
  
    "What's your policy on rental car peak season pricing?":
      "During peak travel seasons, our rates may be higher due to increased demand. Booking early and being flexible with your dates can often help secure better rates.",
  
    "Can I rent a car with a built-in tire pressure monitoring system?":
      "Most of our newer vehicles come equipped with tire pressure monitoring systems as a standard safety feature.",
  
    "Do you offer any special rates for off-peak season rentals?":
      "Yes, we often have lower rates and special promotions during off-peak seasons. These can vary by location, so check our website or ask a representative about current off-peak offers.",
  
    "What's your policy on rental car off-road use?":
      "Most of our standard rental agreements prohibit off-road use. If you need a vehicle for off-road purposes, we have specific vehicles designed for this use, but you must inform us at the time of rental.",
  
    "Can I rent a car with a built-in first aid kit?":
      "While not all our vehicles come with built-in first aid kits, we can often provide one upon request. It's best to ask for this when making your reservation.",
  
    "Do you offer any discounts for rental car referrals?":
      "We have a referral program where you can earn credits or discounts for referring new customers. Check our website or ask a representative for details on our current referral offers.",
  
    "What's your policy on rental car vehicle swaps during rental?":
      "If you're unsatisfied with your vehicle or need a different type of vehicle during your rental period, contact us. We'll do our best to swap your vehicle, subject to availability and possible rate adjustments.",
  
    "Can I rent a car with a built-in emergency kit?":
      "Some of our vehicles come equipped with basic emergency kits. If this is important to you, request it when booking. We can also often provide emergency kits upon request.",
  
    "Do you offer any special rates for rental car insurance bundles?":
      "Yes, we often have promotional rates that include insurance coverage. These bundles can often provide better value than adding insurance separately.",
  
    "What's your policy on rental car loyalty point redemption?":
      "Our loyalty program allows you to redeem points for free rental days, upgrades, or other perks. The redemption value can vary based on location and season, so check our current redemption rates when booking.",
  
    "Can I rent a car with a built-in dash cam?":
      "We don't typically offer cars with built-in dash cams due to privacy concerns. However, you're usually allowed to use your own as long as it's removed before returning the vehicle.",
  
    "Do you offer any discounts for rental car social media check-ins?":
      "We occasionally run promotions that offer discounts or perks for social media engagement. Follow our social media accounts for the latest offers and promotions.",
  
    "What's your policy on rental car vehicle class guarantees?":
      "We guarantee the vehicle class you book, but not a specific make or model. If we can't provide a vehicle in the class you reserved, we'll upgrade you at no additional cost.",
  
    "Can I rent a car with a built-in car alarm system?":
      "Most of our vehicles come equipped with standard alarm systems. If you require a specific type of security system, mention this when booking and we'll do our best to accommodate.",
  
    "Do you offer any special rates for rental car membership programs?":
      "Yes, our membership program offers exclusive rates, faster pick-up services, and the ability to skip the counter at select locations. Check our website for current membership benefits and offers.",
  
    "What's your policy on rental car vehicle substitutions?":
      "If we're unable to provide the exact vehicle class you reserved, we'll offer a free upgrade to a higher class. We never downgrade without offering a rate adjustment or alternative options.",
  
    "Can I rent a car with a built-in jump starter?":
      "We don't typically offer cars with built-in jump starters, but our roadside assistance service can help if you experience battery issues during your rental.",
  
    "Do you offer any discounts for rental car mobile app bookings?":
      "Yes, we often have app-exclusive deals and discounts. Download our mobile app to access these special rates and for easier booking and management of your rentals.",
  
    "What's your policy on rental car vehicle recalls?":
      "We closely monitor all vehicle recalls and remove affected vehicles from our fleet until they've been properly serviced. Your safety is our top priority.",
  
    "Can I rent a car with a built-in tire inflator?":
      "While most of our vehicles don't come with built-in tire inflators, many have tire pressure monitoring systems. We also offer roadside assistance if you experience any tire-related issues during your rental.",
  
    "Do you offer any special rates for rental car partner airlines?":
      "Yes, we have partnerships with many airlines. If you're a member of an airline's frequent flyer program, you may be eligible for special rates or the ability to earn airline miles on your car rental.",
  
    "What's your policy on rental car vehicle maintenance schedules?":
      "We adhere to strict maintenance schedules for all our vehicles to ensure safety and reliability. If you experience any issues during your rental, contact us immediately for assistance or a replacement vehicle.",
  
    "Can I rent a car with a built-in wireless phone charger?":
      "Many of our newer model vehicles come equipped with wireless phone charging capabilities. If this feature is important to you, request it when booking.",
  
    "Do you offer any discounts for rental car partner hotels?":
      "We have partnerships with various hotel chains. If you're a member of a hotel's loyalty program, you may be eligible for special car rental rates or the ability to earn hotel points on your rental.",
  
    "What's your policy on rental car vehicle cleanliness guarantees?":
      "We have high standards for vehicle cleanliness and sanitize each car between rentals. If you're unsatisfied with the cleanliness of your vehicle, please notify us immediately and we'll address the issue.",
  
    "Can I rent a car with a built-in umbrella holder?":
      "While we don't typically offer cars with specific umbrella holders, many of our vehicles have storage compartments that can accommodate umbrellas. If you need an umbrella, some of our locations offer them for rent or purchase.",
  
    "Do you offer any special rates for rental car partner credit cards?":
      "Yes, we have partnerships with several credit card companies. If you have a participating credit card, you may be eligible for discounts, upgrades, or additional insurance coverage on your rental.",
  
    "What's your policy on rental car vehicle age limits?":
      "We regularly update our fleet to ensure we're offering modern, reliable vehicles. However, the specific age of vehicles can vary. If vehicle age is a concern, please discuss this with our representatives when booking.",
  
    "Can I rent a car with a built-in pet barrier?":
      "We don't typically offer built-in pet barriers, but we do allow pets in most of our vehicles. We recommend bringing your own pet barrier or crate for safety. Remember, you're responsible for any pet-related cleaning or damage.",
  
    "Do you offer any discounts for rental car partner ride-sharing services?":
      "We have partnerships with some ride-sharing services. If you're a driver for a participating service, you may be eligible for special rates on longer-term rentals.",
  
    "What's your policy on rental car vehicle mileage accuracy?":
      "We ensure all our vehicles' odometers are accurate and functioning correctly. The starting and ending mileage are recorded for each rental. If you notice any discrepancies, please bring them to our attention immediately.",
  
    "Can I rent a car with a built-in cargo organizer?":
      "Some of our larger vehicles, like SUVs and vans, may come with cargo organizers. If this feature is important to you, request it when booking, though availability may be limited.",
  
    "Do you offer any special rates for rental car partner travel agencies?":
      "Yes, we work with many travel agencies and can offer special rates through them. If you're booking through a travel agency, ask them about any car rental partnerships or discounts they offer.",
  
    "What's your policy on rental car vehicle fuel level disputes?":
      "We record the fuel level when you pick up and return the vehicle. We recommend filling up near the return location and keeping your receipt. If there's a dispute, we'll review the documentation and work to resolve it fairly.",
  
    "Can I rent a car with a built-in roof-mounted cargo box?":
      "We don't typically offer cars with built-in roof-mounted cargo boxes, but we do offer removable rooftop cargo carriers at many locations. These should be reserved in advance to ensure availability.",
  
    "Do you offer any discounts for rental car partner cruise lines?":
      "We partner with several cruise lines to offer special rates or perks for cruise passengers. If you're going on a cruise, check with your cruise line or ask us about any applicable discounts.",
  
    "What's your policy on rental car vehicle pre-existing damage?":
      "We thoroughly inspect each vehicle before and after every rental. We'll note any existing damage on your rental agreement. We encourage you to inspect the vehicle yourself and report any damage not noted before driving off.",
  
    "Can I rent a car with a built-in bike rack?":
      "While we don't typically offer cars with built-in bike racks, we do have removable bike racks available for rent at many locations. These should be reserved in advance to ensure availability.",
  
    "Do you offer any special rates for rental car partner tour operators?":
      "We work with many tour operators and can offer special rates for their customers. If you're booking a tour, ask your tour operator if they have any car rental partnerships or discounts.",
  
    "What's your policy on rental car vehicle smoke odor?":
      "All our vehicles are non-smoking. If a vehicle is returned with smoke odor, the renter will be charged a cleaning fee. If you're given a vehicle that smells of smoke, please notify us immediately so we can exchange it.",
  
    "Can I rent a car with a built-in ski/snowboard rack?":
      "In locations near ski resorts, we often offer vehicles equipped with ski/snowboard racks. These should be requested when booking to ensure availability. In other locations, removable racks may be available for rent.",
  
    "Do you offer any discounts for rental car partner travel insurance providers?":
      "We partner with several travel insurance providers. If you've purchased travel insurance, check your policy or ask your provider if it includes any car rental discounts or additional coverage.",
  
    "What's your policy on rental car vehicle pet hair removal?":
      "While we allow pets in most vehicles, excessive pet hair may result in additional cleaning fees. We recommend using a seat cover or carrier to minimize shedding. If you're allergic to pet hair, let us know and we'll ensure you get a pet-free vehicle.",
  
    "Can I rent a car with a built-in surfboard rack?":
      "In coastal locations, we may offer vehicles with surfboard racks. These should be requested when booking. In other locations, we may have removable racks available for rent.",
  
    "Do you offer any special rates for rental car partner theme parks?":
      "We have partnerships with several major theme parks and may offer special rates or packages for park visitors. Ask about these when booking, especially if your rental is part of a theme park vacation.",
  
    "What's your policy on rental car vehicle key fob battery replacement?":
      "If the key fob battery dies during your rental, contact our roadside assistance. We'll guide you through the process or send someone to help. There's typically no charge for this if it's due to normal battery life.",
  
    "Can I rent a car with a built-in kayak rack?":
      "While we don't typically offer cars with built-in kayak racks, we do have removable kayak carriers available for rent at many locations, especially in areas popular for water sports. These should be reserved in advance.",
  
    "Do you offer any discounts for rental car partner attractions?":
      "We partner with various tourist attractions in many locations. Ask about package deals or discounts when booking, especially if you're planning to visit specific attractions during your trip.",
  }
  
  

function findClosestQuestion(input: string): string {
  const inputLower = input.toLowerCase()

  // Check for greetings first
  if (greetings.some((greeting) => inputLower.includes(greeting))) {
    return "greeting"
  }

  // Find the closest matching question
  return predefinedQuestions.reduce((closest, question) => {
    const currentSimilarity = similarity(inputLower, question.toLowerCase())
    const closestSimilarity = similarity(inputLower, closest.toLowerCase())
    return currentSimilarity > closestSimilarity ? question : closest
  }, predefinedQuestions[0])
}

function similarity(s1: string, s2: string): number {
  const longer = s1.length > s2.length ? s1 : s2
  const shorter = s1.length > s2.length ? s2 : s1
  const longerLength = longer.length
  if (longerLength === 0) {
    return 1.0
  }
  return (longerLength - editDistance(longer, shorter)) / longerLength
}

function editDistance(s1: string, s2: string): number {
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j
      } else {
        if (j > 0) {
          let newValue = costs[j - 1]
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
          }
          costs[j - 1] = lastValue
          lastValue = newValue
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue
    }
  }
  return costs[s2.length]
}

interface AIChatbotProps {
  botImage?: string
}

export function AIChatbot({ botImage }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: "user" | "bot"; content: string }[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    setMessages([...messages, { type: "user", content: inputValue }])

    const closestQuestion = findClosestQuestion(inputValue)
    let botResponse = ""

    if (closestQuestion === "greeting") {
      botResponse = "Hello! How can I assist you with your car rental needs today?"
    } else {
      botResponse =
        botResponses [closestQuestion] ||
        "I'm sorry, I don't have an answer for that question. Please try asking something else or contact our customer support for more assistance."
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }])
    }, 500)

    setInputValue("")
  }

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-blue-500 text-white flex items-center">
              {botImage && (
                <Image 
                    src={botImage || "/aichatbot.avif"} 
                     alt="Chatbot" 
                      width={32} 
                    height={32} 
                   className="w-8 h-8 rounded-full mr-2" 
                      />
              )}
              <h2 className="text-lg font-bold">RideSwide Admin</h2>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`${message.type === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.type === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                    }`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your question..."
                  className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


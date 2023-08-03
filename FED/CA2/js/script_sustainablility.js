const container = document.getElementById("content");
const carousel = document.getElementById("carouselCaptions");

var data = [
	{
		background: "../images/reduce_carbon.svg",
		heading: "Reduce Carbon Footprint",
		textbody:
			"There are numerous strategies to lower your carbon footprint, which is the amount of CO2 and other greenhouse gases generated into the atmosphere as a result of human activity. Here are some effective strategies to consider:",
		li1: [
			"SWITCH OFF THE LIGHTS",
			"One of the simplest and most effective ways to conserve energy is to be mindful of turning off lights when they are not needed. Natural light can often provide sufficient illumination during the day, so make it a habit to rely on sunlight and turn off artificial lighting whenever possible. Moreover, don't forget to turn off lights when you leave a room. This small action can have a significant impact on reducing energy consumption and, in turn, lower your electricity bills.",
		],
		li2: [
			"KEEP ROOM TEMP MODERATE",
			"Maintaining a moderate setting on your temperature control system when you are in a room can lead to substantial energy savings. Resist the temptation to set your heating or cooling to extreme levels; instead, opt for a comfortable and energy-efficient temperature that suits your needs. Additionally, if your climate control system is in use, remember to shut windows to prevent conditioned air from escaping and unconditioned air from entering. However, if you're seeking fresh air, consider turning off the heating or air conditioning temporarily.",
		],
		li3: [
			"AC ON? SHUT THE WINDOWS",
			"Windows play a crucial role in regulating indoor temperatures, and using them wisely can contribute to energy efficiency. When your climate control system is operating, ensure windows are closed to avoid unnecessary heat exchange with the external environment. On the other hand, if you need ventilation, turn off the heating or cooling temporarily and open the windows to allow fresh air in. This way, you can strike a balance between comfort and energy conservation.",
		],
		li4: [
			"UNPLUG ELECTRONICS NOT IN USE",
			"Reducing the number of appliances and electronics in use can lead to significant energy and cost savings. Consider sharing appliances like a mini-fridge with roommates to eliminate redundant energy consumption. Similarly, in office spaces, minimize the number of printers and other electronic devices that are continuously running. Taking these steps not only helps the environment but can also make a positive impact on your monthly utility bills.",
		],
	},
	{
		background: "../images/minimize_waste.jpg",
		heading: "Minimize Waste",
		textbody:
			"The easiest way to reduce waste is to practice the 3Rs: Reduce, Reuse, and Recycle. Here are some effective strategies to consider:",
		li1: [
			"Use a reusable bottle/cup for beverages on-the-go",
			"Single-use plastic bottles and disposable coffee cups are major contributors to plastic pollution and waste. By using a reusable bottle or cup for your beverages when you're on-the-go, you can significantly reduce your environmental impact. Invest in a durable, BPA-free water bottle or a reusable coffee cup that you can refill with your favorite drinks instead of relying on disposable options. Not only will you be helping to reduce plastic waste, but you'll also save money in the long run by not purchasing single-use containers.",
		],
		li2: [
			"Use reusable grocery bags, and not just for groceries",
			"Plastic bags, whether used for groceries or other shopping items, are notorious for their harmful effects on the environment. They often end up in oceans and landfills, posing a serious threat to wildlife and ecosystems. Opt for reusable grocery bags made of cloth or other eco-friendly materials. These bags are sturdier, more durable, and can be used repeatedly for various purposes, such as carrying books, gym gear, or even as picnic bags. By incorporating reusable bags into your daily routine, you contribute to reducing plastic waste and promoting sustainable practices.",
		],
		li3: [
			"Purchase wisely and recycle",
			"Mindful consumption is essential for minimizing waste and conserving resources. Before making a purchase, consider if the item is truly necessary and whether it aligns with your long-term needs. Opt for products with minimal packaging or choose items packaged in recyclable materials. When it comes to disposing of waste, always prioritize recycling. Familiarize yourself with the recycling guidelines in your area and separate recyclable materials from regular trash. Recycling helps to conserve raw materials and reduces the burden on landfills.",
		],
		li4: [
			"Curb your use of paper: mail, receipts, magazines",
			"Paper consumption contributes to deforestation and requires significant energy and resources to produce. To reduce paper usage, opt for digital communication whenever possible. Sign up for paperless billing and statements, and unsubscribe from unnecessary physical mailings. When shopping, decline paper receipts unless necessary and request digital copies instead. For magazines and newspapers, consider digital subscriptions or share physical copies with friends or family to maximize their use. When you do use paper, always recycle it to support the paper recycling process and reduce the demand for new paper production.",
		],
	},
	{
		background: "../images/promote_sustainablility.jpg",
		heading: "Promote Sustainable Products and Practices",
		textbody:
			"Supporting sustainable products and practices is crucial for promoting a healthier planet and a more sustainable future. Here are some ways you can actively support sustainability:",
		li1: [
			"Choose Eco-Friendly Products",
			'When shopping for products, opt for eco-friendly alternatives that are made from sustainable materials and have minimal impact on the environment. Look for certifications like "organic," "Fair Trade," or "Rainforest Alliance" that indicate ethical and sustainable production practices. Choose products with minimal packaging or packaging made from recyclable or biodegradable materials. Consider buying second-hand or refurbished items when possible, as this reduces the demand for new manufacturing and saves resources.',
		],
		li2: [
			"Conserve energy",
			"Reducing energy consumption is essential for combating climate change and reducing greenhouse gas emissions. Implement energy-saving habits in your daily life, such as turning off lights, electronics, and appliances when not in use. Replace traditional incandescent bulbs with energy-efficient LED or CFL bulbs. Use programmable thermostats to regulate heating and cooling, and set them to conserve energy when you're away or asleep. Consider investing in energy-efficient appliances that carry the ENERGY STAR label, as they consume less electricity and are designed to save power.",
		],
		li3: [
			"Practice water conservation",
			"Water is a precious resource, and conserving it is crucial to ensure its availability for future generations. Adopt water-saving practices at home, such as fixing leaks promptly, using low-flow fixtures, and installing water-saving appliances like efficient washing machines and toilets. Be mindful of water usage while washing dishes, doing laundry, and taking showers. Consider collecting rainwater for outdoor irrigation, as this can help reduce reliance on treated water for gardening purposes.",
		],
		li4: [
			"Choose sustainable transportation",
			"Transportation is a significant source of greenhouse gas emissions. To reduce your carbon footprint, choose sustainable transportation options whenever possible. Consider walking or cycling for short distances, as this not only saves emissions but also promotes physical health. Utilize public transportation like buses, trains, or subways, as they generally have a lower carbon footprint per passenger compared to individual cars. If you need a car, consider opting for a fuel-efficient, hybrid, or electric vehicle, which significantly reduces emissions and dependency on fossil fuels.",
		],
	},
];

document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.getElementById("carouselCaptions");
	const carouselItems = Array.from(carousel.querySelectorAll(".carousel-item"));

	// Attach click event listeners to each carousel item
	carouselItems.forEach((item, index) => {
		item.addEventListener("click", function () {
			console.log("Clicked image index:", index);
		});
	});

	carousel.addEventListener("slid.bs.carousel", function (event) {
		const activeSlide = event.relatedTarget; // The current active slide
		const activeIndex = carouselItems.indexOf(activeSlide);

		console.log("Current image index:", activeIndex);
	});
});
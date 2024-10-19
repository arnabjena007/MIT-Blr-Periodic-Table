const clubs = [
    { number: 1, name: "CodeX", category: "Technical" },
    { number: 2, name: "NEURA AI", category: "Technical" },
    { number: 3, name: "RADAR", category: "Technical" },
    { number: 4, name: "QuantUS", category: "Technical" },
    { number: 5, name: "ElectroVista", category: "Technical" },
    { number: 6, name: "CyberSpace", category: "Technical" },
    { number: 7, name: "Astronomy", category: "Academic" },
    { number: 8, name: "ACM", category: "Technical" },
    { number: 9, name: "IEEE", category: "Technical" },
    { number: 10, name: "Null OWASP", category: "Technical" },
    { number: 11, name: "MBOSC", category: "Technical" },
    { number: 12, name: "Open Horizons Robotics", category: "Technical" },
    { number: 13, name: "The Photography Club", category: "Cultural" },
    { number: 14, name: "Mimansa", category: "Cultural" },
    { number: 15, name: "Potentia", category: "Cultural" },
    { number: 16, name: "CinA", category: "Cultural" },
    { number: 17, name: "OtakuSpot", category: "Cultural" },
    { number: 18, name: "Elixir", category: "Cultural" },
    { number: 19, name: "Closeted", category: "Social" },
    { number: 20, name: "64 Squares", category: "Sports" },
    { number: 21, name: "The Literature Society", category: "Cultural" },
    { number: 22, name: "Sidequest", category: "Sports" },
    { number: 23, name: "Endurance", category: "Sports" },
    { number: 24, name: "Rahat", category: "Social" },
    { number: 25, name: "Innovesta", category: "Technical" },
    { number: 26, name: "Da Vinci", category: "Cultural" },
    { number: 27, name: "Graphica", category: "Cultural" },
    { number: 28, name: "Chalchitra", category: "Cultural" },
    { number: 29, name: "Ignite", category: "Cultural" },
    { number: 30, name: "NSS", category: "Social" },
    { number: 31, name: "Gloves and Glory", category: "Sports" },
    { number: 32, name: "Toastmania", category: "Cultural" },
    { number: 33, name: "ELC", category: "Academic" },
    { number: 34, name: "IAESTE", category: "Academic" },
    { number: 35, name: "Falak", category: "Cultural" },
    { number: 36, name: "Tech Solstice", category: "Technical" },
    { number: 37, name: "E-Cell", category: "Academic" }
];

function createPeriodicTable() {
    const table = document.getElementById('periodic-table');
    clubs.forEach(club => {
        const element = document.createElement('div');
        element.className = `element ${club.category.toLowerCase()}`;
        element.innerHTML = `
            <div class="number">${club.number}</div>
            <div class="name">${club.name}</div>
            <div class="category">${club.category}</div>
        `;
        table.appendChild(element);
    });
}

document.addEventListener('DOMContentLoaded', createPeriodicTable);
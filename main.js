/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code
*/
const calculateYearlyExpenses = (applicant) => {
    //The first function should calculate the total yearly expenses for each person.
    const yearlyExpense = (applicant.monthlyExpenses * 12)
    return yearlyExpense
}

const calculateExpensesPercentage = (applicant, yearlyExpense) => {
    //It should divide the yearly expenses by the annual salary, 
    //and then take that sum and multiply it by 100
    const percentage = ((yearlyExpense / applicant.salary) * 100)
    return percentage
}

const isQualified = (applicant, percentage) => {
    //If the percentage of expenses to salary is less than 10, 
    //then the applicant object's mortgage property - which is also an object - 
    //should have a new property added named qualified and its value should be true. 
    //It should have another property added to it named amount. 
    //The value should be the person's salary multiplied by 5.
    if (percentage < 10) {
        applicant.mortgage.qualified = true
        applicant.mortgage.amount = (applicant.salary * 5)
    } else if (percentage > 10) {
        //If the percentage is greater than 10, the value of the qualified property on the mortgage object 
        //should be false. The value of the amount property on the mortgage object should be 0.
        applicant.mortgage.qualified = false
        applicant.mortgage.amount = 0
    }
    return applicant
}

const mortgageApplicants = [
    { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" },
    { id: 2, name: "Fannie Swaniawski", monthlyExpenses: 783.82, salary: 119255.48, mortgage: {}, address: "3350 McDermott Bridge", city: "Amaliaborough" },
    { id: 3, name: "Patsy Jaskolski", monthlyExpenses: 803.34, salary: 103376.76, mortgage: {}, address: "585 Kassulke River", city: "New Hattieport" },
    { id: 4, name: "Rufus Moore", monthlyExpenses: 845, salary: 88269.54, mortgage: {}, address: "46332 O'Hara Mountain", city: "North Idell" },
    { id: 5, name: "Philip Abshire", monthlyExpenses: 781.34, salary: 65333.78, mortgage: {}, address: "633 Thiel Ville", city: "Uliseston" },
    { id: 6, name: "Wendy Kiehn", monthlyExpenses: 537.32, salary: 59702.6, mortgage: {}, address: "82441 Mills Turnpike", city: "Port Libbieberg" },
    { id: 7, name: "Ray Lubowitz", monthlyExpenses: 550.15, salary: 181362.87, mortgage: {}, address: "855 Isabel Forge", city: "Hesseltown" },
    { id: 8, name: "Lawrence Hirthe MD", monthlyExpenses: 940.74, salary: 100269.15, mortgage: {}, address: "68459 Jordon Crossing", city: "Boview" },
    { id: 9, name: "Mario Beahan I", monthlyExpenses: 618.11, salary: 122226.79, mortgage: {}, address: "71521 Walter Drive", city: "Rosannaton" },
    { id: 10, name: "Rosa Hauck", monthlyExpenses: 763.82, salary: 89335.68, mortgage: {}, address: "33954 Reba Motorway", city: "Port Lesly" },
    { id: 11, name: "Becky Wiegand", monthlyExpenses: 212.27, salary: 76137.45, mortgage: {}, address: "3972 Stroman Parks", city: "West Clotildeport" },
]

/*
    Iterate the array of mortgage applicants and use your
    functions to determine if they are qualified for a mortgage
*/
let qualificationString = ``
for (const applicant of mortgageApplicants) {
    const findYearlyExpense = calculateYearlyExpenses(applicant);
    const findPercentage = calculateExpensesPercentage(applicant, findYearlyExpense);
    const findQualification = isQualified(applicant, findPercentage);
    if (applicant.mortgage.qualified === true) {
        qualificationString += `${applicant.name} is qualified for a maximum mortgage of $${applicant.mortgage.amount}\n`
    }
}
console.log(qualificationString)

































// **********  Do not touch this code  **********
module.exports = {
    calculateYearlyExpenses, calculateExpensesPercentage, isQualified
}
// **********  Do not touch this code  **********
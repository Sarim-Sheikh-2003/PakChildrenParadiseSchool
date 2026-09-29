const recurringDates = [
    { title: "Defense Day", month: 8, day: 6 },
    { title: "Eid-Milad-Un-Nabi Holiday", month: 8, day: 16 },
    { title: "Mid Term Exams", month: 9, day: 1, endMonth: 10, endDay: 1 },
    { title: "Quaid-e-Azam Day", month: 11, day: 25 },
    { title: "Kashmir Day", month: 1, day: 5 },
    { title: "Shab-e-Barat Holiday", month: 1, day: 14 },
    { title: "Annual Examination", month: 2, day: 1 },
    { title: "Pakistan Day", month: 2, day: 23 },
    { title: "Eid Holiday", month: 2, day: 31, endMonth: 3, endDay: 4 },
    { title: "New School Year", month: 3, day: 1 },
    { title: "Summer Vacation", month: 5, day: 1, endMonth: 7, endDay: 1 },
    { title: "Independence Day Holiday", month: 7, day: 14 },
    { title: "Bhaithi Day", month: 7, day: 20 }
];

const startYear = 2024;
const endYear = 2035;

const events = recurringDates.flatMap(({ title, month, day, endMonth, endDay }) => {
    const yearlyEvents = [];

    for (let year = startYear; year <= endYear; year += 1) {
        const start = new Date(year, month, day);
        const end = endMonth !== undefined && endDay !== undefined
            ? new Date(year, endMonth, endDay)
            : start;

        yearlyEvents.push({
            title,
            start,
            end,
            allDay: true,
        });
    }

    return yearlyEvents;
});

export default events
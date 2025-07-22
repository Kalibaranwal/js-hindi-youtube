// Dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let createDate=new Date(2025,0,10)            // in js month is start from zero(year-month-date)
console.log(createDate.toDateString())

let createdNewDate= new Date(2025,1,12,5,2)
console.log(createdNewDate.toLocaleString())

let createdNewDates= new Date("2025-1-12")
console.log(createdNewDates.toLocaleString())

let myTimeStamp= Date.now()
console.log(myTimeStamp)
console.log(createdNewDates.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})
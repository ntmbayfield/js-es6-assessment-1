//FUNCTION getEmails(people, options) {
//const getEmails = (people, options={}) => {
const getEmails = (people, {withNames = false, onlyActive = false}={}) => {
// options = options || {}
// let withNames = options.withNames || false
// let onlyActive = options.onlyActive || false

  if (onlyActive) {
    people = people.filter(isActive)
  }

//  return people.map(FUNCTION(person) {
  return people.map(person => {
    let result = ''

    if (withNames) {
      result = `${person.name} <${person.email}>`
    } else {
      result = person.email
    }

    return result
  }).join(', ')
}

//FUNCTION getAddresses (people, options) {
//const getAddresses = (people, options) => {
//const getAddresses = (people, options={}) => {
const getAddresses = (people, {onlyActive = false} = {}) => {
//  options = options || {}
//  let onlyActive = options.onlyActive || false

  if (onlyActive) {
    people = people.filter(isActive)
  }

//  return people.map(FUNCTION (person) {
  return people.map(person => {
    let address = person.address
//  let fullAddress = person.name PLUS '\n' PLUS address.line1 PLUS '\n'
    let fullAddress = `${person.name}\n${address.line1}\n`

    if (address.line2) {
//    fullAddress PLUS= address.line2 PLUS '\n'
      fullAddress = fullAddress.concat(`${address.line2}\n`)
    }

//  fullAddress PLUS= address.city PLUS ', ' PLUS address.state
    fullAddress = fullAddress.concat(`${address.city}, ${address.state}`)
    return fullAddress
  }).join('\n\n')
}

//FUNCTION getYoungest (people) {
const getYoungest = people => {
  people.sort((personA, personB) => {
    return personA.age - personB.ages
  })

  return {
    youngest: people[0],
    others: people.slice(1)
  }
}


// FUNCTION isActive(person) {
//   return person.isActive
// }
const isActive = person => person.isActive;

module.exports = {
  getEmails: getEmails,
  getAddresses: getAddresses,
  getYoungest: getYoungest
}

const getEmails = (people, options = {withNames: false, onlyActive: false}) => {
  let withNames = options.withNames
  let onlyActive = options.onlyActive

  if (onlyActive) {
    people = people.filter(isActive)
  }

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

const getAddresses = (people, options = {onlyActive: false}) => {
  let onlyActive = options.onlyActive

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map(person => {
    let address = person.address
    let fullAddress = `${person.name}\n${address.line1}\n`

    if (address.line2) {
      fullAddress += `${address.line2}\n`
    }

    fullAddress += `${address.city}, ${address.state}`
    return fullAddress
  }).join('\n\n')
}

const getYoungest = people => {
  people.sort((personA, personB) => personA.age - personB.age)

  return {
    youngest: people[0],
    others: people.slice(1)
  }
}

const isActive = person => person.isActive

module.exports = {
  getEmails: getEmails,
  getAddresses: getAddresses,
  getYoungest: getYoungest
}

// Write your code here

const DenominationItemComponent = props => {
  const {
    each,
    onClick50Button,
    onClick100Button,
    onClick200Button,
    onClick500Button,
  } = props
  const {value} = each

  const firstname = 'onClick'
  const functionName = firstname.concat(value)

  const checkingFunction = () => {
    switch (functionName) {
      case 'onClick50':
        console.log(functionName)
        onClick50Button()
        break
      case 'onClick100':
        console.log(functionName)
        onClick100Button()

        break
      case 'onClick200':
        console.log(functionName)
        onClick200Button()
        break
      default:
        console.log(functionName)
        onClick500Button()
        break
    }
  }

  return (
    <li className="buttons-container">
      <button className="button" type="button" onClick={checkingFunction}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItemComponent

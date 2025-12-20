import React from 'react'
import LearnProps from './components/LearnProps'
import PracticeProps from './components/PracticeProps'
import PropsChild from './components/PropsChild'
import Button from './components/Button'
import Center from './components/Center'
import Card from './components/Card'
import LearnPropsDrilling from './components/LearnPropsDrilling'

const App = () => {
  const sells = ["india", "china", "usa"]
  const ceo = { name: "fake ceo", city: "fake city" }
  const handleClick = () => console.log("clikced")

  return <>
    {/*         👇 Props (Function Argument) */}
    {/* <LearnProps name="Ross" age={20} /> */}
    {/* 👆 Function call */}

    {/* 
    <PracticeProps
      brand="dell"
      country="usa"
      est="1985"
      demo={sells}
      dummy={ceo}
      skillhub={handleClick}
    /> */}

    {/* <PropsChild /> */}

    {/* <PropsChild> <h1>Hello Props</h1> </PropsChild> */}
    {/*           👆children prop */}

    {/* <Button varient="danger">Submit</Button> */}
    {/* <Button varient="success">Reset</Button> */}

    {
      /* <Center>
        <div className="alert alert-primary">example</div>
      </Center> */
    }

    {/* <Center>
      <Card title="Calculator" foot="Fake Footer">
        <h1>Better Calculator</h1>
      </Card>
    </Center> */}

    <LearnPropsDrilling></LearnPropsDrilling>

  </>
}

export default App
import React, { useState } from 'react';
import Input from './Components/Input';
import Tooltip from './Components/ToolTip.jsx';
import Badge from './Components/Badge.jsx'
import Label from './Components/Label.jsx';
import Select from './Components/Select.jsx'
import Card from './Components/Card.jsx';
import image from './assets/image.png';
import image2 from './assets/image2.png';
import Textarea from './Components/Textarea.jsx';
import Tabs from './Components/Tabs.jsx';
import Toggle from './Components/Toggle.jsx';
import Button from './Components/Button.jsx';
import Progress from './Components/Progress.jsx';

const App = () => {

  const handleButtonClick = () => {
    alert('Beautiful Mountains!');
  };

  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };


  const selectOptions = [
    { value: 'option1', label: 'Harry Potter' },
    { value: 'option2', label: 'Lord Of the Ring' },
    { value: 'option3', label: 'Fantastic Beasts' },
    { value: 'option4', label: 'The Hobbits' }

  ];
  const tabData = [
    { id: 'tab1', label: 'Tab A', content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> },
    { id: 'tab2', label: 'Tab B', content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla!</div> },
    { id: 'tab3', label: 'Tab C', content: <div>Lorem ipsum dolor sit.</div> },
  ];

  const [isChecked, setIsChecked] = useState(false);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleClick = (color) => {
      alert(`${color} button clicked!`);
  };

  const [progressValue, setProgressValue] = useState(80);

  return (
    <div className="h-screen">

      <h1 className="text-xl font-bold mb-4">React UI Components</h1>

      <Label text="Badges :-" />
      <div className='mt-10'>
        <Badge count={30} color={"blue"}>Message</Badge>
        <Badge count={22} color={"green"}>Message</Badge>
        <Badge count={300} color={"red"}>Message</Badge>
        <Badge count={23} color={"yellow"}>Message</Badge>
      </div>
      <div className="mt-4">
        <Label text="Select an option :-" htmlFor="select" />
        <div className='grid grid-cols-4'>
          <Select options={selectOptions} Style="FG1" value="option1" />
          <Select options={selectOptions} Style="FG2" value="option2" />
          <Select options={selectOptions} Style="FG3" value="option3" />
          <Select options={selectOptions} Style="FG4" value="option4" />
        </div>
      </div>
      <div className="mt-4">
        <Label text="Input :-" />
      </div>
      <div className='bg-slate-600 m-12'>
        <div className='grid grid-cols-3  items-center justify-center border-2'>
          <Input type="file"></Input>
          <Input type="text" placeholder={"Enter email"} />
          <Input type="number" placeholder={"Enter number"} />
          <Input type="email" placeholder={"qwerty@example.com"}></Input>
          <Input type="password" placeholder={"Enter Password"}></Input>
          <Input type="search" placeholder={"Type"}></Input>
          <Input type="tel" placeholder={"Enter Number"}></Input>
          <Input type="url" placeholder={"Enter URL"}></Input>
          <Input type="datetime-local"></Input>
          <Input type="date"></Input>
          <Input type="time"></Input>
          <Input type="submit"></Input>
          <Input type="checkbox"></Input>
          <Input type="radio" ></Input>
        </div>
      </div>
      <div>
        <Label text="Tooltip :-" />
        <div className="flex justify-center p-10">

          <Tooltip text="Tooltip on top" position="top">
            <button className="p-2 bg-blue-500 text-white rounded">Top</button>
          </Tooltip>

          <Tooltip text="Tooltip on bottom" position="bottom">
            <button className="p-2 bg-green-500 text-white rounded">Bottom</button>
          </Tooltip>

          <Tooltip text="Tooltip on left" position="left">
            <button className="p-2 bg-red-500 text-white rounded">Left</button>
          </Tooltip>

          <Tooltip text="Tooltip on right" position="right">
            <button className="p-2 bg-yellow-500 text-white rounded">Right</button>
          </Tooltip>
        </div>
      </div>
      <div>
        <Label text="Card :-" />
        <div className="p-8 grid grid-cols-2 cursor-pointer">
          <Card
            title="Beautiful mountain"
            content="Explore the breathtaking mountain and landscapes."
            image={image}
            buttonText="View More"
            onButtonClick={handleButtonClick}
          />
          <Card
            title="Mountain Landscape"
            content="Explore the breathtaking mountain and landscapes."
            image={image2}
            buttonText="Explore"
            onButtonClick={handleButtonClick}
          />
        </div>
        <div>
          <Label text="TextArea :-" />
          <div className="p-4">
            <Textarea value={textareaValue} onChange={handleTextareaChange} placeholder="Type your message here......" rows={30}
            />
          </div>
        </div>

      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 pl-[600px]">Tabs Component</h1>
        <Tabs tabs={tabData} />
      </div>

      <div className="p-4">
    <h1 className="text-xl font-bold mb-4 pl-[600px]">Toggle Component</h1>
    <div className=" flex gap-20 mx-[500px]">
        <Toggle checked={isChecked} onChange={handleToggleChange} color="CS1" />
        <Toggle checked={isChecked} onChange={handleToggleChange} color="CS2" />
        <Toggle checked={isChecked} onChange={handleToggleChange} color="CS3" />
        <Toggle checked={isChecked} onChange={handleToggleChange} color="CS4" />
    </div>
</div>

<div className="p-4 space-y-4 ">
            <h1 className="text-xl font-bold mb-4 pl-[600px]">Button Component</h1>
            <div className='flex m-[400px] gap-20'>
            <Button label="Red Button" type="submit" color="red" onClick={() => handleClick('Red')} />
            <Button label="Green Button" type="submit" color="green" onClick={() => handleClick('Green')} />
            <Button label="Blue Button" type="reset" color="blue" onClick={() => handleClick('Blue')} />
            <Button label="Yellow Button" type="submit" color="yellow" onClick={() => handleClick('Yellow')} />
            </div>
            
        </div>

        <div className="p-4 space-y-4">
            <h1 className="text-xl font-bold mb-4">Progress Component</h1>
            <div className='flex p-5 ml-3 gap-6'>
            <Progress value={progressValue} max={100} color="green" />
            <Progress value={progressValue} max={100} color="red" />
            <Progress value={progressValue} max={100} color="blue" />
            <Progress value={progressValue} max={100} color="yellow" />
            </div>
        </div>

    </div>
  );
};
export default App;
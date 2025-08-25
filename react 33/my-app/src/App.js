import logo from './logo.svg';
import './App.css';
// import MyComponet from './Props Learning/MyComponet';
import Button from './Button Project/Button';

function App() {
  return (
    <div className=" mx-1 my-1  "> 
      {/* <MyComponet/> */}
      <Button varient="primary " buttonType="outline" disabled   >primary </Button>
      <Button varient="error">error </Button>
      <Button varient="warning">warning </Button>
      <Button varient="success">success </Button>
    </div>
  );
}
export default App;
